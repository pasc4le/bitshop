import React from 'react';
import Logo from './images/logo.png';

function Signup(props) {
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
                                    <h1 className="display-8">Create Account</h1>
                                    <p className="text-muted">You can create a free account now</p>
                                </div>
                                <form className="mb-5">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Enter fullname" autofocus="" required=""/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Enter email" required=""/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="Enter password" required=""/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="Re-enter password" required=""/>
                                    </div>
                                    <div className="text-center text-lg-start">
                                        <button className="btn btn-primary">Sign Up</button>
                                    </div>
                                </form>
                                <div className="social-links justify-content-center">
                                    <a href="#">
                                        <i className="uil uil-google"></i> Sign in with Google
                                    </a>
                                    <a href="#">
                                        <i className="uil uil-facebook-f"></i> Sign in with Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col d-none d-lg-flex border-start align-items-center justify-content-between flex-column text-center">
                        <div className="logo">
                            <img width="250" src={Logo} alt="logo"/>
                        </div>
                        <div>
                            <h3 className="fw-bold">Welcome to Bitshop!</h3>
                            <p className="lead my-5">Do you already have an account?</p>
                            <a href="/login" className="btn btn-primary">Login</a>
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
    </div> 
    
  );
}

export default Signup;
