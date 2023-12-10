import React, { useEffect, useState } from "react";
import b1 from "./images/b1.png";
import b2 from "./images/b2.png";
import b3 from "./images/b3.png";
import p from "./images/details/p.png";
import slide1 from "./images/slide1.png";
// import p1 from './images/products/p1.png';
// import p2 from './images/products/p2.png';
// import p3 from './images/products/p3.png';
// import p4 from './images/products/p4.png';
// import p5 from './images/products/p5.png';
import product1 from "./images/p1.png";
import product2 from "./images/p2.png";
import product3 from "./images/p3.png";
import product4 from "./images/p4.png";
import product5 from "./images/p5.png";
import badge1 from "./images/badges/badge1.png";
import badge2 from "./images/badges/badge2.png";
import p10 from "./images/products/p10.png";
import p11 from "./images/products/p11.png";
import p12 from "./images/products/p12.png";
import p13 from "./images/products/p13.png";
import p14 from "./images/products/p14.png";
import s1 from "./images/shop/s1.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import './owl.css';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import Details from "./details";

const items = [
  {
    src: slide1,
    altText: "Slide 1",
    //   caption: 'Bitshop. The Marketplace for All',
    key: 1,
  },
  {
    src: p,
    altText: "Slide 2",
    //   caption: 'Bitshop. The Marketplace for All',
    key: 2,
  },
];

function Main(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // navtab
  const [key, setKey] = useState("partnersShop");

  // custom js
  useEffect(() => {
    // console.log('hi');
  }, []);

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
  // const shop_options  = {
  //     responsive: {
  //         0: {
  //             items: 1
  //         },
  //         600: {
  //             items: 1
  //         },
  //         768: {
  //             items: 1
  //         }
  //     }
  // };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6">
            <h1>Bitshop. The Independent Marketplace for All</h1>
            <p>
              <strong>Sell, Build, Earn</strong>
            </p>
            <p className="mb-1">
              <strong>FROM</strong>
            </p>
            <h5>
              <strong>3.173724 BTC</strong>
            </h5>
            <button className="btn btn-theme mt-3">Start Building</button>
          </div>
          <div className="col-12 col-md-6 slider-image">
            <img src={item.src} alt={item.altText} />
          </div>
        </div>
        {/* <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
            /> */}
      </CarouselItem>
    );
  });

  return (
    <div>
      <div className="container">
        {/* banner starts */}
        <div className="row mt-4 banner-wrap">
          <div className="col-12 col-md-8 col-lg-9">
            <div className="main-banner">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...args}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />

                {slides}

                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </Carousel>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <div className="banner-product">
              <span className="me-2">
                <img src={b1} alt="Product" />
              </span>
              <div className="banner-content">
                <p className="mb-0">
                  CATCH BIG <strong>DEALS</strong> ON THE CAMERAS
                </p>
                <a href="#">
                  <strong>
                    Shop now{" "}
                    <span className="bg-round bg-theme ms-2">
                      <i className="uil uil-angle-right"></i>
                    </span>
                  </strong>
                </a>
              </div>
            </div>

            <div className="banner-product">
              <span className="me-2">
                <img src={b2} alt="Product" />
              </span>
              <div className="banner-content">
                <p className="mb-0">
                  SHOP THE <strong>HOTTEST</strong> PRODUCTS
                </p>
                <a href="#">
                  <strong>
                    Shop now{" "}
                    <span className="bg-round bg-theme ms-2">
                      <i className="uil uil-angle-right"></i>
                    </span>
                  </strong>
                </a>
              </div>
            </div>

            <div className="banner-product">
              <span className="me-2">
                <img src={b3} alt="Product" />
              </span>
              <div className="banner-content">
                <p className="mb-0">
                  TABLETS, SMARTPHONES <strong>AND MORE</strong>
                </p>
                <a href="#" className="mt-1 d-flex align-items-center">
                  UP
                  <br />
                  TO<h6 className="d-inline-block ms-2">70% </h6>{" "}
                  <span className="bg-round bg-theme ms-2">
                    <i className="uil uil-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
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
              <div class="container-fluid">
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
                  <div>
                    <Link to={Details} className="p-box">
                      <span className="p-cat mb-0 d-block">Laptops</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product1} alt="Product" />
                      </div>
                      <p>
                        <strong>Mobile world</strong>
                      </p>
                      <div className="ratings">
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
                    </Link>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Computer Cases</span>
                      <div className="text-center">
                        <img src={product2} alt="Product" />
                      </div>
                      <p>
                        <strong>Spice Hotpot</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Printers</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product3} alt="Product" />
                      </div>
                      <p>
                        <strong>Novelty Telecom</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Cameras</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product4} alt="Product" />
                      </div>
                      <p>
                        <strong>A L B Telecom</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Smartphones</span>
                      <div className="text-center">
                        <img src={product5} alt="Product" />
                      </div>
                      <p>
                        <strong>TST Media</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  {/* clone  */}
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Laptops</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product1} alt="Product" />
                      </div>
                      <p>
                        <strong>Mobile world</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Computer Cases</span>
                      <div className="text-center">
                        <img src={product2} alt="Product" />
                      </div>
                      <p>
                        <strong>Spice Hotpot</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Printers</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product3} alt="Product" />
                      </div>
                      <p>
                        <strong>Novelty Telecom</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Cameras</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product4} alt="Product" />
                      </div>
                      <p>
                        <strong>A L B Telecom</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Smartphones</span>
                      <div className="text-center">
                        <img src={product5} alt="Product" />
                      </div>
                      <p>
                        <strong>TST Media</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  {/* clone  */}
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Laptops</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product1} alt="Product" />
                      </div>
                      <p>
                        <strong>Mobile world</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Computer Cases</span>
                      <div className="text-center">
                        <img src={product2} alt="Product" />
                      </div>
                      <p>
                        <strong>Spice Hotpot</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Printers</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product3} alt="Product" />
                      </div>
                      <p>
                        <strong>Novelty Telecom</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Cameras</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product4} alt="Product" />
                      </div>
                      <p>
                        <strong>A L B Telecom</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Smartphones</span>
                      <div className="text-center">
                        <img src={product5} alt="Product" />
                      </div>
                      <p>
                        <strong>TST Media</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </Tab>
          <Tab eventKey="mostTrusted" title="Most trusted">
            <div className="product-wrap">
              <div class="container-fluid">
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
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Laptops</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product1} alt="Product" />
                      </div>
                      <p>
                        <strong>Mobile world</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Computer Cases</span>
                      <div className="text-center">
                        <img src={product2} alt="Product" />
                      </div>
                      <p>
                        <strong>Spice Hotpot</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Printers</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product3} alt="Product" />
                      </div>
                      <p>
                        <strong>Novelty Telecom</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Cameras</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product4} alt="Product" />
                      </div>
                      <p>
                        <strong>A L B Telecom</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Smartphones</span>
                      <div className="text-center">
                        <img src={product5} alt="Product" />
                      </div>
                      <p>
                        <strong>TST Media</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  {/* clone  */}
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Laptops</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product1} alt="Product" />
                      </div>
                      <p>
                        <strong>Mobile world</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Computer Cases</span>
                      <div className="text-center">
                        <img src={product2} alt="Product" />
                      </div>
                      <p>
                        <strong>Spice Hotpot</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Printers</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product3} alt="Product" />
                      </div>
                      <p>
                        <strong>Novelty Telecom</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Cameras</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product4} alt="Product" />
                      </div>
                      <p>
                        <strong>A L B Telecom</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Smartphones</span>
                      <div className="text-center">
                        <img src={product5} alt="Product" />
                      </div>
                      <p>
                        <strong>TST Media</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  {/* clone  */}
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Laptops</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product1} alt="Product" />
                      </div>
                      <p>
                        <strong>Mobile world</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Computer Cases</span>
                      <div className="text-center">
                        <img src={product2} alt="Product" />
                      </div>
                      <p>
                        <strong>Spice Hotpot</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Printers</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product3} alt="Product" />
                      </div>
                      <p>
                        <strong>Novelty Telecom</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Cameras</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product4} alt="Product" />
                      </div>
                      <p>
                        <strong>A L B Telecom</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Smartphones</span>
                      <div className="text-center">
                        <img src={product5} alt="Product" />
                      </div>
                      <p>
                        <strong>TST Media</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </Tab>
          <Tab eventKey="shopMonth" title="Shop of the month">
            <div className="product-wrap">
              <div class="container-fluid">
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
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Laptops</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product1} alt="Product" />
                      </div>
                      <p>
                        <strong>Mobile world</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Computer Cases</span>
                      <div className="text-center">
                        <img src={product2} alt="Product" />
                      </div>
                      <p>
                        <strong>Spice Hotpot</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Printers</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product3} alt="Product" />
                      </div>
                      <p>
                        <strong>Novelty Telecom</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Cameras</span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={product4} alt="Product" />
                      </div>
                      <p>
                        <strong>A L B Telecom</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                  <div>
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">Smartphones</span>
                      <div className="text-center">
                        <img src={product5} alt="Product" />
                      </div>
                      <p>
                        <strong>TST Media</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </Tab>
        </Tabs>
        {/* nav tab ends */}

        {/* feature section starts */}
        <div className="feature-section mt-4">
          <h4 className="d-inline-block me-3 mb-0">
            SHOP AND <strong>SAVE BIG</strong> ON HOTTEST TABLETS
          </h4>
          <button className="btn btn-theme feature-btn">
            Start Buying
            <br />
            <span className="btn-text">
              <sup>₿</sup>74<sup>99</sup>
            </span>
          </button>
        </div>
        {/* feature section ends */}
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
                <div>
                  <a href="#" className="p-box">
                    <span className="p-cat mb-0 d-block">Headphone Cases</span>
                    <span className="featured d-block">Featured</span>
                    <div className="text-center">
                      <img src={p10} alt="Product" />
                    </div>
                    <p>
                      <strong>Universal Headphones Case in Black</strong>
                    </p>
                    <div className="ratings">
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
                  </a>
                </div>
                <div>
                  <a href="#" className="p-box">
                    <span className="p-cat mb-0 d-block">
                      Headphone Accessories
                    </span>
                    <div className="text-center">
                      <img src={p11} alt="Product" />
                    </div>
                    <p>
                      <strong>Headphones USB Wires</strong>
                    </p>
                    <div className="ratings">
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
                  </a>
                </div>
                <div>
                  <a href="#" className="p-box">
                    <span className="p-cat mb-0 d-block">Headphone Cases</span>
                    <span className="featured d-block">Featured</span>
                    <div className="text-center">
                      <img src={p12} alt="Product" />
                    </div>
                    <p>
                      <strong>Ultra Wireless S50 Headphones S50 with</strong>
                    </p>
                    <div className="ratings">
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
                  </a>
                </div>
                <div>
                  <a href="#" className="p-box">
                    <span className="p-cat mb-0 d-block">Headphone Cases</span>
                    <span className="featured d-block">Featured</span>
                    <div className="text-center">
                      <img src={p13} alt="Product" />
                    </div>
                    <p>
                      <strong>Wireless Audio System Multiroom 360</strong>
                    </p>
                    <div className="ratings">
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
                  </a>
                </div>

                {/* clone     */}
                <div>
                  <a href="#" className="p-box">
                    <span className="p-cat mb-0 d-block">Headphone Cases</span>
                    <span className="featured d-block">Featured</span>
                    <div className="text-center">
                      <img src={p10} alt="Product" />
                    </div>
                    <p>
                      <strong>Universal Headphones Case in Black</strong>
                    </p>
                    <div className="ratings">
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
                  </a>
                </div>
                <div>
                  <a href="#" className="p-box">
                    <span className="p-cat mb-0 d-block">
                      Headphone Accessories
                    </span>
                    <div className="text-center">
                      <img src={p11} alt="Product" />
                    </div>
                    <p>
                      <strong>Headphones USB Wires</strong>
                    </p>
                    <div className="ratings">
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
                  </a>
                </div>
                <div>
                  <a href="#" className="p-box">
                    <span className="p-cat mb-0 d-block">Headphone Cases</span>
                    <span className="featured d-block">Featured</span>
                    <div className="text-center">
                      <img src={p12} alt="Product" />
                    </div>
                    <p>
                      <strong>Ultra Wireless S50 Headphones S50 with</strong>
                    </p>
                    <div className="ratings">
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
                  </a>
                </div>
                <div>
                  <a href="#" className="p-box">
                    <span className="p-cat mb-0 d-block">Headphone Cases</span>
                    <span className="featured d-block">Featured</span>
                    <div className="text-center">
                      <img src={p13} alt="Product" />
                    </div>
                    <p>
                      <strong>Wireless Audio System Multiroom 360</strong>
                    </p>
                    <div className="ratings">
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
                  </a>
                </div>
              </OwlCarousel>
              {/* <div className='product-wrap'>
                    <div className='row'>
                        <div className='col-12 col-md-3'>
                            <a href='#' className='p-box'>
                                <span className='p-cat mb-0 d-block'>Headphone Cases</span>
                                <span className='featured d-block'>Featured</span>
                                <div className='text-center'>
                                    <img src={p10} alt="Product" />
                                </div>                            
                                <p><strong>Universal Headphones Case in Black</strong></p>
                                <div className='ratings'>
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                </div>
                            </a>
                        </div>

                        <div className='col-12 col-md-3'>
                            <a href='#' className='p-box'>
                                <span className='p-cat mb-0 d-block'>Headphone Accessories</span>
                                <div className='text-center'>
                                    <img src={p11} alt="Product" />
                                </div>                            
                                <p><strong>Headphones USB Wires</strong></p>
                                <div className='ratings'>
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                </div>
                            </a>
                        </div>

                        <div className='col-12 col-md-3'>
                            <a href='#' className='p-box'>
                                <span className='p-cat mb-0 d-block'>Headphone Cases</span>
                                <span className='featured d-block'>Featured</span>
                                <div className='text-center'>
                                    <img src={p12} alt="Product" />
                                </div>                            
                                <p><strong>Ultra Wireless S50 Headphones S50 with</strong></p>
                                <div className='ratings'>
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                </div>
                            </a>
                        </div>

                        <div className='col-12 col-md-3'>
                            <a href='#' className='p-box'>
                                <span className='p-cat mb-0 d-block'>Headphone Cases</span>
                                <span className='featured d-block'>Featured</span>
                                <div className='text-center'>
                                    <img src={p13} alt="Product" />
                                </div>                            
                                <p><strong>Wireless Audio System Multiroom 360</strong></p>
                                <div className='ratings'>
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>                 */}
            </div>
            {/* <div className='col-12'>
                <div className="carousel-indicators static-dots"><button data-bs-target="true" type="button" className="active"></button><button data-bs-target="true" type="button" className=""></button><button data-bs-target="true" type="button" className=""></button></div>
                </div> */}
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

        <div className="single-nav-wrap mt-5 justify-content-start">
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
              <div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p10} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p13} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>
              </div>

              {/* clone */}
              <div>
                <div className="row">
                  <div className="col-12 col-md-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p10} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p13} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>
              </div>

              {/* clone */}
              <div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p10} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p13} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>
              </div>
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
              <div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p10} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p13} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>
              </div>

              {/* clone */}
              <div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p10} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p13} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>
              </div>

              {/* clone */}
              <div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p10} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p13} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>
              </div>
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
        </div>
        {/* shop ends */}
      </div>

      {/* top categories starts */}
      <div className="limited-product mt-5">
        <div className="container">
          <div className="single-nav-wrap justify-content-start">
            <ul>
              <li>
                <span className="active">Top Categories this Week</span>
              </li>
            </ul>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-md-3">
              <div className="shop-box bg-white">
                <span className="d-inline-block me-3">
                  <img src={s1} alt="Shop" />
                </span>
                <div className="shop-details">
                  <h6>Smart Mob Solution</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="shop-box bg-white">
                <span className="d-inline-block me-3">
                  <img src={s1} alt="Shop" />
                </span>
                <div className="shop-details">
                  <h6>Smart Mob Solution</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="shop-box bg-white">
                <span className="d-inline-block me-3">
                  <img src={s1} alt="Shop" />
                </span>
                <div className="shop-details">
                  <h6>Smart Mob Solution</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="shop-box bg-white">
                <span className="d-inline-block me-3">
                  <img src={s1} alt="Shop" />
                </span>
                <div className="shop-details">
                  <h6>Smart Mob Solution</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="shop-box bg-white">
                <span className="d-inline-block me-3">
                  <img src={s1} alt="Shop" />
                </span>
                <div className="shop-details">
                  <h6>Smart Mob Solution</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="shop-box bg-white">
                <span className="d-inline-block me-3">
                  <img src={s1} alt="Shop" />
                </span>
                <div className="shop-details">
                  <h6>Smart Mob Solution</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="shop-box bg-white">
                <span className="d-inline-block me-3">
                  <img src={s1} alt="Shop" />
                </span>
                <div className="shop-details">
                  <h6>Smart Mob Solution</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="shop-box bg-white">
                <span className="d-inline-block me-3">
                  <img src={s1} alt="Shop" />
                </span>
                <div className="shop-details">
                  <h6>Smart Mob Solution</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* top categories ends */}

      <div className="container">
        {/* trusted shop starts */}
        <div className="single-nav-wrap mt-5 justify-content-start">
          <ul>
            <li>
              <span className="active">Trusted Shop</span>
            </li>
          </ul>
        </div>

        <div className="row mt-4">
          <div className="col-12 col-md-3">
            <div className="shop-box">
              <span className="d-inline-block me-3">
                <img src={s1} alt="Shop" />
              </span>
              <div className="shop-details">
                <h6>Smart Mob Solution</h6>
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
                <span>(112 ratings)</span>
                <span>
                  <img src={badge1} alt="Products" />
                  <img src={badge2} alt="Products" />
                  <img src={badge1} alt="Products" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shop-box">
              <span className="d-inline-block me-3">
                <img src={s1} alt="Shop" />
              </span>
              <div className="shop-details">
                <h6>Smart Mob Solution</h6>
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
                <span>(112 ratings)</span>
                <span>
                  <img src={badge1} alt="Products" />
                  <img src={badge2} alt="Products" />
                  <img src={badge1} alt="Products" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shop-box">
              <span className="d-inline-block me-3">
                <img src={s1} alt="Shop" />
              </span>
              <div className="shop-details">
                <h6>Smart Mob Solution</h6>
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
                <span>(112 ratings)</span>
                <span>
                  <img src={badge1} alt="Products" />
                  <img src={badge2} alt="Products" />
                  <img src={badge1} alt="Products" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shop-box">
              <span className="d-inline-block me-3">
                <img src={s1} alt="Shop" />
              </span>
              <div className="shop-details">
                <h6>Smart Mob Solution</h6>
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
                <span>(112 ratings)</span>
                <span>
                  <img src={badge1} alt="Products" />
                  <img src={badge2} alt="Products" />
                  <img src={badge1} alt="Products" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shop-box">
              <span className="d-inline-block me-3">
                <img src={s1} alt="Shop" />
              </span>
              <div className="shop-details">
                <h6>Smart Mob Solution</h6>
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
                <span>(112 ratings)</span>
                <span>
                  <img src={badge1} alt="Products" />
                  <img src={badge2} alt="Products" />
                  <img src={badge1} alt="Products" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shop-box">
              <span className="d-inline-block me-3">
                <img src={s1} alt="Shop" />
              </span>
              <div className="shop-details">
                <h6>Smart Mob Solution</h6>
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
                <span>(112 ratings)</span>
                <span>
                  <img src={badge1} alt="Products" />
                  <img src={badge2} alt="Products" />
                  <img src={badge1} alt="Products" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shop-box">
              <span className="d-inline-block me-3">
                <img src={s1} alt="Shop" />
              </span>
              <div className="shop-details">
                <h6>Smart Mob Solution</h6>
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
                <span>(112 ratings)</span>
                <span>
                  <img src={badge1} alt="Products" />
                  <img src={badge2} alt="Products" />
                  <img src={badge1} alt="Products" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shop-box">
              <span className="d-inline-block me-3">
                <img src={s1} alt="Shop" />
              </span>
              <div className="shop-details">
                <h6>Smart Mob Solution</h6>
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
                <span>(112 ratings)</span>
                <span>
                  <img src={badge1} alt="Products" />
                  <img src={badge2} alt="Products" />
                  <img src={badge1} alt="Products" />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* trusted shop ends */}

        {/* shop starts */}

        <div className="single-nav-wrap mt-5 justify-content-start">
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
              <div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p10} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p13} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>
              </div>

              {/* clone */}
              <div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p10} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p13} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>
              </div>

              {/* clone */}
              <div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p10} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p13} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>
              </div>
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
              <div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p10} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p13} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>
              </div>

              {/* clone */}
              <div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p10} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p13} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>
              </div>

              {/* clone */}
              <div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p10} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p11} alt="Product" />
                      </div>
                      <p>
                        <strong>Universal Headphones Case in Black</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Accessories
                      </span>
                      <div className="text-center">
                        <img src={p13} alt="Product" />
                      </div>
                      <p>
                        <strong>Headphones USB Wires</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p14} alt="Product" />
                      </div>
                      <p>
                        <strong>Ultra Wireless S50 Headphones S50 with</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <a href="#" className="p-box">
                      <span className="p-cat mb-0 d-block">
                        Headphone Cases
                      </span>
                      <span className="featured d-block">Featured</span>
                      <div className="text-center">
                        <img src={p12} alt="Product" />
                      </div>
                      <p>
                        <strong>Wireless Audio System Multiroom 360</strong>
                      </p>
                      <div className="ratings">
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
                    </a>
                  </div>
                </div>
              </div>
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
        </div>
        {/* shop ends */}
      </div>
    </div>
  );
}

export default Main;
