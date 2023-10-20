import React from 'react';

function Products() {
  return (
    <div>
        <div className="content ">
            
            <div className="row row-cols-1 g-4 mt-3">
                <div className="col-12 mt-0">
                    <div className="card widget">
                        <div>
                            <div className="row mb-3">
                                <div className="col-lg-2 col-12">
                                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="SKU"/>
                                </div>
                                <div className="col-lg-2 col-12">
                                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Product Name"/>
                                </div>
                                <div className="col-lg-3 col-12">
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
                                <div className="col-lg-2 col-12">
                                    <select className="form-select">
                                        <option value="">Status</option>
                                        <option value="">All</option>
                                        <option value="">Active</option>
                                        <option value="">Inactive</option>
                                    </select>
                                </div> 
                                <div className="col-lg-3 col-12">
                                    <button className="btn btn-primary btn-icon w-100" data-bs-toggle="modal" data-bs-target="#addProduct">
                                        <i className="uil uil-plus"></i> Add Product
                                    </button> 
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="table-responsive mt-0">
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
                                            <th>Status</th>
                                            <th className="text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a href="/product-details">#5035</a>
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
                                            <td><i className="uil uil-minus-circle text-danger me-2" data-bs-toggle="modal" data-bs-target="#minusQty"></i>1<i className="uil uil-plus-circle text-success ms-2" data-bs-toggle="modal" data-bs-target="#plusQty"></i></td>
                                            <td>
                                                <div className="form-check form-switch">
                                                  <input className="form-check-input" type="checkbox" id="" checked />
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <a href="javascript:void(0)" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"  className="text-danger me-4"><i className="uil uil-trash-alt"></i></a>
                                                <a href="/stock-history" data-bs-toggle="tooltip" title="" data-bs-original-title="Stock History" aria-label="Stock History" className="text-success me-4"><i className="uil uil-eye"></i></a>
                                                <a href="/fresh-product" data-bs-toggle="tooltip" title="" data-bs-original-title="Edit" aria-label="Edit" className="text-info"><i className="uil uil-pen"></i></a>
                                            </td>
                                        </tr>
                                        
                                        <tr className="d-click-show">
                                            <td>
                                                <a href="/product-details">-</a>
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
                                            <td><i className="uil uil-minus-circle text-danger me-2" data-bs-toggle="modal" data-bs-target="#minusQty"></i>1<i className="uil uil-plus-circle text-success ms-2" data-bs-toggle="modal" data-bs-target="#plusQty"></i></td>
                                            <td>
                                                <div className="form-check form-switch">
                                                  <input className="form-check-input" type="checkbox" id="" checked />
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <a href="javascript:void(0)" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"  className="text-danger me-4"><i className="uil uil-trash-alt"></i></a>
                                                <a href="/stock-history" data-bs-toggle="tooltip" title="" data-bs-original-title="Stock History" aria-label="Stock History" className="text-success me-4"><i className="uil uil-eye"></i></a>
                                                <a href="/fresh-product" data-bs-toggle="tooltip" title="" data-bs-original-title="Edit" aria-label="Edit" className="text-info"><i className="uil uil-pen"></i></a>
                                            </td>
                                        </tr>
                                        
                                        <tr className="d-click-show">
                                            <td>
                                                <a href="/product-details">-</a>
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
                                            <td><i className="uil uil-minus-circle text-danger me-2" data-bs-toggle="modal" data-bs-target="#minusQty"></i>1<i className="uil uil-plus-circle text-success ms-2" data-bs-toggle="modal" data-bs-target="#plusQty"></i></td>
                                            <td>
                                                <div className="form-check form-switch">
                                                  <input className="form-check-input" type="checkbox" id="" checked />
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <a href="javascript:void(0)" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"  className="text-danger me-4"><i className="uil uil-trash-alt"></i></a>
                                                <a href="/stock-history" data-bs-toggle="tooltip" title="" data-bs-original-title="Stock History" aria-label="Stock History" className="text-success me-4"><i className="uil uil-eye"></i></a>
                                                <a href="/fresh-product" data-bs-toggle="tooltip" title="" data-bs-original-title="Edit" aria-label="Edit" className="text-info"><i className="uil uil-pen"></i></a>
                                            </td>
                                        </tr>
                                        
                                        <tr className="d-click-show">
                                            <td>
                                                <a href="/product-details">-</a>
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
                                            <td><i className="uil uil-minus-circle text-danger me-2" data-bs-toggle="modal" data-bs-target="#minusQty"></i>1<i className="uil uil-plus-circle text-success ms-2" data-bs-toggle="modal" data-bs-target="#plusQty"></i></td>
                                            <td>
                                                <div className="form-check form-switch">
                                                  <input className="form-check-input" type="checkbox" id="" checked />
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <a href="javascript:void(0)" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"  className="text-danger me-4"><i className="uil uil-trash-alt"></i></a>
                                                <a href="/stock-history" data-bs-toggle="tooltip" title="" data-bs-original-title="Stock History" aria-label="Stock History" className="text-success me-4"><i className="uil uil-eye"></i></a>
                                                <a href="/fresh-product" data-bs-toggle="tooltip" title="" data-bs-original-title="Edit" aria-label="Edit" className="text-info"><i className="uil uil-pen"></i></a>
                                            </td>
                                        </tr>
                                        
                                        <tr>
                                            <td>
                                                <a href="/product-details">#5034</a>
                                            </td>
                                            <td>
                                                Samsung Galaxy S23
                                            </td>
                                            <td>
                                                $453.00
                                            </td>
                                            <td>$600.00</td>
                                            <td><i className="uil uil-minus-circle text-danger me-2" data-bs-toggle="modal" data-bs-target="#minusQty"></i>1<i className="uil uil-plus-circle text-success ms-2" data-bs-toggle="modal" data-bs-target="#plusQty"></i></td>
                                            <td>
                                                <div className="form-check form-switch">
                                                  <input className="form-check-input" type="checkbox" id="" />
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <a href="javascript:void(0)" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"  className="text-danger me-4"><i className="uil uil-trash-alt"></i></a>
                                                <a href="/stock-history" data-bs-toggle="tooltip" title="" data-bs-original-title="Stock History" aria-label="Stock History" className="text-success me-4"><i className="uil uil-eye"></i></a>
                                                <a href="/fresh-product" data-bs-toggle="tooltip" title="" data-bs-original-title="Edit" aria-label="Edit" className="text-info"><i className="uil uil-pen"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="/product-details">#5033</a>
                                            </td>
                                            <td>
                                                Lenovo Ideapad 3
                                            </td>
                                            <td>
                                                $257.00
                                            </td>
                                            <td>$300.00</td>
                                            <td><i className="uil uil-minus-circle text-danger me-2" data-bs-toggle="modal" data-bs-target="#minusQty"></i>1<i className="uil uil-plus-circle text-success ms-2" data-bs-toggle="modal" data-bs-target="#plusQty"></i></td>
                                            <td>
                                                <div className="form-check form-switch">
                                                  <input className="form-check-input" type="checkbox" id="" checked />
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <a href="javascript:void(0)" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"  className="text-danger me-4"><i className="uil uil-trash-alt"></i></a>
                                                <a href="/stock-history" data-bs-toggle="tooltip" title="" data-bs-original-title="Stock History" aria-label="Stock History" className="text-success me-4"><i className="uil uil-eye"></i></a>
                                                <a href="/fresh-product" data-bs-toggle="tooltip" title="" data-bs-original-title="Edit" aria-label="Edit" className="text-info"><i className="uil uil-pen"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="/product-details">#5032</a>
                                            </td>
                                            <td>
                                                Mac Book Pro
                                            </td>
                                            <td>
                                                $1000.00
                                            </td>
                                            <td>$2000.00</td>
                                            <td><i className="uil uil-minus-circle text-danger me-2" data-bs-toggle="modal" data-bs-target="#minusQty"></i>1<i className="uil uil-plus-circle text-success ms-2" data-bs-toggle="modal" data-bs-target="#plusQty"></i></td>
                                            <td>
                                                <div className="form-check form-switch">
                                                  <input className="form-check-input" type="checkbox" id="" checked />
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <a href="javascript:void(0)" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"  className="text-danger me-4"><i className="uil uil-trash-alt"></i></a>
                                                <a href="/stock-history" data-bs-toggle="tooltip" title="" data-bs-original-title="Stock History" aria-label="Stock History" className="text-success me-4"><i className="uil uil-eye"></i></a>
                                                <a href="/fresh-product" data-bs-toggle="tooltip" title="" data-bs-original-title="Edit" aria-label="Edit" className="text-info"><i className="uil uil-pen"></i></a>
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

        <div className="modal fade" id="addProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        <div className="add-product-type">
                            <a href="/existing-product" className="d-flex align-items-top">
                                <span><i className="uil uil-search-alt"></i></span>
                                <div>
                                    <h5>Search and add an existing product</h5>
                                    <h6>The product that you want to add may already exist,search by it's name or code, and add it to your catalog.</h6>
                                </div>
                            </a>
                            
                            <a href="/bulk-upload" className="d-flex align-items-top">
                                <span><i className="uil uil-plus-circle"></i></span>
                                <div>
                                    <h5>Create new product in bulk</h5>
                                    <h6>You can create products in bulk in one go.</h6>
                                </div>
                            </a>
                            
                            <a href="/fresh-product" className="d-flex align-items-top">
                                <span><i className="uil uil-plus-circle"></i></span>
                                <div>
                                    <h5>Create a new product</h5>
                                    <h6>If you can't find a product in our entire catalogue, you may create it a fresh</h6>
                                </div>
                            </a>
                        </div>
                </div>
                </div>
            </div>
            </div>
            
            <div className="modal fade" id="minusQty" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Decrease Product Quantity</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        <div className="">
                            <label className="mb-2">Quantuty</label>
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
            
            <div className="modal fade" id="plusQty" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Increase Product Quantity</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        <div className="">
                            <label className="mb-2">Quantuty</label>
                            <input type="text" className="form-control" />
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
                </div>
            </div>
            </div>
    </div>   
    
  );
}

export default Products;
