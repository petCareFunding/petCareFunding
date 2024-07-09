import React from 'react';
import './EditInfo.css';

function EditInfo() {
    return (
        <div className="EditMyInfo">
            <header className="info-title">
                MEONG-GORITHM
            </header>
            <div className="form-container">
                <div className="form-section">
                    <div className="form-group">
                        <label>이름</label>
                        <input type="text" maxLength="10" placeholder="이름" />
                    </div>

                    <div className="form-group">
                        <label>전화번호</label>
                        <div className="phone-number">
                            <input type="text" maxLength="3" placeholder="000" />
                            <span>-</span>
                            <input type="text" maxLength="4" placeholder="0000" />
                            <span>-</span>
                            <input type="text" maxLength="4" placeholder="0000" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>주소</label>
                        <input type="text" placeholder="우편번호" maxLength='4'/>
                        <input type="text" placeholder="상세 주소(동, 호)" />
                    </div>

                    <div className="form-group">
                        <label>닉네임</label>
                        <input type="text" maxLength="9" placeholder="10글자 이하" />
                    </div>

                    <div className="form-group">
                        <label>비밀번호</label>
                        <input type="password" placeholder="영어 소문자+숫자 포함 6자 이상" />
                    </div>

                    <div className="form-group">
                        <label>비밀번호 확인</label>
                        <input type="password" placeholder="비밀번호 확인" />
                    </div>
                </div>
                <div className="image-section">
                    <img src="path/to/image.jpg" alt="Profile" />
                    <button className="change-image-button">프로필 변경</button>
                </div>
            </div>
            <button className="save-button">저장</button>
        </div>
    );
}

export default EditInfo;

