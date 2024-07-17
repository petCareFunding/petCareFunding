import React from 'react';
import "../PaymentMethod/Payment_Method.css"
import PayMockup from '../PayMockup';

export default function Payment_Method(){
    return(
        <>
             <h3 className='method'>결제방법</h3>
        <div className='paymethod'>
            <div className='payment'>
            <div className='card-payment'>
                <input type='radio' />
                <span>신용카드</span>
            </div>
            <div className='virtual-account'>
                <input type='radio' />
                <span>가상계좌</span>
            </div>
            </div>
            <div className='paymethod-bottom'>
                <div className='Deposit_without_bankbook'>
                    <input type='radio' />
                    <span>무통장입금</span>
                </div>
            <div className="Kakao_Pay">
                <input type='radio' />
                <span>카카오페이</span>
            </div>
            </div>
            <div className='bank'>
                <select>
                    <option>NH은행: {PayMockup.order.bank} 예금주명</option>
                </select>
                <input type='text' />
            </div>
        </div>
        </>
    )
}