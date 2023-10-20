import React from 'react';
import Product from './component/product/index';
import p1 from './images/products/p1.png';
import p2 from './images/products/p2.png';
import p3 from './images/products/p3.png';
import p4 from './images/products/p4.png';
import p5 from './images/products/p5.png';
import p6 from './images/products/p6.png';
import p7 from './images/products/p7.png';
import p8 from './images/products/p8.png';
import p9 from './images/products/p9.png';

// products
const products = [
    {
        title: 'Universal Headphones Case in Black',
        categoryName: 'Headphone Cases',
        imgSrc: p1,
        isFeatured: 'Yes',
        ratings: 4
    },
    {
        title: 'Universal Headphones Case in Black',
        categoryName: 'Headphone Cases',
        imgSrc: p2,
        isFeatured: 'No',
        ratings: 2
    },
    {
        title: 'Universal Headphones Case in Black',
        categoryName: 'Headphone Cases',
        imgSrc: p3,
        isFeatured: 'Yes',
        ratings: 4
    },
    {
        title: 'Universal Headphones Case in Black',
        categoryName: 'Headphone Cases',
        imgSrc: p4,
        isFeatured: 'No',
        ratings: 3
    },
    {
        title: 'Universal Headphones Case in Black',
        categoryName: 'Headphone Cases',
        imgSrc: p5,
        isFeatured: 'No',
        ratings: 4
    },
    {
        title: 'Universal Headphones Case in Black',
        categoryName: 'Headphone Cases',
        imgSrc: p6,
        isFeatured: 'No',
        ratings: 3
    },
    {
        title: 'Universal Headphones Case in Black',
        categoryName: 'Headphone Cases',
        imgSrc: p7,
        isFeatured: 'Yes',
        ratings: 2
    },
    {
        title: 'Universal Headphones Case in Black',
        categoryName: 'Headphone Cases',
        imgSrc: p8,
        isFeatured: 'Yes',
        ratings: 4
    },
    {
        title: 'Universal Headphones Case in Black',
        categoryName: 'Headphone Cases',
        imgSrc: p9,
        isFeatured: 'Yes',
        ratings: 4
    },
    {
        title: 'Universal Headphones Case in Black',
        categoryName: 'Headphone Cases',
        imgSrc: p7,
        isFeatured: 'Yes',
        ratings: 2
    },
    {
        title: 'Universal Headphones Case in Black',
        categoryName: 'Headphone Cases',
        imgSrc: p1,
        isFeatured: 'Yes',
        ratings: 4
    },
    {
        title: 'Universal Headphones Case in Black',
        categoryName: 'Headphone Cases',
        imgSrc: p2,
        isFeatured: 'No',
        ratings: 2
    },
    {
        title: 'Universal Headphones Case in Black',
        categoryName: 'Headphone Cases',
        imgSrc: p3,
        isFeatured: 'Yes',
        ratings: 4
    },
    {
        title: 'Universal Headphones Case in Black',
        categoryName: 'Headphone Cases',
        imgSrc: p4,
        isFeatured: 'No',
        ratings: 3
    },
    {
        title: 'Universal Headphones Case in Black',
        categoryName: 'Headphone Cases',
        imgSrc: p5,
        isFeatured: 'No',
        ratings: 4
    }
];

function ProductPage() {
  return (
    <div className='p-main-wrap container mt-3'>
        <nav className='breadcrumb-wrap' aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Smart Phones & Tablets</li>
            </ol>
        </nav>

        <div className='category-wrap'>
            <h4>Smart Phones & Tablets <span>(Total Product 30)</span></h4>

            <div className='filter-wrap mt-4'>
                <div className='row'>
                    <div className='col-12 col-md'>
                        <select className='form-select'>
                            <option>Default Sorting</option>
                        </select>
                    </div>
                    <div className='col-12 col-md-2'>
                        <select className='form-select'>
                            <option>Brands</option>
                            <option>iPhone</option>
                            <option>Samsung</option>
                            <option>Oppo</option>
                            <option>Vivo</option>
                        </select>
                    </div>
                    <div className='col-12 col-md-2'>
                        <select className='form-select'>
                            <option>Colors</option>
                            <option>Black</option>
                            <option>Grey</option>
                            <option>White</option>
                            <option>Lime Green</option>
                            <option>Ocean Blue</option>
                            <option>Purple</option>
                        </select>
                    </div>
                    <div className='col-12 col-md-2'>
                        <select className='form-select'>
                            <option>Price</option>
                            <option>5000 - 10000</option>
                            <option>10000 - 15000</option>
                            <option>15000 - 20000</option>
                            <option>20000 - 25000</option>
                            <option>25000 - 30000</option>
                            <option>30000 - 40000</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='product-wrap mt-4'>
                <div className='row'>
                    {products.map(product => {
                        return (
                            <div className='col-6 col-md-3 col-lg-2'>
                                <Product product={product} />
                            </div>

                        );
                    })
                    }
                    {/* <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p1} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Computer Cases</span>
                            <div className='text-center'>
                                <img src={p2} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Printers</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p3} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Cameras</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p4} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Smartphones</span>
                            <div className='text-center'>
                                <img src={p5} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div> */}
                </div>
                {/* <div className='row'>
                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p8} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p9} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p5} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p1} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Computer Cases</span>
                            <div className='text-center'>
                                <img src={p2} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Smartphones</span>
                            <div className='text-center'>
                                <img src={p5} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p6} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p7} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p8} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>

                    <div className='col-6 col-md'>
                        <a href='#' className='p-box'>
                            <span className='p-cat mb-0 d-block'>Laptops</span>
                            <span className='featured d-block'>Featured</span>
                            <div className='text-center'>
                                <img src={p9} alt="Product" />
                            </div>                            
                            <p><strong>Laptop WiFi CX61 2QF 15.6″ 4210M</strong></p>
                            <div className='ratings'>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </a>
                    </div>
                </div> */}
                </div>
            </div>
        </div>
    // </div>
    
  );
}

export default ProductPage;
