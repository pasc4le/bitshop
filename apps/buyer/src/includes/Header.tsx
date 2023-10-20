import React, { useState } from "react";
//@ts-ignore
import logo from "../images/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BitshopCart } from "../lib/nip15";

function Header() {
  const cart = JSON.parse(
    window.localStorage.getItem("bitshop-cart") || "{}"
  ) as BitshopCart;
  if (!cart.products) cart.products = [];
  const len = cart.products.length;
  const [cartLen, setCartLen] = useState(len);

  window.addEventListener("storage", () => {
    const cart = JSON.parse(
      window.localStorage.getItem("bitshop-cart") || "{}"
    ) as BitshopCart;
    if (!cart.products) cart.products = [];
    const len = cart.products.length;
    console.log("Cart len is", len);

    setCartLen(len);
  });

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Logo" width="100%" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  align-items-center">
                <li className="nav-item">
                  <a className="nav-link" href="/products">
                    <i className="uil uil-bars"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <span className="nav-link">
                    <div className="input-group search-bar">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search product or merchant"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <span className="input-group-text" id="basic-addon2">
                        <i className="uil uil-search"></i>
                      </span>
                    </div>
                  </span>
                </li>

                <li className="nav-item cart-icon-wrap">
                  <a className="nav-link" href="/cart">
                    <i className="uil uil-shopping-bag"></i>
                  </a>
                  <span className="cart-count">{cartLen}</span>
                </li>

                <li className="nav-item dropdown">
                  <a href="javascript:void(0)" className="nav-link user-icon">
                    <i className="uil uil-user"></i>
                  </a>
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title=""
                    menuVariant="dark"
                  >
                    <NavDropdown.Item href="/orders">
                      <i className="uil uil-box me-2"></i>My Order
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/login">
                      <i className="uil uil-sign-out-alt me-2"></i>Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* mobile side menu */}
      <div id="sidebar">
        <div className="mob-logo">
          <a href="/products">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <ul>
          <li>
            <a href="/products">
              Home <i className="uil uil-angle-down ms-2"></i>
            </a>
          </li>
          <li>
            <a href="#">
              TV & Audio <i className="uil uil-angle-down ms-2"></i>
            </a>
          </li>
          <li>
            <a href="#">
              Smart Phones <i className="uil uil-angle-down ms-2"></i>
            </a>
          </li>
          <li>
            <a href="#">
              Laptops & Desktops <i className="uil uil-angle-down ms-2"></i>
            </a>
          </li>
          <li>
            <a href="#">
              Gadgets <i className="uil uil-angle-down ms-2"></i>
            </a>
          </li>
          <li>
            <a href="#">
              GPS & Car <i className="uil uil-angle-down ms-2"></i>
            </a>
          </li>
          <li>
            <a href="#">
              Cameras & Accessories <i className="uil uil-angle-down ms-2"></i>
            </a>
          </li>
          <li>
            <a href="#">
              Movies & Games <i className="uil uil-angle-down ms-2"></i>
            </a>
          </li>
        </ul>

        <div id="sidebar-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Header;
