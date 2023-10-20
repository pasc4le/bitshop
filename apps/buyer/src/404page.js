import React from 'react';
import NoMatchBanner from './images/404.png';

function NoMatch() {
  return (
    <div className='wrap text-center mb-5 mt-3'>
        <img src={NoMatchBanner} alt="No Match"  width='30%'/>
        <div className='text-center'>
            <h4>Oops! Page Not Found</h4>
            <p>The page you're looking for might be renamed, removed <br/>or might never exists on this website.</p>
            <a href="/" className='btn btn-theme me-3'>Home</a>
            <a href="/products" className='btn btn-theme'>Products</a>
        </div>
    </div>
    
  );
}

export default NoMatch;
