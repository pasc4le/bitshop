// Import statement remains the same
import * as Nostr from "nostr-tools";
import { v4 } from "uuid";
import { keyGen, KeyPair } from "./nip04_utils";
import { ec as EllipticCurve } from "elliptic";

const ec = new EllipticCurve("secp256k1");

//TODO: Should be moved to process.env vars
const BLASTR_EP = "http://45.77.57.129:8787/event";

const tPrivKey =
  "13dbcaa529e29ba461b2aa9f4bea1de235fcdf520baade6b4b7dcf4ee0deeecb";
const tPubKey =
  "6f141e5b8607932c1930760dd2fd7ab7ea3dc829844ce72faa408db1334105ad";

const EVENT_KINDS = {
  PUBLISH_STALL: 300170, // 30017 is the real event kind
  PUBLISH_PRODUCT: 300180, // 30018 is the real event kind
};

// Defining type for formData for submitProduct function
interface ProductFormData {
  stall_id: string;
  name: string;
  price: number;
  quantity: number;
  images: string[];
  specs: [string, string][];
  description: string;
  categories: string[];
  privateKey: string;
  publicKey: string;
  shipping: [];
}

type __ShippingZone = {
  id: string;
  name?: string;
  cost: number;
  regions: string[];
};

type ShippingZone = {
  name?: string;
  content?: string;
  cost: number;
  regions: [string, ...string[]];
};

type ProductShippingZone = Pick<__ShippingZone, "id" | "cost">;

type StallEventContent = {
  id: string;
  name: string;
  description?: string;
  currency: "USD";
  shipping: [__ShippingZone, ...__ShippingZone[]];
};

type CreateStallInput = {
  stallName: string;
  stallDescription: string;
  shippingZones: [ShippingZone, ...ShippingZone[]];
};

type ProductEventContent = {
  id: string;
  currency: "USD";
} & CreateProductInput;

type CreateProductInput = {
  stall_id: string;
  name: string;
  description?: string;
  images?: string[];
  price: number;
  quantity: number;
  specs?: [string, string][];
  // shipping?: [ProductShippingZone, ...ProductShippingZone[]]; // Added to the stall shipping costs zone matching the ID
  shipping?: [];
  categories?: string[];
};

export async function publishEvent(i: Nostr.VerifiedEvent) {
  const w = ["EVENT", i];
  const r = await fetch(BLASTR_EP, {
    method: "POST",
    body: JSON.stringify(w),
    mode: "no-cors",
  });

  const [ok, body] = [r.ok, await r.json()];

  if (!ok) {
    throw new Error("Could not publish event");
  }

  console.log("Event Published");

  return body;
}

export function createPublishStallEvent(
  i: CreateStallInput,
  privKey: string,
  pubKey: string
): Nostr.VerifiedEvent {
  const z: __ShippingZone[] = i.shippingZones.map((z) => {
    return {
      id: z.name,
      name: z.name,
      cost: z.cost,
      regions: z.regions,
    };
  });

  const stallId = v4();

  if (z.length === 0) {
    throw new Error("Must have at least one shipping zone");
  }

  const ed: StallEventContent = {
    id: stallId,
    name: i.stallName,
    currency: "USD",
    shipping: [z[0], ...z.slice(1)],
  };

  const e: Nostr.UnsignedEvent = {
    kind: EVENT_KINDS.PUBLISH_STALL,
    created_at: Math.floor(Date.now() / 1000),
    content: JSON.stringify(ed),
    tags: [["d", stallId]],
    pubkey: pubKey,
  };

  const signed = Nostr.finishEvent(e, privKey);
  const verified = Nostr.verifySignature(signed) && Nostr.validateEvent(signed);

  if (!verified) {
    throw new Error("Event failed verification");
  }

  return signed;
}

async function deleteStall() {
  throw new Error("uninplemented");
}

async function getStalls() {
  throw new Error("uninplemented");
}

function createPublishProductEvent(
  i: CreateProductInput,
  privKey: string,
  pubKey: string
) {
  const productId = v4();

  const content: ProductEventContent = {
    id: productId,
    stall_id: i.stall_id,
    name: i.name,
    currency: "USD",
    price: i.price,
    quantity: i.quantity,
    specs: i.specs?.length ? i.specs : undefined,
    description: i.description ?? "",
    images: i.images ?? [],
    shipping: i.shipping ?? [],
  };

  const tags = [
    ["d", productId],
    ...(i.categories?.map((c) => ["t", c]) ?? []),
  ];

  const e: Nostr.UnsignedEvent = {
    kind: EVENT_KINDS.PUBLISH_PRODUCT,
    created_at: Math.floor(Date.now() / 1000),
    content: JSON.stringify(content),
    tags,
    pubkey: pubKey,
  };

  const signed = Nostr.finishEvent(e, privKey);
  const verified = Nostr.verifySignature(signed) && Nostr.validateEvent(signed);

  if (!verified) {
    throw new Error("Event failed verification");
  }

  return signed;
}

// Defining type for form for submitStall function
interface StallFormData {
  privateKey: string;
  publicKey: string;
  stallName: string;
  stallDescription: string;
  shippingZones: string;
}

// Function definition with type annotations
export const submitProduct = async (
  formData: ProductFormData
): Promise<{ prodId: string }> => {
  const {
    stall_id,
    name,
    price,
    quantity,
    images,
    specs,
    description,
    categories,
    shipping,
    privateKey,
    publicKey,
  } = formData;

  const Product = {
    stall_id,
    name,
    price,
    quantity,
    images,
    specs,
    description,
    categories,
    shipping,
  };

  console.log("Submitted Product:", Product);

  const ciProductEvent: CreateProductInput = {
    stall_id: stall_id,
    name: name,
    price: price,
    quantity: quantity,
    images: images,
    specs: specs,
    description: description,
    categories: categories,
    shipping: shipping,
  };

  const ProdEvt = createPublishProductEvent(
    ciProductEvent,
    privateKey,
    publicKey
  );
  const cpr = await publishEvent(ProdEvt).catch((e: Error) => e);

  if (cpr instanceof Error) {
    console.info("Error publishing product -- Aborting");
    console.error(cpr);
  }

  console.info("Product Creation Event Published");
  console.log(ProdEvt);

  const prodCont = JSON.parse(ProdEvt.content);
  console.log("id: " + prodCont.id);

  return { prodId: prodCont.id };
};

export const submitStall = async (
  form: StallFormData
): Promise<{ stallID: string; stallName: string }> => {
  const { privateKey, publicKey, stallName, stallDescription, shippingZones } =
    form;

  const Stall = { stallName, stallDescription, shippingZones };

  console.log("Submitted stall:", Stall);

  const cStallEvent: CreateStallInput = {
    stallName: stallName,
    stallDescription: stallDescription,
    shippingZones: shippingZones,
  };
  const stallEvt = createPublishStallEvent(cStallEvent, privateKey, publicKey);
  const csr = await publishEvent(stallEvt).catch((e: Error) => e);

  if (csr instanceof Error) {
    console.info("Error publishing stall -- Aborting");
    console.error(csr);
  }

  console.info("Stall Creation Event Published");
  console.log(stallEvt);
  const stallCont = JSON.parse(stallEvt.content);
  console.log("id: " + stallCont.id);
  console.log("name: " + stallCont.name);

  return { stallID: stallCont.id, stallName: stallCont.name };
};

export const KeyGen = (): KeyPair => {
  const Alicee = ec.genKeyPair();
  const privAlice: string = Alicee.priv.toString(16);
  const pubAlice: string = Alicee.getPublic().getX().toString(16);

  return { priv: privAlice, pub: pubAlice };
};
