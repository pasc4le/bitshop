import React from 'react';
import NoData from './images/no-data.jpg';

function GiftCards() {
  return (
    <div className="content ">            
        <div className="row row-cols-1 g-4 mt-0">
            <div className="col-12 mt-0">
                <div className="text-end mb-2">
                    <a href="/create-gift-cards" className="btn btn-success"><i className="uil uil-plus me-2"></i>Create Gift Card</a>
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
                                            Code Ending
                                        </th>
                                        <th>Status</th>
                                        <th>Customer</th>
                                        <th>Recipients</th>
                                        <th>Date Issued</th>
                                        <th>Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox"/></td>
                                        <td>
                                            <a href="#">Gift Card One</a>
                                        </td>
                                        <td>
                                            <span className="badge rounded bg-success">Active</span>
                                        </td>
                                        <td>
                                            John Doe
                                        </td>
                                        <td>
                                            No recipients
                                        </td>
                                        <td>17-05-2023</td>
                                        <td>
                                            $500
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox"/></td>
                                        <td>
                                            <a href="#">Gift Card Two</a>
                                        </td>
                                        <td>
                                            <span className="badge rounded bg-danger">Inactive</span>
                                        </td>
                                        <td>
                                            John Doe
                                        </td>
                                        <td>
                                            No recipients
                                        </td>
                                        <td>17-05-2023</td>
                                        <td>
                                            $500
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox"/></td>
                                        <td>
                                            <a href="#">Gift Card Three</a>
                                        </td>
                                        <td>
                                            <span className="badge rounded bg-success">Active</span>
                                        </td>
                                        <td>
                                            John Doe
                                        </td>
                                        <td>
                                            No recipients
                                        </td>
                                        <td>17-05-2023</td>
                                        <td>
                                            $500
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox"/></td>
                                        <td>
                                            <a href="#">Gift Card Four</a>
                                        </td>
                                        <td>
                                            <span className="badge rounded bg-success">Active</span>
                                        </td>
                                        <td>
                                            John Doe
                                        </td>
                                        <td>
                                            No recipients
                                        </td>
                                        <td>17-05-2023</td>
                                        <td>
                                            $500
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox"/></td>
                                        <td>
                                            <a href="#">Gift Card Five</a>
                                        </td>
                                        <td>
                                            <span className="badge rounded bg-success">Active</span>
                                        </td>
                                        <td>
                                            John Doe
                                        </td>
                                        <td>
                                            No recipients
                                        </td>
                                        <td>17-05-2023</td>
                                        <td>
                                            $500
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
                

                {/* ------------
                No Data Found
                <div className="card widget">
                    <div className="card-body">
                        <div className="text-center">
                            <img src={NoData} alt="" width=""/>
                            <h2>No Data Found</h2>
                            <p>There is no data found here</p>
                            <a href="/create-gift-cards" className="btn btn-primary">Create Gift Cards</a>
                        </div>
                     </div>
                </div>
                ------------------ */}
               
            </div>
        </div>

    </div>    
    
  );
}

export default GiftCards;
