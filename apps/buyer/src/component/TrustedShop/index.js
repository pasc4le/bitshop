import React from 'react';
import badge1 from '../../images/badges/badge1.png';
import badge2 from '../../images/badges/badge2.png'; 

function TrustedShop(props) {
    const { title, imgSrc, ratings, total_rating } = props.shop;
    let ratingArr = [];

    if(ratings> 0){
        for (let i = 0; i < ratings; i++) {
            ratingArr.push(<span><i className="fa fa-star" aria-hidden="true"></i></span>);
        }
    }
  return (

    <div className='shop-box trusted-shop-wrap'>
      <span className='d-inline-block me-3'>
          <img src={imgSrc} alt='Shop'/>
      </span>
      <div className='shop-details'>
          <h6>{title}</h6>
          <div className="ratings d-inline-block">
              {
                ratingArr.map( (rating) => rating)
              }
          </div>
          <span>{total_rating} ratings</span>
          <span>
              <img src={badge1} alt='Products'/>
              <img src={badge2} alt='Products'/>
              <img src={badge1} alt='Products'/>
          </span>
      </div>
    </div>
    
  );
}

export default TrustedShop;
