import React from "react";
import "../OrderItem/OrderItem.css";
import PayMockup from "../PayMockup";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function OrderItem() {
  const item = PayMockup;
  const [product, setProduct] = useState(null);
  const { userid } = useParams();
  console.log("userid!!", userid);
  console.log("id!!", item.order.products[0].id);

  // console.log("id", item.order.products[0].id);
  console.log("productImg",item.order.products.imeageURL)
  let orderItem = null;
  useEffect(() => {
    orderItem = item.order.products.find((product) => product.id == userid);
    console.log("orderItem", orderItem);
    setProduct(orderItem);
  }, [userid]);
  console.log("orderItem:", orderItem);
  if (!product) {
    return <div>상품을 찾을 수 없습니다</div>;
  }
  console.log("product.imageURL", item.order.products.imageURL);
  return (
    <div className="OrderItem-wrapper">
      <h1>결제하기</h1>
      <div className="order-item" key={product.id}>
        <h3>주문 상품 정보</h3>
        <img src={product.imeageURL} alt={product.name} />
        <div className="title">
          <p className="order-name">{product.name}</p>
          <p className="quantity">갯수:{product.quantity}개</p>
          <p className="price">{product.price}원</p>
        </div>
      </div>
      <div className="order-info">
        <h3>주문자 정보</h3>
        <div className="information">
          <p className="info-name">{item.order.name}</p>
          <p className="info-phone">{item.order.phone}</p>
          <p className="info-email">{item.order.email}</p>
        </div>
        <button>수정</button>
      </div>
    </div>
  );
}