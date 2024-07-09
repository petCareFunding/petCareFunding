import "./Join_Page.css";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";

const Join_Page=()=>{
    return(
        <>
              <div className="Join_page">
                <div className="join-wrapper">
                    <h2 className="join_Title">회원가입</h2>
                    <div className="j_email">아이디 또는 이메일</div>
                    <div className="joinEmail_input">
                        <input type="text" placeholder="이메일 입력" />
                   </div>
                   <div className="emailCheck_button">
                        <input type="submit" value="인증하기"/>
                   </div>
                   <div className="name">이름</div>
                    <div className="name_input">
                        <input type="name" placeholder="이름 입력" />
                    </div>
                    <div className="joinPassword">비밀번호</div>
                    <div className="joinPassword_input">
                        <input type="password" placeholder="비밀번호 입력" />
                    </div>
                    <div className="joinpasswordCheck">비밀번호 확인</div>
                    <div className="PasswordCheck_input">
                        <input type="password" placeholder="비밀번호 확인" />
                    </div>
                    
                    <div className="joinSubmit_button">
                        <input type="submit" value="가입 완료하기" />
                    </div>
                    <div className="easyJoin">간편가입</div>
                    <div className="join_kakao-img"><RiKakaoTalkFill size="35px"/></div>
                    <div className="joinKakao_button">
                    <a href="#"><input type="submit" value=" 카카오로 회원가입" /></a>
                    </div>
                    <div className="join_naver-img"><SiNaver size="29px"/></div>
                    <div className="joinNaver_button">
                        <a href="#"><input type="submit" value="네이버로 회원가입" /></a>
                    </div>
                    
                    
                    

                </div>
                
            </div>
        </>
    )
}
export default Join_Page;