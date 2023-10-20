import React from 'react';
import review1 from '../../images/details/r-img1.png';
import review2 from '../../images/details/r-img2.png'; 
import review3 from '../../images/details/r-img3.png';
import review4 from '../../images/details/r-img4.png'; 

function Reviews(props) {
  const { userName, reviewHighlight, fullReview, ratings } = props.review;
  let ratingArr = [];

    if(ratings> 0){
        for (let i = 0; i < ratings; i++) {
            ratingArr.push(<span><i className="fa fa-star" aria-hidden="true"></i></span>);
        }
    }
  return (
    <div className='review-section'>
      <div>
          <span className='avatar me-3'><i className="uil uil-user"></i></span>
          <strong>{userName}</strong>
      </div>
      <div className='review-wrap mt-2'>
          <div className='d-flex justify-content-between align-items-center'>
              <p className='mb-2'>{reviewHighlight}</p>
              <div className="ratings review-rating">
                {
                  ratingArr.map( (rating) => rating)
                }
              </div>
          </div>
          <p className='review-content'>{fullReview}</p>

          <div className='mt-2 review-img'>
              <span className='me-3'>
                  <img src={review1} alt='Review Image'/>
              </span>
              <span className='me-3'>
                  <img src={review2} alt='Review Image'/>
              </span>
          </div>
      </div>
    </div>
    
  );
}

export default Reviews;
