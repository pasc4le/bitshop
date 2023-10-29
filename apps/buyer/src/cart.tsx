import React, { useEffect, useState } from "react";
//@ts-ignore
import logo from "./images/logo.png";
// import { isNumberObject } from "util/types";
import {
  BitshopCartProduct,
  type BitshopCart,
  ProductEvent,
  removeItemFromCart,
  getProductById,
  StallEvent,
  getStallById,
  getStallsByIds,
} from "./lib/nip15";
// import { isNumberObject } from "util/types";

export async function groupItemsByPubkey(
  cart: BitshopCart
): Promise<[string, ProductEvent[]][]> {
  const pp = cart.products.map((product) => {
    return getProductById(product.product_id);
  });

  const products = await Promise.all(pp);

  const m = new Map<string, ProductEvent[]>();

  for (const product of products) {
    const pubkey = product.pubkey;
    const ref = m.get(pubkey);

    if (ref !== undefined) {
      ref.push(product);
    } else {
      m.set(pubkey, [product]);
    }
  }

  return Array.from(m.entries());
}

function ProductDetails(props: {
  product: ProductEvent;
  cartProduct: BitshopCartProduct;
}) {
  const p = props.product;
  const [stall, setStall] = useState<null | StallEvent>(null);

  useEffect(() => {
    !stall &&
      getStallById(p.content.stall_id).then((s) => {
        console.log("Got stall");
        console.log(s);

        setStall(s);
      });
  }, []);

  if (!stall) {
    return <></>;
  }

  const itemShippingCost =
    p.content.shipping.find((s) => s.id === props.cartProduct.shipping_zone_id)
      ?.cost || 0;
  const stallShippingCost =
    stall.content.shipping.find(
      (s) => s.id === props.cartProduct.shipping_zone_id
    )?.cost || 0;
  const qty = props.cartProduct.quantity;
  const shippingCost = itemShippingCost * qty + stallShippingCost;

  return (
    <div className="row mt-4">
      <div className="col-12">
        <div className="cart-box">
          <div
            className="me-4"
            style={{
              height: "max-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              src={p.content.images[0]}
              alt="Product"
              style={{ maxWidth: "10em", maxHeight: "10em" }}
            />
          </div>
          <div>
            <a href={`/details?id=${p.content.id}`}>
              <h5>
                <strong>{p.content.name}</strong>
              </h5>
            </a>
            {/*
                            <div>
                                <span className='discount-tag bg-danger pt-1 pb-1 px-3 d-inline-block text-white'>75%</span>
                                <span className='text-danger ms-3'>Deal of the Day</span>
                            </div>
                            */}
            <div className="price-wrap">
              <h6 className="d-inline-block me-3">
                <strong>${p.content.price}</strong>
              </h6>
              {/* <span>M.R.P.:$1,499.00</span> */}
            </div>
            <div className="product-details mb-2">
              <p className="text-success stock-text mb-0">In stock</p>
              {/* <p className='shipping-text mb-0'>Eligible for FREE Shipping</p> */}
              <p className="shipping-text mb-0">
                Shipping: {shippingCost > 0 ? `${shippingCost} $` : "FREE"}
              </p>
              <p>
                <span className="featured trusted d-inline-block">
                  <img src={logo} alt="Badge" width="20%" className="me-1" />
                  Trusted
                </span>
              </p>
              {p.content.specs?.map((spec) => {
                return (
                  <p className="mb-0">
                    <strong>{spec[0]}:</strong> {spec[1]}
                  </p>
                );
              })}
            </div>
            <div className="cart-qty">
              <select className="form-select">
                {Array.from(Array(p.content.quantity).keys()).map((_, i) => {
                  return (
                    <option selected={i + 1 === props.cartProduct.quantity}>
                      Qty: {i + 1}
                    </option>
                  );
                })}
              </select>
              {/* <span>|</span> */}
              <div
                className="link"
                onClick={() => {
                  removeItemFromCart(props.product.content.id);
                  window.location.reload();
                }}
              >
                Delete
              </div>
              {/*
                                    <span>|</span>
                                    <a href='#'>Save for later</a>
                                    <span>|</span>
                                    <a href='#'>See more like this</a>
                                    <span>|</span>
                                    <a href='#'>Share</a>
                                */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SellerCart(props: {
  pubkey: string;
  products: ProductEvent[];
  cartProducts: BitshopCartProduct[];
}) {
  const localProducts = props.cartProducts.filter((product) => {
    return Array.from(props.products.map((p) => p.content.id)).includes(
      product.product_id
    );
  });

  const [stalls, setStalls] = useState<null | StallEvent[]>(null);
  const stallsIds: string[] = props.products.map((p) => p.content.stall_id);

  useEffect(() => {
    !stalls && getStallsByIds(stallsIds).then((s) => setStalls(s));
  }, []);

  if (!stalls) {
    return null;
  }

  // Grand Total = item price * item quantity + stall shipping cost + item shipping cost * item quantity
  const grandTotal = props.products.reduce((acc, product) => {
    // all variables are coerce into a float, because they are a string
    const cartProduct = localProducts.find(
      (p) => p.product_id === product.content.id
    );
    const itemPrice = parseFloat(product.content.price);
    const itemQuantity = parseFloat(cartProduct?.quantity || 0);
    const itemShippingCost = parseFloat(
      product.content.shipping.find(
        (s) => s.id === cartProduct?.shipping_zone_id
      )?.cost || 0
    );
    const stallShippingCost =
      parseFloat(
        stalls
          .find((s) => s.content.id === product.content.stall_id)
          ?.content.shipping.find((s) => s.id === cartProduct?.shipping_zone_id)
          ?.cost
      ) || 0;

    console.log("===GRAND TOTAL==");
    console.log("Item price", itemPrice, typeof itemPrice, typeof itemPrice);
    console.log(typeof itemPrice);
    console.log("Item quantity", itemQuantity, typeof itemQuantity);
    console.log(
      "Item shipping cost",
      itemShippingCost,
      typeof itemShippingCost
    );
    console.log(
      "Stall shipping cost",
      stallShippingCost,
      typeof stallShippingCost
    );
    console.log(
      "Grand Total",
      acc +
        itemPrice * itemQuantity +
        itemShippingCost * itemQuantity +
        stallShippingCost
    );

    return (
      acc +
      itemPrice * itemQuantity +
      itemShippingCost * itemQuantity +
      stallShippingCost
    );
  }, 0);

  const nItems = props.products.reduce((acc, product) => {
    const cartProduct = localProducts.find(
      (p) => p.product_id === product.content.id
    );
    const itemQuantity = cartProduct?.quantity || 0;
    return acc + itemQuantity;
  }, 0);

  const parsed = btoa(JSON.stringify(localProducts));

  return (
    <div className="card mt-4">
      <div className="row">
        <div className="">
          <h5>Order from {props.pubkey}</h5>
        </div>
      </div>
      <div className="cart-wrap">
        {props.products.map((product) => {
          const cartProduct = localProducts.find(
            (p) => p.product_id === product.content.id
          );
          if (!cartProduct) {
            console.warn("Cart product not found");
            return null;
          }
          return <ProductDetails product={product} cartProduct={cartProduct} />;
        })}
      </div>
      <div className="order-total order-footer">
        <div>
          <a href={`/checkout?_=${parsed}`} className="btn btn-warning w-100">
            Proceed to Buy
          </a>
        </div>
        <div className="align-text-v">
          <h5>
            Subtotal ({nItems} items): <strong>${grandTotal}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
}

function CartSection(props: { cart: BitshopCart }) {
  const [products, setProducts] = useState<null | [string, ProductEvent[]][]>(
    null
  );

  useEffect(() => {
    !products && groupItemsByPubkey(props.cart).then((e) => setProducts(e));
  }, []);

  return (
    <div className="row mt-4">
      {products &&
        products.map(([pubkey, products]) => {
          return (
            <SellerCart
              pubkey={pubkey}
              products={products}
              cartProducts={props.cart.products}
            />
          );
        })}
    </div>
  );
}

function Cart() {
  const _cart = JSON.parse(
    localStorage.getItem("bitshop-cart") ?? "{products: []}"
  ) as BitshopCart;
  const [cart, setCart] = useState(_cart);

  window.addEventListener("storage", (e) => {
    console.log("Storage event", e);
    const _cart = JSON.parse(
      localStorage.getItem("bitshop-cart") ?? "{products: []}"
    ) as BitshopCart;
    setCart(_cart);
  });

  return (
    <div className="store-wrap">
      <div className="container pt-3 pb-3">
        <nav className="breadcrumb-wrap" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Cart
            </li>
          </ol>
        </nav>
        <CartSection cart={cart} />

        {/*
                    <div className='col-12 col-md-4'>
                        <div className='card store-details'>
                            <div className='block'>
                                <h5>Order Summary</h5>
                                <div className='mt-3'>
                                    <p><span className='text-success'><i className="fa fa-check-circle me-2" aria-hidden="true"></i>Your order is eligible for FREE Delivery.</span> Select this option at checkout.</p>
                                    <p>Subtotal (1 items): <strong>$756.00</strong></p>
                                </div>
                                <a href="/checkout" className='mt-4 btn btn-warning w-100'>Proceed to Buy</a>
                            </div>
                        </div>
                    </div>
                    */}
      </div>
    </div>
  );
}

export default Cart;
