import React from 'react';
import "../PayHeader/PayHeader.css"
import { Link } from 'react-router-dom';

export default function PayHeader(){
    return(
        <div>
            <Link to='/'><h1>HAVE A PUPPY DAY</h1></Link>
        </div>
    )
}