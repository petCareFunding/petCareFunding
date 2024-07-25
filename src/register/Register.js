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
  const [usernameMessage, setUsernameMessage] = useState("");
  const [isUsername, setIsUsername] = useState(false);
  const [userRealnameMessage, setUserRealnameMessage] = useState("");
  const [isUserRealname, setIsUserRealname] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);


  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    setUsername(username);
    const usernameRegExp = /^[a-zA-z0-9]{6,12}$/;
 
    if (!usernameRegExp.test(username)) {
      setUsernameMessage("6-12사이 대소문자 또는 숫자를 입력해 주세요.");
      setIsUsername(false);
    } else if(!username){
      setUsernameMessage("");
      setIsUsername(true);
    }
   

  
    setUserRealname(userRealname);
    if (!userRealname) {
      setUserRealnameMessage("이름을 입력해주세요.");
      setIsUserRealname(false);
    } else {
      setUserRealnameMessage("");
      setIsUserRealname(true);
    }
  
    setPassword(password);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if (!passwordRegExp.test(password)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
  

    setConfirmPassword(confirmPassword);
    if (password !== confirmPassword || !confirmPassword) {
      setConfirmPasswordMessage("비밀번호와 일치하지 않습니다.");
      setIsConfirmPassword(false);
    } 
    else{
      setConfirmPasswordMessage("");
      setIsConfirmPassword(true);
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
     <div className='Reg'>회원가입</div>
      <form onSubmit={handleRegister}>
      <label>아이디</label>
        <div>
          <input type="text" value={username} placeholder='아이디를 입력하세요' onChange={(e) => 
            setUsername(e.target.value)} className='register-input'/>
        </div>
        <p className="message">{usernameMessage}</p>
        <label>이름</label>
        <div>
          <input type="text" value={userRealname} placeholder='이름을 입력하세요' onChange={(e) => 
            setUserRealname(e.target.value)} className='register-input'/>
        </div>
        <p className="message">{userRealnameMessage}</p>
        <label>비밀번호</label>
        <div>
          <input type={passwordType.type} value={password} placeholder='비밀번호를 입력하세요' onChange={(e) => 
            setPassword(e.target.value)} className='register-input'/>
            <p className="message">{passwordMessage}</p>
        </div>
        <label>비밀번호 확인</label>
        <div>
          <input type={passwordConfirmType.type} value={confirmPassword} placeholder='비밀번호를 한번 더 입력하세요' onChange={(e) => 
            setConfirmPassword(e.target.value)} className='register-input'/>
        </div>
        <p className="message">{confirmPasswordMessage}</p>
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
