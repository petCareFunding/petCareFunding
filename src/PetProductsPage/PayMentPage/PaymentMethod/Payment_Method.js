import React from 'react';
import "../PaymentMethod/Payment_Method.css"

export default function Payment_Method(){
    return(
        <div className='paymethod'>
            <h3 className='method'>결제방법</h3>
            <div className='payment'>
            <p className='card-payment'>
                <input type='radio' />
                <span>신용카드</span>
            </p>
            <p className='virtual-account'>
                <input type='radio' />
                <span>가상계좌</span>
            </p>
            <p className='Deposit_without_bankbook'>
            <input type='radio' />
            <span>무통장 입금</span>
            </p>
            <p className="Kakao_Pay">
                <input type='radio' />
                <span>카카오페이</span>
            </p>
            </div>
        </div>
    )
}