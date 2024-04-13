import React from "react";
import OrderButton from "./OrderButton";

function Landing(props){
    return (
        <div>
            <div className='landing'>
               <div className='header'>Welcome to {props.header}</div>
                <div className='slogan'>{props.slogan}</div>
                <OrderButton buttonText='Order online' />
            </div>
        </div>
    )
}

export default Landing