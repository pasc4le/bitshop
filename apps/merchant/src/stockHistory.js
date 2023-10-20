import React from 'react';

function StockHistory() {
  return (
    <div className="content">            
        <div className="row row-cols-1 g-4 mt-0">
            <div className="col-12 mt-0">
                <div className="card widget">
                    <div className="card-body">
                        <div className="table-responsive mt-4">
                            <table className="table mb-0" id="recent-products">
                                <thead>
                                    <tr>
                                        <th>
                                            Date & Time
                                        </th>
                                        <th>Qty</th>
                                        <th>narration</th>
                                        <th>Closing stocks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            24/06/2023<br/>
                                            02:00PM
                                        </td>
                                        <td><i className="uil uil-minus text-danger me-2"></i>20</td>
                                        <td>
                                            John Doe has removed stock
                                        </td>
                                        <td>
                                            50
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            25/06/2023<br/>
                                            12:00PM
                                        </td>
                                        <td><i className="uil uil-plus text-success me-2"></i>50</td>
                                        <td>
                                            Leenly Swit has added  product
                                        </td>
                                        <td>
                                            80
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            22/06/2023<br/>
                                            11:00AM
                                        </td>
                                        <td><i className="uil uil-plus text-success me-2"></i>20</td>
                                        <td>
                                            John Doe created a new order <a href="order-history2.php">#1011</a>
                                        </td>
                                        <td>
                                            50
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            20/06/2023<br/>
                                            05:00PM
                                        </td>
                                        <td><i className="uil uil-minus text-danger me-2"></i>10</td>
                                        <td>
                                            Andrew Erick has removed stock
                                        </td>
                                        <td>
                                            70
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

export default StockHistory;
