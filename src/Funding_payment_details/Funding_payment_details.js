import React, { createElement, useState } from 'react';
import './Funding_payment_details.css';

const Funding_payment_details = () => {
  return (
    <div className="Funding_payment_detai">
       <h1 className="title">MEONG-GORITHM</h1>
      <h2 className="subtitle">결제 내역</h2>
      <div className="content">
        <div className="section">
          <div className="icon">🛒</div>
          <div className="details">
            <p>결제 완료 : 건</p>
            <p>취소 진행중 : 건</p>
            <p>취소 완료 : 건</p>
          </div>
        </div>
        <div className="section">
          <div className="icon">🔄</div>
          <div className="details">
            <p>취소요청 : 건</p>
            <p>반품요청 : 건</p>
            <p>반품수거중 : 건</p>
            <p>반품수거완료 : 건</p>
          </div>
        </div>
        <div className="section">
          <div className="icon">🔧</div>
          <div className="details">
            <p>반품완료 : 건</p>
            <p>유지보수 : 건</p>
            <p>정비 : 건</p>
          </div>
        </div>
        <div className="section">
          <div className="icon">📦</div>
          <div className="details">
            <p>미처리 완료 : 건</p>
            <p>처리 : 건</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funding_payment_details;
