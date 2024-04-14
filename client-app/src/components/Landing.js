import React from "react";
import OrderButton from "./OrderButton";

function Landing(props){

    const handleOrderButtonClick = () => {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const menuContainer = document.getElementById('menu');
        if (menuContainer) {
            const topOffset = menuContainer.offsetTop - navbarHeight;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className='landing'>
               <div className='header'>Welcome to {props.header}</div>
                <div className='slogan'>{props.slogan}</div>
                <OrderButton buttonText='Order online' onClick={handleOrderButtonClick}/>
            </div>
        </div>
    )
}

export default Landing