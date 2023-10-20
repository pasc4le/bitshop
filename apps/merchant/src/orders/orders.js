import React from 'react';
import Product3 from '../images/products/3.jpg';
import Product5 from '../images/products/5.jpg';
import Product4 from '../images/products/4.png';
import Product7 from '../images/products/7.png';
import Product8 from '../images/products/8.png';
import Product9 from '../images/products/9.png';

function Orders() {
  return (
    <div className="content">
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-0">
            <div className="col-lg-6 col-md-6 mt-0">
                <div className="card widget h-100">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="card-title mb-0">
                                Popular Products
                            </h5>
                            <p className="text-muted mb-0">Total 10.4k Visitors</p> 
                        </div>
                        <div className="dropdown ms-auto">
                            <a href="#" data-bs-toggle="dropdown" className="btn btn-sm btn-floating" aria-haspopup="true" aria-expanded="false">
                                <i class="uil uil-ellipsis-h"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">Refresh</a>
                                <a href="#" className="dropdown-item">Download</a>
                                <a href="#" className="dropdown-item">View All</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="list-group list-group-flush">
                            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <span className="avatar me-3"><img src={Product8} className="rounded" alt="image"/></span>
                                    <div>
                                        <span>Mac Book Pro</span>
                                        <p className="text-muted mb-0">Item: #FXZ-3456</p>
                                    </div>
                                </div>
                                <h6>$1172.40</h6>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <span className="avatar me-3"><img src={Product7} className="rounded" alt="image"/></span>
                                    <div>
                                        <span>Apple iPhone 13</span>
                                        <p className="text-muted mb-0">Item: #FXZ-4567</p>
                                    </div>
                                </div>
                                <h6>$999.29</h6>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <span className="avatar me-3"><img src={Product9} className="rounded" alt="image"/></span>
                                    <div>
                                        <span>Beats Studio 2</span>
                                        <p className="text-muted mb-0">Item: #FXZ-4567</p>
                                    </div>
                                </div>
                                <span>$112.34</span>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <span className="avatar me-3"><img src={Product3} className="rounded" alt="image"/></span>
                                    <div>
                                        <span>Apple Watch</span>
                                        <p className="text-muted mb-0">Item: #FXZ-4567</p>
                                    </div>
                                </div>
                                <span>$99.09</span>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <span className="avatar me-3"><img src={Product5} className="rounded" alt="image"/></span>
                                    <div>
                                        <span>Rayban Sunglass</span>
                                        <p className="text-muted mb-0">Item: #FXZ-4567</p>
                                    </div>
                                </div>
                                <span>$84.32</span>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <span className="avatar me-3"><img src={Product4} className="rounded" alt="image"/></span>
                                    <div>
                                        <span>Apple Airpod</span>
                                        <p className="text-muted mb-0">Item: #FXZ-4567</p>
                                    </div>
                                </div>
                                <span>$145.80</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-6 col-md-6 mt-0">
                <div className="card widget h-100">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="card-title mb-0">
                                Sales by Orders
                            </h5>
                            <p className="text-muted mb-0">62 Deliveries in Progress</p>
                        </div>
                        <div className="dropdown ms-auto">
                            <a href="#" data-bs-toggle="dropdown" className="btn btn-sm btn-floating" aria-haspopup="true" aria-expanded="false">
                                <i class="uil uil-ellipsis-h"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">Refresh</a>
                                <a href="#" className="dropdown-item">Download</a>
                                <a href="#" className="dropdown-item">View All</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-body">
                        <div className=""> 
                            <div className="nav" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-new-tab" data-bs-toggle="pill" href="#v-pills-new" role="tab" aria-controls="v-pills-new" aria-selected="true">New</a>
                            <a className="nav-link" id="v-pills-preparing-tab" data-bs-toggle="pill" href="#v-pills-preparing" role="tab" aria-controls="v-pills-preparing" aria-selected="false">Preparing</a>
                            <a className="nav-link" id="v-pills-shipping-tab" data-bs-toggle="pill" href="#v-pills-shipping" role="tab" aria-controls="v-pills-shipping" aria-selected="false">Shipping</a>
                            </div>
                            <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-new" role="tabpanel" aria-labelledby="v-pills-new-tab">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="d-flex">
                                            <i className="uil uil-check-circle me-4 text-success"></i>
                                            <div>
                                                <h6 className="text-success mb-0">Sender</h6>
                                                <h6 className="mb-0">Myrtle Ullrich</h6>
                                                <p className="text-muted">101 Boulder, California(CA), 95959</p>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex">
                                            <i className="uil uil-location-point text-secondary me-4"></i>
                                            <div>
                                                <h6 className="text-secondary mb-0">RECEIVER</h6>
                                                <h6 className="mb-0">Barry Schowalter</h6>
                                                <p className="text-muted mb-0">939 Orange, California(CA),92118</p>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li className="list-group-item">
                                        <div className="d-flex">
                                            <i className="uil uil-check-circle me-4 text-success"></i>
                                            <div>
                                                <h6 className="text-success mb-0">Sender</h6>
                                                <h6 className="mb-0">Veronica Herman</h6>
                                                <p className="text-muted">162 Windsor, California(CA), 95492</p>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex">
                                            <i className="uil uil-location-point text-secondary me-4"></i>
                                            <div>
                                                <h6 className="text-secondary mb-0">RECEIVER</h6>
                                                <h6 className="mb-0">Helen Jacobs</h6>
                                                <p className="text-muted mb-0">939 Orange, California(CA),92118</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="v-pills-preparing" role="tabpanel" aria-labelledby="v-pills-preparing-tab">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="d-flex">
                                            <i className="uil uil-check-circle me-4 text-success"></i>
                                            <div>
                                                <h6 className="text-success mb-0">Sender</h6>
                                                <h6 className="mb-0">Myrtle Ullrich</h6>
                                                <p className="text-muted mb-0">101 Boulder, California(CA), 95959</p>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex">
                                            <i className="uil uil-location-point text-secondary me-4"></i>
                                            <div>
                                                <h6 className="text-secondary mb-0">RECEIVER</h6>
                                                <h6 className="mb-0">Barry Schowalter</h6>
                                                <p className="text-muted mb-0">939 Orange, California(CA),92118</p>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li className="list-group-item">
                                        <div className="d-flex">
                                            <i className="uil uil-check-circle me-4 text-success"></i>
                                            <div>
                                                <h6 className="text-success mb-0">Sender</h6>
                                                <h6 className="mb-0">Veronica Herman</h6>
                                                <p className="text-muted">162 Windsor, California(CA), 95492</p>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex">
                                            <i className="uil uil-location-point text-secondary me-4"></i>
                                            <div>
                                                <h6 className="text-secondary mb-0">RECEIVER</h6>
                                                <h6 className="mb-0">Helen Jacobs</h6>
                                                <p className="text-muted">939 Orange, California(CA),92118</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="v-pills-shipping" role="tabpanel" aria-labelledby="v-pills-shipping-tab">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="d-flex">
                                            <i className="uil uil-check-circle me-4 text-success"></i>
                                            <div>
                                                <h6 className="text-success mb-0">Sender</h6>
                                                <h6 className="mb-0">Myrtle Ullrich</h6>
                                                <p className="text-muted">101 Boulder, California(CA), 95959</p>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex">
                                            <i className="uil uil-location-point text-secondary me-4"></i>
                                            <div>
                                                <h6 className="text-secondary mb-0">RECEIVER</h6>
                                                <h6 className="mb-0">Barry Schowalter</h6>
                                                <p className="text-muted">939 Orange, California(CA),92118</p>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li className="list-group-item">
                                        <div className="d-flex">
                                            <i className="uil uil-check-circle me-4 text-success"></i>
                                            <div>
                                                <h6 className="text-success mb-0">Sender</h6>
                                                <h6 className="mb-0">Veronica Herman</h6>
                                                <p className="text-muted">162 Windsor, California(CA), 95492</p>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex">
                                            <i className="uil uil-location-point text-secondary me-4"></i>
                                            <div>
                                                <h6 className="text-secondary mb-0">RECEIVER</h6>
                                                <h6 className="mb-0">Helen Jacobs</h6>
                                                <p className="text-muted">939 Orange, California(CA),92118</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="row row-cols-1 g-4 mt-0">
            <div className="col-12 mt-2">
                <div className="card">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p><strong>Order no.:</strong> #OD12345</p>
                            <p><strong>Created on:</strong> 3-2-2021</p>
                            <p><strong>Username:</strong> shantanumaity@gmail.com</p>
                            <p><strong>Amount:</strong> $1500</p>
                            <p><strong>Status:</strong> <span className="badge bg-info">Completed</span></p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p><strong>Delivery mode:</strong> Home Delivery</p>
                            <p><strong>Payment mode:</strong> COD</p>
                            <p><strong>Transaction no.:</strong> TN0521234589</p>
                            <p><strong>Print reciept:</strong> <button className="btn btn-primary">Print</button></p>
                        </div>
                    </div>
                </div>
                
                <div className="card widget mt-2">
                    <div className="card-body">
                        <h5 className="mb-4">Product List</h5>
                        <div className="table-responsive mt-4" tabindex="1">
                            <table className="table mb-0" id="recent-products">
                                <thead>
                                    <tr>
                                        <th>
                                            Product Image
                                        </th>
                                        <th>Product Name</th>
                                        <th>SKU</th>
                                        <th>Amount</th>
                                        <th>Quantity</th>
                                        <th>Total Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={Product7} className="rounded" width="60" alt="..."/>
                                        </td>
                                        <td>iPhone 14</td>
                                        <td>
                                            1011
                                        </td>
                                        <td>
                                            $5000
                                        </td>
                                        <td>1</td>
                                        <td>$5000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div className="card widget mt-2 track_order">
                    <div className="card-body">
                        <h5 className="mb-4">Order History</h5>
                        
                        <div className="mt-4 row">
                            <div className="col-12 col-md-6">
                                <h6>Order ID: OD45345345435</h6>
                            </div>
                            <div className="col-12 col-md-6 text-end">
                                <h6>Order date: 29/03/2021</h6>
                            </div>
                        </div>
                        
                        <div className="card mt-4">
                            <div className="card-body row">
                                <div className="col-sm-12 col-md-6 col-lg-3"> <strong>Paid: Online</strong> <br/>$500 </div>
                                <div className="col-sm-12 col-md-6 col-lg-3"> <strong>Shipping BY:</strong> <br/> BLUEDART </div>
                                <div className="col-sm-12 col-md-6 col-lg-3"> <strong>Status:</strong> <br/> Picked by the courier </div>
                                <div className="col-sm-12 col-md-6 col-lg-3"> <strong>Tracking #:</strong> <br/> BD045903594059 </div>
                            </div>
                        </div>
                        
                        <div className="track">
                            <div className="step active"> 
                                <span className="trdttm">29/03/21 <br/> <span>11.03 AM</span></span>
                                <span className="icon"> <i className="uil uil-check"></i> </span> <span className="text">Order Verified</span> 
                            </div>
                            <div className="step active">
                                <span className="trdttm">30/03/21 <br/> <span>10.07 AM</span></span>
                                <span className="icon"> <i className="uil uil-user"></i> </span> <span className="text"> Processed</span> 
                            </div>
                            <div className="step active"> <span className="trdttm">30/03/21 <br/> <span>10.07 AM</span></span> <span className="icon"> <i className="uil uil-truck"></i> </span> <span className="text"> Shipped </span> </div>
                            <div className="step active"> <span className="trdttm">30/03/21 <br/> <span>10.07 AM</span></span> <span className="icon"> <i className="uil uil-trash-alt"></i> </span> <span className="text">Delivered/ Picked up</span> </div>
                        </div>
                    </div>
                </div>
                
                <div className="card widget mt-2">
                    <div className="card-body">
                        <h5 className=" d-inline-block">Transaction Log</h5>
                        <div className="table-responsive mt-2" tabindex="1">
                            <table className="table mb-0" id="recent-products">
                                <thead>
                                    <tr>
                                        <th>
                                            Transaction ID
                                        </th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Payment Mode</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#1011
                                        </td>
                                        <td>27/06/2023</td>
                                        <td>
                                            10:11AM
                                        </td>
                                        <td>
                                            Cash
                                        </td>
                                        <td>$5000</td>
                                    </tr>
                                    <tr>
                                        <td>#1011
                                        </td>
                                        <td>27/06/2023</td>
                                        <td>
                                            10:11AM
                                        </td>
                                        <td>
                                            Cash
                                        </td>
                                        <td>$5000</td>
                                    </tr>
                                    <tr>
                                        <td>#1011
                                        </td>
                                        <td>27/06/2023</td>
                                        <td>
                                            10:11AM
                                        </td>
                                        <td>
                                            Cash
                                        </td>
                                        <td>$5000</td>
                                    </tr>
                                    <tr>
                                        <td>#1011
                                        </td>
                                        <td>27/06/2023</td>
                                        <td>
                                            10:11AM
                                        </td>
                                        <td>
                                            Cash
                                        </td>
                                        <td>$5000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
  );
}

export default Orders;
