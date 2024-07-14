import React, { createElement,useState } from 'react';
import './EditInfo.css';


function EditInfo() {

    
    const [imageSrc, setImageSrc] = useState(null);

    const handleImageChange = (e)=>{
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
            
        reader.onload = (event)=>{
            setImageSrc(event.target.result);
        }
    };
    
    const [befpassword, setBefpassword] = useState('');
    const [aftpassword, setAftpassword] = useState('');


    const handleBeforepw = (e)=>{
        setBefpassword(e.target.value)
    };
    const handleAfterpw = (e)=>{
        setAftpassword(e.target.value)
    };

    const handlePwChange = (e)=>{
        e.preventDefault();
        if(befpassword != aftpassword){
            alert('비밀번호가 일치하지 않습니다')
        }
        else{
            alert('일치합니다')
        }
    };

    return (
        <div className="EditMyInfo">
            <header className="info-title">
                MEONG-GORITHM
            </header>
            <div className="form-container">
                <div className="form-section">
                    <div className="form-sub">
                        <label>이름</label>
                        <input type="text" maxLength="10" />
                    </div>

                    <div className="form-sub">
                        <label>전화번호</label>
                        <div className="phone-number">
                            <input type="text" maxLength="3" placeholder="010" />
                            <span>-</span>
                            <input type="text" maxLength="4" placeholder="0000" />
                            <span>-</span>
                            <input type="text" maxLength="4" placeholder="0000" />
                        </div>
                    </div>

                    <div className="form-sub">
                        <label>주소</label>
                        <input type="text" placeholder="우편번호" maxLength='5'/>
                        <input type="text" placeholder="상세 주소(동, 호)" />
                    </div>

                    <div className="form-sub">
                        <label>닉네임</label>
                        <input type="text" maxLength="10" placeholder="10글자 이하" />
                    </div>

                    <div className="form-sub">
                        <label>비밀번호</label>
                        <input type="text" placeholder="영어 소문자+숫자 포함 6자 이상" 
                         value={befpassword}  onChange={handleBeforepw} id='beforepassword' />
                    </div>

                    <div className="form-sub">
                        <label>비밀번호 확인</label>
                        <input type="password" placeholder="비밀번호 확인" id='checkpassword'
                          value={aftpassword}   onChange={handleAfterpw} />
                        <button id='cpwbtn' onClick={handlePwChange}>비밀번호 확인</button>
                    </div>
                </div>
                <div className="profile-section">
                    <div id='myprofile-container'>
                        <div className='circle'>{<img src = {imageSrc ? imageSrc : null } id='circle'/>}</div>
                        <label className='pickphoto' htmlFor='myprofile'>사진 선택하기</label>
                    </div>
                    <input type='file' id='myprofile' name='myprofile' accept='image/*' 
                                 onChange = {handleImageChange} style={{display:'none'}} />       
                </div>
            </div>
            <button className="save-button" onClick={SaveAlert}>저장</button>
        </div>
    );
};

function SaveAlert(){
    return(
        alert('저장이 완료되었습니다')
    )
};



export default EditInfo;

