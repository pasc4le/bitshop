import React, { useEffect, useState } from "react";
//@ts-ignore
import logo from "./images/logo.png";
//@ts-ignore
import compnyLogo from "./images/details/c-logo.png";
// import {Nav, NavItem, NavLink, TabContent, TabPane, Row, Col} from 'reactstrap';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import { Link } from "react-router-dom";
import { redirect, useSearchParams } from "react-router-dom";
import {
  BitshopCart,
  BitshopCartProduct,
  ProductEvent,
  ShippingZone,
  StallEvent,
  getMerchantNameByPubkey,
  getProductById,
  getStallById,
  groupShippinZones,
  isBitshopCart,
} from "./lib/nip15";

function Details() {
  const [searchParams, _] = useSearchParams();
  const _id = searchParams.get("id");

  if (!_id) {
    redirect("/");
  }

  const id = _id as string;

  const [product, setProduct] = useState<null | ProductEvent>(null);

  useEffect(() => {
    !product &&
      getProductById(id)
        .then((e) => {
          setProduct(e);
          return e;
        })
        .catch((err) => {
          console.error("Failed to get product by id", err);
        });
  }, [id]);

  return product ? <DetailsInner product={product} /> : <div>Loading...</div>;
}

function DetailsImages(props) {
  return (
    <>
      {props.images.map((e, idx) => {
        return (
          <div
            className={`image-wrap ${props.active === idx ? "active" : ""}`}
            onClick={() => props.setActive(idx)}
          >
            <img src={e} alt="Products" />
          </div>
        );
      })}
    </>
  );
}

function DetailsInner(props: { product: ProductEvent }) {
  // navtab
  const [key, setKey] = useState("partnersShop");
  const [active, setActive] = useState(0);
  const stallId = props.product.content.stall_id;
  // const [animating, setAnimating] = useState(false);

  const [stall, setStall] = useState<null | StallEvent>(null);
  const [shippingZones, setShippingZones] = useState<null | ShippingZone[]>(
    null
  );
  const [selectedSz, setSelectedSz] = useState<null | ShippingZone>(null);

  useEffect(() => {
    !stall &&
      getStallById(stallId)
        .then((e) => {
          setStall(e);
          console.log("Stall set");

          return e;
        })
        .then((e) => {
          console.log("Grouping shipping zones");
          const sz = groupShippinZones(e, props.product);
          setShippingZones(sz);
          console.log("Shipping zones set");
          console.log(sz);
        })
        .catch((e) => {
          console.error("Failed to get stall by id", e);
        });
  }, []);

  const addToCart = () => {
    const _qty = (document.querySelector("#input-quantity") as HTMLInputElement)
      ?.value;

    if (!_qty) {
      alert("Please select a quantity");
      return;
    }

    if (!selectedSz) {
      alert("Please select a shipping zone");
      return;
    }

    if (!stall) {
      alert("Stall not loaded");
      return;
    }

    const quantity = parseInt(_qty);

    let cart = JSON.parse(
      localStorage.getItem("bitshop-cart") ?? "[]"
    ) as BitshopCart;
    if (!isBitshopCart(cart)) {
      cart = {
        products: [],
        meta: {},
      };
    }

    const toPush: BitshopCartProduct = {
      product_id: props.product.tags.filter((t) => t[0] === "d")[0][1],
      stall_id: props.product.content.stall_id,
      shipping_zone_id: selectedSz.id,
      seller_pubkey: props.product.pubkey,
      seller_npub: "No Pubkey Provided",
      added_at: Math.floor(Date.now() / 1000),
      quantity: quantity,
    };

    // const toPush = {
    // item: {
    // id: props.product.id,
    // quantity,
    // },
    // stall: {
    // id: props.product.content.stall_id,
    // name: stall.content.name,
    // },
    // seller: {
    // id: props.product.pubkey,
    // name: getMerchantNameByPubkey(props.product.pubkey),
    // },
    // shipping: {
    // id: selectedSz.id,
    // name: selectedSz.name,
    // }
    // }

    cart.products.push(toPush);
    localStorage.setItem("bitshop-cart", JSON.stringify(cart));

    alert("Added to cart!");
    window.dispatchEvent(new Event("storage"));
  };

  const href = `/store?id=${props.product.pubkey}`;

  return (
    <div className="container mt-3 mb-5">
      <nav className="breadcrumb-wrap" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          {
            (() => {
              // "Functional language" my balls
              const tags = Array.from(
                Array.from(
                  props.product.tags.filter((t) => t[0] === "t")
                ).entries()
              );
              return tags.map(([idx, value]) => (
                <li
                  className={`breadcrumb-item mid ${
                    idx === tags.length - 1 ? "active" : ""
                  }`}
                >
                  {idx === tags.length - 1 ? (
                    value[1]
                  ) : (
                    <a href="#">{value[1]}</a>
                  )}
                </li>
              ));
            })()
            // const tags = props.tags.filter( t => t[0] === "t" ).map((e) => <li className="breadcrumb-item mid"><a href="#">{e[1]}</a></li>)
          }
          {/*
                            <li className="breadcrumb-item mid"><a href="#">Accessories</a></li>
                            <li className="breadcrumb-item mid"><a href="#">Headphone Accessories</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Smart Phones & Tablets</li>
                        */}
        </ol>
      </nav>

      <div className="row">
        <div className="col-12 col-md-7">
          <div className="product-img-wrap">
            <div className="row">
              <div className="col-12 col-md-2 nav-img">
                <DetailsImages
                  active={active}
                  setActive={setActive}
                  images={props.product.content.images}
                />
                {/*
                                <div className='image-wrap active'>
                                    <img src={p1} alt='Products'/>
                                </div>
                                <div className='image-wrap'>
                                    <img src={p2} alt='Products'/>
                                </div>
                                <div className='image-wrap'>
                                    <img src={p1} alt='Products'/>
                                </div>
                                <div className='image-wrap'>
                                    <img src={p3} alt='Products'/>
                                </div>
                                */}
              </div>
              <div className="col-12 col-md-10 text-center">
                <img
                  src={props.product.content.images[active]}
                  style={{ maxWidth: "100%", height: "auto", padding: "2rem" }}
                  alt="Products"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <p className="product-cat mb-0">
            {(() => {
              const tag = Array.from(props.product.tags).pop();
              return tag ? tag[1] : "No category";
            })()}
          </p>
          {/* <h4>Smartphone 6S 32GB LTE</h4> */}
          <h4>{props.product.content.name}</h4>
          <span>
            <img src={compnyLogo} alt="Company Logo" />
            <a href={href} style={{ marginLeft: "0.5em" }}>
              <strong>{getMerchantNameByPubkey(props.product.pubkey)}</strong>
            </a>
          </span>
          {/*
                    <span>
                        <img src={badge1} alt='Products'/>
                        <img src={badge2} alt='Products'/>
                        <img src={badge1} alt='Products'/>
                    </span>
                    */}
          <div className="mt-2">
            <span className="featured trusted d-inline-block">
              <img src={logo} alt="Badge" width="20%" className="me-1" />
              Trusted
            </span>
            <div className="ratings d-inline-block">
              <span>
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span>
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span>
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span>
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
            </div>
            {/* <span>(112 ratings)</span> reviews non previste in mvp */}
          </div>
          <h6 className="mt-2">
            <strong>{props.product.content.price} USD</strong>
          </h6>
          {/*
                        <p className='mt-2'>Colour: <strong>Black</strong></p>
                        <div className='select-color mt-2'>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label className="form-check-label" for="inlineRadio1"><span className='p-color c1'></span></label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" checked/>
                                <label className="form-check-label" for="inlineRadio2"><span className='p-color c2'></span></label>
                            </div>
                        </div>
                        <p className='mt-2'>Size: <strong>64GB</strong></p>
                        <div className='select-size mt-2'>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="select_size" id="size1" value="option1" checked/>
                                <label className="form-check-label" for="size1"><span className='size s1'>64GB</span></label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="select_size" id="size2" value="option2"/>
                                <label className="form-check-label" for="size2"><span className='size s2'>256GB</span></label>
                            </div>
                        </div>
                        */}
          <div className="mt-2 cart-wrap">
            <input
              id="input-quantity"
              type="number"
              max={props.product.content.quantity ?? 0}
              min={1}
              className="form-control"
              placeholder="Qty: 1"
            />
            <button className="btn btn-theme" onClick={() => addToCart()}>
              Add to Cart
            </button>
          </div>
          <p className="mt-2">
            Availability:{" "}
            <span className="text-success">
              {props.product.content.quantity ?? "?"} in stock
            </span>
          </p>
          <p className="mt-2 mb-1">Delivery:</p>
          <div>
            {
              shippingZones &&
                shippingZones.map((e) => {
                  // <div style={{width: "70%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                  // <div>{e["name"]}: </div>
                  // <div>{e["cost"]}</div>
                  // </div>
                  return (
                    <div>
                      <input
                        type="radio"
                        key={e["id"]}
                        id={e["id"]}
                        value={e["id"]}
                        name="shipping"
                        style={{
                          marginBottom: "0.5rem",
                          marginRight: "0.5rem",
                        }}
                        onChange={() => setSelectedSz(e)}
                      />
                      <label>
                        Ship to {e["name"]} for {parseFloat(e["cost"])} USD
                      </label>
                    </div>
                  );
                })
              // props.content.shipping.map((e) => {
              // return (
              // <div>
              // <span className='text-success'>{e[0]}</span>
              // <span className='text-success'>: {e[1]} USD</span>
              // </div>
              // );
              // }
            }
          </div>
          {/*
                    <form className='avl-delvry'>
                        <i className="uil uil-location-point"></i>
                        <input type='text' className='form-control' placeholder='Enter Delivery pincode'/>
                        <span><a href='#'>Check</a></span>
                    </form>                
                    */}
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="details-tab">
            {/* nav tab starts */}
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              //@ts-ignore
              onSelect={(k) => setKey(k)}
              className="nav-wrap"
            >
              <Tab eventKey="partnersShop" title="Description">
                <div>
                  {(
                    props.product.content.description ??
                    "No description provided by seller"
                  )
                    .split("\n")
                    .map((e) => (
                      <p>{e}</p>
                    ))}
                </div>
              </Tab>
              <Tab eventKey="mostTrusted" title="Specifications">
                <div className="table-responsive">
                  <table className="table table-bordered table-collapsed w-100">
                    <tbody>
                      {props.product.content.specs?.map((e) => {
                        const [key, value] = [...e];
                        return (
                          <tr>
                            <td>{key}</td>
                            <td>{value}</td>
                          </tr>
                        );
                      })}
                      {/*
                                <tr>
                                    <td>Brand</td>
                                    <td>Pro Bodyline Fitness</td>
                                    </tr>
                                <tr>
                                    <td>Motor</td>
                                    <td>4 H.P. Peak Duty,2 H.P.</td>
                                </tr>
                                <tr>
                                    <td>Speed</td>
                                    <td>0.8 to 16 km/hr.</td>
                                </tr>
                                <tr>
                                    <td>Elevation</td>
                                    <td>15 Levels Auto Incline</td>
                                </tr>
                                <tr>
                                    <td>Deck</td>
                                    <td>Hydraulic Suspension Shock Absorbent</td>
                                </tr>
                                <tr>
                                    <td>Belt Size</td>
                                    <td>2650 x 400 m.m.</td>
                                </tr>
                                <tr>
                                    <td>Max User Weight</td>
                                    <td>Upto 120 Kg.</td>
                                </tr>
                                <tr>
                                    <td>Machine Weight</td>
                                    <td>81 Kg.</td>
                                </tr>
                                <tr>
                                    <td>Dimensions</td>
                                    <td>1760 X 740 X 1300 m.m. (LXWXH)</td>
                                </tr>
                            */}
                    </tbody>
                  </table>
                </div>
              </Tab>
            </Tabs>
            {/* nav tab ends */}
          </div>
        </div>
      </div>

      {/*

        Review non previste in mvp

        <div className='row mt-4 align-items-center'>
            <div className='col-12 col-md-9'>
                <h6>Reviews</h6>
            </div>
            <div className='col-12 col-md-3'>
                <label className='mb-1'>Filter By Rating</label>
                <select className='form-select'>
                    <option>Rating</option>
                    <option>5 Star first</option>
                    <option>1 Star first</option>
                </select>
            </div>
        </div>

        
        <div className='row'>
            <div className='col-12'>
                {reviews.map(review => {
                    return (
                        <div>
                            <Reviews review={review} />
                        </div>
                    );
                })
                }

                <a href='#' className='mt-3'>See all reviews</a>
            </div>
        </div>
            */}
    </div>
  );
}

export default Details;
