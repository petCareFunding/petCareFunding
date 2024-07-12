import './SchoolPost.css';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SchoolPost(){
    
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [person, setPerson] = useState('');
    const [fundingDate1, setFundingDate1] = useState('');
    const [fundingDate2, setFundingDate2] = useState('');
    const [info, setInfo] = useState('');
    
    const handleSubmit = ()=>{
        if( !title|| !person|| ! fundingDate1|| !fundingDate2|| !info){
            setShow(true);
            alert('모든 칸을 채워주세요');
        }
        else{
            alert('펀딩이 등록되었습니다');
        };
    }; 
    
    const navigate = useNavigate();
    const Backschool = ()=>{navigate('/school')};

    const [postImg, setPostImg] = useState([]); //이미지 파일 자체의 상태
    const [preview, setPreview] = useState([]); //이미지 파일의 url 담기 


    const handleUpload = (e)=>{
        const fileArr = e.target.files;
        setPostImg(Array.from(fileArr)); //배열로 만들어서 state에 업데이트
        
        const fileUrl = []; //url 넣어줄 빈 배열 생성
        //파일의 개수만큼 반복문 실행

        for(let i =0; i < fileArr.length; i++){
            let reader = new FileReader(); //데이터 읽기
            reader.onload = ()=>{          //읽은 데이터에 이벤트걸어서 데이터를 문자열로 반환하게함(콜백함수)
                fileUrl[i] = reader.result;
                setPreview([...fileUrl]);
            }
            reader.readAsDataURL(fileArr[i]);
        }
    };

        


    return(
        <div className='container schoolpost'>
            <div className='photo-container'>
                {/* <h3>사진</h3> */}
                <div className='upload-container'>
                    <label className='photo-fill-btn' htmlFor = 'uploadPhoto'>
                      사진 업로드
                    </label>
                    <input type='file' accept='image/*' style={{display:'none'}} 
                         multiple required onChange={handleUpload} /> 
                    {
                        preview.map((image,i)=>{
                            return(
                            <div className='selected' key={i}>
                                <img src={image}></img>
                            </div>
                            )
                        }) 
                    }
                </div>
            </div>
            <div id='title-container'>
                    <h3>글 제목</h3>
                    <input type='text' id='title' placeholder='지역 + 유치원이름' 
                     value = {title} onChange={(e)=> setTitle(e.target.value)}></input>
            </div>
            <div id='person-container'>
                    <h3>판매자 정보</h3>
                    <input id='person' placeholder='유치원이름 기재' 
                      value = {person} onChange={(e)=> setPerson(e.target.value)}></input>
            </div>
            <div id='date-container'>
                    <h3>펀딩기간</h3>
                    <input type='date' id='fundingDate1' 
                      value = {fundingDate1} onChange={(e)=> setFundingDate1(e.target.value)}></input> 
                    <h2>~</h2>
                    <input type='date' id='fundingDate2' 
                      value = {fundingDate2} onChange={(e)=> setFundingDate2(e.target.value)}></input>
            </div>
            <div id='info-container'>
                    <h3>상품설명</h3>
                    <textarea id='info' placeholder='상품에 대해 설명해주세요..' 
                      value = {info} onChange={(e)=> setInfo(e.target.value)}></textarea>
            </div>
            <button id='uploadbtn' onClick={handleSubmit}>등록하기</button>
            <button id='uploadbtn' onClick={Backschool}>글 목록</button>
        </div>
    )
    

};

export default SchoolPost;