import React, { useEffect, useState } from "react";
//@ts-ignore
import bigBadge1 from "./images/badges/big-badge1.png";
//@ts-ignore
import bigBadge2 from "./images/badges/big-badge2.png";
//@ts-ignore
import bigBadge3 from "./images/badges/big-badge3.png";
//@ts-ignore
import compnyLogo from "./images/details/c-logo.png";
import { redirect, useSearchParams } from "react-router-dom";
import {
  getStallById,
  lazyGetAllProductsForStall,
  ProductEvent,
} from "./../src/lib/nip15";

function ProductCard(props: { product: ProductEvent }) {
  const category = props.product.tags.slice(-1)[0][1];
  const images = props.product.content.images?.[0] || "";

  const name = props.product.content.name;
  let desc = props.product.content.description || "No description available";

  if (desc.length > 300) {
    desc = desc.slice(0, 300) + "...";
  }

  const href = `/details?id=${props.product.content.id}`;

  return (
    <div className="col-6 col-md-4 col-lg-3">
      <a href={href} className="p-box">
        <span className="p-cat mb-0 d-block">{category}</span>
        {/* <span className='featured d-block'>Featured</span> */}
        <div className="text-center">
          <img src={images} alt="Product" />
        </div>
        <p>
          <strong>{name}</strong>
        </p>
        <p style={{ fontWeight: 300, fontSize: 14 }}>{desc}</p>
        {/*
                        <div className='ratings'>
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        </div>
                        */}
      </a>
    </div>
  );
}

export default function Stall(props) {
  const [searchParams, _] = useSearchParams();
  const _id = searchParams.get("id");

  const _img = searchParams.get("img");
  const _title = searchParams.get("title");
  const _name = searchParams.get("name");
  const _description = searchParams.get("description");

  if (_id === null) {
    redirect("/404");
  }

  const id = _id as string;
  const img = _img as string;
  const title = _title as string;
  const name = _name as string;
  const description = _description as string;

  const [products, setProducts] = useState<ProductEvent[]>([]);

  const addProduct = (np: ProductEvent) => {
    console.log("Adding product");
    console.log(np);

    setProducts((old) => {
      if (old.find((p) => p.content.id === np.content.id)) {
        console.log("Skipping product");
        console.log(np);

        return old;
      }

      return [...old, np];
    });
  };

  const [stallName, setStallName] = useState("");

  useEffect(() => {
    getStallById(id).then((stall) => {
      setStallName(stall.content.name);
      lazyGetAllProductsForStall(stall.content.id, stall.pubkey, (p) =>
        addProduct(p)
      );
    });
  }, [id]);

  return (
    <div>
      <div className="store-banner-wrap">
        <div className="store-banner">
          <div className="text-center banner-text">
            <h1>{title}</h1>
            <h3>{name}</h3>
          </div>
        </div>
        <div className="store-name text-center">
          <span className="store-logo">
            <img src={"." + img} alt="Company Logo" width="40%" />
          </span>
          <h6>
            <span>
              {/* <img src={compnyLogo} alt="Company Logo" /> */}
              <span className="ms-2">{/* <strong>B-Premio</strong> */}</span>
            </span>
          </h6>
        </div>
      </div>

      <div className="container-fluid store-wrap">
        <div className="row pt-4">
          <div className="col-12 col-md-4">
            <div className="card store-details">
              <div className="block">
                <h5>
                  <span>
                    <i className="fa fa-globe" aria-hidden="true"></i>
                  </span>{" "}
                  About
                </h5>
                <p>{description || title + " has no description yet"}</p>
              </div>

              <div className="mt-4">
                <h5>
                  <span>
                    <i className="uil uil-award"></i>
                  </span>{" "}
                  Badges
                </h5>
                <div className="mt-2">
                  {/* <img src={bigBadge1} alt="badge" className='me-1' />
                                    <img src={bigBadge2} alt="badge" className='me-1' />
                                    <img src={bigBadge3} alt="badge" className='me-1' /> */}
                </div>
              </div>
              <div className="mt-3 mt-2 store-contact">
                <p className="mb-0">
                  <span className="me-2">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                </p>
                {/* 27 Maracoir Street, Mannady San Francisco, California, United States (US) */}
              </div>
              <div className="mt-2 store-contact">
                <p className="mt-3 mb-0">
                  <span className="me-2">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </span>
                  {/* 1800123123 */}
                </p>
              </div>
              <div className="mt-2 store-contact">
                <p className="mt-3 mb-0">
                  <span className="me-2">
                    <i className="uil uil-store"></i>
                  </span>
                  {/* Store Closed */}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 card">
            <div className="row">
              <div className="col-12 col-md-6">
                <h6>{stallName}</h6>
              </div>
              <div className="col-12 col-md-6 text-end search-product">
                <div className="input-group mb-0">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="uil uil-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={"Search " + name}
                    aria-label=""
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="product-wrap mt-4">
              <div className="row">
                {
                  // stalls.map(s => <ProductCard stallEvtId={id as string} stall={s} />)
                  products.map((p) => (
                    <ProductCard product={p} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
