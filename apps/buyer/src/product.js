import { React, useState, useEffect } from "react";
import Product from "./component/product/index";
import p1 from "./images/products/p1.png";
import p2 from "./images/products/p2.png";
import p3 from "./images/products/p3.png";
import p4 from "./images/products/p4.png";
import p5 from "./images/products/p5.png";
import p6 from "./images/products/p6.png";
import p7 from "./images/products/p7.png";
import p8 from "./images/products/p8.png";
import p9 from "./images/products/p9.png";
import {
  ProductEvent,
  ShippingZone,
  StallEvent,
  getMerchantNameByPubkey,
  getProductById,
  getStallById,
  getStallByStallId,
  groupShippinZones,
} from "./lib/nip15";
import { eventKind, NostrFetcher } from "nostr-fetch";
// import { each } from "jquery";

function ProductPage() {
  function reformatJson(originalJsonString) {
    try {
      // Parse the original JSON string into an object
      let originalJsonObject = JSON.parse(originalJsonString);

      // Create a new object to hold the formatted data
      let formattedJsonObject = {};

      // List of keys expected to be present in the original JSON object
      let expectedKeys = [
        "id",
        "stall_id",
        "name",
        "currency",
        "price",
        "quantity",
        "description",
        "images",
        "shipping",
        "categories",
        "specs",
      ];

      // Check if all expected keys are present in the original JSON object
      for (let key of expectedKeys) {
        if (key == "images") {
          if (!originalJsonObject.hasOwnProperty(key)) {
            throw new Error(`Missing expected key: ${key}`);
          }
        }
      }

      // Copy the fields that do not need reformatting directly from the original object
      for (let key of expectedKeys.filter((key) => key !== "specs")) {
        formattedJsonObject[key] = originalJsonObject[key];
      }

      // Reformat the specs field
      formattedJsonObject.specs = {};
      if (!Array.isArray(originalJsonObject.specs)) {
        throw new Error("Specs field is not an array");
      }
      for (let pair of originalJsonObject.specs) {
        if (!Array.isArray(pair) || pair.length !== 2) {
          throw new Error("Specs field contains invalid data");
        }
        formattedJsonObject.specs[pair[0]] = pair[1];
      }

      // Correct the typo in the description
      formattedJsonObject.description = formattedJsonObject.description.replace(
        "classi",
        "classic"
      );

      // Stringify the formatted object to get the final JSON string
      let formattedJsonString = JSON.stringify(formattedJsonObject, null, 4); // The arguments null and 4 are for formatting the output with 4-space indentation

      // Return the formatted JSON string
      return formattedJsonString;
    } catch (error) {
      console.error(error.message); // Log the error message to the console
      return null; // Return null if an error occurs
    }
  }

  function transformData(inputData) {
    //   console.log("transforming data");
    //   console.log(`in transform data, inputData content is\n${inputData.content}`);
    try {
      // Parse and reformat the content key
      const reformattedContentString = reformatJson(inputData.content);
      const reformattedContentObject = JSON.parse(reformattedContentString);

      // console.log(`inputData id is: ${inputData.id}`);
      // Construct the desired output format
      // console.log(`Formatted JSON: ${reformattedContentString}`);
      if (reformattedContentObject != null) {
        const outputData = {
          // id: inputData.id,
          id: reformattedContentObject.id ? reformattedContentObject.id : "",
          title: reformattedContentObject.name
            ? reformattedContentObject.name
            : "no Name",
          categoryName: reformattedContentObject.categories
            ? reformattedContentObject.categories[0]
            : "no category", // Assuming the first category is the primary category
          imgSrc: reformattedContentObject.images
            ? reformattedContentObject.images[0]
            : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg", // Assuming the first image is the primary image
          isFeatured: "Yes",
          ratings: 4,
        };
        //   console.log(`output data: ${JSON.stringify(outputData)}`);

        return outputData;
      } else {
        console.error("null data");
        return null;
      }
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  // Usage
  // let originalJsonString = `...`;  // Your original JSON string
  // let formattedJsonString = reformatJson(originalJsonString);
  // console.log(formattedJsonString);

  const fetcher = NostrFetcher.init();
  const relayUrls = [
    "wss://relay.snort.social",
    "wss://nostr-1.nbo.angani.co",
    "wss://eden.nostr.land",
    "wss://nos.lol",
    //   "wss://brb.io",
    "wss://nostr.fmt.wiz.biz",
    "wss://relay.damus.io",
    "wss://nostr.wine",
    "wss://sg.qemura.xyz",
  ];

  // // fetches all text events since 24 hr ago in streaming manner
  // const postIter = fetcher.allEventsIterator(
  //   relayUrls,
  //   /* filter (kinds, authors, ids, tags) */
  //   { kinds: [eventKind.text] },
  //   /* time range filter (since, until) */
  //   { since: nHoursAgo(24) },
  //   /* fetch options (optional) */
  //   { skipVerification: true }
  // );
  // for await (const ev of postIter) {
  //   console.log(ev.content);
  // }

  // // fetches all text events since 24 hr ago, as a single array
  // const hours = 10;
  // console.log(
  //   `Fetching 300180 kind posts in the last ${hours} hours from nostr relays`
  // );

  // const products = await fetcher.fetchAllEvents(
  //   relayUrls,
  //   /* filter */
  //   { kinds: [300180] },
  //   /* time range filter */
  //   { since: nHoursAgo(hours) },
  //   /* fetch options (optional) */
  //   { sort: true }
  // );

  const nPosts = 200;
  console.log(`Fetching last ${nPosts} 300180-kind posts  from nostr relays`);

  // TODO: fix it; was just for demo!
  // localStorage.setItem("bitshop-cart", "{}");
  // fetches latest 100 text posts
  // internally:
  // 1. fetch latest 100 events from each relay
  // 2. merge lists of events
  // 3. take latest 100 events

  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function main() {
      // Fetching Data Asynchronously (if fetcher.fetchLatestEvents can be parallelized)
      // const fetchPromises = relayUrls.map((url) =>
      //   fetcher.fetchLatestEvents(url, { kinds: [300180] }, nPosts)
      // );

      // let productsRaw = [];
      // for (const url of relayUrls) {
      //   const data = await fetcher.fetchLatestEvents(
      //     url,
      //     { kinds: [300180] },
      //     nPosts
      //   );
      //   productsRaw = productsRaw.concat(data);
      // }
    const productsRaw: NostrEvent[] =  await fetcher.fetchLatestEvents(
      relayUrls,
      /* filter */
      { kinds: [300180] },
      /* number of events to fetch */
      nPosts
    );

    
      // const allProductsRaw = await Promise.all(fetchPromises);

      // // Flatten the array and filter the products based on some condition if needed
      // const productsRaw = [].concat(...allProductsRaw);

      console.log("latest posts:\n", productsRaw);

      // Transforming Data Asynchronously
      const transformPromises = productsRaw.map(async (eachJSON) => {
        return transformData(eachJSON);
      });

      const transformedProducts = await Promise.all(transformPromises);

      // Filter out any null or undefined values, assuming transformData may return null or undefined
      const products = transformedProducts.filter(Boolean);
      setProducts(products);

      console.log("Transformed products:", products);
    }

    // const productsRaw: NostrEvent[] =  await fetcher.fetchLatestEvents(
    //   relayUrls,
    //   /* filter */
    //   { kinds: [300180] },
    //   /* number of events to fetch */
    //   nPosts
    // );

    // console.log("latest posts:\n", productsRaw);

    // // Create an empty array called products
    // var products = [];

    // // Perform operations on each JSON in productsRaw
    // for (let eachJSON of productsRaw) {
    //   //   console.log(`inputdata:${JSON.stringify(eachJSON)}`);
    //   // Call your functions on eachJSON
    //   // const reformattedContentString = reformatJson(eachJSON.content);
    //   const transformedData = transformData(eachJSON); // Assuming transformData is the function you'll use

    //   // Optionally, you may want to add the transformed data to the products array
    //   if (transformData != null) {
    //     products.push(transformedData);
    //     // console.log(`Current products: ${products}`);
    //   }
    // }

    // main().catch((err) => console.error(err));
    main();
  }, []); // dependency array

  // {
  //     "content": "{\"id\":\"ee7d6f4b-bd71-412b-8500-848fe8c9b0ab\",\"stall_id\":\"99db3c35-4be5-4eb3-9d6b-16cb5dc76327\",\"name\":\"Samsung Galaxy S23 128GB Black\",\"currency\":\"USD\",\"price\":799,\"quantity\":5,\"specs\":[[\"Operating System\",\"Android 13\"],[\"RAM\",\"6GB\"],[\"Storage\",\"128GB\"]],\"description\":\"Enjoy your S23 in the most classi and elegant color for smartphones\",\"images\":[\"https://m.media-amazon.com/images/I/61xk5l4aXOL._AC_SL1500_.jpg\",\"https://m.media-amazon.com/images/I/61vjj+u+0YL._AC_SL1500_.jpg\"],\"shipping\":[],\"categories\":[\"Smartphones\",\"Samsung\",\"Galaxy\",\"S23\"]}",
  //     "created_at": 1696960502,
  //     "id": "cd8925f24b9f3b730bee1955999161400909f654b642f112e7708d56e389b60b",
  //     "kind": 300180,
  //     "pubkey": "021ef934ac601060430194d42056abeaa4068286fe0d22f537b6751310456147",
  //     "sig": "67816417a7d9a631f082e866f844953826df39188399275021102562083b6882f422fe050ca385a9e6aee839ef39b58ecedbd05ce84e16245b17375dcfd9333f",
  //     "tags": [
  //         [
  //             "d",
  //             "ee7d6f4b-bd71-412b-8500-848fe8c9b0ab"
  //         ],
  //         [
  //             "t",
  //             "Smartphones"
  //         ],
  //         [
  //             "t",
  //             "Samsung"
  //         ],
  //         [
  //             "t",
  //             "Galaxy"
  //         ],
  //         [
  //             "t",
  //             "S23"
  //         ]
  //     ]
  // }

  // {
  //     "id": "ee7d6f4b-bd71-412b-8500-848fe8c9b0ab",
  //     "stall_id": "99db3c35-4be5-4eb3-9d6b-16cb5dc76327",
  //     "name": "Samsung Galaxy S23 128GB Black",
  //     "currency": "USD",
  //     "price": 799,
  //     "quantity": 5,
  //     "specs": {
  //         "Operating System": "Android 13",
  //         "RAM": "6GB",
  //         "Storage": "128GB"
  //     },
  //     "description": "Enjoy your S23 in the most classic and elegant color for smartphones",
  //     "images": [
  //         "https://m.media-amazon.com/images/I/61xk5l4aXOL._AC_SL1500_.jpg",
  //         "https://m.media-amazon.com/images/I/61vjj+u+0YL._AC_SL1500_.jpg"
  //     ],
  //     "shipping": [],
  //     "categories": [
  //         "Smartphones",
  //         "Samsung",
  //         "Galaxy",
  //         "S23"
  //     ]
  // }

  // {
  //     id = "cd8925f24b9f3b730bee1955999161400909f654b642f112e7708d56e389b60b",
  //     title: "Samsung Galaxy S23 128GB Black",
  //     categoryName: "Smartphones",
  //     imgSrc: "https://m.media-amazon.com/images/I/61xk5l4aXOL._AC_SL1500_.jpg",
  //     isFeatured: "Yes",
  //     ratings: 4,
  // }
  // console.log("products:\n", products);
  // products
  // const products = [
  //   {
  //     title: "Universal Headphones Case in Black",
  //     categoryName: "Headphone Cases",
  //     imgSrc: p1,
  //     isFeatured: "Yes",
  //     ratings: 4,
  //   },
  //   {
  //     title: "Universal Headphones Case in Black",
  //     categoryName: "Headphone Cases",
  //     imgSrc: p2,
  //     isFeatured: "No",
  //     ratings: 2,
  //   },
  //   {
  //     title: "Universal Headphones Case in Black",
  //     categoryName: "Headphone Cases",
  //     imgSrc: p3,
  //     isFeatured: "Yes",
  //     ratings: 4,
  //   },
  //   {
  //     title: "Universal Headphones Case in Black",
  //     categoryName: "Headphone Cases",
  //     imgSrc: p4,
  //     isFeatured: "No",
  //     ratings: 3,
  //   },
  //   {
  //     title: "Universal Headphones Case in Black",
  //     categoryName: "Headphone Cases",
  //     imgSrc: p5,
  //     isFeatured: "No",
  //     ratings: 4,
  //   },
  //   {
  //     title: "Universal Headphones Case in Black",
  //     categoryName: "Headphone Cases",
  //     imgSrc: p6,
  //     isFeatured: "No",
  //     ratings: 3,
  //   },
  //   {
  //     title: "Universal Headphones Case in Black",
  //     categoryName: "Headphone Cases",
  //     imgSrc: p7,
  //     isFeatured: "Yes",
  //     ratings: 2,
  //   },
  //   {
  //     title: "Universal Headphones Case in Black",
  //     categoryName: "Headphone Cases",
  //     imgSrc: p8,
  //     isFeatured: "Yes",
  //     ratings: 4,
  //   },
  //   {
  //     title: "Universal Headphones Case in Black",
  //     categoryName: "Headphone Cases",
  //     imgSrc: p9,
  //     isFeatured: "Yes",
  //     ratings: 4,
  //   },
  //   {
  //     title: "Universal Headphones Case in Black",
  //     categoryName: "Headphone Cases",
  //     imgSrc: p7,
  //     isFeatured: "Yes",
  //     ratings: 2,
  //   },
  //   {
  //     title: "Universal Headphones Case in Black",
  //     categoryName: "Headphone Cases",
  //     imgSrc: p1,
  //     isFeatured: "Yes",
  //     ratings: 4,
  //   },
  //   {
  //     title: "Universal Headphones Case in Black",
  //     categoryName: "Headphone Cases",
  //     imgSrc: p2,
  //     isFeatured: "No",
  //     ratings: 2,
  //   },
  //   {
  //     title: "Universal Headphones Case in Black",
  //     categoryName: "Headphone Cases",
  //     imgSrc: p3,
  //     isFeatured: "Yes",
  //     ratings: 4,
  //   },
  //   {
  //     title: "Universal Headphones Case in Black",
  //     categoryName: "Headphone Cases",
  //     imgSrc: p4,
  //     isFeatured: "No",
  //     ratings: 3,
  //   },
  //   {
  //     title: "Universal Headphones Case in Black",
  //     categoryName: "Headphone Cases",
  //     imgSrc: p5,
  //     isFeatured: "No",
  //     ratings: 4,
  //   },
  // // ];

  console.dir(products);
  // products = [
  //   {
  //     id: "c8e276a61d1c09aa2e6143d525675533f66934b0bc7b1df27f58dd216fd565c7",
  //     title: "iPhone 14",
  //     categoryName: "no category",
  //     imgSrc: "https://m.media-amazon.com/images/I/61cwywLZR-L._AC_SX679_.jpg",
  //     isFeatured: "Yes",
  //     ratings: 4,
  //   },
  //   {
  //     id: "1ad685cc8c3c0f2b7fbb9408abf60304d791721732b61181fcc2439a668616a6",
  //     title: "iPhone 14 128GB Black",
  //     categoryName: "no category",
  //     imgSrc:
  //       "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-starlight-2023?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1679072987025",
  //     isFeatured: "Yes",
  //     ratings: 4,
  //   },
  //   {
  //     id: "1df050642a740d832108d8221b1adb19717da7f57ade1ef1566d8b87b59d6967",
  //     title: "iPhone 14 128GB Black",
  //     categoryName: "no category",
  //     imgSrc:
  //       "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-starlight-2023?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1679072987025",
  //     isFeatured: "Yes",
  //     ratings: 4,
  //   },
  // ];
  console.log(`products:\n${products}`);

  return (
    <div className="p-main-wrap container mt-3">
      <nav className="breadcrumb-wrap" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Smart Phones & Tablets
          </li>
        </ol>
      </nav>

      <div className="category-wrap">
        <h4>
          Smart Phones & Tablets <span>(Total Product {products.length})</span>
        </h4>

        <div className="filter-wrap mt-4">
          <div className="row">
            <div className="col-12 col-md">
              <select className="form-select">
                <option>Default Sorting</option>
              </select>
            </div>
            <div className="col-12 col-md-2">
              <select className="form-select">
                <option>Brands</option>
                <option>iPhone</option>
                <option>Samsung</option>
                <option>Oppo</option>
                <option>Vivo</option>
              </select>
            </div>
            <div className="col-12 col-md-2">
              <select className="form-select">
                <option>Colors</option>
                <option>Black</option>
                <option>Grey</option>
                <option>White</option>
                <option>Lime Green</option>
                <option>Ocean Blue</option>
                <option>Purple</option>
              </select>
            </div>
            <div className="col-12 col-md-2">
              <select className="form-select">
                <option>Price</option>
                <option>5000 - 10000</option>
                <option>10000 - 15000</option>
                <option>15000 - 20000</option>
                <option>20000 - 25000</option>
                <option>25000 - 30000</option>
                <option>30000 - 40000</option>
              </select>
            </div>
          </div>
        </div>

        <div className="product-wrap mt-4">
          <div className="row">
            {products.length > 0 ? (
              products.map((product) => {
                console.log(`product to component:\n${product}`);
                return (
                  <div className="col-6 col-md-3 col-lg-2">
                    <Product product={product} />
                  </div>
                );
              })
            ) : (
              <div>
                <p>Loading Products from Nostr...</p><div className="spinner"></div>
              </div>
            )}
            {/* <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p1} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Computer Cases</span>
                            <div className='text-center'>
                                <img src={p2} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Printers</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p3} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Cameras</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p4} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Smartphones</span>
                            <div className='text-center'>
                                <img src={p5} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div> */}
          </div>
          {/* <div className='row'>
                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p8} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p9} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p5} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p1} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Computer Cases</span>
                            <div className='text-center'>
                                <img src={p2} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Smartphones</span>
                            <div className='text-center'>
                                <img src={p5} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p6} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p7} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p8} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p9} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>
                </div> */}
        </div>
      </div>
    </div>
    // </div>
  );
}

export default ProductPage;
