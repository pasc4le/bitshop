import React from 'react';
import Logo from '../images/logo.png';
import Product3 from '../images/3.jpg';
import Product5 from '../images/5.jpg';
import Product6 from '../images/6.jpg';
import ManAvatar3 from '../images/man_avatar3.jpg';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
      <div class="header">
            <div class="menu-toggle-btn">
                <a href="#">
                    <i class="bi bi-list"></i>
                </a>
            </div>

            <a href="/" class="logo">
                <img width="100" src={Logo} alt="logo"/>
            </a>

            <div class="page-title">Dashboard</div>
            <form class="search-form">
                <div class="input-group">
                    <button class="btn btn-outline-light" type="button" id="button-addon1">
                        <i class="uil uil-search"></i>
                    </button>
                    <input type="text" class="form-control" placeholder="Search..." 
                    aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    <a href="#" class="btn btn-outline-light close-header-search-bar">
                        <i class="uil uil-times"></i>
                    </a>
                </div>
            </form>
            <div class="header-bar ms-auto">
                <ul class="navbar-nav justify-content-end">
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link nav-link-notify" data-count="3" data-bs-toggle="dropdown">
                            <i class="uil uil-bell"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
                            <h6 class="m-0 px-4 py-3 border-bottom">Notifications</h6>
                            <div class="dropdown-menu-body">
                                <div class="list-group list-group-flush">
                                    <div class="list-group-item d-flex align-items-center">
                                        <a href="#" class="me-3 flex-shrink-0 ">
                                            <img src={Product3} class="rounded" width="60" alt="..."/>
                                        </a>
                                        <a href="#" class="text-danger me-3" title="Remove">
                                            <i class="uil uil-trash-alt"></i>
                                        </a>
                                        <div>
                                            <h6>Digital clock</h6>
                                            <div>1 x $1.190,90</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-group list-group-flush">
                                    <div class="list-group-item d-flex align-items-center">
                                        <a href="#" class="me-3 flex-shrink-0 ">
                                            <img src={Product5} class="rounded" width="60" alt="..."/>
                                        </a>
                                        <a href="#" class="text-danger me-3" title="Remove">
                                            <i class="uil uil-trash-alt"></i>
                                        </a>
                                        <div>
                                            <h6>Sunglasses</h6>
                                            <div>2 x $50,90</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-group list-group-flush">
                                    <div class="list-group-item d-flex align-items-center">
                                        <a href="#" class="me-3 flex-shrink-0 ">
                                            <img src={Product6} class="rounded" width="60" alt="..."/>
                                        </a>
                                        <a href="#" class="text-danger me-3" title="Remove">
                                            <i class="uil uil-trash-alt"></i>
                                        </a>
                                        <div>
                                            <h6>Cake</h6>
                                            <div>1 x $10,50</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    <li class="nav-item ms-3"> 
                        <div class="dropdown">
                            <a href="#" class="d-flex align-items-center" data-bs-toggle="dropdown">
                                <div class="avatar me-3">
                                    <img src={ManAvatar3} class="rounded-circle" alt="image"/>
                                </div>
                                <div>
                                    <div class="fw-bold">John Doe</div>
                                    <small class="text-muted">Sales Manager</small>
                                </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a href="/login" class="dropdown-item d-flex align-items-center text-danger" target="_blank">
                                <i class="uil uil-sign-out-alt dropdown-item-icon"></i> Logout
                            </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="header-mobile-buttons">
                <a href="#" class="search-bar-btn">
            <i class="bi bi-search"></i>
        </a>
                <a href="#" class="actions-btn">
            <i class="bi bi-three-dots"></i>
        </a>
            </div>

        </div>
    </div>
    
  );
}

export default Header;
