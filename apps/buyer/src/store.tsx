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
  StallEvent,
  getCategoryForStall,
  getImageForStall,
  getStallsByPubkey,
} from "./lib/nip15";

function StallCard(props: { stall: StallEvent }) {
  const name = props.stall.content.name;
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const href = `/stall?id=${props.stall.content.id}`;

  useEffect(() => {
    getCategoryForStall({
      stallEvtId: props.stall.id,
      content: props.stall.content,
    })
      .then((cat) => {
        setCategory(cat);
      })
      .catch((err) => {
        console.info("Failed to get category for stall", err);
      });

    getImageForStall({
      stallId: props.stall.tags[0][1],
      author: props.stall.pubkey,
    })
      .then((img) => {
        setImage(img);
      })
      .catch((err) => {
        console.info("Failed to get image for stall", err);
      });
  }, []);

  return (
    <div className="col-6 col-md-4 col-lg-3">
      <a href={href} className="p-box">
        {category && <span className="p-cat mb-0 d-block">{category}</span>}
        {/* <span className='featured d-block'>Featured</span> */}
        <div className="text-center">
          {image && <img src={image} alt="Product" />}
        </div>
        <p>
          <strong>{name}</strong>
        </p>
        <p style={{ fontWeight: "300" }}>
          {props.stall.content.description || "No description provided"}
        </p>
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

export default function Store(props) {
  const [params, _] = useSearchParams();
  console.log(params);
  const _id = params.get("id");
  const _img = params.get("img");
  const _title = params.get("title");
  const _description = params.get("description");

  if (_id === null) {
    redirect("/404");
  }

  const id = _id as string;
  const img = _img as string;
  const title = _title as string;
  const description = _description as string;
  console.log(id);

  const [stalls, setStalls] = useState<StallEvent[]>([]);
  //   var stallsArray = [];
  const onNew = (ns: StallEvent) => {
    setStalls((oldStalls) => {
      // Check if the new stall's id is already present in the current state
      const isPresent = oldStalls.some((ss) => ss.id === ns.id);
      if (!isPresent) {
        // If it's not present, add the new stall to the state
        return [...oldStalls, ns];
      } else {
        // If it's already present, return the state as is
        return oldStalls;
      }
    });
  };

  useEffect(() => {
    getStallsByPubkey(id, onNew).then((_) => {
      console.debug("All stalls loaded");
    });
  }, [id]);

  return (
    <div>
      <div className="store-banner-wrap">
        <div className="store-banner">
          <div className="text-center banner-text">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="store-name text-center">
          <span className="store-logo">
            <img src={"." + img} alt="Company Logo" width="80%" />
          </span>
          <h6>
            <span>
              {/* <img src={img} alt="Company Logo" /> */}
              <span className="ms-2">{/* <strong>{title}</strong> */}</span>
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
                  {/* <img src={bigBadge1} alt="badge" className="me-1" />
                  <img src={bigBadge2} alt="badge" className="me-1" />
                  <img src={bigBadge3} alt="badge" className="me-1" /> */}
                </div>
              </div>
              <div className="mt-3 mt-2 store-contact">
                <p className="mb-0">
                  <span className="me-2">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  {/* 27 Maracoir Street, Mannady San Francisco, California, United
                  States (US) */}
                </p>
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
                <h6>Products</h6>
              </div>
              <div className="col-12 col-md-6 text-end search-product">
                <div className="input-group mb-0">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="uil uil-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={"Search " + title}
                    aria-label=""
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="product-wrap mt-4">
              <div className="row">
                {stalls.map((s) => (
                  <StallCard key={s.id} stall={s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
