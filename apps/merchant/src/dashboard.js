import React from 'react';
import Company1 from './images/company1.jpg';
import Badge1 from './images/Positive-Review-badge.png';
import Badge2 from './images/KYC-(merchant).png';
import Badge3 from './images/Number-of-orders.png';
import Badge4 from './images/Referrals-Reviews.png';
import Badge5 from './images/Sales-Volume-(Financial).png';
import Badge6 from './images/Shipment-Rating.png';

function Dashboard() {
  return (
    <div>
        <div className="content mt-3">
            <div className="row mb-3 activation-wrap">
                <div className="col-12 col-md-4">
                    <div className="card text-center align-items-center">
                        <span className="avatar badge rounded-circle bg-primary d-flex align-items-center justify-content-center"><i className="uil uil-lightbulb-alt" ></i></span>
                        <h5 className="mt-2">Onboarding Initiated</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card text-center align-items-center">
                        <span className="avatar badge rounded-circle bg-primary d-flex align-items-center justify-content-center"><i className="uil uil-lock-open-alt"></i></span>
                        <h5 className="mt-2">Account Activation</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <a href="/settings" className="btn btn-primary mt-2">Submit Details</a>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card text-center align-items-center">
                        <span className="avatar badge rounded-circle bg-primary d-flex align-items-center justify-content-center"><i className="uil uil-setting"></i></span>
                        <h5 className="mt-2">Setup Guide</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <a href="/setup" className="">Show Guide</a>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <div className="card h-100">
                        <div>
                            <h4 className="mb-2">Welcome! John</h4>
                            <span className="d-inline-flex align-items-center">
                                <div className="avatar me-3">
                                    <img src={Company1} className="rounded-circle" alt="image" />
                                </div>
                                <div>
                                    <div className="fw-bold">Arobit Business</div>
                                    <div className="rating">
                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-star-half-o" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-star-o" aria-hidden="true"></i></span>
                                        <span className='rating-count'>(2405 Ratings)</span>
                                    </div>
                                </div>
                            </span>
                            <div className="mt-2">
                                <h6>My Badges</h6>
                                <span className="me-2">
                                    <img src={Badge1} width='15%' alt="image"/>
                                </span>
                                <span className="me-2">
                                    <img src={Badge2} width='15%' alt="image" />
                                </span>
                                <span className="me-2">
                                    <img src={Badge3} width='15%' alt="image" />
                                </span> 
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#earnBadge">Earn</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-8 col-md-8">
                    <div className="card widget">
                        <div className="card-header">
                            <h5 className="card-title">Statistics</h5>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <div className="card border-0">
                                    <div className="text-center">
                                        <div className="display-7">
                                            {/* <i className="bi bi-bar-chart text-info"></i> */}
                                            <i className="uil uil-chart-growth text-info"></i>
                                        </div>
                                        <h6 className="my-2">Sales</h6>
                                        <div className="text-orange">230k</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card border-0">
                                    <div className=" text-center">
                                        <div className="display-7">
                                            <i className="uil uil-users-alt text-success"></i>
                                        </div>
                                        <h6 className="my-2">Customers</h6>
                                        <div className="text-orange">8.549k</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card border-0">
                                    <div className=" text-center">
                                        <div className="display-7">
                                            <i className="uil uil-laptop text-primary"></i>
                                        </div>
                                        <h6 className="my-2">Products</h6>
                                        <div className="text-orange">1.423k</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card border-0">
                                    <div className=" text-center">
                                        <div className="display-7">
                                            {/* <i className="bi bi-cursor text-secondary"></i> */}
                                            <i className="uil uil-location-arrow text-secondary"></i>
                                        </div>
                                        <h6 className="my-2">Revenue</h6>
                                        <div className="text-orange">$9745</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="sticky-wrap">
                <h5>Product setup pending</h5>
                <p>You are yet to set up your product catalogue. <a href="/settings">Click here to setup your first product</a></p>
                <button className="btn btn-primary">Got it</button>
            </div>
            
            <div className="sticky-wrap sticky2">
                <h5>No order's yet</h5>
                <p>You are yet to receive order
                <a href="/settings">Sponsor your products to increase product views</a></p>
                <button className="btn btn-primary">Got it</button>
            </div>

        </div>

        <div className="modal fade" id="earnBadge" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Badges</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="text-center">
                            <span className="avatar me-4"><img src={Badge1} className="" alt="image"/></span>
                            <span className="avatar me-4"><img src={Badge2} className="" alt="image"/></span>
                            <span className="avatar me-4"><img src={Badge3} className="" alt="image"/></span>
                            <span className="avatar me-4"><img src={Badge4} className="" alt="image"/></span>
                            <span className="avatar me-4"><img src={Badge5} className="" alt="image"/></span>
                            <span className="avatar me-4"><img src={Badge6} className="" alt="image"/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default Dashboard;
