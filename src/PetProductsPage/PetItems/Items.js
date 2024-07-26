import React from "react";
import "../PetItems/Items.css";
import { Link } from "react-router-dom";

export default function PetItem({ product }) {
  const { prodImageURL, prodname, funding, fundingperiod, prodid } = product;
  console.log("product:", product);
  console.log(
    "prodImageURL, prodname, funding, prodid: ",
    prodImageURL,
    prodname,
    funding,
    prodid
  );
  // ./public/img/dogFood.jpg
  const imgURL_full = `http://localhost:5001/${prodImageURL}`; // http://localhost:5000/dogFood.jpg

  return (
    <div className="image-zigzag">
      <Link to={`/products/${prodid}`}>
        <div className="pet-img">
          <img src={imgURL_full} alt={prodname} />
          <div className="item-detail first second">
            <li className="funding-title">펀딩중</li>
            <li className="item-name">{prodname}</li>
            <li className="item-funding">
              <span className="funding">펀딩:</span> {funding}명
            </li>
            <p className="FundingPeriod">
              <span className="period">펀딩기간:</span>
              {fundingperiod}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
