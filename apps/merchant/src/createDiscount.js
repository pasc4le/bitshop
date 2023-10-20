import React from 'react';

function CreateDiscount() {
  return (
    <div className="content ">
        <div className="row row-cols-1 g-4 mt-0">
            <div className="col-12 col-md-6 mt-0">
                <div className="card widget mb-2">
                    <div>
                        <h5>Amount off products</h5>
                        <form>
                            <h6>Method</h6>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">
                                Discount code
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label className="form-check-label" for="flexRadioDefault2">
                                Automatic discount
                                </label>
                            </div>
                            
                            <div className="mt-3">
                                <label>Discount code</label>
                                <input type="text" className="form-control" />
                                <p>Customers must enter this code at checkout.</p>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div className="card widget mb-2">
                    <div>
                        <h5>Value</h5>
                        <form>
                            <h6>Method</h6>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked />
                                <label className="form-check-label" for="inlineRadio1">Percentage</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" for="inlineRadio2">Fixed Amount</label>
                            </div>
                            
                            <div className="mt-3">
                                <label>Percentage</label>
                                <input type="text" className="form-control" />
                            </div>
                        </form>
                    </div>
                </div>
                
                <div className="card widget mb-2">
                    <div>
                        <h5>Value</h5>
                        <form>
                            <h6>Method</h6>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked />
                                <label className="form-check-label" for="inlineRadio1">Percentage</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" for="inlineRadio2">Fixed Amount</label>
                            </div>
                            
                            <div className="mt-3">
                                <label>Percentage</label>
                                <input type="text" className="form-control" />
                            </div>
                            
                            <div className="mt-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                    
                                    Specific collections
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label className="form-check-label" for="flexRadioDefault2">
                                    
                                    Specific Peoducts
                                    </label>
                                </div>
                                
                                <div className="mt-3">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 mt-0">   
                <div className="card widget mb-2">
                    <div>
                        <h5>Customer eligibility</h5>
                        <form>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                All customers
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label className="form-check-label" for="flexRadioDefault2">
                                
                                    Specific customer segments
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                <label className="form-check-label" for="flexRadioDefault3">
                                
                                    Specific customers
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div className="card widget mb-2">
                    <div>
                        <h5>Maximum discount uses</h5>
                        <form>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">
                                
                                    Limit number of times this discount can be used in total
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label className="form-check-label" for="flexRadioDefault2">
                                
                                    Limit to one use per customer
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div className="card widget mb-2">
                    <div>
                        <h5>Combinations</h5>
                        <p>This product discount can be combined with:</p>
                        <form>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">
                                
Product discounts
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label className="form-check-label" for="flexRadioDefault2">
                                

Shipping discounts
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div className="card widget mb-2">
                    <div>
                        <h5>Active dates</h5>
                        <form>
                            <div className="row mb-2">
                                <div className="col-12 col-md-6">
                                    <div>
                                        <label>Start Date</label>
                                        <input type="date" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div>
                                        <label>Start Time</label>
                                        <input type="time" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="check"/>
                                <label className="form-check-label" for="check">
                                Set end date
                                </label>
                                
                                <div className="row mt-2">
                                <div className="col-12 col-md-6">
                                    <div>
                                        <label>End Date</label>
                                        <input type="date" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div>
                                        <label>End Time</label>
                                        <input type="time" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
  );
}

export default CreateDiscount;
