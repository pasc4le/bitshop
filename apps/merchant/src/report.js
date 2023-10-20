import React from 'react';

function Report() {
  return (
    <div>

    <div className="content ">
            
        <div className="row row-cols-1 g-4 mt-2">
            <div className="col-12 mt-0">
                <div className="card widget">
                    <div>
                        <div className="row mb-3">
                            <div className="col-lg-4 col-12">
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Author"/>
                            </div>
                            <div className="col-lg-4 col-12">
                                <select className="form-select">
                                    <option value="volvo">Category</option>
                                    <option value="volvo">Category 1</option>
                                    <option value="saab">Category 2</option>
                                </select>
                            </div>
                            <div className="col-lg-4 col-12">
                                <button className="btn btn-primary btn-icon w-100" data-bs-toggle="modal" data-bs-target="#addReport">
                                    <i className="uil uil-plus"></i> Add Report
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
                                            Name
                                        </th>
                                        <th>Category</th>
                                        <th>Last Viewd</th>
                                        <th>Author</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="/report-details">Payment by type</a>
                                        </td>
                                        <td>
                                            <span className="badge bg-info">Finances</span>
                                        </td>
                                        <td>
                                            Sep 15, 2023
                                        </td>
                                        <td>
                                            John Doe
                                        </td>
                                        <td className="text-end">
                                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"  className="text-danger me-4"><i className="uil uil-trash-alt"></i></a>
                                            <a href="/report-details" data-bs-toggle="tooltip" title="" data-bs-original-title="Report Details" aria-label="Report Details" className="text-success me-4"><i className="uil uil-eye"></i></a>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <a href="/report-details">Payment by type</a>
                                        </td>
                                        <td>
                                            <span className="badge bg-info">Finances</span>
                                        </td>
                                        <td>
                                            Sep 15, 2023
                                        </td>
                                        <td>
                                            John Doe
                                        </td>
                                        <td className="text-end">
                                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"  className="text-danger me-4"><i className="uil uil-trash-alt"></i></a>
                                            <a href="/report-details" data-bs-toggle="tooltip" title="" data-bs-original-title="Report Details" aria-label="Report Details" className="text-success me-4"><i className="uil uil-eye"></i></a>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <a href="/report-details">Payment by type</a>
                                        </td>
                                        <td>
                                            <span className="badge bg-info">Finances</span>
                                        </td>
                                        <td>
                                            Sep 15, 2023
                                        </td>
                                        <td>
                                            John Doe
                                        </td>
                                        <td className="text-end">
                                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"  className="text-danger me-4"><i className="uil uil-trash-alt"></i></a>
                                            <a href="/report-details" data-bs-toggle="tooltip" title="" data-bs-original-title="Report Details" aria-label="Report Details" className="text-success me-4"><i className="uil uil-eye"></i></a>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <a href="/report-details">Payment by type</a>
                                        </td>
                                        <td>
                                            <span className="badge bg-info">Finances</span>
                                        </td>
                                        <td>
                                            Sep 15, 2023
                                        </td>
                                        <td>
                                            John Doe
                                        </td>
                                        <td className="text-end">
                                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"  className="text-danger me-4"><i className="uil uil-trash-alt"></i></a>
                                            <a href="/report-details" data-bs-toggle="tooltip" title="" data-bs-original-title="Report Details" aria-label="Report Details" className="text-success me-4"><i className="uil uil-eye"></i></a>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <a href="/report-details">Payment by type</a>
                                        </td>
                                        <td>
                                            <span className="badge bg-info">Finances</span>
                                        </td>
                                        <td>
                                            Sep 15, 2023
                                        </td>
                                        <td>
                                            John Doe
                                        </td>
                                        <td className="text-end">
                                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"  className="text-danger me-4"><i className="uil uil-trash-alt"></i></a>
                                            <a href="/report-details" data-bs-toggle="tooltip" title="" data-bs-original-title="Report Details" aria-label="Report Details" className="text-success me-4"><i className="uil uil-eye"></i></a>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <a href="/report-details">Payment by type</a>
                                        </td>
                                        <td>
                                            <span className="badge bg-info">Finances</span>
                                        </td>
                                        <td>
                                            Sep 15, 2023
                                        </td>
                                        <td>
                                            John Doe
                                        </td>
                                        <td className="text-end">
                                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"  className="text-danger me-4"><i className="uil uil-trash-alt"></i></a>
                                            <a href="/report-details" data-bs-toggle="tooltip" title="" data-bs-original-title="Report Details" aria-label="Report Details" className="text-success me-4"><i className="uil uil-eye"></i></a>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <a href="/report-details">Payment by type</a>
                                        </td>
                                        <td>
                                            <span className="badge bg-info">Finances</span>
                                        </td>
                                        <td>
                                            Sep 15, 2023
                                        </td>
                                        <td>
                                            John Doe
                                        </td>
                                        <td className="text-end">
                                            <a href="javascript:void(0)" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"  className="text-danger me-4"><i className="uil uil-trash-alt"></i></a>
                                            <a href="/report-details" data-bs-toggle="tooltip" title="" data-bs-original-title="Report Details" aria-label="Report Details" className="text-success me-4"><i className="uil uil-eye"></i></a>
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


    <div class="modal fade" id="addReport" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Custom Report</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p>Start by selecting a report template. You can edit columns and filters after you create your custom report.</p>
            <form>
                <div>
                    <label>Report title</label>
                    <input type="text" name="daterangepicker" class="form-control"/>
                </div>
                <div class="mt-3">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Sales over time
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Payments by method
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                    <label class="form-check-label" for="flexRadioDefault3">
                        Taxes collected over time
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                    <label class="form-check-label" for="flexRadioDefault4">
                        Sessions over time
                    </label>
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>
    </div>

    </div>
    
  );
}

export default Report;
