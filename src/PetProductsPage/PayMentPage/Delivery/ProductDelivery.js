import React, { useEffect, useState } from "react";
import PayMockup from "../PayMockup";
import "./Delivery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

export default function ProductDelivery() {
  const order = PayMockup;
  const today = new Date();
  const year = today.getFullYear();
  const moth = today.getMonth() + 1;
  const day = today.getDay() + 10;

  // console.log("order", order.order.name);
  return (
    <>
      <div className="Delivery">
        <p className="Delivery-title">배송정보</p>
        <div className="delivery-info">
          <p className="delivery-name">{order.order.name}</p>
          <p className="delivery-phone">{order.order.phone}</p>
          <p className="delivery-address">{order.order.shippingAddress}</p>
        </div>
        <div className='memo'>
          <p className="delivery-memo">배송메모</p>
          <select>
            <option>배송메모를 선택해 주세요</option>
            <option>문앞에 놔두어 주세요 </option>
            <option>빠른 배송 부탁드립니다 </option>
            <option>경비실에 보관해 주세요 </option>
          </select>
          <button className='memo-button'>변경</button>
        </div>
      </div>
    </>
  );
}
