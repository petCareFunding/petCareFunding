import "./JoinComplete_Page.css";
import Main from '../MainPage/Main';
import {Link} from "react-router-dom";

const JoinComplete_Page=()=>{
    
    return(
        <>
            <div className="join_complete">회원 가입 완료</div>
            <div className="welcome">집사님 환영합니다.</div>
            <a href="http://localhost:3000/"><button className="moveMain">메인페이지로 이동하기</button></a>
            <div className="guideSentence">반려동물을 위한 많은 상품이 준비되어있어요 !</div>
            <a href="#"><button className="moveFunding">반려동물 펀딩 상품 보러가기</button></a>
        </>
    )
}

export default JoinComplete_Page;