import React from "react";
import { useNavigate } from "react-router";

function Product(props) {
  const { id, title, categoryName, isFeatured, imgSrc, detailsUrl, ratings } =
    props.product;

  if (!props.product) {
    console.error("Product prop is missing"); // Log an error if props.product is missing
  } else {
    console.log(props.product);
  }

  const navigate = useNavigate();
  let ratingArr = [];

  if (ratings > 0) {
    for (let i = 0; i < ratings; i++) {
      ratingArr.push(
        <span key={i}>
          <i className="fa fa-star" aria-hidden="true"></i>
        </span>
      );
    }
  }

  const handleClick = () => {
    navigate(`/details?id=${id}`);
  };

  return (
    <div onClick={handleClick} className="p-box">
      <span className="p-cat mb-0 d-block">{categoryName}</span>
      {isFeatured === "Yes" ? (
        <span className="featured d-block">Featured</span>
      ) : (
        ""
      )}

      <div className="text-center">
        <img src={imgSrc} alt={title} />
      </div>
      <p>
        <strong>{title}</strong>
      </p>
      <div className="ratings">
        {ratingArr.map((rating, index) => (
          <React.Fragment key={index}>{rating}</React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Product;
