import React from 'react';
import Logo from '../images/logo.png';

function Menu() {
  return (
    <div>
          <div className="menu">
              <div className="menu-header">
                  <a href="/" className="menu-header-logo">
                      <img src={Logo} alt="logo" />
                  </a>
                  <a href="/" className="btn btn-sm menu-close-btn">
                    <i class="uil uil-times-circle"></i>
                  </a>
              </div>
              <div className="menu-body">
                  <ul>
                      <li>
                          <a className="active" href="/">
                              <span className="nav-link-icon">
                              <i class="uil uil-panel-add"></i>
                              </span>
                              <span>Dashboard</span>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <span className="nav-link-icon">
                                <i class="uil uil-receipt-alt"></i>
                              </span>
                              <span>Orders</span>
                          </a>
                          <ul>
                                <li>
                                    <a href="/active-orders">Active Orders</a>
                                </li>
                                <li>
                                    <a href="/orders">Order History</a>
                                </li>
                          </ul>
                      </li>
                <li>
                  <a href="#">
                      <span className="nav-link-icon">
                        <i class="uil uil-truck"></i>
                      </span>
                      <span>Products</span>
                  </a>
                  <ul>
                      <li>
                          <a href="/category">
                              Collection</a>
                      </li>
                      <li>
                          <a href="/inventory">
                              Inventory</a>
                      </li>
                      <li>
                          <a href="/gift-cards">Gift Cards</a>
                      </li>
                  </ul>
              </li>
              <li>
                  <a href="#">
                      <span className="nav-link-icon">
                        <i class="uil uil-users-alt"></i>
                      </span>
                      <span>Customer</span>
                  </a>
                  <ul>
                      <li>
                          <a href="/customers">
                              Customer</a>
                      </li>
                      <li>
                          <a href="/chat">
                              Chat</a>
                      </li>
                  </ul>
              </li>

              <li>
                  <a href="#">
                      <span className="nav-link-icon">
                        <i class="uil uil-chart-line"></i>
                      </span>
                      <span>Analytics</span>
                  </a>
                  <ul>
                      <li>
                          <a href="/analytics">Analytics</a>
                  </li>
              <li>
                  <a href="/report">Reports</a>
              </li>
          </ul>
      </li>
      <li>
              <a href="/build-to-earn">
                  <span className="nav-link-icon">
                    <i class="uil uil-wallet"></i>
                  </span>
                  <span>Build to Earn (B2E)</span>
              </a>
          </li><li>
              <a href="/discount">
                  <span className="nav-link-icon">
                    <i class="uil uil-percentage"></i>
                  </span>
                  <span>Discount</span>
              </a>
          </li><li>
              <a href="/online-store" target="_blank">
                  <span className="nav-link-icon">
                      <i className="uil uil-store"></i>
                  </span>
                  <span>Online Store <i className="uil uil-eye ms-4"></i></span>
              </a>
          </li><li className="last-menu">
              <a href="/settings">
                  <span className="nav-link-icon">
                    <i class="uil uil-setting"></i>
                  </span>
                  <span>Settings</span>
              </a>
          </li>
                        
                    </ul>
                </div>
            </div>
            
            <div className="modal fade" id="addProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        <div className="add-product-type">
                            <a href="/existing-product" className="d-flex align-items-top">
                                <span><i className="uil uil-search-alt"></i></span>
                                <div>
                                    <h5>Search and add an existing product</h5>
                                    <h6>The product that you want to add may already exist,search by it's name or code, and add it to your catalog.</h6>
                                </div>
                            </a>
                            
                            <a href="/bulk-upload" className="d-flex align-items-top">
                                <span><i className="uil uil-plus-circle"></i></span>
                                <div>
                                    <h5>Create new product in bulk</h5>
                                    <h6>You can create products in bulk in one go.</h6>
                                </div>
                            </a>
                            
                            <a href="/fresh-product" className="d-flex align-items-top">
                                <span><i className="uil uil-plus-circle"></i></span>
                                <div>
                                    <h5>Create a new product</h5>
                                    <h6>If you can't find a product in our entire catalogue, you may create it a fresh</h6>
                                </div>
                            </a>
                        </div>
                </div>
                </div>
            </div>
            </div>
    </div>
    
  );
}

export default Menu;
