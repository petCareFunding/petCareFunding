import React, { useState } from "react";
import './SchoolMain.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SchoolPost from "./SchoolPost.js";




function SchoolMain(){
    var [title,setTitle] = useState([
        '김포 사랑유치원','홍대 스타유치원','부평 코코유치원','잠실 야옹유치원']);
    var [fundingstate,setState] = useState(true);
    var [people,setpeople] = useState([0, 0, 0, 0]);
    var [month,setMonth] = useState([7,8,9,9]);
    var [date,setDate] = useState([22,6,16,13]);
    var [like,setLike] = useState([10,60,45,5]);

    const navigate = useNavigate();
    const Gopostpage = ()=>{navigate('/school/postSchoolFunding')};
    return(
        <div className="schoolmain">
            <header className="title">MEONG-GORITHM</header>
            <div className="search-container">
                <input type="text" className="search" placeholder="지역 검색하기.."/>
                <img src={process.env.PUBLIC_URL + './ion_search.png'} alt="돋보기아이콘" className="searchbtn"></img>
            </div>
            <div className="postbtn-container">
                <button id="postbtn" onClick={Gopostpage}>펀딩 등록하기</button>
            </div>
            <hr/>
            <main className="container">
                {title.map((a,i)=>{
                    return(
                    <div>
                        <section className="left" key={i}>
                        <img className="leftphotos" src = {process.env.PUBLIC_URL + './Mschoolphoto'+(i+1)+'.jpg'}></img>
                        <div className="text-container">
                            <h4>펀딩 진행중</h4>
                            <h2>{title[i]}</h2>
                            <p>펀딩인원     <span className="fund People">{people[i]}/20명</span></p>
                            <p>펀딩기간     <span className="fund Date">{month[i]}월{date[i]}일</span></p>
                            <p id="heart">❤️ 현재 {like[i]}명이 찜했어요!</p>
                        </div>
                        </section>
                        <hr/>
                    </div>)
                })}
            </main>
            <footer className="footer">
                <div className="footer-text first">
                    <p>환불규정</p>
                    <p><br/>이 상품에 대한 환불은 어쩌구저쩌구 처리해서 이렇게 저렇게 할 거고 
                        <br/>그 다음엔 요로케 저러케  할 예정입니다</p>
                </div>
                <div className="footer-text second">
                    <p>서비스 이용약관<br/>
                        마이데이터 서비스 이용약관<br/>
                        개인정보 처리방침<br/>
                        가맹점 고지사항<br/>
                        위치기반서비스 이용약관</p>
                </div>
                <div className="footer-text">
                    <h3>Follow us</h3>
                    <img src={process.env.PUBLIC_URL + './insta.png'} className="sns"></img>
                    <img src={process.env.PUBLIC_URL + './facebook.png'} className="sns"></img>
                </div>
            </footer>     
        </div>
        
    )
};





export default SchoolMain;