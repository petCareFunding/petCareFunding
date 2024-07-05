import React, { useState } from "react";
import './SchoolMain.css';
import { Routes, Route, Link } from 'react-router-dom';


function SchoolMain(){
    var [title,setTitle] = useState([
        '김포 사랑유치원','홍대 스타유치원','부평 코코유치원','잠실 야옹유치원']);
    var [fundingstate,setState] = useState(true);
    var [people,setpeople] = useState([0, 0, 0, 0]);
    var [month,setMonth] = useState([7,8,9,9]);
    var [date,setDate] = useState([22,6,16,13]);
    var [like,setLike] = useState([10,60,45,5]);
    return(
        <div>
            <header className="title">MEONG-GORITHM</header>
            <div className="search-container">
                <input type="text" className="search" placeholder="지역 검색하기.."/>
                <img src={process.env.PUBLIC_URL + './ion_search.png'} alt="돋보기아이콘" className="searchbtn"></img>
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
                            <p id="heart">❤️{like[i]}</p>
                        </div>
                        </section>
                        <hr/>
                    </div>)
                })}
            </main>
            <footer>
                <div className="footer">
                    <h2 className="title-footer">MEONG-GORITHM</h2>
                </div>
            </footer>     
        </div>
        
    )
};




    

export default SchoolMain;