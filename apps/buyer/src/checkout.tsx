import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  FormEvent,
  ChangeEvent,
} from "react";
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
// import { join } from "path";

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

// const BtcContext = createContext<
//   [number | null, React.Dispatch<React.SetStateAction<number | null>> | null]
// >([null, null]);

// export const BtcProvider: React.FC = ({ children }) => {
//   const [btcAmount, setBtcAmount] = useState<number | null>(null);
//   return (
//     <BtcContext.Provider value={[btcAmount, setBtcAmount]}>
//       {children}
//     </BtcContext.Provider>
//   );
// };

// export const useBtc = () => {
//   const context = useContext(BtcContext);
//   if (!context) {
//     throw new Error("useBtc must be used within a BtcProvider");
//   }
//   return context;
// };

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

interface DeliveryForm {
  name: string;
  email: string;
  flat: string;
  street: string;
  pinCode: string;
  locality: string;
}

interface DeliveryFormOptions {
  required?: boolean;
}

interface Suggestion {
  value: string;
}

interface City {
  country: string;
  name: string;
  lat: string;
  lng: string;
}

function FieldWithSuggestions<T extends Suggestion = any>(props: {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  setValue: (value: string) => void;
  getSuggestions: (
    e: ChangeEvent<HTMLInputElement>
  ) => Promise<T[] | undefined>;
  required?: boolean;
}) {
  const [hidden, setHidden] = useState<boolean>(true);
  const [suggestions, setSuggestions] = useState<T[] | undefined>();

  let timeout: NodeJS.Timeout;
  const showSuggestions = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 3) return;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(async () => {
      const result = await props.getSuggestions(e);
      if (!result) return;

      setSuggestions(result);
      setHidden(false);
      console.log("SUGGESTIONS", result);
    }, 2000);
  };

  const handleSuggestionClick = (value: string) => {
    props.setValue(value);
    console.log(value);
  };

  return (
    <div
      className="col-lg-6 col-md-12"
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
      style={{ position: "relative" }}
    >
      <div className="form-group mb-2">
        <label className="control-label">
          {props.name}
          {props.required && <span className="requied">*</span>}
        </label>
        <input
          id={props.id}
          name={props.id}
          type="text"
          value={props.value}
          placeholder={props.placeholder}
          className="form-control input-md"
          onChange={(e) => {
            props.setValue(e.target.value);
            showSuggestions(e);
          }}
        />
        {!hidden && suggestions && (
          <div
            style={{
              position: "absolute",
              maxHeight: "20rem",
              overflow: "scroll",
              width: "95%",
              background: "white",
              zIndex: 2,
            }}
          >
            {suggestions.map((suggestion, i) => (
              <div
                style={{
                  cursor: "pointer",
                  padding: "10px",
                }}
                key={`${props.id}-suggestion-${i}`}
                onClick={() => handleSuggestionClick(suggestion.value)}
              >
                {suggestion.value}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

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

  const deliveryFormOptions: Partial<
    Record<keyof DeliveryForm, DeliveryFormOptions>
  > = {};

  const [deliveryForm, setDeliveryForm] = useState<DeliveryForm>({
    name: "",
    email: "",
    flat: "",
    street: "",
    pinCode: "",
    locality: "",
  });

  const handleFormChange = (value: string, key: keyof DeliveryForm) => {
    setDeliveryForm({
      ...deliveryForm,
      [key]: value,
    });
  };

  const parseFormData = (): string[] => {
    const errors: string[] = [];
    if (isNaN(btcAmount)) {
      errors.push("Invalid BTC amount detected.");
    }

    Object.entries(deliveryForm).forEach(([key, value]) => {
      // Default is true
      if (deliveryFormOptions[key]?.required !== false && !value)
        errors.push(`"${key}" is required, but not provided`);
    });
    return errors;
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const errors = parseFormData();
    // TODO Stylize with a toast
    if (errors.length > 0) {
      console.error("Form data is not valid. Reasons: ", errors);
      alert("Form data is not valid.");
      return;
    }

    await finalizePayment();
    alert("Payment complete!");
  };

  const finalizePayment = async () => {};

  const getLocalitySuggestions = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!process.env.REACT_APP_API_URL) return undefined;

    const url = new URL(`${process.env.REACT_APP_API_URL}/api/cities`);

    url.searchParams.set("name", e.target.value);

    return await fetch(url)
      .then((r) => (r.status === 200 ? r.json() : undefined))
      .then((json) => {
        if (!json) return undefined;

        return (json as City[]).map((city) => ({
          value: `${city.name}, ${city.country}`,
        }));
      });
  };

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
  const btcAmount = parseFloat(localStorage.getItem("btcAmount") || "0");
  // const btcAmount = 1000;
  const zapBitshop = async () => {
    try {
      const btcAmount = parseFloat(localStorage.getItem("btcAmount") || "0");
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
        console.dir(result);
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
      const btcAmount = parseFloat(localStorage.getItem("btcAmount") || "0");
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
                <form className="" onSubmit={handleFormSubmit}>
                  <div className="address-fieldset">
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mb-2">
                          <label className="control-label">
                            {/* TODO: fix typo */}
                            Name{" "}
                            {deliveryFormOptions.name?.required !== false && (
                              <span className="requied">*</span>
                            )}
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="form-control input-md"
                            onChange={(e) =>
                              handleFormChange(e.target.value, "name")
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mb-2">
                          <label className="control-label">
                            {/* TODO: fix typo */}
                            Email Address{" "}
                            {deliveryFormOptions.email?.required !== false && (
                              <span className="requied">*</span>
                            )}
                          </label>
                          <input
                            id="email1"
                            name="email1"
                            type="text"
                            placeholder="Email Address"
                            className="form-control input-md"
                            onChange={(e) =>
                              handleFormChange(e.target.value, "email")
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group mb-2">
                          <label className="control-label">
                            {/* TODO: fix typo */}
                            Flat / House / Office No.{" "}
                            {deliveryFormOptions.flat?.required !== false && (
                              <span className="requied">*</span>
                            )}
                          </label>
                          <input
                            id="flat"
                            name="flat"
                            type="text"
                            placeholder="Address"
                            className="form-control input-md"
                            onChange={(e) =>
                              handleFormChange(e.target.value, "flat")
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group mb-2">
                          <label className="control-label">
                            {/* TODO: fix typo */}
                            Street / Society / Office Name{" "}
                            {deliveryFormOptions.street?.required !== false && (
                              <span className="requied">*</span>
                            )}
                            <span className="requied">*</span>
                          </label>
                          <input
                            id="street"
                            name="street"
                            type="text"
                            placeholder="Street Address"
                            className="form-control input-md"
                            onChange={(e) =>
                              handleFormChange(e.target.value, "street")
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mb-2">
                          <label className="control-label">
                            {/* TODO: fix typo */}
                            Pincode{" "}
                            {deliveryFormOptions.pinCode?.required !==
                              false && <span className="requied">*</span>}
                          </label>
                          <input
                            id="pincode"
                            name="pincode"
                            type="text"
                            placeholder="Pincode"
                            className="form-control input-md"
                            onChange={(e) =>
                              handleFormChange(e.target.value, "pinCode")
                            }
                          />
                        </div>
                      </div>
                      <FieldWithSuggestions
                        id="locality"
                        name="Locality"
                        placeholder="Enter city"
                        required={deliveryFormOptions.locality?.required}
                        getSuggestions={getLocalitySuggestions}
                        value={deliveryForm.locality}
                        setValue={(value) =>
                          handleFormChange(value, "locality")
                        }
                      />
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
  const [btcAmount, setBtcAmount] = useState();
  const stallId = props.event.content.stall_id;

  useEffect(() => {
    getStallById(stallId).then((s) => {
      setStall(s);
    });
  }, [stallId]);

  useEffect(() => {
    const convertUsdToBtc = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/exchange_rates"
        );
        const btcToUsdRate = parseFloat(response.data.rates.usd.value);
        console.log(`the btc to usd rate is: ${btcToUsdRate}`);
        setBtcAmount(btcToUsdRate);
        // localStorage.setItem("btcAmount", usdToBtcAmount);
        // localStorage.setItem("reloaded", 1);

        // window.location.reload();
        console.log(`BTC amount: ${btcAmount}`);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    convertUsdToBtc();
  }, []);

  const itemShippingCost = parseFloat(
    props.event.content.shipping.find((s) => s.id === shippingId)?.cost || 0
  );
  console.log("itemShippingCost:", itemShippingCost);
  const stallShippingCost = parseFloat(
    stall?.content.shipping.find((s) => s.id === shippingId)?.cost || 0
  );
  console.log("stallShippingCost:", stallShippingCost);

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
          <h4>
            <a href={"details?id=" + props.event.content.id}>
              {props.event.content.name}
            </a>
          </h4>
          {/* <div className="cart-item-price">1,500/- <span>1,800/-</span></div> */}
          {/* <div className="cart-item-price">{price * qty}$</div> */}
          <button type="button" className="cart-close-btn text-danger">
            <i className="uil uil-trash-alt"></i>
          </button>
        </div>
      </div>
      <div className="cart-total-dil">
        <h4>{props.event.content.name}</h4>
        <span title={`Total: ${price} USD x ${qty}`}>
          {(price / btcAmount).toFixed(8)} BTC x {qty}
        </span>
      </div>
      <div className="cart-total-dil pt-1">
        <h4>Shipping Costs</h4>
        <span
          title={`Total: ${itemShippingCost * qty + stallShippingCost} USD`}
        >
          {itemShippingCost + stallShippingCost > 0
            ? `${(
                (itemShippingCost * qty + stallShippingCost) /
                btcAmount
              ).toFixed(8)} BTC`
            : // ? `${itemShippingCost}$ x ${qty} + ${stallShippingCost}`
              "FREE"}
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

  const [stall, setStall] = useState<StallEvent>();
  const [btcAmount, setBtcAmount] = useState<number | null>(0);
  const shipping_zone_id = props.cartProducts[0].shipping_zone_id;
  const [grandTotal, setGrandTotal] = useState();

  const stallId = props.cartProducts[0].stall_id;

  // useEffect(() => {
  //   console.log("Effect is running");

  //   getStallById(stallId).then((s) => {
  //     setStall(s);
  //   });
  // }, [stallId]);
  // useEffect(() => {
  //   console.log("Effect is running");
  //   getStallById(stallId)
  //     .then((s) => {
  //       if (s === null) {
  //         console.error("Received null stall from getStallById");
  //       } else {
  //         console.log("stall:", s);
  //       }
  //       setStall(s);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching stall:", error);
  //     });
  // }, [stallId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedStall = await getStallById(stallId); // Replace this with your actual API call
        setStall(fetchedStall);
      } catch (err) {
        console.error("Error in getStallById:", err);
      }
    };

    fetchData();
  }, [stallId]);
  // (async () => {
  //   try {
  // const stall = await getStallById(stallId);
  // console.log("Stall");
  // console.dir(stall);
  // setStall(stall);
  //   } catch (err) {
  //     console.error("Error in getStallById:", err);
  //   }
  // })();
  useEffect(() => {
    if (stall) {
      console.log("Stall");
      console.dir(stall);
      // console.log("before fetchStall");
      // await fetchStall();
      // console.log("after fetchStall");
      const stallShipping = stall.content.shipping || null;
      console.log("stall shipping:", stallShipping);
      const zone = stallShipping.find((zone) => zone.id === shipping_zone_id);
      console.log("zone:", zone);

      const grandTotal: number = props.events.reduce((acc, product) => {
        const qty = parseFloat(
          props.cartProducts.find((p) => p.product_id === product.content.id)
            ?.quantity || 0
        );
        const itemPrice = parseFloat(product.content.price);

        const stallShippingCost = parseFloat(zone?.cost) || 0;
        console.log("shipping costs:", stallShippingCost || "nada");
        const itemShippingCost = parseFloat(
          product.content.shipping[0]?.cost || 0
        );

        return (
          parseFloat(acc) +
          itemPrice * qty +
          itemShippingCost * qty +
          stallShippingCost
        );
        // return itemPrice * qty;
      }, 0);
      console.log("grandTotal is:" + grandTotal);
      setGrandTotal(grandTotal);
    }
  }, [stall]);

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

    if (stall) {
      convertUsdToBtc();
    }
  }, [stall]); // Other logic
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
            <span title={`Total: ${grandTotal} USD`}>
              {btcAmount !== null && !isNaN(btcAmount) ? (
                <>
                  {console.log(`BTC amount: ${btcAmount.toFixed(8)}`)}
                  {btcAmount.toFixed(8)} BTC{" "}
                  <span
                    className="hover-instruction"
                    style={{ fontSize: "xx-small", color: "gray" }}
                  >
                    ℹ️ Hover for USD
                  </span>
                </>
              ) : (
                <>
                  {console.error("Error: Invalid BTC amount")}
                  <div class="spinner"></div>
                  <span
                    className="hover-instruction"
                    style={{ fontSize: "xx-small", color: "gray" }}
                  >
                    ℹ️ Hover for USD
                  </span>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
