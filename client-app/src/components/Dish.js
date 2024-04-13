import React from "react";
import Button from "./Button";

function Dish(props){

    const handleAddToCartClick = () => {
        props.addToCart(this);
    }

    return (
        <div className='dish'>
            <div className='dish-left'>
                <div className='dish-name'>{props.name}</div>
                <div className='dish-ingr'>{props.ingredients}</div>
            </div>
            <div className='dish-right'>
                <div className='dish-price'>{props.price}</div>
                <Button buttonText='Add' color='#c92424' onClick={handleAddToCartClick}></Button>
            </div>
        </div>
    )
}

export default Dish