import "./Main.css"
import {Link} from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function Main() {
    return(
        <div className="MainPage">
            <Parallax pages={3}>
                <ParallaxLayer id="field3" 
                    style={{backgroundImage:`url(${process.env.PUBLIC_URL}/Main_img/field3.jpg)`}}
                    offset ={0}
                    speed={0.3}
                    factor={4} 
                    >
                </ParallaxLayer>
                <header>
                    <MainHeader/>
                </header>
                <ParallaxLayer 
                    speed={0.3}
                    sticky={{ start: 0.1, end: 1.2 }}
                    style={{ textAlign: 'center' }}>
                    <img src={process.env.PUBLIC_URL + '/Main_img/cat.gif'} style={{ zIndex: 10 }} />
                </ParallaxLayer> 
                <ParallaxLayer  speed={1} className="Main-pupday" style={{ zIndex: 5 }}>
                    <p id="have">Have a </p>
                    <p id="puppy">puppy</p> <span id="day">day!</span>
                </ParallaxLayer>
            </Parallax>

            <footer className="Main-footer">
                <MainFooter/>
            </footer>
        </div>
        
    )
};



function MainFooter(){
    return(
        <div className="footer-meong">
            <p id="main-footer-title">MEONG-GORITHM</p>
        </div>
    )
};

function MainHeader(){
    return(
        <div className="MainAllFooter">
            <nav className="navFirst">
                <ul>
                    <li><a href="/mypage">마이페이지</a></li>
                    <li><a href="/login">로그인&회원가입</a></li>
                </ul>
            </nav>
            <nav className="navSecond">
                <ul>
                    <li><a href="/school">유치원 펀딩</a></li>
                    <li><a href="/products">반려동물 용품 펀딩</a></li>
                    <li><a href="/funeral">장묘 예약하기</a></li>
                    <li><a href="/mypage">내 결제내역 & 찜</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default Main;