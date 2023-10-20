import React from 'react';

function BulkUpload() {
  return (
    <div className="content ">
            
            <div className="row g-4 mt-0">
                <div className="col-12">
                    <div id="wizard-example">
                      <h3>Upload File</h3>
                      <section className="card card-body border mb-0">
                        <h4>Upload File</h4>
                        <h5 className="mt-3">Upload file with the info you want to import here. We’ll check it and let you know if there’s anything you need to fix.</h5>
                        
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="mt-5">
                                    <label for="cars">Select the category in which you want to upload</label>
                                    <select className="select2-example form-select">
                                      <optgroup label="Electronics">
                                        <option value="volvo">Refrigarator</option>
                                        <option value="saab">Microwave</option>
                                      </optgroup>
                                      <optgroup label="Mobiles & Laptops">
                                        <option value="mercedes">Mobiles</option>
                                        <option value="audi">Laptops</option>
                                      </optgroup>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mt-5">
                                    <label>Choose file to upload</label>
                                    <input type="file" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        
                      </section>
                      
                      <h3>Upload Media</h3>
                      <section className="card card-body border mb-0">
                        <h4>Upload Media</h4>
                        <h5 className="mt-3">Upload media with the info you want to import here. We’ll check it and let you know if there’s anything you need to fix.</h5>
                        
                        <div className="row">
                            <div className="col-12">
                                <div className="mt-4">
                                    <form action="/file-upload" className="dropzone">
                                    </form>
                                </div>
                            </div>
                        </div>
                      </section>
                      
                      <h3>Review</h3>
                      
                      <section className="card card-body border mb-0">
                        <h4>Review</h4>
                        
                        <div className="row mt-4">
                            <div className="col-12">
                                <div className="table-responsive" tabindex="1">
                                    <table className="table mb-0" id="recent-products">
                                        <thead>
                                            <tr>
                                                <th>
                                                    SKU
                                                </th>
                                                <th>Product</th>
                                                <th>Cost Price</th>
                                                <th>Selling Price</th>
                                                <th>QTY</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href="#">#5035</a>
                                                </td>
                                                <td>
                                                    iPhone 14 <a className="show-table ms-2"><i className="uil uil-arrow-circle-down"></i></a>
                                                </td>
                                                <td>
                                                    $500.00
                                                </td>
                                                <td>
                                                    $550.00
                                                </td>
                                                <td>1</td>
                                            </tr>
                                            <tr className="d-click-show">
                                                <td>
                                                    <a href="#">-</a>
                                                </td>
                                                <td>
                                                    iPhone 14
                                                </td>
                                                <td>
                                                    $500.00
                                                </td>
                                                <td>
                                                    $550.00
                                                </td>
                                                <td>1</td>
                                            </tr>
                                            
                                            <tr className="d-click-show">
                                                <td>
                                                    <a href="#">-</a>
                                                </td>
                                                <td>
                                                    iPhone 14
                                                </td>
                                                <td>
                                                    $500.00
                                                </td>
                                                <td>
                                                    $550.00
                                                </td>
                                                <td>1</td>
                                            </tr>
                                            
                                            <tr className="d-click-show">
                                                <td>
                                                    <a href="#">-</a>
                                                </td>
                                                <td>
                                                    iPhone 14
                                                </td>
                                                <td>
                                                    $500.00
                                                </td>
                                                <td>
                                                    $550.00
                                                </td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#">#5034</a>
                                                </td>
                                                <td>
                                                    Samsung Galaxy S23
                                                </td>
                                                <td>
                                                    $453.00
                                                </td>
                                                <td>
                                                    $480.00
                                                </td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#">#5033</a>
                                                </td>
                                                <td>
                                                    Lenovo Ideapad 3
                                                </td>
                                                <td>
                                                    $257.00
                                                </td>
                                                <td>
                                                    $300.00
                                                </td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#">#5032</a>
                                                </td>
                                                <td>
                                                    Mac Book Pro
                                                </td>
                                                <td>
                                                    $1000.00
                                                </td>
                                                <td>
                                                    $1500.00
                                                </td>
                                                <td>1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                      </section>
                    </div>
                </div>
            </div>

        </div>
    
  );
}

export default BulkUpload;
