import React from 'react';
import Product3 from '../images/products/3.jpg';

function History() {
  return (
    <div>
        <div className="content ">            
            <div className="row row-cols-1 g-4 mt-2">
                <div className="col-12 text-end mt-0">
                    <button className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#markComplete"><i className="uil uil-check me-2"></i>Mark Delivery</button>
                    <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addTransaction"><i className="uil uil-plus me-2"></i>Add Transaction</button>
                </div>
                <div className="col-12 mt-3">
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
                            <div className="table-responsive mt-4" tabindex="1" >
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
                                                <img src={Product3} className="rounded" width="60" alt="..." />
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
                                <div className="step"> <span className="icon"> <i className="uil uil-truck"></i> </span> <span className="text"> Shipped </span> </div>
                                <div className="step"> <span className="icon"> <i className="uil uil-trash-alt"></i> </span> <span className="text">Delivered/ Picked up</span> </div>
                            </div>
                            
                            <div className="text-center">
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#markComplete"><i className="uil uil-check me-2"></i>Mark Complete</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card widget mt-2">
                        <div className="card-body">
                            <h5 className="mb-4 d-inline-block">Transaction Log</h5>
                            <span className="float-end">
                                <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addTransaction"><i className="uil uil-plus me-2"></i>Add Transaction</button>
                            </span>
                            <div className="table-responsive mt-4" tabindex="1">
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

        <div className="modal fade" id="addTransaction" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Transaction</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        <div className="mb-3">
                            <label className="mb-2">Payment Method</label>
                            <select className="form-select">
                                <option>Cash</option>
                                <option>Online</option>
                            </select>
                        </div>
                        <div>
                            <label className="mb-2">Amount</label>
                            <input type="text" className="form-control"/>
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="markComplete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Mark Complete</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        <div className="mb-3">
                            <label className="mb-2">Send OTP To</label>
                            <input type="text" className="form-control"/>
                            <button className="btn btn-primary mt-3">Send OTP</button>
                        </div>
                        <div>
                            <label className="mb-2">Enter OTP</label>
                            <input type="text" className="form-control"/>
                            <button className="btn btn-primary mt-3">Submit</button>
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Skip</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default History;
