import './FuneralHeader.css'


export default function funeral() {

    return(
        <div className="Fheader">
            <div className="TopHeader">
                <h1>MEONG-GORITHM</h1>
                <nav className="subMenu">
                    <ul>
                        <li><a href="/select" >찜</a></li>
                        <li><a href="/mypage">마이페이지</a></li>
                    </ul>
                </nav>
            </div>
            <nav className="Menu">
                <ul>
                    <li><a href="/school">유치원 펀딩</a></li>
                    <li><a href="/mypage">HOME</a></li>
                    <li><a href="/products">반려동물 용품 펀딩</a></li>
                    
                </ul>
            </nav>
        </div>
    )
};


