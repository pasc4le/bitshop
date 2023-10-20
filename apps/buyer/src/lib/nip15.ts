import {SimplePool, type Event} from "nostr-tools";
import { relayInit, type Filter } from "nostr-tools";

export type ProductEvent  = {
    id: string;
    tags: string[][];
    content: ProductEventContent,
    created_at: number;
    pubkey: string;
    sig: string;
}

export type StallEvent  = {
    tags: string[][];
    content: StallContent,
    created_at: number;
    pubkey: string;
    id: string;
    sig: string;
}

export const RELAY_EP = "wss://relay.damus.io";

export type ShippingZone = {
  id: string,
  name: string | undefined,
  cost: number,
  regions: string[] 
}


export type StallContent = {
  id: string,
  name: string,
  description?: string,
  currency: "USD"
  shipping: [ShippingZone, ...ShippingZone[]]
};

type CreateStallInput = {
	stallName: string,
	stallDescription: string,
	shippingZones: [ShippingZone, ...ShippingZone[]],
}

type ProductEventContent = {
    id: string,
	currency: "USD",
    images: string[],
} & CreateProductInput;

type CreateProductInput = {
	stall_id: string,
	name: string,
	description: string | undefined,
	images: string[] | undefined,
	price: number,
	quantity: number,
	specs: [string, string][] | undefined,
	shipping: [ShippingZone, ...ShippingZone[]] | [],// Added to the stall shipping costs zone matching the ID
	categories: string[] | undefined,
}

export async function getCategoryForStall(stall: { stallEvtId: string, content: StallContent}) : Promise<string> {
    
    const relay = relayInit(RELAY_EP);

    await relay.connect().catch( () => { throw new Error("Relay connection failure"); } );
    const stallEvt = await getStallById(stall.stallEvtId);
    
    const stallId = stallEvt.tags.filter( arr => arr[0] === "d")[0][1];
    const pubkey = stallEvt.pubkey;


    const filter : Filter = {
        authors: [pubkey],
    }

    const sub = relay.sub([filter]);

    return new Promise((resolve, reject) => {
        sub.on("eose", () => {
            resolve("No category");
        });

        sub.on("event", (event: Event) => {
            const content = JSON.parse(event.content) as ProductEventContent;

            if (content.stall_id === stallId) {
                const category = event.tags.pop()?.pop() ?? "No category";
                resolve(category);
            }
        });
    });
}


export async function getSampleImageForStall(stallEventId: string) : Promise<string> {
    const relay = relayInit(RELAY_EP);
    await relay.connect();

    const stallEvt = await getStallById(stallEventId);
    const stallId = stallEvt.tags.filter( arr => arr[0] === "d")[0][1];

    const filter : Filter = {
        authors: [stallEvt.pubkey],
    }

    const sub = relay.sub([filter]);

    return new Promise((resolve, reject) => {
        
        sub.on("eose", () => {
            resolve("No image");
        });

        sub.on("event", (event: Event) => {
            const content = JSON.parse(event.content) as ProductEventContent;

            if (content.stall_id === stallId) {
                const image = content.images?.[0] ?? "No image";
                resolve(image);
            }
        });
    });
}

// export async function getAllProductsForStall(stall_id: string, pubkey: string) {
    // const f : Filter = {
     // // authors: [pubkey],
    // }

    // const r = relayInit(RELAY_EP);
    // r.connect();

    // const sub = r.sub([f]);
    // const products = [];

    // retue



// }

export async function lazyGetAllProductsForStall(stall_id: string, pubkey: string, onNew?: (p: ProductEvent) => void) {
    console.log("Searching for products for stall ", stall_id);
    
    const pool = new SimplePool();
    const filter : Filter = {
        authors: [pubkey],
    }

    return new Promise((resolve, reject) => { 
        const sub = pool.sub(RELAY_POOL, [filter]);

        sub.on("eose", () => {
            sub.unsub();
            pool.close(RELAY_POOL);
            resolve({});
        });

        sub.on("event", (event: Event) => {
            const evt = { ...event, content: JSON.parse(event.content) as ProductEventContent}
            console.log("got product");
            console.log(evt);
            if (evt.content.stall_id === stall_id) {
                onNew?.(evt);
            } else {
                console.log("Not for this stall");
                console.log(evt.content.stall_id);
                console.log(stall_id);
            }
        });
    });
}

export const RELAY_POOL = [
  //   "wss://nostr.zebedee.cloud",
  "wss://relay.snort.social",
  "wss://eden.nostr.land",
  "wss://nos.lol",
  //   "wss://brb.io",
  "wss://nostr.fmt.wiz.biz",
  "wss://relay.damus.io",
  "wss://nostr.wine",
  "wss://sg.qemura.xyz",
];


export async function getStallsByPubkey(pubkey: string, onNew?: (s: StallEvent) => void) {
    const pool = new SimplePool();
    const filter : Filter = {
        authors: [pubkey],
        kinds: [300170],
        // kinds: [300170, 30017],
    }

    const stalls : StallEvent[] = [];

    return new Promise((resolve, reject) => {
        const sub = pool.sub(RELAY_POOL, [filter]);

        sub.on("eose", () => {
            sub.unsub();
            pool.close(RELAY_POOL);
            resolve(stalls);
        });

        sub.on("event", (event: Event) => {
            const stallEvt = { ...event, content: JSON.parse(event.content) as StallContent} as StallEvent;
            onNew?.(stallEvt);
            stalls.push(stallEvt);
        });
    });

}

export async function getImageForStall(i: { stallId: string, author: string }) : Promise<string> {
    const pool = new SimplePool();
    const filter : Filter = {
        authors: [i.author],
    };

    return new Promise((resolve, reject) => {
        const sub = pool.sub(RELAY_POOL, [filter]);

        sub.on("eose", () => {
            sub.unsub();
            pool.close(RELAY_POOL);
            reject("No image found for stall");
        });

        sub.on("event", (event: Event) => {
            const content = JSON.parse(event.content);
            if (!content.images || content.images.length === 0) {
                return;
            }

            if (content.stall_id === i.stallId) {
                resolve(content.images[0]);
            }
        });
    });
}


export async function getStallsByIds(ids: string[]) : Promise<StallEvent[]> {
    const pool = new SimplePool();
    const filter : Filter = {
        "#d": ids,
    };

    return new Promise((resolve, reject) => {
        const sub = pool.sub(RELAY_POOL, [filter]);
        const stalls : StallEvent[] = [];
        

        sub.on("eose", () => {
            sub.unsub();
            pool.close(RELAY_POOL);
            resolve(stalls);
        });


        sub.on("event", (event: Event) => {
            const evt = { ...event, content: JSON.parse(event.content)} as StallEvent;
            stalls.push(evt);
        });
    });
}

export async function getStallById(id) : Promise<StallEvent> {
    const pool = new SimplePool();
    const filter : Filter = {
        "#d": [id],
    };

    return new Promise((resolve, reject) => {
        const sub = pool.sub(RELAY_POOL, [filter]);

        sub.on("eose", () => {
            console.log("EOSE");
            
            sub.unsub();
            pool.close(RELAY_POOL);
        });


        sub.on("event", (event: Event) => {
            const evt = { ...event, content: JSON.parse(event.content)} as StallEvent;
            sub.unsub();
            pool.close(RELAY_POOL);
            resolve(evt);
        });
    });
}

export /* async */ function getMerchantNameByPubkey(p: string) {
    return p.slice(0, 8) + "..." + p.slice(-8);
}

export function groupShippinZones(stall: StallEvent, product: ProductEvent) : ShippingZone[] {
    const stallZones = stall.content.shipping;
    const productZones = product.content.shipping;

    const zones = new Map<string, ShippingZone[]>();

    for (const zone of stallZones) {
        console.log("Adding zone ", zone);
        
        zones.set(zone.id, [zone]);
    }

    for (const zone of productZones) {
        const nz : ShippingZone = {
            id: zone.id,
            cost: zone.cost,
            regions: [],
            name: zone.name,
        }
        const zz = zones.get(zone.id);

        if (zz) {
            zones.set(zone.id, [...zz, nz]);
        }
    }
    
    return Array.from(zones.entries()).map( ([id, zones]) => {
        const cost = zones.map( z => z.cost).reduce( (a, b) => a + b, 0);
        const regions = zones.map( z => z.regions).flat();
        const n : ShippingZone = {
            cost,
            regions: [regions[0], ...regions.slice(1)],
            id,
            name: zones[0].name,
        };

        return n;
    })
}


// localStorage -> "bisthop-cart"
export type BitshopCart = {
    products: BitshopCartProduct[],
    meta: {
        /* Qualunque cosa */
    }
}

export type BitshopCartProduct = {
    product_id: string, // NON id evento
    stall_id: string, // NON id evento
    shipping_zone_id: string,
    seller_pubkey: string | undefined,
    seller_npub: string | undefined,
    added_at: number // Math.floor(Date.now() / 1000)
    quantity: number
}

export function isBitshopCart(arg: any): arg is BitshopCart {
    return arg && arg.products && arg.meta && Array.isArray(arg.products);
}

export async function getProductById(id: string) : Promise<ProductEvent> {
    const pool = new SimplePool();
    const filter : Filter = {
        "#d": [id],
    };

    return new Promise((res, rej) => {
        const sub = pool.sub(RELAY_POOL, [filter]);

        sub.on("eose", () => {
            sub.unsub();
            pool.close(RELAY_POOL);
            rej("No product found");
        });

        sub.on("event", (event: Event) => {
            const content = JSON.parse(event.content);
            const evt = { ...event, content: content} as ProductEvent;
            sub.unsub();
            pool.close(RELAY_POOL);
            res(evt);
        });
    });
}

export function removeItemFromCart(productId: string) {
    const cart = JSON.parse(localStorage.getItem("bitshop-cart") ?? "{products: [], meta: {}}") as BitshopCart;
    const prods = cart.products.filter( p => p.product_id !== productId);
    cart.products = prods;
    localStorage.setItem("bitshop-cart", JSON.stringify(cart));
}

