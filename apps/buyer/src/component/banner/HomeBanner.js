import React, { useState } from "react";

import slide1 from "../../images/slide1.png";
import p from "../../images/details/p.png";
import b1 from "../../images/b1.png";
import b2 from "../../images/b2.png";
import b3 from "../../images/b3.png";

// import OwlCarousel from 'react-owl-carousel';
import "../../assets/owl.carousel/owl.carousel.css";
import "../../assets/owl.carousel/owl.theme.default.css";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

function HomeBanner(args) {
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
              <strong>0.00173724 BTC</strong>
            </h5>
            <button
              className="btn btn-theme mt-3 mb-4"
              onClick={() =>
                (window.location.href =
                  "/store?id=cc48ea4b7d16495cc47782dc369cb12a093ce3b152e7cfc8aa4cf63e2ecde673&img=/static/media/electrohub.0714ac986d439bca0cfb.png&title=ElectroHub")
              }
            >
              Start Shopping
            </button>
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
            <a href="/store?id=cc48ea4b7d16495cc47782dc369cb12a093ce3b152e7cfc8aa4cf63e2ecde673&img=/static/media/electrohub.0714ac986d439bca0cfb.png&title=ElectroHub">
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
            <a href="/store?id=cc48ea4b7d16495cc47782dc369cb12a093ce3b152e7cfc8aa4cf63e2ecde673&img=/static/media/electrohub.0714ac986d439bca0cfb.png&title=ElectroHub">
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
            <a
              href="/store?id=cc48ea4b7d16495cc47782dc369cb12a093ce3b152e7cfc8aa4cf63e2ecde673&img=/static/media/electrohub.0714ac986d439bca0cfb.png&title=ElectroHub"
              className="mt-1 d-flex align-items-center"
            >
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
  );
}

export default HomeBanner;
