import "./Main.css"
import {Link} from "react-router-dom";
export default function Main() {
    return(
        <div className="mainContainer">
            <h1>MEONG-GORITHM</h1>
            <nav className="navFirst">
                <ul>
                    <li><a href="/mypage">마이페이지</a></li>
                </ul>
            </nav>
            <h3>Have a puppy day !</h3>
            <nav className="navSecond">
                <ul>
                    <li><a href="/school">유치원 펀딩</a></li>
                    <li><a href="/ItemsPage">반려동물 용품 펀딩</a></li>
                    <li><a href="/funeral">장묘 예약하기</a></li>
                    <li><a href="/mypage">내 결제내역 & 찜</a></li>
                </ul>
            </nav>
        </div>
    )
};