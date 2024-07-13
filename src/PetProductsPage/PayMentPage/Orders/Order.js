import React from "react";
import PayMockup from "../PayMockup";
import "../Orders/Order.css";

export default function Order() {
  const { order } = PayMockup;
  return (
    <>
      <div className="order_pay">
        <p className="order-title">구매자 정보</p>
            <div className='order'>
              <p className='order-name2'>{order.name}</p>
              <p className='order-email'>{order.email}</p>
              <p className='order-phone'>{order.phone}</p>
            </div>
            <button>수정</button>
      </div>
    </>
  );
}
