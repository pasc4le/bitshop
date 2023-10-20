import React from 'react';
import NoData from './images/no-data.jpg';

function CreateGiftCards() {
  return (
    <div className="content">
            
        <div className="row g-4 mt-0">
            
            <div className="col-12 text-end mt-0">
                <button className="btn btn-success me-2"><i className="uil uil-save me-2"></i>Save</button>
                <button className="btn btn-danger"><i className="uil uil-history me-2"></i>Reset</button>
            </div>
            
            <div className="col-12 col-md-8">
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label for="title" className="mb-1 d-block">Title</label>
                                    <input type="text" className="form-control" id="title" placeholder="Title"/>
                                </div>
                                
                                <div className="mb-3">
                                    <label className="mb-1 d-block">Description</label>
                                    <div id="editor">
                                        <p>Here goes the initial content of the editor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3">
                    <div className="card-body">
                        <h6 className="card-title mb-4">Media</h6>
                        <section>
                            <div className="cover-uploader">
                            <form id="files">
                            </form>
                            </div>
                        </section>
                        <small>For best results, use an image at least 256px by 256px in either .jpg or .png format</small>
                    </div>
                </div>
                
                <div className="card mb-3">
                    <h6>Denominations</h6>
                    <div className="row mb-2 align-items-center">
                        <div className="col-11">
                            <input type="text" className="form-control" placeholder="$10.00"/>
                        </div>
                        <div className="col-1 text-center">
                            <a href="#"><i className="uil uil-trash-alt"></i></a>
                        </div>
                    </div>
                    <div className="row mb-2 align-items-center">
                        <div className="col-11">
                            <input type="text" className="form-control" placeholder="$10.00"/>
                        </div>
                        <div className="col-1 text-center">
                            <a href="#"><i className="uil uil-trash-alt"></i></a>
                        </div>
                    </div>
                    <div className="row mb-2 align-items-center">
                        <div className="col-11">
                            <input type="text" className="form-control" placeholder="$10.00"/>
                        </div>
                        <div className="col-1 text-center">
                            <a href="#"><i className="uil uil-trash-alt"></i></a>
                        </div>
                    </div>
                    <a href="#" className='text-success'><i class="uil uil-plus-circle me-2"></i>Add Denominations</a>
                </div>
            </div>
            
            <div className="col-12 col-md-4">
                
                <div className="card mb-4">
                    <div className="card-body">
                        <h6 className="card-title mb-2">Status</h6>
                        <div className="row">
                            <div className="col-md-12">
                                <select className="form-select">
                                    <option>Active</option>
                                    <option>Draft</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title mb-4">Search engine listing</h6>
                        <p>Add a title and description to see how this product might appear in a search engine listing</p>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label for="bank_name">Page Title</label>
                                    <input type="text" className="form-control" id="bank_name" placeholder="Enter page title"/>
                                    
                                </div>
                                <div className="mb-3">
                                    <label for="meta">Meta Description</label>
                                    <textarea className="form-control" id="meta" placeholder="" rows="4"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label for="url">URL Handle</label>
                                    <input type="text" className="form-control" id="url" placeholder="Enter URL"/>
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

export default CreateGiftCards;
