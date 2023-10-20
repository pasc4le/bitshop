import React from 'react';
import Badge1 from './images/Positive-Review-badge.png';
import Badge2 from './images/KYC-(merchant).png';
import Badge3 from './images/Number-of-orders.png';

import Badge4 from './images/Referrals-Reviews.png';
import Badge5 from './images/Sales-Volume-(Financial).png';
import Badge6 from './images/Shipment-Rating.png';
import Lock from './images/lock.png';
import Currency from './images/currency.png';

import BadgeOutline1 from './images/Positive-Review-badge1.png';
import BadgeOutline2 from './images/KYC-(merchant)1.png';
import BadgeOutline3 from './images/Number-of-orders1.png';
import BadgeOutline4 from './images/Referrals-Reviews1.png';

function BuildToEarn() {
  return (
    <div className="content pt-0">
        
        <div className="row flex-column-reverse flex-md-row mt-2">
            <div className="col-md-12">
                <div className="card">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div>
                            <div className="avatar-upload">
                                <div className="avatar-preview">
                                    <div id="imagePreview" className='bg-earn'>
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <h5 className="mb-0">John Doe</h5>
                                    <small className="text-muted mb-2">Sales Manager</small>
                                    <p className="text-grey mb-1"><i className="uil uil-envelope me-2"></i>johndoe@gmail.com</p>
                                    <p className="text-grey"><i className="uil uil-phone-alt me-2"></i>+91 9087654321</p>
                                    <div className="avatar-edit btn btn-primary">
                                        <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                                        <label for="imageUpload">Change Logo</label>
                                    </div>
                                <button className="btn btn-outline-danger btn-icon" data-bs-toggle="tooltip" title="" data-bs-original-title="Remove Avatar">
                                    <i className="bi bi-trash me-0"></i>
                                </button>
                                <p className="small text-muted mt-3">For best results, use an image at least
                                256px by 256px in either .jpg or .png format</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="mt-0">
                            <h6>My Earned Badges</h6>
                            <div className="badges-wrap mt-3">
                                <span className="me-2 mb-2 d-inline">
                                    <img src={Badge1} width="12%" alt="image"/>
                                </span>
                                <span className="me-2 mb-2 d-inline">
                                    <img src={Badge3} width="12%" alt="image"/>
                                </span>
                                <span className="me-2 mb-2 d-inline">
                                    <img src={Badge2} width="12%" alt="image"/>
                                </span>
                                <span className="me-2 mb-2 d-inline">
                                    <img src={Badge4} width="12%" alt="image"/>
                                </span>
                                <span className="me-2 mb-2 d-inline">
                                    <img src={Badge5} width="12%" alt="image"/>
                                </span>
                                <span className="me-2 mb-2 d-inline">
                                    <img src={Badge6} width="12%" alt="image"/>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="mt-3">
                            <h6>Shop Level</h6>
                            <div className="level-wrap mt-3">
                                <div className="">
                                    <div>
                                        <div class="ms-auto" id="customer-rating"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
            
            <div className="col-md-6 mt-2">
                <div className="card">
                    <div>
                        <h6 className="card-title mb-3">Mission</h6>
                        <div className="mission-wraper">
                            <div className="card d-flex flex-row align-items-center justify-content-start">
                                <img src={BadgeOutline2} width="12%" alt="image"/>
                                <div className="ms-5 row align-items-center">
                                    <div className="col-12 col-md-8">
                                        <h6 className="mb-0">Lorem ipsum</h6>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="d-inline-block">
                                            <img src={Currency} width="20%" alt="image"/>
                                            <span className="d-inline-block ms-2"><strong>20</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card d-flex flex-row align-items-center justify-content-start mt-2">
                                <img src={BadgeOutline3} width="12%" alt="image"/>
                                <div className="ms-5 row align-items-center">
                                    <div className="col-12 col-md-8">
                                        <h6 className="mb-0">Lorem ipsum</h6>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="d-inline-block">
                                            <img src={Currency} width="20%" alt="image"/>
                                            <span className="d-inline-block ms-2"><strong>20</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card d-flex flex-row align-items-center justify-content-start mt-2">
                                <img src={BadgeOutline1} width="12%" alt="image"/>
                                <div className="ms-5 row align-items-center">
                                    <div className="col-12 col-md-8">
                                        <h6 className="mb-0">Lorem ipsum</h6>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="d-inline-block">
                                            <img src={Currency} width="20%" alt="image"/>
                                            <span className="d-inline-block ms-2"><strong>20</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card d-flex flex-row align-items-center justify-content-start mt-2">
                                <img src={BadgeOutline4} width="12%" alt="image"/>
                                <div className="ms-5 row align-items-center">
                                    <div className="col-12 col-md-8">
                                        <h6 className="mb-0">Lorem ipsum</h6>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="d-inline-block">
                                            <img src={Currency} width="20%" alt="image"/>
                                            <span className="d-inline-block ms-2"><strong>20</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-md-6 mt-2">
                <div className="card">
                    <div>
                        <h6 className="card-title mb-3">Achievements</h6>
                        <div className="mission-wraper">
                            <div className="card d-flex flex-row align-items-center justify-content-start">
                                <div className="row w-100 align-items-center">
                                    <div className="col-12 col-md-7">
                                        <h6>Lorem ipsum</h6>
                                        <p className="text-muted mb-0">Lorem ipsum doller sit amet.</p>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card d-flex flex-row align-items-center justify-content-start mt-2">
                                <div className="row w-100 align-items-center">
                                    <div className="col-12 col-md-7">
                                        <h6>Lorem ipsum</h6>
                                        <p className="text-muted mb-0">Lorem ipsum doller sit amet.</p>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card d-flex flex-row align-items-center justify-content-start mt-2">
                                <div className="row w-100 align-items-center">
                                    <div className="col-12 col-md-7">
                                        <h6>Lorem ipsum</h6>
                                        <p className="text-muted mb-0">Lorem ipsum doller sit amet.</p>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-12 mt-2">
                <div className="card">
                    <h6 className="card-title mb-3">All Badges</h6>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="card d-flex flex-row align-items-center justify-content-start mt-2">
                                <img src={Badge3} width="45%" alt="image"/>
                                <div className="ms-3">
                                    <h6>Number of Orders</h6>
                                    <p className="text-muted mb-0">Lorem ipsum doller sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="card d-flex flex-row align-items-center justify-content-start mt-2">
                                <img src={Badge2} width="45%" alt="image"/>
                                <div className="ms-3">
                                    <h6>Trusted Shop</h6>
                                    <p className="text-muted mb-0">Lorem ipsum doller sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="card d-flex flex-row align-items-center justify-content-start mt-2">
                                <img src={Badge1} width="45%" alt="image"/>
                                <div className="ms-3">
                                    <h6>Positive Review</h6>
                                    <p className="text-muted mb-0">Lorem ipsum doller sit amet.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-3">
                            <div className="card d-flex flex-row align-items-center justify-content-start mt-2">
                                <img src={Badge4} width="45%" alt="image"/>
                                <div className="ms-3">
                                    <h6>Referrals Reviews</h6>
                                    <p className="text-muted mb-0">Lorem ipsum doller sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="card d-flex flex-row align-items-center justify-content-start mt-2">
                                <img src={Badge5} width="45%" alt="image"/>
                                <div className="ms-3">
                                    <h6>Sales Volume</h6>
                                    <p className="text-muted mb-0">Lorem ipsum doller sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="card d-flex flex-row align-items-center justify-content-start mt-2">
                                <img src={Badge6} width="45%" alt="image"/>
                                <div className="ms-3">
                                    <h6>Shipment Rating</h6>
                                    <p className="text-muted mb-0">Lorem ipsum doller sit amet.</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="col-12 col-md-3">
                            <div className="card d-flex flex-row align-items-center justify-content-start mt-2 lock-badge">
                                <img src={Lock} width="45%" alt="image"/>
                                <div className="ms-3">
                                    <h6>Lorem ipsum</h6>
                                    <p className="text-muted mb-0">Lorem ipsum doller sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="card d-flex flex-row align-items-center justify-content-start mt-2 lock-badge">
                                <img src={Lock} width="45%" alt="image"/>
                                <div className="ms-3">
                                    <h6>Lorem ipsum</h6>
                                    <p className="text-muted mb-0">Lorem ipsum doller sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="card d-flex flex-row align-items-center justify-content-start mt-2 lock-badge">
                                <img src={Lock} width="45%" alt="image"/>
                                <div className="ms-3">
                                    <h6>Lorem ipsum</h6>
                                    <p className="text-muted mb-0">Lorem ipsum doller sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="card d-flex flex-row align-items-center justify-content-start mt-2 lock-badge">
                                <img src={Lock} width="45%" alt="image"/>
                                <div className="ms-3">
                                    <h6>Lorem ipsum</h6>
                                    <p className="text-muted mb-0">Lorem ipsum doller sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default BuildToEarn;
