import React, { Component } from 'react';
import logo from './images/logo.png';
import p1 from './images/details/p1.png';
import p2 from './images/details/p2.png';
import p3 from './images/details/p3.png';
import p from './images/details/p.png';
import compnyLogo from './images/details/c-logo.png';
import badge1 from './images/badges/badge1.png';
import badge2 from './images/badges/badge2.png'; 
import review1 from './images/details/r-img1.png';
import review2 from './images/details/r-img2.png'; 
import review3 from './images/details/r-img3.png';
import review4 from './images/details/r-img4.png'; 
import {Nav, NavItem, NavLink, TabContent, TabPane, Row, Col} from 'reactstrap';

class Details extends Component {
    constructor(){
        super()
        this.state = {activeTab:"1"}
      }
      isActive=(active)=> {
        this.setState(prevState => ({
            activeTab: active
        }));
      }
    render() {
        const {activeTab}=this.state;
  return (
    <div className='container mt-3'>
        <nav className='breadcrumb-wrap' aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item mid"><a href="#">Accessories</a></li>
                <li className="breadcrumb-item mid"><a href="#">Headphone Accessories</a></li>
                <li className="breadcrumb-item active" aria-current="page">Smart Phones & Tablets</li>
            </ol>
        </nav>

        <div className='row'>
            <div className='col-12 col-md-7'>
                <div className='product-img-wrap'>
                    <div className='row'>
                        <div className='col-12 col-md-2 nav-img'>
                            <div className='image-wrap active'>
                                <img src={p1} alt='Products'/>
                            </div>
                            <div className='image-wrap'>
                                <img src={p2} alt='Products'/>
                            </div>
                            <div className='image-wrap'>
                                <img src={p1} alt='Products'/>
                            </div>
                            <div className='image-wrap'>
                                <img src={p3} alt='Products'/>
                            </div>
                        </div>
                        <div className='col-12 col-md-10 text-center'>
                            <img src={p} alt='Products'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-5'>
                <p className='product-cat mb-0'>Smart Phones & Tablets</p>
                <h4>Smartphone 6S 32GB LTE</h4>
                <span>
                    <img src={compnyLogo} alt='Company Logo'/>
                    <span><strong>B-Premio</strong></span>
                </span>
                <span>
                    <img src={badge1} alt='Products'/>
                    <img src={badge2} alt='Products'/>
                    <img src={badge1} alt='Products'/>
                </span>
                <div className='mt-2'>
                    <span className="featured trusted d-inline-block"><img src={logo} alt='Badge' width='20%' className='me-1' />Trusted</span>
                    <div className="ratings d-inline-block">
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                    </div>
                    <span>(112 ratings)</span>
                </div>
                <h6 className='mt-2'><strong>0.020127 BTC</strong></h6>
                <p className='mt-2'>Colour: <strong>Black</strong></p>
                <div className='select-color mt-2'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label className="form-check-label" for="inlineRadio1"><span className='p-color c1'></span></label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" checked/>
                        <label className="form-check-label" for="inlineRadio2"><span className='p-color c2'></span></label>
                    </div>
                </div>
                <p className='mt-2'>Size: <strong>64GB</strong></p>
                <div className='select-size mt-2'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="select_size" id="size1" value="option1" checked/>
                        <label className="form-check-label" for="size1"><span className='size s1'>64GB</span></label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="select_size" id="size2" value="option2"/>
                        <label className="form-check-label" for="size2"><span className='size s2'>256GB</span></label>
                    </div>
                </div>
                <form className='mt-2 cart-wrap'>
                    <input type='number' className='form-control' placeholder='Qty: 1' />
                    <button className='btn btn-theme'>Add to Cart</button>
                </form>
                <p className='mt-2'>Availability: <span className='text-success'>46 in stock</span></p>
                <p className='mt-2 mb-1'>Delivery:</p>
                <form className='avl-delvry'>
                    <i className="uil uil-location-point"></i>
                    <input type='text' className='form-control' placeholder='Enter Delivery pincode'/>
                    <span><a href='#'>Check</a></span>
                </form>                
            </div>
        </div>

        <div className='row mt-4'>
            <div className='col-12'>
            <div className='details-tab'>
                <Nav tabs>
                    <NavItem>
                    <NavLink onClick={()=>this.isActive("1")}
                        className={`${activeTab==="1"?'active': ''}`} active={activeTab==="1"}
                    >
                        Description
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink onClick={()=>this.isActive("2")}
                        className={`${activeTab==="2"?'active': ''}`} active={activeTab==="2"}
                    >
                        Specification
                    </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <div>
                                <p>You can get a lot done every day using the REDMI 10 Power Smartphone and make your life easy. It is integrated with a powerful battery with a capacity of up to 6000 mAh, which lets you operate it for a long time without worrying about any interruptions. Also, this smartphone is built with a large screen of up to 17.04 cm (6.71), </p>
                                <p>pictures, videos, apps, and more.Built with a battery capacity of up to 6000 mAh, the REDMI 10 Power Smartphone is ideal for you if you like to continuously stream, work, play games, and listen to music on the go. Also, its up to 18 W fast charging features helps juice up this smartphone in a short span.Boasting a large screen of up to 17.04 cm (6.71), this smartphone lets you enjoy watching movies, easily check documents, and do much more.The Lenovo Tab M8 is an impressive little tablet. Sleek metal construction, a spectacular IPS HD display, and Dolby Audio-tuned speaker, come together to bring you enjoyable entertainment with luxury appeal. Powered by a 2.0 GHz quad-core processor and latest Android 9 Pie, supporting dual band WiFi and LTE connectivity with calling support and up to 18 hours of battery life, this powerful tablet will keep you engaged all day with your favorite apps from the Google Play Store. And to protect your eyes.</p>
                            </div>
                        </Col>
                    </Row>
                    </TabPane>
                    <TabPane tabId="2">
                    <div className="row">
                          <div className="col-12 col-md-6">
                              <div className="table-responsive">
                                  <table className="table table-bordered table-collapsed w-100">
                                      <tbody>
                                          <tr className="ds6">
                                              <td className="ds3 w12_mn">Minimum Order Quantity</td>
                                              <td className="ds3 w15_mn">1 Piece</td>
                                          </tr>
                                          <tr>
                                              <td>Usage/Application</td>
                                              <td>Household</td>
                                          </tr>
                                          <tr>
                                              <td>Model Name/Number</td>
                                              <td>170</td>
                                          </tr>
                                          <tr>
                                              <td>Running Surface</td>
                                              <td>1250 x 450 m.m.</td>
                                          </tr>
                                          <tr>
                                              <td>Types Of Treadmill</td>
                                              <td>Motorized, Folding</td>
                                          </tr>
                                          <tr>
                                              <td>Features</td>
                                              <td>Heart Rate Monitor, Docks for Electronics, Electronic Programming</td>
                                          </tr>
                                          <tr>
                                              <td>Motor Type</td>
                                              <td>AC</td>
                                          </tr>
                                          <tr>
                                              <td>Display</td>
                                              <td>Blue Backlit LCD Display</td>
                                          </tr>
                                          <tr>
                                              <td>Usage Type</td>
                                              <td>Heavy Duty Home Use, AC Treadmill</td>
                                          </tr>
                                        </tbody>
                                    </table>
                              </div>
                          </div>
                          
                          <div className="col-12 col-md-6">
                              <div className="table-responsive">
                                  <table className="table table-bordered table-collapsed w-100">
                                      <tbody>
                                          <tr>
                                              <td>Brand</td>
                                              <td>Pro Bodyline Fitness</td>
                                              </tr>
                                          <tr>
                                              <td>Motor</td>
                                              <td>4 H.P. Peak Duty,2 H.P.</td>
                                          </tr>
                                          <tr>
                                              <td>Speed</td>
                                              <td>0.8 to 16 km/hr.</td>
                                          </tr>
                                          <tr>
                                              <td>Elevation</td>
                                              <td>15 Levels Auto Incline</td>
                                          </tr>
                                          <tr>
                                              <td>Deck</td>
                                              <td>Hydraulic Suspension Shock Absorbent</td>
                                          </tr>
                                          <tr>
                                              <td>Belt Size</td>
                                              <td>2650 x 400 m.m.</td>
                                          </tr>
                                          <tr>
                                              <td>Max User Weight</td>
                                              <td>Upto 120 Kg.</td>
                                          </tr>
                                          <tr>
                                              <td>Machine Weight</td>
                                              <td>81 Kg.</td>
                                          </tr>
                                          <tr>
                                              <td>Dimensions</td>
                                              <td>1760 X 740 X 1300 m.m. (LXWXH)</td>
                                          </tr>
                                    </tbody>
                                </table>
                              </div>
                          </div>
                      </div>
                    </TabPane>
                </TabContent>
                </div>
            </div>
        </div>

        <div className='row mt-4 align-items-center'>
            <div className='col-12 col-md-9'>
                <h6>Reviews</h6>
            </div>
            <div className='col-12 col-md-3'>
                <label className='mb-1'>Filter By Rating</label>
                <select className='form-select'>
                    <option>Rating</option>
                    <option>5 Star first</option>
                    <option>1 Star first</option>
                </select>
            </div>
        </div>

        
        <div className='row'>
            <div className='col-12'>
                <div className='review-section'>
                    <div>
                        <span className='avatar me-3'><i className="uil uil-user"></i></span>
                        <strong>Jagadish</strong>
                    </div>
                    <div className='review-wrap mt-2'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-2'>classNamey Product</p>
                            <div className="ratings review-rating">
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </div>
                        <p className='review-content'>First up all at this price range it's really good value for mVery good
                        quality smart phone.The Smart have fingerprint sensor. But this phone is
                        little bit of lagging when the network not coming properly.oney products</p>

                        <div className='mt-2 review-img'>
                            <span className='me-3'>
                                <img src={review1} alt='Review Image'/>
                            </span>
                            <span className='me-3'>
                                <img src={review2} alt='Review Image'/>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='review-section'>
                    <div>
                        <span className='avatar me-3'><i className="uil uil-user"></i></span>
                        <strong>Ajay Ghosh</strong>
                    </div>
                    <div className='review-wrap mt-2'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-2'>Pretty Good</p>
                            <div className="ratings review-rating">
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </div>
                        <p className='review-content'>Good product with good price...although front
                        camera is ok while back camera is good..battery life is super. I love this
                        phone on this price range, overall awesome phone Good product with good price</p>

                        <div className='mt-2 review-img'>
                            <span className='me-3'>
                                <img src={review3} alt='Review Image'/>
                            </span>
                            <span className='me-3'>
                                <img src={review4} alt='Review Image'/>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='review-section'>
                    <div>
                        <span className='avatar me-3'><i className="uil uil-user"></i></span>
                        <strong>Jagadish</strong>
                    </div>
                    <div className='review-wrap mt-2'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-2'>classNamey Product</p>
                            <div className="ratings review-rating">
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                        </div>
                        <p className='review-content'>First up all at this price range it's really good value for mVery good
                        quality smart phone.The Smart have fingerprint sensor. But this phone is
                        little bit of lagging when the network not coming properly.oney products</p>
                    </div>
                </div>

                <a href='#' className='mt-3'>See all reviews</a>
            </div>
        </div>
    </div>
    
  );
  }    
}

export default Details;
