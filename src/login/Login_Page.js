import "./Login_Page.css";


const Login_Page=()=>{

    return( 
        <>
            <div className="Login_page">
                <div className="login-wrapper">
                    <h2 className="login">로그인</h2>
                    <div className="email">아이디 또는 이메일</div>
                    <div className="Email_input">
                        <input type="text" placeholder="이메일" />
                   </div>
                    <div className="password">비밀번호</div>
                    <div className="Password_input">
                        <input type="password" placeholder="비밀번호" />
                    </div>
                    <div className="search">아이디/비밀번호 찾기</div>
                    
                    <div className="submit_button">
                        <input type="submit" value="로그인" />
                    </div>
                    <div className="or">또는</div>
                    <div className="kakao_button">
                        <a href="#"><input type="submit" value="카카오 로그인" /></a>
                    </div>
                    <div className="naver_button">
                        <a href="#"><input type="submit" value="네이버 로그인" /></a>
                    </div>
                    <div className="join">
                        <div>회원이 아니시라면?</div>
                        <a href="#"><div>회원가입</div></a>
                    </div>

                </div>
                
            </div>


        </>

    )
    


}

export default Login_Page;