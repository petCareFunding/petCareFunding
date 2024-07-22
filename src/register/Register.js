import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [userRealname, setUserRealname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordType, setPasswordType] = useState({ type: 'password', visivle: false});
  const [passwordConfirmType, setPasswordConfirmType] = useState({ type: 'password', visivle: false});
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username) {
      alert("아이디를 입력하세요.");
      return;
    }
    else if (!userRealname) {
      alert("이름을 입력하세요.");
      return;
    }
    else if (!password) {
      alert("비밀번호를 입력하세요.");
      return;
    }
    else if (!confirmPassword) {
      alert("비밀번호 확인을 입력하세요.");
      return;
    }
    else if (password !== confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 일치해야합니다.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/register', { username, userRealname, 
        password, confirmPassword });
        console.log('Registration successful', response.data);
        navigate('/login'); 
      
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const handleKakaoLogin = () => {
    window.location.href = 'http://localhost:5000/auth/kakao';
  };

  const handleNaverLogin = () => {
    window.location.href = 'http://localhost:5000/auth/naver';
  };

  const handlePasswordType = e => {
    setPasswordType(() => {
      if (!passwordType.visivle) {
        return { type: 'text' , visivle: true};
      }
      return { type: 'password', visivle: false};
    })
  }

  const handlePasswordConfirmType = e => {
    setPasswordConfirmType(() => {
      if (!passwordConfirmType.visivle) {
        return { type: 'text' , visivle: true};
      }
      return { type: 'password', visivle: false};
    })
  }

  return (
    <div>
      <div className='register-container'>
      <h1>회원가입</h1>
      <form onSubmit={handleRegister}>
      <label>아이디</label>
        <div>
          <input type="text" value={username} placeholder='아이디 또는 이메일을 입력하세요' onChange={(e) => 
            setUsername(e.target.value)} className='register-input'/>
        </div>
        <label>이름</label>
        <div>
          <input type="text" value={userRealname} placeholder='이름을 입력하세요' onChange={(e) => 
            setUserRealname(e.target.value)} className='register-input'/>
        </div>
        <label>비밀번호</label>
        <div>
          <input type={passwordType.type} value={password} placeholder='비밀번호를 입력하세요' onChange={(e) => 
            setPassword(e.target.value)} className='register-input'/>
        </div>
        <label>비밀번호 확인</label>
        <div>
          <input type={passwordConfirmType.type} value={confirmPassword} placeholder='비밀번호를 한번 더 입력하세요' onChange={(e) => 
            setConfirmPassword(e.target.value)} className='register-input'/>
        </div>
        <div className='password-visible-icon' onClick={handlePasswordType}>
          { passwordType.visivle ? <FaEye size="25px"/> : <FaEyeSlash size="25px"/>}
        </div>
        <div className='passwordConfirm-visible-icon' onClick={handlePasswordConfirmType}>
          { passwordConfirmType.visivle ? <FaEye size="25px"/> : <FaEyeSlash size="25px"/>}
        </div>
        <button type="submit" className='register-btn'>가입 완료하기</button>
      </form>
      <h2>간편가입</h2>
      <button onClick={handleKakaoLogin} className='kakao-btn'>카카오로 회원가입</button>
      <button onClick={handleNaverLogin} className='naver-btn'>네이버로 회원가입</button> 
      </div>
    </div>
  );
};

export default Register;
