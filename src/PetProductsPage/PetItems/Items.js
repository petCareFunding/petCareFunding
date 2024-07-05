import React from "react";
import "../PetItems/Items.css";

export default function PetItems({ images }) {
  return (
    <div className="image-zigzag">
      {images &&
        images.map((image, id) => (
          <div className="item" key={image.id}>
            <img src={image.imgURL} alt={image.name} />
            <div className="item-detail first">
              <p className="item-name">{image.name}</p>
              <p className="item-funding">
                <span className="funding">펀딩:</span> {image.funding}
              </p>
              <p className="FundingPeriod">
                <span className="period">펀딩기간:</span> {image.FundingPeriod}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
