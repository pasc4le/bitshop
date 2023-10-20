import React from 'react';

function ActiveOrders() {
  return (
    <div className="content">            
        <div className="row row-cols-1 g-4 mt-0">
            <div className="col-12 mt-0">        
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="card">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-2">
                                <h6><i className="uil uil-file-info-alt me-1"></i>Lorem Ipsum</h6>
                            </div>
                            <div className="col-12 col-md-2">
                                <h6 className="mb-1">Today's Orders</h6>
                                <div className="d-flex mb-1 position-relative">
                                    <div className="display-9"><strong>10</strong> <span className="text-success"><i className="uil uil-arrow-up-right"></i> 100% </span></div>
                                    <div className="ms-auto" id="total-orders"></div>
                                </div>
                            </div>
                            <div className="col-12 col-md-2">
                                <h6 className="mb-1">Active Orders</h6>
                                <div className="d-flex mb-1 position-relative">
                                    <div className="display-9"><strong>5</strong> <span className="text-success"><i className="uil uil-arrow-up-right"></i> 50% </span></div>
                                    <div className="ms-auto" id="total-orders"></div>
                                </div>
                            </div>
                            <div className="col-12 col-md-2">
                                <h6 className="mb-1">Pending Orders</h6>
                                <div className="d-flex mb-1 position-relative">
                                    <div className="display-9"><strong>1</strong> <span className="text-danger"><i className="uil uil-arrow-down-right"></i> 10% </span></div>
                                    <div className="ms-auto" id="total-orders"></div>
                                </div>
                            </div>
                            <div className="col-12 col-md-2">
                                <h6 className="mb-1">Revenue Orders</h6>
                                <div className="d-flex mb-1 position-relative">
                                    <div className="display-9"><strong>3</strong> <span className="text-danger"><i className="uil uil-arrow-down-right"></i> 10% </span></div>
                                    <div className="ms-auto" id="total-orders"></div>
                                </div>
                            </div>
                            <div className="col-12 col-md-2">
                                <h6 className="mb-1">Total Orders</h6>
                            <div className="d-flex mb-1 position-relative">
                                <div className="display-9"><strong>10</strong> <span className="text-success"><i className="uil uil-arrow-up-right"></i> 100% </span></div>
                                <div className="ms-auto" id="total-orders"></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
            <div className="card widget mt-2">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table mb-0" id="recent-products">
                            <thead>
                                <tr>
                                    <th><input className="form-check-input select-all" type="checkbox" data-select-all-target="#recent-products" id="defaultCheck1"/></th>
                                    <th>
                                        Order Number
                                    </th>
                                    <th>Description</th>
                                    <th>Store</th>
                                    <th>Total</th>
                                    <th>Payment Status</th>
                                    <th>Order Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>
                                        <a href="/order-history">#OD001</a>
                                    </td>
                                    <td>
                                        Lorem ipsum doller sit amet
                                    </td>
                                    <td>
                                        Online Store
                                    </td>
                                    <td>$5000</td>
                                    <td>COD</td>
                                    <td><span className="badge rounded bg-success">Placed</span></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>
                                        <a href="/order-history">#OD002</a>
                                    </td>
                                    <td>
                                        Lorem ipsum doller sit amet
                                    </td>
                                    <td>
                                        Online Store
                                    </td>
                                    <td>$5000</td>
                                    <td>COD</td>
                                    <td><span className="badge rounded bg-success">Placed</span></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>
                                        <a href="/order-history">#OD003</a>
                                    </td>
                                    <td>
                                        Lorem ipsum doller sit amet
                                    </td>
                                    <td>
                                        Online Store
                                    </td>
                                    <td>$5000</td>
                                    <td>COD</td>
                                    <td><span className="badge rounded bg-success">Placed</span></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>
                                        <a href="/order-history">#OD004</a>
                                    </td>
                                    <td>
                                        Lorem ipsum doller sit amet
                                    </td>
                                    <td>
                                        Online Store
                                    </td>
                                    <td>$5000</td>
                                    <td>COD</td>
                                    <td><span className="badge rounded bg-info">Verified</span></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>
                                        <a href="/order-history">#OD001</a>
                                    </td>
                                    <td>
                                        Lorem ipsum doller sit amet
                                    </td>
                                    <td>
                                        Online Store
                                    </td>
                                    <td>$5000</td>
                                    <td>COD</td>
                                    <td><span className="badge rounded bg-success">Placed</span></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>
                                        <a href="/order-history">#OD002</a>
                                    </td>
                                    <td>
                                        Lorem ipsum doller sit amet
                                    </td>
                                    <td>
                                        Online Store
                                    </td>
                                    <td>$5000</td>
                                    <td>COD</td>
                                    <td><span className="badge rounded bg-success">Placed</span></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>
                                        <a href="/order-history">#OD003</a>
                                    </td>
                                    <td>
                                        Lorem ipsum doller sit amet
                                    </td>
                                    <td>
                                        Online Store
                                    </td>
                                    <td>$5000</td>
                                    <td>COD</td>
                                    <td><span className="badge rounded bg-success">Placed</span></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>
                                        <a href="/order-history">#OD004</a>
                                    </td>
                                    <td>
                                        Lorem ipsum doller sit amet
                                    </td>
                                    <td>
                                        Online Store
                                    </td>
                                    <td>$5000</td>
                                    <td>COD</td>
                                    <td><span className="badge rounded bg-info">Verified</span></td>
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

export default ActiveOrders;
