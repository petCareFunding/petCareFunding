import React, { useState, useEffect } from "react";
import PetHeader from "../Header/PetHeader";
import Footer from "../Footer/Footer";
import "../ItemDetailPage/Detail.css";
import { useParams } from "react-router-dom";
import mockup from "../mockup";

function ItemDetail() {
  const { imageId } = useParams();
  const [image, setImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  // console.log("imageId: ", imageId);

  //console.log("image.imgURL:", mockup[0].imgURL)

  useEffect(() => {
    // console.log("image.imgURL:", image.imgURL);
    const foundImage = mockup.find(
      (image) => image.id === parseInt(imageId, 10)
    );
    setImage(foundImage);
  }, [imageId]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // console.log("image.imgURL:", image.imgURL);
  console.log("imageId: ", imageId);

  if (!image) {
    return <div>상품을 찾을 수 없습니다</div>;
  }
  return (
    <div className="item-wrapper">
      <PetHeader />
      <div className="item-detail" key={image.id}>
        <img src={image.imgURL} alt={image.name} />
        <div className="item-txt">
          <p className="Supplies">{image.name}</p>
          <p className="Funding-progress">
            <span>펀딩 진행중:</span>
            {image.funding}
          </p>
          <p className="funding-pepole">
            <span>펀딩인원:</span>
            {image.personnel}
          </p>
          <span className="option-title">옵션선택</span>
          <div className="funding-option">
            <div
              className={`option-one ${
                selectedOption === "option-one" ? "selected" : ""
              }`}
              onClick={() => handleOptionClick("option-one")}
            >
              <p>
                <span>가격:</span>
                {image.price}원
              </p>
              <p>{image.optionTitle}</p>
              <hr />
              <p>{image.detailTitle}</p>
              <p>{image.delivery}</p>
            </div>
            <div
              className={`option-two ${
                selectedOption === "option-two" ? "selected" : ""
              }`}
              onClick={() => handleOptionClick("option-two")}
            >
              <p>
                <span>가격:</span>
                {image.price}원
              </p>
              <p>{image.optionTitle02}</p>
              <hr />
              <p>{image.detailTitle}</p>
              <p>{image.delivery}</p>
            </div>
            <div
              className={`option-three ${
                selectedOption === "option-three" ? "selected" : ""
              }`}
              onClick={() => handleOptionClick("option-three")}
            >
              <p>
                <span>가격:</span>
                {image.price}원
              </p>
              <p>{image.optionTitle03}</p>
              <hr />
              <p>{image.detailTitle}</p>
              <p>{image.delivery}</p>
            </div>
          </div>
          <div></div>
          <p className="button">펀딩예약</p>
        </div>
      </div>
      <div className="detail-image">
        <img src={image.detailURL} />
        <img src={image.detailURL02} />
        <img src={image.detailURL03} />
        <img src={image.detailURL04} />
        <img src={image.detailURL05} />
      </div>
      <Footer />
    </div>
  );
}

export default ItemDetail;
