import "./Login_Page.css";


const Login_Page=()=>{

    return( 
        <>
            <div className="Login_page">
                <h2>로그인</h2>

                <div className="login_input">
                    <div>아이디 또는 이메일</div>
                    <input type="text" placeholder="Email" />
                    <div>비밀번호</div>
                    <input type="password" placeholder="Password" />
                    <div>아이디/비밀번호 찾기</div>
                </div>
                <div className="submit_button">
                    <input type="submit" value="로그인" />
                </div>
                <div>또는</div>
                <div className="kakao_button">
                <input type="submit" value="카카오 로그인" />
                </div>
                <div className="naver_button">
                <input type="submit" value="네이버 로그인" />
                </div>

                
            </div>


        </>

    )
    


}

export default Login_Page;