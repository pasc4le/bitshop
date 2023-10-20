import React from 'react';

function Analytics() {
  return (
    <div className="content ">
        <div className="row mb-4">
            <div className="col-12 col-md-3 mt-0">
                <input type="text" name="" id="reportrange" className="form-control"/>
                {/* <input type='date' className='form-control'/> */}
            </div>
            <div className="col-12 col-md-3 mt-0">
                <select className="form-select">
                    <option>Yesterday</option>
                    <option>Today</option>
                    <option>7 Days</option>
                    <option>30 Days</option>
                    <option>2 Months</option>
                </select>
            </div>
            <div className="col-12 col-md-3 mt-0">
                {/* <input type="text" name="daterangepicker" className="form-control"/> */}
                <input type='date' className='form-control'/>
            </div>
            <div className="col-12 col-md-3 text-end">
                <a href="/report" className="btn btn-primary w-100"><i className="uil uil-file-info-alt me-2"></i>View Report</a>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card h-100">
                            <div>
                                <h5 className="mb-0">Orders</h5>
                                <p className="mb-0 text-muted">Last Month</p>
                                <div className="ms-auto" id="customer-rating"></div>
                                <h3 className="d-inline-block mt-0">62k</h3>
                                <span className="text-danger">-1.04%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="card h-100">
                            <div>
                                <h5 className="mb-0">Profit</h5>
                                <p className="mb-0 text-muted">Last Month</p>
                                <div className="ms-auto" id="total-orders"></div>
                                <h3 className="d-inline-block mt-0">624k</h3>
                                <span className="text-success">+8.24%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 mt-4">
                        <div className="card h-100">
                            <div className="d-flex">
                                <div className="w-100">
                                    <h5 className="mb-0">Product Views</h5>
                                    <div class="ms-auto" id="customer-rating"></div>
                                    <p className="mb-2 text-muted">Monthly Report</p>
                                    <h2 className="d-inline-block mt-0">4,350</h2>
                                    <span className="text-success"><i className="uil uil-angle-up"></i> 15.8%</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-8 col-md-7">
                <div className="card widget">
                    <div className="card-header">
                        <h5 className="card-title">Revenue Report</h5>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-8 mt-2">
                            <div className="border-0">
                                <div className=" text-center">
                                    <div className="d-flex justify-content-center gap-4 align-items-center ms-auto mt-3 mt-lg-0">
                                        <div>
                                            <i className="fa fa-circle me-2 text-primary me-1 small"></i>
                                            <span>Expense</span>
                                        </div>
                                        <div>
                                            <i className="fa fa-circle me-2 text-success me-1 small"></i>
                                            <span>Earning</span>
                                        </div>
                                    </div>
                                    
                                    <div id="sales-chart"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center mt-2">
                            <div className="border-0">
                                <div className="text-center">
                                    <select className="form-select">
                                            <option value="2023">2023</option>
                                            <option value="2022">2022</option>
                                            <option value="2021">2021</option>
                                    </select>
                                    
                                    <h2 className="mt-2 mb-2">$25,825</h2>
                                    <h6 className="mb-4"><strong>Budget:</strong> 56,800</h6>
                                    
                                    <div className="ms-auto" id="total-sales"></div>
                                    
                                    <a href="/report" className="btn btn-outline-primary btn-icon mt-4">
                                        View Report
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-0">
            <div className="col-lg-4 col-md-6">
                <div className="card widget h-100">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="card-title mb-0">
                                Earning Reports
                            </h5>
                            <p className="text-muted mb-0">Weekly Earnings Overview</p> 
                        </div>
                        <div className="dropdown ms-auto">
                            <a href="#" data-bs-toggle="dropdown" className="btn btn-sm btn-floating" aria-haspopup="true" aria-expanded="false">
                                <i className="uil uil-ellipsis-h"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">Refresh</a>
                                <a href="#" className="dropdown-item">Download</a>
                                <a href="/report" className="dropdown-item">View All</a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="list-group list-group-flush">
                            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <span className="avatar-text bg-primary-light me-3"><i className="uil uil-chart-pie"></i></span>
                                    <div>
                                        <span>Net Profit</span>
                                        <p className="text-muted mb-0">12.4k Sales</p>
                                    </div>
                                </div>
                                <span>$1,619 <i className="uil uil-angle-up text-success"></i> <span className="text-muted">18.6%</span></span>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <span className="avatar-text bg-success-light me-3"><i className="uil uil-dollar-sign-alt"></i></span>
                                    <div>
                                        <span>Total Income</span>
                                        <p className="text-muted mb-0">Sales</p>
                                    </div>
                                </div>
                                <span>$1,619 <i className="uil uil-angle-up text-success"></i> <span className="text-muted">18.6%</span></span>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <span className="avatar-text bg-danger-light me-3"><i className="uil uil-credit-card"></i></span>
                                    <div>
                                        <span>Total Expense</span>
                                        <p className="text-muted mb-0">ADVT</p>
                                    </div>
                                </div>
                                <span>$1,619 <i className="uil uil-angle-up text-success"></i> <span className="text-muted">18.6%</span></span>
                            </div>
                        </div>
                        
                        <div className="ms-auto" id="products-sold"></div>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-8 col-md-6">
                <div className="card widget h-100">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="card-title mb-0">
                                Transactions
                            </h5>
                            <p className="text-muted mb-0">Total 58 Transactions done in this</p> 
                        </div>
                        <div className="dropdown ms-auto">
                            <a href="#" data-bs-toggle="dropdown" className="btn btn-sm btn-floating" aria-haspopup="true" aria-expanded="false">
                                <i className="uil uil-ellipsis-h"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">Refresh</a>
                                <a href="#" className="dropdown-item">Download</a>
                                <a href="/report" className="dropdown-item">View All</a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="list-group list-group-flush">
                            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <span className="avatar-text bg-info-light me-3"><i className="uil uil-wallet"></i></span>
                                    <div>
                                        <span>Wallet</span>
                                        <p className="text-muted mb-0">Starbucks</p>
                                    </div>
                                </div>
                                <h6 className="text-danger">-$75</h6>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <span className="avatar-text bg-success-light me-3"><i className="uil uil-window"></i></span>
                                    <div>
                                        <span>Bank Transfer</span>
                                        <p className="text-muted mb-0">Add Money</p>
                                    </div>
                                </div>
                                <h6 className="text-success">+$480</h6>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <span className="avatar-text bg-danger-light me-3"><i className="uil uil-paypal"></i></span>
                                    <div>
                                        <span>Paypal</span>
                                        <p className="text-muted mb-0">Client Payment</p>
                                    </div>
                                </div>
                                <h6 className="text-success">+$268</h6>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <span className="avatar-text bg-primary-light me-3"><i className="uil uil-credit-card"></i></span>
                                    <div>
                                        <span>Master Card</span>
                                        <p className="text-muted mb-0">Ordered Bitcoin</p>
                                    </div>
                                </div>
                                <h6 className="text-danger">-$699</h6>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <span className="avatar-text bg-success-light me-3"><i className="uil uil-dollar-sign-alt"></i></span>
                                    <div>
                                        <span>Bank Transfer</span>
                                        <p className="text-muted mb-0">Refund</p>
                                    </div>
                                </div>
                                <h6 className="text-success">+$98</h6>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <span className="avatar-text bg-danger-light me-3"><i className="uil uil-paypal"></i></span>
                                    <div>
                                        <span>Paypal</span>
                                        <p className="text-muted mb-0">Client Payment</p>
                                    </div>
                                </div>
                                <h6 className="text-success">+$268</h6>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <span className="avatar-text bg-success-light me-3"><i className="uil uil-window"></i></span>
                                    <div>
                                        <span>Bank Transfer</span>
                                        <p className="text-muted mb-0">Add Money</p>
                                    </div>
                                </div>
                                <h6 className="text-success">+$480</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="row row-cols-1 g-4 mt-0">
            <div className="col-12">
                <div className="row mb-4">
                    <div className="col-12 col-md-3">
                        <div className="card text-center">
                            <h6>Current Balance</h6>
                            <h4 className="text-orange">0.00</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card text-center">
                            <h6>Settlement Due Today</h6>
                            <h4 className="text-orange">0.00</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card text-center">
                            <h6>Previous Settlement</h6>
                            <h4 className="text-orange">0.00</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card text-center">
                            <h6>Upcoming Settlement</h6>
                            <h4 className="text-orange">0.00</h4>
                        </div>
                    </div>
                </div>
                <div className="card widget">
                    <div>
                        <div className="row mb-3">
                            <div className="col-lg-3 col-12">
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Settlement ID"/>
                            </div>
                            <div className="col-lg-3 col-12">
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Count"/>
                            </div>
                            <div className="col-lg-3 col-12">
                                <select className="form-select">
                                    <option value="">Status</option>
                                    <option value="">All</option>
                                    <option value="">Active</option>
                                    <option value="">Inactive</option>
                                </select>
                            </div> 
                            <div className="col-lg-3 col-12">
                                <button className="btn btn-primary w-100">
                                        Search
                                </button> 
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="table-responsive mt-4">
                            <table className="table mb-0" id="recent-products">
                                <thead>
                                    <tr>
                                        <th>
                                            Settlement ID
                                        </th>
                                        <th>Amount</th>
                                        <th>Fees</th>
                                        <th>Tax</th>
                                        <th>Created at</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="#">#5035</a>
                                        </td>
                                        <td>
                                            $500.00
                                        </td>
                                        <td>
                                            $550.00
                                        </td>
                                        <td>
                                            $15.00
                                        </td>
                                        <td>17-05-2023</td>
                                        <td>
                                            <span className="badge rounded bg-success">Active</span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <a href="#">#5034</a>
                                        </td>
                                        <td>
                                            $400.00
                                        </td>
                                        <td>
                                            $450.00
                                        </td>
                                        <td>
                                            $15.00
                                        </td>
                                        <td>18-05-2023</td>
                                        <td>
                                            <span className="badge rounded bg-danger">Inactive</span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <a href="#">#5035</a>
                                        </td>
                                        <td>
                                            $500.00
                                        </td>
                                        <td>
                                            $550.00
                                        </td>
                                        <td>
                                            $15.00
                                        </td>
                                        <td>17-05-2023</td>
                                        <td>
                                            <span className="badge rounded bg-success">Active</span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <a href="#">#5034</a>
                                        </td>
                                        <td>
                                            $400.00
                                        </td>
                                        <td>
                                            $450.00
                                        </td>
                                        <td>
                                            $15.00
                                        </td>
                                        <td>18-05-2023</td>
                                        <td>
                                            <span className="badge rounded bg-danger">Inactive</span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <a href="#">#5035</a>
                                        </td>
                                        <td>
                                            $500.00
                                        </td>
                                        <td>
                                            $550.00
                                        </td>
                                        <td>
                                            $15.00
                                        </td>
                                        <td>17-05-2023</td>
                                        <td>
                                            <span className="badge rounded bg-success">Active</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <nav aria-label="..." className="mt-3">
                            <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active" aria-current="page">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
  );
}

export default Analytics;
