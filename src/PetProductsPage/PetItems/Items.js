import React from "react";
import "../PetItems/PetItems.css";

export default function PetItems({ images = [] }) {
  return (
    <div className="image-zigzag">
      {images &&
        images.map((image,id) => (
          <img
            key={image.id}
            src={image.imgURL}
            name={image.name}
            funding={image.funding}
            fundingperiod={image.FundingPeriod}
          />
        ))}
    </div>
  );
}
