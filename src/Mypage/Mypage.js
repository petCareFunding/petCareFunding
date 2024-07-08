import React from 'react';
import './MyPage.css'; 

const MyPage = () => {
  return (
      <main className="main-content">
        <h2>MY PAGE</h2>
        <div className="options">
          <div className="option">
            <img src="./img/funding.png" alt="" />
            <p>펀딩 내역</p>
          </div>
          <div className="option">
            <img src="./img/good.png" alt="" />
            <p>내 찜 목록</p>
          </div>
          <div className="option">
            <img src="./img/myimg.png" alt="" />
            <p>회원 정보 수정</p>
          </div>
        </div>
        <div className="actions">
          <button className="logout-btn">로그아웃</button>
          <button className="quit-btn">탈퇴하기</button>
        </div>
      </main>
  );
};

export default MyPage;