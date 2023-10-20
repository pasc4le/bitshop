import React from 'react';
import Logo from './images/logo.png';

function Reset(props) {
    props.headerFooterHandler();
  return (
    <div className="form-wrapper mt-3">
        <div className="container">
            <div className="card">
                <div className="row g-0">
                    <div className="col">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="d-block d-lg-none text-center text-lg-start">
                                    <img width="120" src={Logo} alt="logo"/>
                                </div>
                                <div className="my-5 text-center text-lg-start">
                                    <h1 className="display-8">Reset Password</h1>
                                    <p className="text-muted">Type and send the email address to reset your password.</p>
                                </div>
                                <form>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Enter email" autofocus="" required=""/>
                                    </div>
                                    <div className="text-center text-lg-start">
                                        <button className="btn btn-primary mb-4">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col d-none d-lg-flex border-start align-items-center flex-column text-center">
                        <div className="logo">
                            <img width="250" src={Logo} alt="logo"/>
                        </div>
                        <div>
                            <h3 className="fw-bold">Do a different action</h3>
                            <p>You can now <a href="/login" className="btn btn-primary">Sign In</a> or <a href="/signup" className="btn btn-primary">Create an Account</a></p>
                        </div>
                    </div>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="*">Privacy Policy</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="*">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>  
    
  );
}

export default Reset;
