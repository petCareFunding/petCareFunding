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
                    <Link id= 'loginLink' to={"/login"}>로그인&회원가입</Link>
                    <Link id= 'mypageLink' to={'/mypage'}>마이페이지</Link>             
            </nav>
            <nav className="navSecond">
                    <Link id= 'schoolLink' to={'/school'}>유치원 펀딩</Link>
                    <Link id= 'productsLink' to={'/products'}>반려동물 용품 펀딩</Link>
                    <Link id= 'funeralLink' to={'/funeral'}> 장묘 예약</Link>
            </nav>
        </div>
    )
};

export default Main;