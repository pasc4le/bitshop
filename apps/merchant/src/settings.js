import React from 'react';
import DemoCompany from './images/company1.jpg';

function Settings() {
  return (
    <div className="content ">
        
        <div className="row flex-column-reverse flex-md-row mt-0">
            <div className="col-md-8">
                <div className="tab-content mt-0" id="myTabContent">
                    <div className="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="mb-4">
                            <div className="card mb-2">
                                <div>
                                    <section>
                                    <div className="cover-uploader">
                                        <form id="files">
                                        
                                        </form>
                                    </div>
                                    </section>
                                    <div className="avatar-upload mt-2 profile-bg">
                                        <div className="avatar-preview">
                                            <div id="imagePreview" style={{
                                                backgroundImage: `url(${DemoCompany})`,
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'center',
                                                width: '100%',
                                            }}>                                                
                                            </div>
                                        </div>
                                        <div className="ms-5">
                                            <h4>Arobit Business</h4>
                                        <div className="avatar-edit btn btn-primary">
                                            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                                            <label for="imageUpload">Change Image</label>
                                        </div>
                                        <button className="btn btn-outline-danger btn-icon ms-2" data-bs-toggle="tooltip" title="" data-bs-original-title="Remove Avatar">
                                            <i class="uil uil-trash-alt me-0"></i>
                                        </button>
                                        <p className="small text-muted mt-3">For best results, use an image at least
                                        256px by 256px in either .jpg or .png format</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card mb-2">
                                <div>
                                    <h6 className="card-title mb-4">Contact Information</h6>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row mb-3">
                                                <div className="col-12 col-md-4">
                                                    <label className="form-label">Contact Name <span className="text-danger">*</span></label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <input type="text" className="form-control" placeholder="Enter contact person name" value="" />
                                                    <p className="error-text text-danger mt-1">This field is required</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-12 col-md-4">
                                                    <label className="form-label">Contact Number <span className="text-danger">*</span></label>
                                                </div>
                                                <div className="col-12 col-md-5 position-relative">
                                                    <input type="text" className="form-control" placeholder="Enter contact person no." value="" />
                                                    <div className="Input-info">We will reach out to this phone for any account related issues.</div>
                                                    <p className="error-text text-danger mt-1">This field is required</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-12 col-md-4">
                                                    <label className="form-label">Email</label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <input type="text" className="form-control" value="demo@gmail.com" readonly />
                                                    <span className="success-text text-success mt-1">Email verified successfully</span>
                                                </div>
                                            </div>
                                            
                                            <div className="text-end mt-2">
                                                <button className="btn btn-success save"><i className="uil uil-check me-2"></i>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
                        <div className="card">
                            <div>
                                <h6 className="card-title mb-2">Business Overview</h6>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-4">
                                        <label className="form-label">Business Type <span className="text-danger">*</span></label>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <select className="form-select">
                                            <option>All</option>
                                            <option>Marketting</option>
                                            <option>Products</option>
                                            <option>Services</option>
                                            <option>Trading</option>
                                        </select>
                                        <p className="error-text text-danger mt-1">This field is required</p>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-12 col-md-4">
                                        <label className="form-label">Business Description <span className="text-danger">*</span></label>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <textarea className="form-control" rows="4"></textarea>
                                        <p className="error-text text-danger mt-1">This field is required</p>
                                        <p className="text-grey mb-0 mt-4">Please give a brief description of the nature of your business.
                                        Please include examples of products you sell, the business category
                                        you operate under, your customers and the channels you primarily
                                        use to conduct your business(Website, offline retail etc).</p>
                                    </div>
                                </div>
                                <div className="text-end mt-2">
                                    <button className="btn btn-success save"><i className="uil uil-check me-2"></i>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="category" role="tabpanel" aria-labelledby="category-tab">
                        <div className="card">
                            <div>
                                <h6 className="card-title mb-2">Business Category</h6>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-4">
                                        <label className="form-label">Business Category <span className="text-danger">*</span></label>
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <select className="select2-example form-select" multiple>
                                            <option value="">Electronics</option>
                                            <option value="">Fashion</option>
                                            <option value="">Daily Essentials</option>
                                            <option value="">Books</option>
                                            <option value="">Home Appliances</option>
                                        </select>
                                        <p className="error-text text-danger mt-1">This field is required</p>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-4">
                                        <label className="form-label">Sub Category <span className="text-danger">*</span></label>
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <select className="select2-example form-select" multiple> 
                                        <optgroup label="Electronics">
                                            <option value="">Mobiles</option>
                                            <option value="">Laptops</option>
                                            <option value="">Tablets</option>
                                        </optgroup>
                                        <optgroup label="Home Appliances">
                                            <option value="mercedes">Refrigarator</option>
                                            <option value="audi">Microwave</option>
                                            <option>Induction Oven</option>
                                            <option>OTG</option>
                                            <option>Mixer Grinder</option>
                                        </optgroup>
                                        </select>
                                        <p className="error-text text-danger mt-1">This field is required</p>
                                    </div>
                                </div>
                                <div className="text-end mt-2">
                                    <button className="btn btn-success save"><i className="uil uil-check me-2"></i>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="notification-settings" role="tabpanel" aria-labelledby="notification-settings-tab">
                        <div className="card">
                            <div>
                                <h6 className="card-title mb-2">Business Details</h6>
                                <div>
                                    
                                    <div className="row mb-3">
                                        <div className="col-12 col-md-4">
                                            <label className="form-label" for="c_name">Business Name <span className="text-danger">*</span></label>
                                        </div>
                                        <div className="col-12 col-md-5 position-relative">
                                            <input type="text" className="form-control" id="c_name" placeholder="Business Name"/>
                                            <div className="Input-info">
                                                The brand name that your customers are familiar with. It should either be similar to your registered business name or website name.
                                            </div>
                                            <p className="error-text text-danger mt-1">This field is required</p>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="row mb-3">
                                        <div className="col-12 col-md-4">
                                            <label className="form-label" for="name">Owner's Name <span className="text-danger">*</span></label>
                                        </div>
                                        <div className="col-12 col-md-5 position-relative">
                                            <input type="text" className="form-control" id="name" placeholder="Owner's Name"/>
                                            <div className="Input-info">
                                                The name of the owner of the same business name that you have registered
                                            </div>
                                            <p className="error-text text-danger mt-1">This field is required</p>
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-3">
                                        <div className="col-12 col-md-4">
                                            <label className="form-label" for="cin">CIN <span className="text-danger">*</span></label>
                                        </div>
                                        <div className="col-12 col-md-5 position-relative">
                                            <input type="text" className="form-control" id="cin" placeholder="CIN"/>
                                            <div className="Input-info">
                                                Example : U67190TN2014PTC096978
                                            </div>
                                            <p className="error-text text-danger mt-1">This field is required</p>
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-3">
                                        <div className="col-12 col-md-4">
                                            <label className="form-label" for="b_label">Billing Label <span className="text-danger">*</span></label>
                                        </div>
                                        <div className="col-12 col-md-5 position-relative">
                                            <input type="text" className="form-control" id="b_label" placeholder="Billing Label"/>
                                            <div className="Input-info">
                                                The brand name that your customers are familiar with. It should either be similar to your registered business name or website name.
                                            </div>
                                            <p className="error-text text-danger mt-1">This field is required</p>
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-3">
                                        <div className="col-12 col-md-4">
                                            <label className="form-label" for="address1">Address Line 1 <span className="text-danger">*</span></label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input type="text" className="form-control" id="address1" placeholder="Address Line 1"/>
                                            <p className="error-text text-danger mt-1">This field is required</p>
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-3">
                                        <div className="col-12 col-md-4">
                                            <label className="form-label" for="address2">Address Line 2 <span className="text-danger">*</span></label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input type="text" className="form-control" id="address2" placeholder="Address Line 2"/>
                                            <p className="error-text text-danger mt-1">This field is required</p>
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-3">
                                        <div className="col-12 col-md-4">
                                            <label className="form-label" for="p_code">Pincode <span className="text-danger">*</span></label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input type="text" className="form-control" id="p_code" placeholder="Pincode"/>
                                            <p className="error-text text-danger mt-1">This field is required</p>
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-3">
                                        <div className="col-12 col-md-4">
                                            <label className="form-label" for="City">City <span className="text-danger">*</span></label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <select className="form-select" id="City" placeholder="City">
                                                <option>Select City</option>
                                                <option>Delhi</option>
                                                <option>Kolkata</option>
                                                <option>Mumbai</option>
                                            </select>
                                            <p className="error-text text-danger mt-1">This field is required</p>
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-3">
                                        <div className="col-12 col-md-4">
                                            <label className="form-label" for="State">State <span className="text-danger">*</span></label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <select className="form-select" id="State" placeholder="State">
                                                <option>Select State</option>
                                                <option>Delhi</option>
                                                <option>West Bengal</option>
                                                <option>Gujrat</option>
                                            </select>
                                            <p className="error-text text-danger mt-1">This field is required</p>
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-3">
                                        <div className="col-12 col-md-4">
                                            <label className="form-label" for="country">Country <span className="text-danger">*</span></label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <select className="form-select" id="country" placeholder="Country">
                                                <option>Select Country</option>
                                                <option>USA</option>
                                                <option>UK</option>
                                                <option>India</option>
                                            </select>
                                            <p className="error-text text-danger mt-1">This field is required</p>
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-3">
                                        <div className="col-12 col-md-4">
                                            <p>GST <span className="text-danger">*</span></p>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="hav_gst" checked/>
                                            <label className="form-check-label" for="hav_gst">
                                                We have a registered GST
                                            </label>
                                            </div>
                                            <div className="form-check form-check-inline mt-2">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="no_gst" />
                                            <label className="form-check-label" for="no_gst">
                                                We don't have a GST
                                            </label>
                                            </div>
                                            
                                            <div className="mt-3 position-relative gst-has">
                                                <input type="text" className="form-control" placeholder="Enter GST No."/>
                                                <div className="Input-info">
                                                    Bank A/c Beneficiary Name should be the same as Business Name.
                                                </div>
                                            </div>
                                            
                                            <div className="mt-3 no-gst">
                                                <span className="text-grey">You can add your GST details later once you are registered</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="text-end mt-2">
                                        <button className="btn btn-success save"><i className="uil uil-check me-2"></i>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="integrations" role="tabpanel" aria-labelledby="integrations-tab">
                        <div className="card">
                            <div>
                                <h6 className="card-title mb-4">Bank Information</h6>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-4">
                                        <label className="form-label">Beneficiary Name <span className="text-danger">*</span></label>
                                    </div>
                                    <div className="col-12 col-md-5 position-relative">
                                        <input className="form-control" type="text" placeholder="Enter beneficiary name"/>
                                        <div className="Input-info">
                                            Bank A/c Beneficiary Name should be the same as Business Name.
                                        </div>
                                        <p className="error-text text-danger mt-1">This field is required</p>
                                        <p className="mt-3 mb-0 text-grey">We will deposit a small amount of money in your account to verify the account.</p>
                                    </div>
                                    
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-4">
                                        <label className="form-label">Branch IFSC Code <span className="text-danger">*</span></label>
                                    </div>
                                    <div className="col-12 col-md-5 position-relative">
                                        <input className="form-control" type="text" placeholder="Enter IFSC Code"/>
                                        <div className="Input-info">
                                            <ul>
                                                <li><b>Bank:</b> HDFC Bank</li>
                                                <li><b>Branch:</b> MUMBAI - EAST ROAD - MAHARASHTRA</li>
                                                <li><b>City:</b> MUMBAI</li>
                                                <li><b>State:</b> MAHARASHTRA</li>
                                            </ul>
                                        </div>
                                        <p className="error-text text-danger mt-1">This field is required</p>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-4">
                                        <label className="form-label">SWIFT Code <span className="text-danger">*</span></label>
                                    </div>
                                    <div className="col-12 col-md-5 position-relative">
                                        <input className="form-control" type="text" placeholder="Enter SWIFT Code"/>
                                        <div className="Input-info">
                                            Bank A/c Beneficiary Name should be the same as Business Name.
                                        </div>
                                        <p className="error-text text-danger mt-1">This field is required</p>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-4">
                                        <label className="form-label">Account Number <span className="text-danger">*</span></label>
                                    </div>
                                    <div className="col-12 col-md-5 position-relative">
                                        <input className="form-control" type="text" placeholder="Enter account no."/>
                                        <div className="Input-info">
                                            Should be a current bank account of the company to which your payments will be settled.
                                        </div>
                                        <p className="error-text text-danger mt-1">This field is required</p>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-4">
                                        <label className="form-label">Re-enter Account Number</label>
                                    </div>
                                    <div className="col-12 col-md-5 position-relative">
                                        <input className="form-control" type="text" placeholder="Re-enter account no."/>
                                        <div className="Input-info">
                                            Please re-enter the bank account number.
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-end mt-2">
                                    <button className="btn btn-success save"><i className="uil uil-check me-2"></i>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="document" role="tabpanel" aria-labelledby="document-tab">
                        <div className="card">
                            <div className="doc-wrap">
                                <h6 className="card-title mb-4">Documents Verification</h6>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-4">
                                        <label className="form-label">Authorized Signatory's Address Proof <span className="text-danger">*</span></label>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <select className="form-select">
                                            <option>Goverment ID</option>
                                            <option>Passport</option>
                                        </select>
                                        <p className="error-text text-danger mt-1">This field is required</p>
                                    </div>
                                </div>
                                
                                <div className="row mb-3 doc-upload">
                                    <div className="col-12 col-md-4">
                                        <p className="form-label">Govt. ID Front <span className="text-danger">*</span></p>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <input className="form-control" type="file"/>
                                        <label><span className="me-2"><i className="uil uil-file-plus-alt"></i></span><span>Drop file here or <span className="text-primary">Click here</span></span></label>
                                        <p className="error-text text-danger mt-1">This field is required</p>
                                    </div>
                                    
                                </div>
                                
                                <div className="row mb-3 doc-upload">
                                    <div className="col-12 col-md-4">
                                        <p className="form-label">Govt. ID Back <span className="text-danger">*</span></p>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <input className="form-control" type="file"/>
                                        <label><span className="me-2"><i className="uil uil-file-plus-alt"></i></span><span>Drop file here or <span className="text-primary">Click here</span></span></label>
                                        <p className="error-text text-danger mt-1">This field is required</p>
                                    </div>
                                </div>
                                
                                <div className="row mb-3 doc-upload">
                                    <div className="col-12 col-md-4">
                                        <p className="form-label">Passport First Page <span className="text-danger">*</span></p>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <input className="form-control" type="file"/>
                                        <label><span className="me-2"><i className="uil uil-file-plus-alt"></i></span><span>Drop file here or <span className="text-primary">Click here</span></span></label>
                                        <p className="error-text text-danger mt-1">This field is required</p>
                                    </div>
                                </div>
                                
                                <div className="row mb-3 doc-upload">
                                    <div className="col-12 col-md-4">
                                        <p className="form-label">Passport Last Page <span className="text-danger">*</span></p>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <input className="form-control" type="file"/>
                                        <label><span className="me-2"><i className="uil uil-file-plus-alt"></i></span><span>Drop file here or <span className="text-primary">Click here</span></span></label>
                                        <p className="error-text text-danger mt-1">This field is required</p>
                                    </div>
                                </div>
                                
                                <div className="row mb-3 doc-upload">
                                    <div className="col-12 col-md-4">
                                        <p className="form-label">Business Registration Proof <span className="text-danger">*</span></p>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <input className="form-control" type="file"/>
                                        <label><span className="me-2"><i className="uil uil-file-plus-alt"></i></span><span>Drop file here or <span className="text-primary">Click here</span></span></label>
                                        <p className="error-text text-danger mt-1">This field is required</p>
                                        <p className="text-grey mt-2">Upload the scan of Certificate of Incorporation</p>
                                    </div>
                                </div>
                                
                                <div className="text-end mt-2">
                                    <button className="btn btn-success save"><i className="uil uil-check me-2"></i>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card sticky-top mb-2 mb-md-0 mt-0">
                    <div>
                        <ul className="nav nav-pills flex-column gap-2" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">
                                    <i className="uil uil-user me-2"></i> Contact Info
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="password-tab" data-bs-toggle="tab" href="#password" role="tab" aria-controls="password" aria-selected="false">
                                    <i className="uil uil-briefcase-alt me-2"></i> Business Overview
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="category-tab" data-bs-toggle="tab" href="#category" role="tab" aria-controls="category" aria-selected="false">
                                    <i className="uil uil-create-dashboard me-2"></i> Business Category
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="notification-settings-tab" data-bs-toggle="tab" href="#notification-settings" role="tab" aria-controls="notification-settings" aria-selected="false">
                                    <i className="uil uil-bell me-2"></i> Business Details
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="integrations-tab" data-bs-toggle="tab" href="#integrations" role="tab" aria-controls="integrations" aria-selected="false">
                                    <i className="uil uil-desktop-alt me-2"></i> Bank Account
                                </a>
                            </li>
                            <li className="nav-item" role="document">
                                <a className="nav-link" id="document-tab" data-bs-toggle="tab" href="#document" role="tab" aria-controls="document" aria-selected="false">
                                    <i className="uil uil-check-circle me-2"></i> Documents Verification
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default Settings;
