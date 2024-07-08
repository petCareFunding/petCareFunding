import React, { useState, useEffect } from "react";
import PetHeader from "../Header/PetHeader";
import  "../ItemDetailPage/Detail.css"
import { useParams } from "react-router-dom";
import mockup from "../mockup";

function ItemDetail() {
  const { imageId } = useParams();
  const [image, setImage] = useState(null);

  console.log("imageId: ", imageId);

  //console.log("image.imgURL:", mockup[0].imgURL)

  useEffect(() => {
    // console.log("image.imgURL:", image.imgURL);
    const foundImage = mockup.find(
      (image) => image.id === parseInt(imageId, 10)
    );
    setImage(foundImage);
  }, [imageId]);

  //console.log("image.imgURL:", image.imgURL);

  if (!image) {
    return <div>상품을 찾을 수 없습니다</div>;
  }
  return (
    <div className='item-wrapper'>
      <PetHeader />
      <div className='item-detail' key={image.id}>
        <img src={image.imgURL} alt={image.name} />
        <div className="item-txt">
              <p className='Supplies'>{image.name}</p>
              <p className='Funding-progress'><span>펀딩 진행중:</span>{image.funding}</p>
              <p className='funding-pepole'><span>펀딩인원:</span>{image.personnel}</p>
              <p className='button'>펀딩예약</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
