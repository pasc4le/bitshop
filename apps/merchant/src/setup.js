import React from 'react';
// import Company1 from './images/company1.jpg';
// import Badge1 from './images/Positive-Review-badge.png';
// import Badge2 from './images/KYC-(merchant).png';
// import Badge3 from './images/Number-of-orders.png';

function Setup() {
  return (
    <div className="content">
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed p-0 d-block" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h5>Setup guide</h5>
                            <i className="uil uil-angle-down float-end setup-arrow"></i>
                            <p>Use this personalized guide to get your store up and running.</p>
                            <span>0 Out of 10 tasks completed</span>
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="accordion setup-guide" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <h6>Setup your online store</h6>
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div>
                                            <span className="d-block mb-3" data-bs-toggle="collapse" href="#collapseExample"  aria-expanded="true" aria-controls="collapseExample">
                                                <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultFlexCheckDefault" />
                                                <label className="form-check-label ms-2" for="defaultFlexCheckDefault">
                                                    <h6>Add your first product</h6>
                                                    <p>Write a description, add photos, and set pricing for the products you plan to sell.</p>
                                                </label>
                                                </div>
                                                <a href="fresh-product.php" className="btn btn-primary">Add Product</a>
                                                <a href="bulk-upload.php" className="btn btn-warning ms-2">Import Product</a>
                                            </span>
                                            
                                            <span className="d-block mb-3" data-bs-toggle="collapse" href="#setup2"  aria-expanded="true" aria-controls="setup2">
                                                <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="setup-guide2" />
                                                <label className="form-check-label ms-2" for="setup-guide2">
                                                    <h6>Customized your online store</h6>
                                                    <p>Choose a theme and add your logo, colors, and images to reflect your brand.</p>
                                                </label>
                                                </div>
                                                <a href="#" className="btn btn-primary">Customized Theme</a>
                                            </span>
                                            
                                            <span className="d-block mb-3" data-bs-toggle="collapse" href="#setup3"  aria-expanded="true" aria-controls="setup3">
                                                <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="setup-guide3" />
                                                <label className="form-check-label ms-2" for="setup-guide3">
                                                    <h6>Add a custom domain</h6>
                                                    <p>Your current domain is bitshop.com but you can add a custom domain to help customers find your online store.</p>
                                                </label>
                                                </div>
                                                <a href="#" className="btn btn-primary">Add Domain</a>
                                            </span>
                                            
                                            <span className="d-block mb-3" data-bs-toggle="collapse" href="#setup4"  aria-expanded="true" aria-controls="setup4">
                                                <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="setup-guide4" />
                                                <label className="form-check-label ms-2" for="setup-guide4">
                                                    <h6>Add sharing details</h6>
                                                    <p>Add a social sharing image, title, and description to showcase your online store on social media and search listings.</p>
                                                </label>
                                                </div>
                                                <a href="#" className="btn btn-primary">Add sharing details</a>
                                            </span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <h6>Store settings</h6>
                                    </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div>
                                            <span className="d-block mb-3" data-bs-toggle="collapse" href="#collapseExample"  aria-expanded="true" aria-controls="collapseExample">
                                                <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultFlexCheckDefault" />
                                                <label className="form-check-label ms-2" for="defaultFlexCheckDefault">
                                                    <h6>Name your store</h6>
                                                    <p>Your temporary store name is currently My Store. The store name appears in your admin and your online store.</p>
                                                </label>
                                                </div>
                                                <a href="add-product.php" className="btn btn-dark">Name Store</a>
                                            </span>
                                            
                                            <span className="d-block mb-3" data-bs-toggle="collapse" href="#setup2"  aria-expanded="true" aria-controls="setup2">
                                                <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="setup-guide2" />
                                                <label className="form-check-label ms-2" for="setup-guide2">
                                                    <h6>Set up a payment provider </h6>
                                                    <p>Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store.</p>
                                                </label>
                                                </div>
                                                <a href="#" className="btn btn-primary">Set up payments</a>
                                            </span>
                                            
                                            <span className="d-block mb-3" data-bs-toggle="collapse" href="#setup3"  aria-expanded="true" aria-controls="setup3">
                                                <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="setup-guide3" />
                                                <label className="form-check-label ms-2" for="setup-guide3">
                                                    <h6>Install an app to buy shipping labels</h6>
                                                    <p>Installing a shipping or fulfillment app is fully optional, but it’s a convenient way to buy and print shipping labels. Flat rates can be easily adjusted to match the prices offered by the app of your choice.</p>
                                                </label>
                                                </div>
                                                <a href="#" className="btn btn-primary">Browse shipping apps</a>
                                            </span>
                                            
                                            <span className="d-block mb-3" data-bs-toggle="collapse" href="#setup4"  aria-expanded="true" aria-controls="setup4">
                                                <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="setup-guide4" />
                                                <label className="form-check-label ms-2" for="setup-guide4">
                                                    <h6>Set your shipping rates</h6>
                                                    <p>Choose where you ship and how much you charge so your customers can see their shipping costs at checkout. </p>
                                                </label>
                                                </div>
                                                <a href="#" className="btn btn-primary">Set shipping rates</a>
                                            </span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading4">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                        <h6>Launch your online store</h6>
                                    </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div>
                                            <span className="d-block mb-3" data-bs-toggle="collapse" href="#collapseExample"  aria-expanded="true" aria-controls="collapseExample">
                                                <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultFlexCheckDefault" />
                                                <label className="form-check-label ms-2" for="defaultFlexCheckDefault">
                                                    <h6>Name your store</h6>
                                                    <p>Your temporary store name is currently My Store. The store name appears in your admin and your online store.</p>
                                                </label>
                                                </div>
                                                <a href="add-product.php" className="btn btn-dark">Name Store</a>
                                            </span>
                                            
                                            <span className="d-block mb-3" data-bs-toggle="collapse" href="#setup2"  aria-expanded="true" aria-controls="setup2">
                                                <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="setup-guide2" />
                                                <label className="form-check-label ms-2" for="setup-guide2">
                                                    <h6>Set up a payment provider </h6>
                                                    <p>Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store.</p>
                                                </label>
                                                </div>
                                                <a href="#" className="btn btn-primary">Set up payments</a>
                                            </span>
                                            
                                            <span className="d-block mb-3" data-bs-toggle="collapse" href="#setup3"  aria-expanded="true" aria-controls="setup3">
                                                <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="setup-guide3" />
                                                <label className="form-check-label ms-2" for="setup-guide3">
                                                    <h6>Install an app to buy shipping labels</h6>
                                                    <p>Installing a shipping or fulfillment app is fully optional, but it’s a convenient way to buy and print shipping labels. Flat rates can be easily adjusted to match the prices offered by the app of your choice.</p>
                                                </label>
                                                </div>
                                                <a href="#" className="btn btn-primary">Browse shipping apps</a>
                                            </span>
                                            
                                            <span className="d-block mb-3" data-bs-toggle="collapse" href="#setup4"  aria-expanded="true" aria-controls="setup4">
                                                <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="setup-guide4" />
                                                <label className="form-check-label ms-2" for="setup-guide4">
                                                    <h6>Set your shipping rates</h6>
                                                    <p>Choose where you ship and how much you charge so your customers can see their shipping costs at checkout. </p>
                                                </label>
                                                </div>
                                                <a href="#" className="btn btn-primary">Set shipping rates</a>
                                            </span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
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

export default Setup;
