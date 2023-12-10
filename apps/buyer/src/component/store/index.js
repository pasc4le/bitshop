import React from "react";

function Store(props) {
  const { title, categoryName, isFeatured, imgSrc, ratings, pubKey } =
    props.store;
  let ratingArr = [];

  if (ratings > 0) {
    for (let i = 0; i < ratings; i++) {
      ratingArr.push(
        <span>
          <i className="fa fa-star" aria-hidden="true"></i>
        </span>
      );
    }
  }
  return (
    <a
      href={"/store?id=" + pubKey + "&img=" + imgSrc + "&title=" + title}
      className="p-box"
    >
      <span className="p-cat mb-0 d-block">{categoryName}</span>
      {isFeatured == "Yes" ? (
        <span className="featured d-block">Featured</span>
      ) : (
        ""
      )}

      <div className="text-center">
        <img src={imgSrc} alt="Product" />
      </div>
      <p>
        <strong>{title}</strong>
      </p>
      <div className="ratings">{ratingArr.map((rating) => rating)}</div>
    </a>
  );
}

export default Store;
