import React from 'react';
import Logo from './images/logo.png';

function Login(props) {
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
                                    <h1 className="display-8">Sign In</h1>
                                    <p className="text-muted">Sign in to Bitshop to continue</p>
                                </div>
                                <form className="mb-5">
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Enter email" autofocus="" required=""/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="Enter password" required=""/>
                                    </div>
                                    <div className="text-center text-lg-start">
                                        <p className="small">Can't access your account? <a href="/reset">Reset your password now</a>.</p>
                                        <a href="/" className="btn btn-primary">Sign In</a>
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
                                <p className="text-center d-block d-lg-none mt-5 mt-lg-0">
                                    Don't have an account? <a href="/signup">Sign up</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col d-none d-lg-flex border-start align-items-center justify-content-between flex-column text-center">
                        <div className="logo">
                            <img width="250" src={Logo} alt="logo"/>
                        </div>
                        <div>
                            <h3 className="fw-bold">Welcome to Bitshop!</h3>
                            <p className="lead my-5">If you don't have an account, would you like to register right now?</p>
                            <a href="/signup" className="btn btn-primary">Sign Up</a>
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

export default Login;
