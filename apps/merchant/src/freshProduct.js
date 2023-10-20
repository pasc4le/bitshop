import React from 'react';

function FreshProduct() {
  return (
    <div className="content ">            
        <div className="row g-4 mt-0">
            
            <div className="col-12 col-md-8 mt-0">
                <div className="card mb-4">
                    <div className="card-body">
                        <h6 className="card-title mb-4">Product Details</h6>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="p_title" placeholder="Product Title"/>
                                    <label for="p_title">Product Title</label>
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2">Description</label>
                                    <div id="editor"></div>
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2">Media</label>
                                    <form action="/file-upload" className="dropzone">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-12 col-md-4 mt-0">                
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-label">Product Category</label>
                                    <select className="form-select">
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

                                <div className="mb-3">
                                    <label className="form-label">Tags</label>
                                    <input type="text" className="form-control tagsinput-example" placeholder="Tags" value=""/>
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Product Status</label>
                                    <select className="form-select">
                                        <option>Select Status</option>
                                        <option value="">Active</option>
                                        <option value="">Inactive</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-12 mt-2">
                <div className="card mb-2">
                    <div className="card-body">
                        <h6 className="card-title mb-2">Varient</h6>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-11">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Option Name"/>
                                            <label for="name">Option Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-1 text-end trash-varient">
                                        <i className="uil uil-trash-alt text-danger"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-11">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="value" placeholder="Option Value"/>
                                            <label for="value">Option Value</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-1 text-end trash-varient">
                                        <i className="uil uil-trash-alt text-danger"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <button className="btn btn-primary mt-4">Done</button>
                        <hr/>
                        <a href="javascript:void(0)" className="text-success"><i className="uil uil-plus mr-2"></i>Add another option</a>
                        
                        <div className="table-responsive mt-4" tabindex="1">
                            <table className="table mb-0 fresh-products-table" id="recent-products">
                                <thead>
                                    <tr>
                                        <th>
                                            Varient
                                        </th>
                                        <th>SKU</th>
                                        <th>Price</th>
                                        <th>Selling Price</th>
                                        <th>MRP</th>
                                        <th>Stock</th>
                                        <th>Weight</th>
                                        <th>Barcode</th>
                                        <th>Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="#"></a>
                                        </td>
                                        <td>
                                            <input type="text" className="form-control"/>
                                        </td>
                                        <td>
                                            <div className="input-group">
                                            <span className="input-group-text">$</span>
                                            <input type="text" className="form-control" placeholder=""/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group">
                                            <span className="input-group-text">$</span>
                                            <input type="text" className="form-control" placeholder=""/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group">
                                            <span className="input-group-text">$</span>
                                            <input type="text" className="form-control" placeholder=""/>
                                            </div>
                                        </td>
                                        <td>
                                            <input type="text" className="form-control"/>
                                        </td>
                                        <td>
                                            <input type="text" className="form-control"/>
                                        </td>
                                        <td>
                                            <input type="text" className="form-control"/>
                                        </td>
                                        <td>
                                            <input type="file" className="form-control"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div className="card mb-2">
                    <div className="card-body">
                        <h6 className="card-title mb-2">Specification</h6>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-11">
                                        <div>
                                            <label className="mb-2" for="attr">Select Attribute</label>
                                            <select type="text" className="form-select" id="attr">
                                                <option>Weight</option>
                                                <option>Height</option>
                                            </select>
                                            
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-1 text-end trash-varient">
                                        <i className="uil uil-trash-alt text-danger mt-4 d-inline-block"></i>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-12 col-md-6">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-11">
                                        <div className="">
                                            <label className="mb-2" for="a_value">Value</label>
                                            <input type="text" className="form-control" id="value" placeholder="a_value"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-1 text-end trash-varient">
                                        <i className="uil uil-trash-alt text-danger mt-4 d-inline-block"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary mt-4">Done</button>
                        <hr/>
                        <a href="javascript:void(0)" className="text-success"><i className="uil uil-plus mr-2"></i>Add another option</a>
                        
                        <div className="table-responsive mt-4" tabindex="1">
                            <table className="table mb-0" id="recent-products">
                                <thead>
                                    <tr>
                                        <th>
                                            Attribute
                                        </th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" className="form-control"/>
                                        </td>
                                        <td>
                                            <input type="text" className="form-control"/>
                                        </td>
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

export default FreshProduct;
