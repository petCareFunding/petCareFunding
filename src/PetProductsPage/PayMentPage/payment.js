import React from 'react';
import PayHeader from '../PayMentPage/PayHeader/PayHeader';
import Order from './Orders/Order';
import "../PayMentPage/payment.css"
import ProductDelivery from '../PayMentPage/Delivery/ProductDelivery';
import OrderItem from './OrderItem/OrderItem';
import Info from './PayInfo/Info';


export default function(){
    return(
        <div className='payment'>
        <PayHeader/>
        <OrderItem/>
        <Order/>
        <ProductDelivery/>
        <Info/>
        </div>
    )
}