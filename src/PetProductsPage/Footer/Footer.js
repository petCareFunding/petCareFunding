import React from 'react';
import "../Footer/Footer.css"

export default function Footer(){


    return( 
        <footer>
        <div className='footer'>
            <div className='refund'>
                <p className='refund-title'>환불규정</p>
                <p className='refund-title2'>
                    이 상품에 대한 환불은 어쩌구저쩌구 처리해서 이렇게 저렇게 할 거고<br/>
                    그 다음에 요로케 저러케 할 예정 입니다
                </p>
            </div>
            <div className='footer-left'>
                <p className='service'>서비스 이용약관</p>
                <p className='MyData'>마이데이터 서비스 약관</p>
                <p className='Privacy'>개인정보</p>
                <p className='franchisee'>가맹점 고지사항</p>
                <p className='location'>위치기반서비스 이용약관</p>
            </div>

        </div>
        <div className="footer-text second">
            <p>서비스 이용약관<br/>
                마이데이터 서비스 이용약관<br/>
                개인정보 처리방침<br/>
                가맹점 고지사항<br/>
                위치기반서비스 이용약관</p>
        </div>
        <div className="footer-text">
            <h3>Follow us</h3>
            <img src={process.env.PUBLIC_URL + './insta.png'} className="sns"></img>
            <img src={process.env.PUBLIC_URL + './facebook.png'} className="sns"></img>
        </div>
    </footer>   
    )
}