import React, { Component } from "react";
import logo from "../images/footer-logo.png";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                {/* <a href="index.php">
                  <img src={logo} alt="Logo" width="20%" />
                </a> */}
                <div>
                  <p className="text-white">
                    <strong>
                      <i className="uil uil-envelope-alt me-2"></i> Email:
                    </strong>{" "}
                    hello@bitshop.org
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h6>© Bitshop. 2023. All right reserved</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
