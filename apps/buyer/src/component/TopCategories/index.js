import React from 'react';

function TopCategories(props) {
    const { title, imgSrc } = props.category;
  return (
    <div className='shop-box bg-white'>
        <span className='d-inline-block me-3'>
            <img src={imgSrc} alt='Shop'/>
        </span>
        <div className='shop-details'>
            <h6>{ title }</h6>
        </div>
    </div>
    
  );
}

export default TopCategories;
