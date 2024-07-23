import React from "react";
import "../PetItems/Items.css";
import { Link } from "react-router-dom";

export default function PetItem({ product }) {
  const { imgURL, name, funding, fundingperiod, id } = product;
  //console.log("product", product);
  console.log("imgURL, name, funding, id ", imgURL, name, funding, id);
  // ./public/img/dogFood.jpg
  const imgURL_full = `http://localhost:5000/${imgURL}`;  // http://localhost:5000/dogFood.jpg


  return (
    <div className="image-zigzag">
      <Link to={`/ItemsPage/${id}`}>
        <div className='pet-img'>
        <img src={imgURL_full} alt={name} />
        <div className="item-detail first second">
          <li className="funding-title">펀딩중</li>
          <li className="item-name">{name}</li>
          <li className="item-funding">
            <span className="funding">펀딩:</span> {funding}명
          </li>
          <p className="FundingPeriod">
            <span className="period">펀딩기간:</span>{fundingperiod}
          </p>
        </div>
        </div>
      </Link>
    </div>
  );
}
