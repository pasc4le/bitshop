import React, { Component } from 'react';

function Menu() {
  return (
    <div className='menu-wrap'>
      <nav className="navbar navbar-expand-lg">
          <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  align-items-center">
                <li className="nav-item">
                    <a className="nav-link" href="">Home <i className="uil uil-angle-down"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">TV & Audio <i className="uil uil-angle-down"></i></a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="#">Smart Phones<i className="uil uil-angle-down"></i></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Laptops & Desktops<i className="uil uil-angle-down"></i></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Gadgets<i className="uil uil-angle-down"></i></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">GPS & Car<i className="uil uil-angle-down"></i></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Cameras & Accessories<i className="uil uil-angle-down"></i></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Movies & Games<i className="uil uil-angle-down"></i></a>
                </li>
              </ul>
          </div>
          </div>
      </nav>
    </div>
    
  );
}

export default Menu;
