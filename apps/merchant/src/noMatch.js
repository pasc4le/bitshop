import React from 'react';
import NoMatchImg from './images/404.svg';

function NoMatch(props) {
    props.headerFooterHandler();
  return (
    <div className="container text-center p-5 p-md-0 mt-5">
    <div className="row mb-4">
        <div className="col-md-4 m-auto">
            <figure>
                <img className="img-fluid" src={NoMatchImg} alt="image"/>
            </figure>
        </div>
    </div>
    <h2 className="display-6">Page not found</h2>
    <p className="text-muted my-4">The page you want to go is not currently available</p>
    <div className="d-flex gap-3 justify-content-center">
        <a href="/" className="btn btn-primary">Home Page</a>
        <a href="#" className="btn bg-white">Back</a>
    </div>
</div> 
    
  );
}

export default NoMatch;
