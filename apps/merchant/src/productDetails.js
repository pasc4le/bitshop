import React from 'react';
import Product2 from './images/products/2.png';
import Product1 from './images/products/1.jpg';
import Product3 from './images/products/3.jpg';
import Product4 from './images/products/4.png';
import Product5 from './images/products/5.jpg';

function ProductDetails() {
  return (
    <div className="content">
            
        <div className="row row-cols-1 g-4 mt-1">
            <div className="col-12 mt-0">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="slick-wrapper">
                                    <div className="slider-for mb-3">
                                        <div className="slick-slide-item">
                                            <img src={Product2} className="w-100 rounded" alt="image"/>
                                        </div>
                                        <div className="slick-slide-item">
                                            <img src={Product1} className="w-100 rounded" alt="image"/>
                                        </div>
                                        <div className="slick-slide-item">
                                            <img src={Product3} className="w-100 rounded" alt="image"/>
                                        </div>
                                        <div className="slick-slide-item">
                                            <img src={Product4} className="w-100 rounded" alt="image"/>
                                        </div>
                                        <div className="slick-slide-item">
                                            <img src={Product5} className="w-100 rounded" alt="image"/>
                                        </div>
                                    </div>
                                    <div className="slick-nav-wrapper">
                                        <div className="slider-nav">
                                            <div className="slick-slide-item m-2">
                                                <img src={Product2} className="w-100 rounded" alt="image"/>
                                            </div>
                                            <div className="slick-slide-item m-2">
                                                <img src={Product1} className="w-100 rounded" alt="image"/>
                                            </div>
                                            <div className="slick-slide-item m-2">
                                                <img src={Product3} className="w-100 rounded" alt="image"/>
                                            </div>
                                            <div className="slick-slide-item m-2">
                                                <img src={Product4} className="w-100 rounded" alt="image"/>
                                            </div>
                                            <div className="slick-slide-item m-2">
                                                <img src={Product5} className="w-100 rounded" alt="image"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="mt-0">
                                    <div>
                                        <div className="small text-muted mb-2">Technology Products</div>
                                        <h2>Lenovo Ideapad 3</h2>
                                        <p>
                                            <span className="badge bg-primary total-stock">Total In stock: 100</span>
                                        </p>
                                        
                                        <div className="table-responsive mt-5" tabindex="1">
                                            <table className="table mb-0" id="recent-products">
                                                <thead>
                                                    <tr>
                                                        
                                                        <th>Searchable Tags</th>
                                                        <th className="text-end">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        
                                                        <td>
                                                            <span className="badge bg-primary me-2">Laptop</span>
                                                            <span className="badge bg-primary me-2">15 inch screen</span>
                                                            <span className="badge bg-primary me-2">8GB RAM</span>
                                                            <span className="badge bg-primary me-2">512GB SSD</span>
                                                        </td>
                                                        <td className="text-end">
                                                            <span className="badge bg-success rounded">Active</span>
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
                </div>
                
                <div className="row mt-4 product-content">
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-header">
                            <span className="product-head">Descriptions</span> 
                            </div>
                            <div className="card-body">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-header">
                            <span className="product-head">Specifications</span> 
                            </div>
                            <div className="card-body">
                                <div className="table-responsive" tabindex="1">
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
                                                    Weight
                                                </td>
                                                <td>
                                                    500Gm
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Screen Size
                                                </td>
                                                <td>
                                                    15inch
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row mt-4 product-content">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                            <span className="product-head">Varients</span> 
                            </div>
                            <div className="card-body">
                                <div className="table-responsive" tabindex="1">
                                    <table className="table mb-0" id="recent-products">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Varient
                                                </th>
                                                <th>IMAGE</th>
                                                <th>SKU</th>
                                                <th>PRICE</th>
                                                <th>SELLING PRICE</th>
                                                <th>MRP</th>
                                                <th>STOCK</th>
                                                <th>WEIGHT</th>
                                                <th>BARCODE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Color: Steel
                                                </td>
                                                <td>
                                                    <img src={Product2} width='50%' alt="image"/>
                                                </td>
                                                <td>#1010</td>
                                                <td>$500</td>
                                                <td>$550</td>
                                                <td>$550</td>
                                                <td>100</td>
                                                <td>500Gm</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Color: Black
                                                </td>
                                                <td>
                                                    <img src={Product2} width='50%' alt="image"/>
                                                </td>
                                                <td>#1010</td>
                                                <td>$500</td>
                                                <td>$550</td>
                                                <td>$550</td>
                                                <td>100</td>
                                                <td>500Gm</td>
                                                <td>-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>

    </div>
    
  );
}

export default ProductDetails;
