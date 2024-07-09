import React, { useState, useEffect } from "react";
import PetHeader from "../Header/PetHeader";
import Footer from "../Footer/Footer"
import  "../ItemDetailPage/Detail.css"
import { useParams } from "react-router-dom";
import mockup from "../mockup";

function ItemDetail() {
  const { imageId } = useParams();
  const [image, setImage] = useState(null);

  // console.log("imageId: ", imageId);

  //console.log("image.imgURL:", mockup[0].imgURL)

  useEffect(() => {
    // console.log("image.imgURL:", image.imgURL);
    const foundImage = mockup.find(
      (image) => image.id === parseInt(imageId,10)
    );
    setImage(foundImage);
  }, [imageId]);

  // console.log("image.imgURL:", image.imgURL);
  console.log("imageId: ", imageId);

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
      <div className='detail-image'>
        <img src={image.detailURL} />
        <img src={image.detailURL02} />
        <img src={image.detailURL03} />
        <img src={image.detailURL04} />
        <img src={image.detailURL05} />
      </div>
      <Footer/>
    </div>
  );
}

export default ItemDetail;
