import React from 'react';

function ReportDetail() {
  return (
    <div className="content ">
        <div className="row">
            <div className="col-12">
                <div className="row mb-4">
                    <div className="col-12 col-md-3 mt-0">
                        <input type="text" name="" id="reportrange" className="form-control"/>
                        {/* <input type='date' className='form-control'/> */}
                    </div>
                    <div className="col-12 col-md-3 mt-0">
                        {/* <input type="text" name="daterangepicker" className="form-control"/> */}
                        <input type='date' className='form-control'/>
                    </div>
                    
                    <div className="col-12 col-md-6 text-end">
                        <a href="javascript:void(0)" className="btn btn-light me-2"><i className="uil uil-print me-1"></i>Print</a>
                        <a href="javascript:void(0)" className="btn btn-light me-2"><i className="uil uil-export me-1"></i>Export</a>
                        <a href="javascript:void(0)" className="btn btn-light"><i className="uil uil-save me-1"></i>Save As</a>
                    </div>
                </div>
                <div className="card widget">
                    <div className="card-header">
                        <h5 className="card-title">Revenue Report</h5>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-8 mt-2">
                            <div className="border-0">
                                <div className="card-body text-center">
                                    <div className="d-flex justify-content-center gap-4 align-items-center ms-auto mt-3 mt-lg-0">
                                        <div>
                                            <i className="fa fa-circle me-2 text-primary me-1 small"></i>
                                            <span>Expense</span>
                                        </div>
                                        <div>
                                            <i className="fa fa-circle me-2 text-success me-1 small"></i>
                                            <span>Earning</span>
                                        </div>
                                    </div>
                                    
                                    <div id="sales-chart"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center mt-2">
                            <div className="border-0">
                                <div className="card-body text-center">
                                    <select className="form-select">
                                            <option value="2023">2023</option>
                                            <option value="2022">2022</option>
                                            <option value="2021">2021</option>
                                    </select>
                                    
                                    <h2 className="mt-2 mb-2">$25,825</h2>
                                    <h6 className="mb-4"><strong>Budget:</strong> 56,800</h6>
                                    
                                    <div className="ms-auto" id="total-sales"></div>
                                    
                                    <button className="btn btn-outline-primary btn-icon mt-4">
                                        Increase Budget
                                    </button>
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

export default ReportDetail;
