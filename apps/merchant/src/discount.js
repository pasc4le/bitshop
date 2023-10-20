import React from 'react';
import NoData from './images/no-data.jpg';

function Discount() {
  return (
    <div className="content ">
            
        <div className="row row-cols-1 g-4 mt-0">
            <div className="col-12 mt-0">
                <div className="text-end mb-2">
                    <a href="/create-discount" className="btn btn-success"><i className="uil uil-plus me-2"></i>Create Discount</a>
                </div>
                <div className="card widget">
                    <div className="card-body">
                        <div className="table-responsive mt-4" tabindex="1">
                            <table className="table mb-0" id="recent-products">
                                <thead>
                                    <tr>
                                        <th>
                                            <input className="form-check-input select-all" type="checkbox" data-select-all-target="#recent-products" id="defaultCheck1"/>
                                        </th>
                                        <th>
                                            Title
                                        </th>
                                        <th>Status</th>
                                        <th>Method</th>
                                        <th>Type</th>
                                        <th>Combinations</th>
                                        <th>Used</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox"/></td>
                                        <td>
                                            <a href="#">Discount One</a>
                                            <p>50% of Basic Product</p>
                                        </td>
                                        <td>
                                            <span className="badge rounded bg-success">Active</span>
                                        </td>
                                        <td>
                                            Code
                                        </td>
                                        <td>
                                            Amount off products
                                        </td>
                                        <td>No set to combine</td>
                                        <td>
                                            0
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                {/* <div className="card widget">
                    <div className="card-body">
                        <div className="text-center">
                            <img src="../../assets/images/no-data.jpg" alt="" width=""/>
                            <h2>No Data Found</h2>
                            <p>There is no data found here</p>
                            <a href="/create-discount" className="btn btn-primary">Create Discount</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>

    </div>
    
  );
}

export default Discount;
