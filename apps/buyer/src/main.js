import React, { useEffect, useState } from "react";
import product1 from "./images/p1.png";
import product2 from "./images/p2.png";
import product3 from "./images/p3.png";
import product4 from "./images/p4.png";
import product5 from "./images/p5.png";
import electrohub from "./images/electrohub.png";
import babyEssential from "./images/baby_essential.png";
import ragServices from "./images/rag_services.png";
import badge1 from "./images/badges/badge1.png";
import badge2 from "./images/badges/badge2.png";
import p10 from "./images/products/p10.png";
import p11 from "./images/products/p11.png";
import p12 from "./images/products/p12.png";
import p13 from "./images/products/p13.png";
import p14 from "./images/products/p14.png";
import s1 from "./images/shop/s1.png";
import Cat1 from "./images/categories/cat-1.png";
import Cat2 from "./images/categories/cat-2.png";
import Cat3 from "./images/categories/cat-3.png";
import Cat4 from "./images/categories/cat-4.png";
import Cat5 from "./images/categories/cat-5.png";
import Cat6 from "./images/categories/cat-6.png";
import Cat7 from "./images/categories/cat-7.png";
import Cat8 from "./images/categories/cat-8.png";
import Cat9 from "./images/categories/cat-9.png";
import Cat10 from "./images/categories/cat-10.png";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import OwlCarousel from "react-owl-carousel";
import "./assets/owl.carousel/owl.carousel.css";
import "./assets/owl.carousel/owl.theme.default.css";

import Product from "./component/product/index";
import Store from "./component/store/index";
import HomeBanner from "./component/banner/HomeBanner";
import TopCategory from "./component/TopCategories/index";
import TrustedShop from "./component/TrustedShop/index";

// products
// const products = [
//   {
//     title: "Universal Headphones Case in Black",
//     categoryName: "Headphone Cases",
//     imgSrc: p14,
//     isFeatured: "Yes",
//     ratings: 4,
//   },
//   {
//     title: "Universal Headphones Case in Black",
//     categoryName: "Headphone Cases",
//     imgSrc: p13,
//     isFeatured: "No",
//     ratings: 2,d
//   },
//   {
//     title: "Universal Headphones Case in Black",
//     categoryName: "Headphone Cases",
//     imgSrc: p12,
//     isFeatured: "Yes",
//     ratings: 4,
//   },
//   {
//     title: "Universal Headphones Case in Black",
//     categoryName: "Headphone Cases",
//     imgSrc: p11,
//     isFeatured: "No",
//     ratings: 3,
//   },
//   {
//     title: "Universal Headphones Case in Black",
//     categoryName: "Headphone Cases",
//     imgSrc: p10,
//     isFeatured: "No",
//     ratings: 4,
//   },
//   {
//     title: "Universal Headphones Case in Black",
//     categoryName: "Headphone Cases",
//     imgSrc: p11,
//     isFeatured: "No",
//     ratings: 3,
//   },
//   {
//     title: "Universal Headphones Case in Black",
//     categoryName: "Headphone Cases",
//     imgSrc: p13,
//     isFeatured: "Yes",
//     ratings: 2,
//   },
//   {
//     title: "Universal Headphones Case in Black",
//     categoryName: "Headphone Cases",
//     imgSrc: p14,
//     isFeatured: "Yes",
//     ratings: 4,
//   },
//   {
//     title: "Universal Headphones Case in Black",
//     categoryName: "Headphone Cases",
//     imgSrc: p14,
//     isFeatured: "Yes",
//     ratings: 4,
//   },
//   {
//     title: "Universal Headphones Case in Black",
//     categoryName: "Headphone Cases",
//     imgSrc: p13,
//     isFeatured: "No",
//     ratings: 2,
//   },
//   {
//     title: "Universal Headphones Case in Black",
//     categoryName: "Headphone Cases",
//     imgSrc: p12,
//     isFeatured: "Yes",
//     ratings: 4,
//   },
//   {
//     title: "Universal Headphones Case in Black",
//     categoryName: "Headphone Cases",
//     imgSrc: p11,
//     isFeatured: "No",
//     ratings: 3,
//   },
//   {
//     title: "Universal Headphones Case in Black",
//     categoryName: "Headphone Cases",
//     imgSrc: p10,
//     isFeatured: "No",
//     ratings: 4,
//   },
//   {
//     title: "Universal Headphones Case in Black",
//     categoryName: "Headphone Cases",
//     imgSrc: p11,
//     isFeatured: "No",
//     ratings: 3,
//   },
//   {
//     title: "Universal Headphones Case in Black",
//     categoryName: "Headphone Cases",
//     imgSrc: p13,
//     isFeatured: "Yes",
//     ratings: 2,
//   },
//   {
//     title: "Universal Headphones Case in Black",
//     categoryName: "Headphone Cases",
//     imgSrc: p14,
//     isFeatured: "Yes",
//     ratings: 4,
//   },
// ];
const products = [];
let shopSpecificProducts = [];
if (products.length) {
  let arrIndex = 0;
  let shopSpecificProduct = [];
  products.map((product, index) => {
    if (index % 8 === 0) {
      arrIndex = index;
      shopSpecificProduct[arrIndex] = [product];
    } else {
      shopSpecificProduct[arrIndex] = [
        ...shopSpecificProduct[arrIndex],
        product,
      ];
    }
  });
  shopSpecificProducts = shopSpecificProduct;
}

// const RAGServices: {
//   priv: "9d9c5330b29b0e5c3b13cc58efd7d75e7adb311c2a2d0042ac09c8e74e7429d1",
//   pub: "f6649d009e97aab43fa2a03f1eea170829553a273be5e603a87bef4510d1300e"
// }

// const baby_essential: {
//   priv: "3a3ff0e15cb0bb742b18d1ab89682e30179fadff52201d975e213731762a06e0",
//   pub: "3bd47c63fe5feea1b087b605b86ac2aeae3b8dd1d49a0a65a790d1d3ba82e8d1"
// }

// const electrohub: {
//   priv: "6e07c1590a9abccd73bac492ade1e60057a89555ecb7fb5256d69c4b17a41369",
//   pub: "cc48ea4b7d16495cc47782dc369cb12a093ce3b152e7cfc8aa4cf63e2ecde673"
// }
// stores
const stores = [
  {
    title: "ElectroHub",
    categoryName: "Electronic",
    imgSrc: electrohub,
    isFeatured: "Yes",
    ratings: 4,
    pubKey: "cc48ea4b7d16495cc47782dc369cb12a093ce3b152e7cfc8aa4cf63e2ecde673",
  },
  {
    title: "Baby Essential",
    categoryName: "Baby Care",
    imgSrc: babyEssential,
    isFeatured: "Yes",
    ratings: 4,
    pubKey: "3bd47c63fe5feea1b087b605b86ac2aeae3b8dd1d49a0a65a790d1d3ba82e8d1",
  },
  {
    title: "RAG Services",
    categoryName: "Services",
    imgSrc: ragServices,
    isFeatured: "Yes",
    ratings: 4,
    pubKey: "f6649d009e97aab43fa2a03f1eea170829553a273be5e603a87bef4510d1300e",
  },
  // {
  //   title: "Mobile world",
  //   categoryName: "Laptops",
  //   imgSrc: product1,
  //   isFeatured: "Yes",
  //   ratings: 4,
  //   pubKey: "6b0d75730d7093c25759ae99748cf7ddc3a2124941e3c543b49115b1426f0800",
  // },
  // {
  //   title: "Spice Hotpot",
  //   categoryName: "Computer Case",
  //   imgSrc: product2,
  //   isFeatured: "No",
  //   ratings: 4,
  // },
  // {
  //   title: "Novelty Telecom",
  //   categoryName: "Printers",
  //   imgSrc: product3,
  //   isFeatured: "Yes",
  //   ratings: 2,
  // },
  // {
  //   title: "A L B Telecom",
  //   categoryName: "Camerass",
  //   imgSrc: product4,
  //   isFeatured: "No",
  //   ratings: 3,
  // },
  // {
  //   title: "TST Media",
  //   categoryName: "Mobile",
  //   imgSrc: product5,
  //   isFeatured: "Yes",
  //   ratings: 4,
  // },
  // {
  //   title: "Mobile world",
  //   categoryName: "Laptops",
  //   imgSrc: product1,
  //   isFeatured: "Yes",
  //   ratings: 4,
  // },
  // {
  //   title: "Spice Hotpot",
  //   categoryName: "Computer Case",
  //   imgSrc: product2,
  //   isFeatured: "No",
  //   ratings: 4,
  // },
  // {
  //   title: "Novelty Telecom",
  //   categoryName: "Printers",
  //   imgSrc: product3,
  //   isFeatured: "Yes",
  //   ratings: 2,
  // },
  // {
  //   title: "A L B Telecom",
  //   categoryName: "Camerass",
  //   imgSrc: product4,
  //   isFeatured: "No",
  //   ratings: 3,
  // },
  // {
  //   title: "TST Media",
  //   categoryName: "Mobile",
  //   imgSrc: product5,
  //   isFeatured: "Yes",
  //   ratings: 4,
  // },
];

// const stores = [];
// top categories
// const categories = [
//   {
//     title: "Home & Audio Enternteinment",
//     imgSrc: Cat1,
//   },
//   {
//     title: "Smartphones & Tablets",
//     imgSrc: Cat2,
//   },
//   {
//     title: "Desktop PCs & Laptops",
//     imgSrc: Cat3,
//   },
//   {
//     title: "Video Games & Consoles",
//     imgSrc: Cat4,
//   },
//   {
//     title: "Gadgets & Accesories",
//     imgSrc: Cat5,
//   },
//   {
//     title: "Photo Cameras",
//     imgSrc: Cat6,
//   },
//   {
//     title: "Computer Components",
//     imgSrc: Cat7,
//   },
//   {
//     title: "Cameras & Photography",
//     imgSrc: Cat8,
//   },
// ];
const categories = [];
// top categories
const shops = [
  {
    title: "Smart Mob Solution",
    ratings: 4,
    total_rating: "112",
    imgSrc: s1,
  },
  {
    title: "Smart Mob Solution",
    ratings: 4,
    total_rating: "112",
    imgSrc: s1,
  },
  {
    title: "Smart Mob Solution",
    ratings: 4,
    total_rating: "112",
    imgSrc: s1,
  },
  {
    title: "Smart Mob Solution",
    ratings: 4,
    total_rating: "112",
    imgSrc: s1,
  },
  {
    title: "Smart Mob Solution",
    ratings: 4,
    total_rating: "112",
    imgSrc: s1,
  },
  {
    title: "Smart Mob Solution",
    ratings: 4,
    total_rating: "112",
    imgSrc: s1,
  },
  {
    title: "Smart Mob Solution",
    ratings: 4,
    total_rating: "112",
    imgSrc: s1,
  },
  {
    title: "Smart Mob Solution",
    ratings: 4,
    total_rating: "112",
    imgSrc: s1,
  },
];

function Main() {
  // navtab
  const [key, setKey] = useState("partnersShop");

  const options = {
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  const nav_options = {
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  };

  let producthtml = "";

  // let all_producthtml = '';

  useEffect(() => {}, [producthtml]);

  return (
    <div>
      <div className="container">
        {/* banner starts */}
        <HomeBanner />
        {/* banner ends */}
        {/* nav tab starts */}
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mt-4 mb-4 nav-wrap"
        >
          <Tab eventKey="partnersShop" title="Partners shop">
            <div className="product-wrap">
              <div className="container-fluid">
                <OwlCarousel
                  items={5}
                  className="owl-theme"
                  loop={false}
                  nav={false}
                  dots={true}
                  autoplay={false}
                  margin={8}
                  {...nav_options}
                >
                  {stores.map((store) => {
                    return (
                      <div>
                        <a href="store?id=c6dc098f6c5159efbff9de794cf590a1c063ea8cd199268e3c424bde96f16de6">
                          <Store store={store} />
                        </a>
                      </div>
                    );
                  })}
                </OwlCarousel>
              </div>
            </div>
          </Tab>
          {/*  <Tab eventKey="mostTrusted" title="Most trusted">
            <div className="product-wrap">
              <div className="container-fluid">
                <OwlCarousel
                  items={5}
                  className="owl-theme"
                  loop={false}
                  nav={false}
                  dots={true}
                  autoplay={false}
                  margin={8}
                  {...nav_options}
                >
                  {stores.map((store) => {
                    return (
                      <div>
                        <Store store={store} />
                      </div>
                    );
                  })}
                </OwlCarousel>
              </div>
            </div>
          </Tab>
          <Tab eventKey="shopMonth" title="Shop of the month">
            <div className="product-wrap">
              <div className="container-fluid">
                <OwlCarousel
                  items={5}
                  className="owl-theme"
                  loop={false}
                  nav={false}
                  dots={true}
                  autoplay={false}
                  margin={8}
                  {...nav_options}
                >
                  {stores.map((store) => {
                    return (
                      <div>
                        <Store store={store} />
                      </div>
                    );
                  })}
                </OwlCarousel>
              </div>
            </div>
          </Tab>*/}
        </Tabs>
        {/* nav tab ends */}
        {/* feature section starts */}
        <div className="feature-section mt-4">
          <h4 className="d-inline-block me-3 mb-0">
            SHOP AND <strong>SAVE BIG</strong> ON HOTTEST TABLETS
          </h4>
          <button
            className="btn btn-theme feature-btn"
            onClick={() =>
              (window.location.href =
                "/store?id=cc48ea4b7d16495cc47782dc369cb12a093ce3b152e7cfc8aa4cf63e2ecde673&img=/static/media/electrohub.0714ac986d439bca0cfb.png&title=ElectroHub")
            }
          >
            Start Buying
          </button>
        </div>{" "}
      </div>
      {/* Deals section starts */}
      <div className="limited-product mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="feature-text">
                <h5>Week Deals limited, Just now</h5>
                <h2>%</h2>
                <p>Hurry up! Offer ends in:</p>
                <div className="timer-wrap">
                  <span className="me-2">
                    6 <small>Hours</small>
                  </span>
                  <span className="me-2">
                    21 <small>Mins</small>
                  </span>
                  <span className="me-2">
                    43 <small>Secs</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9">
              <OwlCarousel
                items={4}
                className="owl-theme limited-slider product-wrap"
                loop={false}
                nav={false}
                dots={true}
                autoplay={false}
                margin={8}
                {...options}
              >
                {products.map((product) => {
                  return (
                    <div>
                      <Product product={product} />
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      {/* Deals section ends */}
      {/* newsletter starts */}
      <div className="mt-5 newsletter-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-3">
              <p className="mb-0">
                <i className="uil uil-envelope me-3"></i>Newsletter
              </p>
            </div>
            <div className="col-12 col-md-3">
              <p className="mb-0">...and unlock more B2E benefits!</p>
            </div>
            <div className="col-12 col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email address"
                  aria-label=""
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  Sign up
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* newsletter ends */}
      <div className="container">
        {/* shop starts */}

        {/* <div className="single-nav-wrap mt-5 justify-content-start">
          <ul>
            <li>
              <span className="active">Shop A</span>
              <div className="badges d-inline-block">
                <img src={badge1} alt="Badge" />
                <img src={badge2} alt="Badge" />
              </div>
            </li>
          </ul>
        </div>

        <div className="row mt-4">
          <div className="col-12 col-md-3">
            <div className="shop-bg shop-img1 mt-2">
              <h4>NEW SEASON SMARTPHONES</h4>
              <p className="mt-4 mb-0">LAST CALL FOR UP TO</p>
              <h2 className="mt-0">
                <strong>
                  <sup>₿</sup>250<sub>OFF</sub>
                </strong>
              </h2>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <OwlCarousel
              items={1}
              className="owl-theme product-wrap"
              loop={false}
              nav={false}
              dots={true}
              autoplay={false}
              margin={8}
            >
              {shopSpecificProducts.map((shpSpcProduct, index) => {
                return (
                  <div key={"shpSpc" + index}>
                    <div className="row">
                      {shpSpcProduct.map((product) => {
                        return (
                          <div className="col-12 col-md-4 col-lg-3">
                            <Product product={product} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </div>

        <div className="single-nav-wrap mt-5 justify-content-start">
          <ul>
            <li>
              <span className="active">Shop B</span>
              <div className="badges d-inline-block">
                <img src={badge1} alt="Badge" />
                <img src={badge2} alt="Badge" />
              </div>
            </li>
          </ul>
        </div>

        <div className="row mt-4">
          <div className="col-12 col-md-9">
            <OwlCarousel
              items={1}
              className="owl-theme product-wrap"
              loop={false}
              nav={false}
              dots={true}
              autoplay={false}
              margin={8}
            >
              {shopSpecificProducts.map((shpSpcProduct, index) => {
                return (
                  <div key={"shpSpc" + index}>
                    <div className="row">
                      {shpSpcProduct.map((product) => {
                        return (
                          <div className="col-12 col-md-4 col-lg-3">
                            <Product product={product} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
          <div className="col-12 col-md-3">
            <div className="shop-bg shop-img2">
              <h4>NEW SEASON SMARTPHONES</h4>
              <p className="mt-4 mb-0">LAST CALL FOR UP TO</p>
              <h2 className="mt-0">
                <strong>
                  <sup>₿</sup>250<sub>OFF</sub>
                </strong>
              </h2>
            </div>
          </div>
        </div> */}
        {/* shop ends */}
      </div>
      {/* top categories starts */}
      {/* <div className="limited-product mt-5">
        <div className="container">
          <div className="single-nav-wrap justify-content-start">
            <ul>
              <li>
                <span className="active">Top Categories this Week</span>
              </li>
            </ul>
          </div>
          <div className="row mt-4">
            {categories.map((category) => {
              return (
                <div className="col-12 col-md-3">
                  <TopCategory category={category} />
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
      {/* top categories ends */}
      <div className="container">
        {/* trusted shop starts */}
        {/* <div className="single-nav-wrap mt-5 justify-content-start">
          <ul>
            <li>
              <span className="active">Trusted Shop</span>
            </li>
          </ul>
        </div>

        <div className="row mt-4">
          {shops.map((shop) => {
            return (
              <div className="col-12 col-md-3">
                <TrustedShop shop={shop} />
              </div>
            );
          })}
        </div> */}
        {/* trusted shop ends */}

        {/* shop starts */}

        {/* <div className="single-nav-wrap mt-5 justify-content-start">
          <ul>
            <li>
              <span className="active">Shop A</span>
              <div className="badges d-inline-block">
                <img src={badge1} alt="Badge" />
                <img src={badge2} alt="Badge" />
              </div>
            </li>
          </ul>
        </div>

        <div className="row mt-4">
          <div className="col-12 col-md-3">
            <div className="shop-bg shop-img1 mt-2">
              <h4>NEW SEASON SMARTPHONES</h4>
              <p className="mt-4 mb-0">LAST CALL FOR UP TO</p>
              <h2 className="mt-0">
                <strong>
                  <sup>₿</sup>250<sub>OFF</sub>
                </strong>
              </h2>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <OwlCarousel
              items={1}
              className="owl-theme product-wrap"
              loop={false}
              nav={false}
              dots={true}
              autoplay={false}
              margin={8}
            >
              {shopSpecificProducts.map((shpSpcProduct, index) => {
                return (
                  <div key={"shpSpc" + index}>
                    <div className="row">
                      {shpSpcProduct.map((product) => {
                        return (
                          <div className="col-12 col-md-4 col-lg-3">
                            <Product product={product} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </div>

        <div className="single-nav-wrap mt-5 justify-content-start">
          <ul>
            <li>
              <span className="active">Shop B</span>
              <div className="badges d-inline-block">
                <img src={badge1} alt="Badge" />
                <img src={badge2} alt="Badge" />
              </div>
            </li>
          </ul>
        </div>

        <div className="row mt-4 mb-5">
          <div className="col-12 col-md-9">
            <OwlCarousel
              items={1}
              className="owl-theme product-wrap"
              loop={false}
              nav={false}
              dots={true}
              autoplay={false}
              margin={8}
            >
              {shopSpecificProducts.map((shpSpcProduct, index) => {
                return (
                  <div key={"shpSpc" + index}>
                    <div className="row">
                      {shpSpcProduct.map((product) => {
                        return (
                          <div className="col-12 col-md-4 col-lg-3">
                            <Product product={product} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
          <div className="col-12 col-md-3">
            <div className="shop-bg shop-img2">
              <h4>NEW SEASON SMARTPHONES</h4>
              <p className="mt-4 mb-0">LAST CALL FOR UP TO</p>
              <h2 className="mt-0">
                <strong>
                  <sup>₿</sup>250<sub>OFF</sub>
                </strong>
              </h2>
            </div>
          </div>
        </div> */}
        {/* shop ends */}
      </div>
    </div>
  );
}

export default Main;
