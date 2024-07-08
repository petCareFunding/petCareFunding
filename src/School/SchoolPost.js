import './SchoolPost.css';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SchoolPost(){
    var [show,setShow] = useState(false);
    const [photoURL, setPhotoURL] = useState('');
    const showAlert = ()=>{
        const uploadPhoto = document.querySelector('#uploadPhoto').value;
        const title = document.querySelector('#title').value;
        const person = document.querySelector('#person').value;
        const fundingDate1 = document.querySelector('#fundingDate1').value;
        const fundingDate2 = document.querySelector('#fundingDate2').value;
        const info = document.querySelector('#info').value;
        if(!uploadPhoto|| !title|| !person|| ! fundingDate1|| !fundingDate2|| !info){
            setShow(true);
            alert('모든 칸을 채워주세요');
        }
        else{
            alert('펀딩이 등록되었습니다');
        }
    };
    
    const navigate = useNavigate();
    const Backschool = ()=>{navigate('/school')};

    return(
        <div className='container schoolpost'>
            <div className='photo-container'>
                {/* <h3>사진</h3> */}
                <div className='upload-container'>
                    <label className='photo-fill-btn' htmlFor = 'uploadPhoto'>
                      사진 업로드
                    </label>
                    <input type='file' accept='.png, .jpeg, .jpg' id='uploadPhoto' style={{display:'none'}} required/> 
                    <div className='selected'></div>           
                </div>
            </div>
            <div id='title-container'>
                    <h3>글 제목</h3>
                    <input type='text' id='title' placeholder='지역 + 유치원이름'></input>
            </div>
            <div id='person-container'>
                    <h3>판매자 정보</h3>
                    <input id='person' placeholder='유치원이름 기재'></input>
            </div>
            <div id='date-container'>
                    <h3>펀딩기간</h3>
                    <input type='date' id='fundingDate1'></input> 
                    <h2>~</h2>
                    <input type='date' id='fundingDate2'></input>
            </div>
            <div id='info-container'>
                    <h3>상품설명</h3>
                    <textarea id='info' placeholder='상품에 대해 설명해주세요..'></textarea>
            </div>
            <button id='uploadbtn' onClick={showAlert}>등록하기</button>
            <button id='uploadbtn' onClick={Backschool}>글 목록</button>
        </div>
    )
};



export default SchoolPost;