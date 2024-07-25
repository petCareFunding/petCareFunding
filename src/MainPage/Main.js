import "./Main.css"
import {Link} from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function Main() {
    return(
        <div className="MainPage">
            <header>
                
            </header>
            <Parallax pages={3}>
                <ParallaxLayer id="field3" 
                    style={{backgroundImage:`url(${process.env.PUBLIC_URL}/Main_img/field3.jpg)`}}
                    offset ={0}
                    speed={0.3}
                    factor={4} 
                >
                </ParallaxLayer>
                <ParallaxLayer 
                    speed={0.3}
                    sticky={{ start: 0.1, end: 1.2 }}
                    style={{ textAlign: 'center' }}>
                    <img src={process.env.PUBLIC_URL + '/Main_img/cat.gif'} />
                </ParallaxLayer> 
                <ParallaxLayer  speed={1} className="Main-pupday">
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
            <p>MEONG-GORITHM</p>
        </div>
    )
};



export default Main;