import React, { useState, useEffect } from "react";
import PetHeader from "../Header/PetHeader";
import Footer from "../Footer/Footer";
import "../ItemDetailPage/Detail.css";
import { useParams } from "react-router-dom";
import mockup from "../mockup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons/faShop";
import { useNavigate } from "react-router-dom";

function ItemDetail() {
  const { imageId } = useParams();
  const [image, setImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);


  const navigate = useNavigate();

  const [resId, setResId] = useState('');
  console.log("imageId: ", imageId);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    const foundImage = mockup.find(
      (image) => image.id === parseInt(imageId, 10)
    );
    setImage(foundImage);
  }, [imageId]);



  const buttonclick = () => {
    navigate(`/PayMentPage/${imageId}`);
  };

  console.log("imageId: ", imageId);

  if (!image) {
    return <div>상품을 찾을 수 없습니다</div>;
  }
  return (
    <div className="item-wrapper">
      <PetHeader />
      <div className="itemdetail" key={image.id}>
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
              <p className='option-price'>
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
                <span className='option-price'>가격:</span>
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
                <span className='option-price'>가격:</span>
                {image.price}원
              </p>
              <p>{image.optionTitle03}</p>
              <hr />
              <p>{image.detailTitle}</p>
              <p>{image.delivery}</p>
            </div>
          </div>

          <div className="funding-shop">
            <FontAwesomeIcon icon={faShop} className="shop-icon" size="3x" />
            <p onClick={buttonclick} className='funding-but'>펀딩구매하기</p>
        </div>
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
  )
}

export default ItemDetail;
