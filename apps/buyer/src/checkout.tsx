import React, { createContext, useContext, useState, useEffect } from "react";
import Confetti from "react-confetti";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import { useSearchParams, redirect } from "react-router-dom";
import {
  BitshopCartProduct,
  ProductEvent,
  StallEvent,
  getProductById,
  getStallById,
} from "./lib/nip15";

// const convertUsdToBtc = async (value) => {
//   try {
//     const response = await axios.get(
//       "https://api.coingecko.com/api/v3/exchange_rates"
//     );
//     const btcToUsdRate = parseFloat(response.data.rates.btc.value);
//     const usdToBtcAmount = value / btcToUsdRate;
//     setBtcAmount(usdToBtcAmount);
//   } catch (error) {
//     console.error("Error fetching exchange rate:", error);
//   }
// };

// const defaultSetBtcAmount = () => {};
// const BtcContext = createContext<
//   [number | null, React.Dispatch<React.SetStateAction<number | null>>]
// >([null, defaultSetBtcAmount]);

const BtcContext = createContext<
  [number | null, React.Dispatch<React.SetStateAction<number | null>> | null]
>([null, null]);

export const BtcProvider: React.FC = ({ children }) => {
  const [btcAmount, setBtcAmount] = useState<number | null>(null);
  return (
    <BtcContext.Provider value={[btcAmount, setBtcAmount]}>
      {children}
    </BtcContext.Provider>
  );
};

export const useBtc = () => {
  const context = useContext(BtcContext);
  if (!context) {
    throw new Error("useBtc must be used within a BtcProvider");
  }
  return context;
};

const makeInvoiceBitshop = async (amount, memo) => {
  const url = "https://legend.lnbits.com/api/v1/payments";
  const data = {
    out: false,
    amount: amount,
    memo: memo,
  };
  const headers = {
    "X-Api-Key": "835ae4f912d8469ea36262b453407045",
    "Content-type": "application/json",
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log("Payment successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Payment error:", error);
    return null; // return null or some error object as per your need
  }
};

const makeInvoiceMerchant = async (amount, memo) => {
  const url = "https://legend.lnbits.com/api/v1/payments";
  const data = {
    out: false,
    amount: amount,
    memo: memo,
  };
  const headers = {
    "X-Api-Key": "e6e00856789c4824be8410d2a99b64a0",
    "Content-type": "application/json",
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log("Payment successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Payment error:", error);
    return null; // return null or some error object as per your need
  }
};

function Checkout(props: {
  cartProducts: BitshopCartProduct[];
  events: ProductEvent[];
}) {
  //   const [btcAmount, setBtcAmount] = useState<number | null>(null);
  const [params, _] = useSearchParams();
  const _s = params.get("_");

  if (_s === null || _s === undefined) {
    redirect("/");
  }

  const s = _s as string;
  const cartProducts = JSON.parse(atob(s)) as BitshopCartProduct[];
  const [productEvents, setProductEvents] = useState<null | ProductEvent[]>();
  const [isFirstSuccessful, setIsFirstSuccessful] = useState(false);
  const [isSecondSuccessful, setIsSecondSuccessful] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const pp = cartProducts.map((cp) => {
      return getProductById(cp.product_id);
    });

    Promise.all(pp).then((pes) => {
      setProductEvents(pes);
    });
  }, [_s]);

  if (!productEvents) {
    return <></>;
  }

  //   const grandTotal = props.events.reduce((acc, product) => {
  //     const qty =
  //       props.cartProducts.find((p) => p.product_id === product.content.id)
  //         ?.quantity || 0;
  //     const itemPrice = product.content.price;
  //     const stallShippingCost = product.content.shipping[0]?.cost || 0;
  //     const itemShippingCost = product.content.shipping[0]?.cost || 0;

  //     return acc + itemPrice * qty + itemShippingCost * qty + stallShippingCost;
  //   }, 0);

  //   useEffect(() => {
  //   const convertUsdToBtc = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://api.coingecko.com/api/v3/exchange_rates"
  //       );
  //       const btcToUsdRate = parseFloat(response.data.rates.usd.value);
  //       console.log(`the btc to usd rate is: ${btcToUsdRate}`);
  //       const usdToBtcAmount = grandTotal / btcToUsdRate;
  //       setBtcAmount(usdToBtcAmount);
  //     } catch (error) {
  //       console.error("Error fetching exchange rate:", error);
  //     }
  //   };

  //   convertUsdToBtc();
  //   }, []); // Other logic

  //   const btcAmount = grandTotal / 26836.345;
  const btcAmount = parseFloat(localStorage.getItem("btcAmount"));
  // const btcAmount = 1000;
  const zapBitshop = async () => {
    try {
      const btcAmount = parseFloat(localStorage.getItem("btcAmount"));
      //   await webln.enable();
      const fees = 0.05;
      const sats = btcAmount !== null ? btcAmount * fees * 10 ** 8 : null;
      // const sats = btcAmount !== null ? btcAmount * fees : null;
      const invoice = await makeInvoiceBitshop(sats, "fees to bitshop");

      console.dir(`Invoice for bitshop: ${invoice.payment_request}`);
      if (typeof window.webln === "undefined") {
        alert("No WebLN available.");
      }

      try {
        await window.webln.enable();
        const result = await window.webln.sendPayment(invoice.payment_request);
      } catch (error) {
        alert("An error occurred during the payment.");
      }
    } catch (error) {
      console.error("Error in zapBitshop:", error);
    }
    setIsFirstSuccessful(true);
  };

  const payMerchant = async () => {
    try {
      const btcAmount = parseFloat(localStorage.getItem("btcAmount"));
      // const sats = btcAmount !== null ? btcAmount : null;
      const sats = btcAmount !== null ? btcAmount * 0.95 * 10 ** 8 : null;
      // const sats = 1000;

      const invoice = await makeInvoiceMerchant(sats, "payment merchant");
      console.dir(`Invoice for merchant: ${invoice}`);
      console.dir(`Invoice for merchant: ${invoice.payment_request}`);

      if (typeof window.webln === "undefined") {
        alert("No WebLN available.");
      }

      try {
        await window.webln.enable();
        const result = await window.webln.sendPayment(invoice.payment_request);

        setIsSecondSuccessful(true);
        if (isSecondSuccessful) {
          //create banner
          setShowBanner(true);
          setShowConfetti(true);

          // Optionally, remove the confetti after a certain time
          setTimeout(() => {
            setShowConfetti(false);
          }, 5000);
        }
      } catch (error) {
        alert("An error occurred during the payment.");
      }
    } catch (error) {
      console.error("Error in payMerchant:", error);
    }
  };
  const bannerStyle: React.CSSProperties = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    backgroundColor: "#4CAF50",
    zIndex: "1000",
  };

  const bannerTextStyle: React.CSSProperties = {
    margin: "0",
    padding: "15px",
    fontSize: "2rem",
    color: "#ffffff",
    textAlign: "center",
  };

  return (
    <div className="container mt-3 mb-5">
      <nav className="breadcrumb-wrap" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Checkout
          </li>
        </ol>
      </nav>

      <div className="row">
        <div className="col-12 col-md-8">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Delivery Address</Accordion.Header>
              <Accordion.Body>
                <form className="">
                  <div className="address-fieldset">
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mb-2">
                          <label className="control-label">
                            Name <span className="requied">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="form-control input-md"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mb-2">
                          <label className="control-label">
                            Email Address <span className="requied">*</span>
                          </label>
                          <input
                            id="email1"
                            name="email1"
                            type="text"
                            placeholder="Email Address"
                            className="form-control input-md"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group mb-2">
                          <label className="control-label">
                            Flat / House / Office No.
                            <span className="requied">*</span>
                          </label>
                          <input
                            id="flat"
                            name="flat"
                            type="text"
                            placeholder="Address"
                            className="form-control input-md"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group mb-2">
                          <label className="control-label">
                            Street / Society / Office Name{" "}
                            <span className="requied">*</span>
                          </label>
                          <input
                            id="street"
                            name="street"
                            type="text"
                            placeholder="Street Address"
                            className="form-control input-md"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mb-2">
                          <label className="control-label">
                            Pincode <span className="requied">*</span>
                          </label>
                          <input
                            id="pincode"
                            name="pincode"
                            type="text"
                            placeholder="Pincode"
                            className="form-control input-md"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mb-2">
                          <label className="control-label">
                            Locality <span className="requied">*</span>
                          </label>
                          <input
                            id="Locality"
                            name="locality"
                            type="text"
                            placeholder="Enter City"
                            className="form-control input-md"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <div className="text-right">
                            <button className="btn btn-theme">Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Payment Method</Accordion.Header>
              <Accordion.Body>
                <h5>Lightning</h5>
                <div className="mt-4">
                  <button
                    className="btn btn-theme"
                    onClick={zapBitshop}
                    disabled={isSecondSuccessful}
                  >
                    Zap Bitshop
                  </button>
                  <button
                    className="btn btn-theme"
                    disabled={!isFirstSuccessful || isSecondSuccessful}
                    onClick={payMerchant}
                  >
                    Pay Merchant
                  </button>
                </div>
                <div>
                  {isSecondSuccessful && <Confetti />}
                  {isSecondSuccessful && (
                    <div style={bannerStyle}>
                      <h1 style={bannerTextStyle}>Payment Successful!</h1>
                    </div>
                  )}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <OrderSummary cartProducts={cartProducts} events={productEvents} />
      </div>
    </div>
  );
}

export default Checkout;

function ProductDetail(props: {
  event: ProductEvent;
  product: BitshopCartProduct;
}) {
  const price = props.event.content.price;
  const qty = props.product.quantity;
  const shippingId = props.product.shipping_zone_id;
  const [stall, setStall] = useState<null | StallEvent>(null);
  const stallId = props.event.content.stall_id;

  useEffect(() => {
    getStallById(stallId).then((s) => {
      setStall(s);
    });
  }, [stallId]);

  const itemShippingCost =
    props.event.content.shipping.find((s) => s.id === shippingId)?.cost || 0;
  const stallShippingCost = stall?.content.shipping[0]?.cost || 0;

  if (!stall) {
    return <></>;
  }

  return (
    <div className="right-cart-dt-body mb-2">
      <div className="cart-item border_radius">
        <div className="cart-product-img mb-2">
          <img src={props.event.content.images[0]} alt="Product" />
          {/* <div className="offer-badge">4% OFF</div> */}
        </div>
        <div className="cart-text">
          <h4>{props.event.content.name}</h4>
          {/* <div className="cart-item-price">1,500/- <span>1,800/-</span></div> */}
          <div className="cart-item-price">{price * qty}$</div>
          <button type="button" className="cart-close-btn text-danger">
            <i className="uil uil-trash-alt"></i>
          </button>
        </div>
      </div>
      <div className="cart-total-dil">
        <h4>{props.event.content.name}</h4>
        <span>
          {price}$ x {qty}
        </span>
      </div>
      <div className="cart-total-dil pt-1">
        <h4>Item Shipping Costs</h4>
        <span>
          {itemShippingCost > 0 ? `${itemShippingCost}$ x ${qty}` : "FREE"}
        </span>
      </div>
    </div>
  );
}

function OrderSummary(props: {
  cartProducts: BitshopCartProduct[];
  events: ProductEvent[];
}) {
  // const [btcAmount, setBtcAmount] = useState<number | null>(null);
  // const [btcAmount, setBtcAmount] = useBtc();

  const [btcAmount, setBtcAmount] = useState<number | null>(null);

  const grandTotal = props.events.reduce((acc, product) => {
    const qty =
      props.cartProducts.find((p) => p.product_id === product.content.id)
        ?.quantity || 0;
    const itemPrice = product.content.price;
    const stallShippingCost = product.content.shipping[0]?.cost || 0;
    const itemShippingCost = product.content.shipping[0]?.cost || 0;

    // return acc + itemPrice * qty + itemShippingCost * qty + stallShippingCost;
    return itemPrice * qty;
  }, 0);

  useEffect(() => {
    const convertUsdToBtc = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/exchange_rates"
        );
        const btcToUsdRate = parseFloat(response.data.rates.usd.value);
        console.log(`the btc to usd rate is: ${btcToUsdRate}`);
        console.log(`the grand total is: ${grandTotal}`);
        const usdToBtcAmount = grandTotal / btcToUsdRate;
        setBtcAmount(usdToBtcAmount);
        localStorage.setItem("btcAmount", usdToBtcAmount);
        // localStorage.setItem("reloaded", 1);

        // window.location.reload();
        console.log(`BTC amount: ${btcAmount}`);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    convertUsdToBtc();
  }, []); // Other logic
  return (
    <div className="col-12 col-md-4">
      <div className="card order-cart">
        <h6>Order Summary</h6>
        <div className="card-body">
          <div className="total-checkout-group">
            {Array.from(Array(props.cartProducts.length).keys()).map((i) => {
              return (
                <ProductDetail
                  event={props.events[i]}
                  product={props.cartProducts[i]}
                />
              );
            })}
          </div>
          <div className="main-total-cart">
            <h2>Total</h2>
            <span>
              {btcAmount !== null && !isNaN(btcAmount) ? (
                <>
                  {console.log(`BTC amount: ${btcAmount.toFixed(8)}`)}
                  {btcAmount.toFixed(8)} BTC
                </>
              ) : (
                <>
                  {console.error("Error: Invalid BTC amount")}
                  Error: Invalid BTC amount
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
