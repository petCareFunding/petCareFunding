import React from "react";
import './SchoolMain.css';
import { Routes, Route, Link } from 'react-router-dom';

function SchoolMain(){
    return(
        <div>
            <header className="title">MEONG-GORITHM</header>
            <div className="search-container">
                <input type="text" className="search" placeholder="동네 검색하기.."/>
                <img src={process.env.PUBLIC_URL + './ion_search.png'} alt="돋보기아이콘" className="searchbtn"></img>
            </div>
            <hr/>
            <div className="container">
                
            </div>
        </div>
    )
};

export default SchoolMain;