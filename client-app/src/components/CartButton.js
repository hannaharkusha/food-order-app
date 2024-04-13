import React from 'react'
import Button from "./Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

function CartButton(props){
    return (
        <div className='cart-button' onClick={props.onClick}>
            <FontAwesomeIcon icon={faCartShopping} />
            <div className='count'>{props.count}</div>
        </div>
    )
}

export default CartButton;