import React from "react";
import CartButton from "./CartButton";

function NavBar(){

    const handleCartClick = () =>{
        console.log('cart clicked');
    }

    const handleNavbarLinkClick = (to) => {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const destination = document.getElementById(to);
        if (destination) {
            const topOffset = destination.offsetTop - navbarHeight;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
    };


    return(
        <div className='navbar-container'>
            <div className='navbar'>
                <div className='navbar-left'>
                    <div className='logo'>RESTA</div>
                </div>
                <div className='navbar-right'>
                    <a className='link' onClick={() => handleNavbarLinkClick('menu')}>Menu</a>
                    <a className='link' onClick={() => handleNavbarLinkClick('gallery')}>Gallery</a>
                    <a className='link'>Delivery</a>
                    <a className='link'>Contact</a>
                    <CartButton style='cart-button' onClick={handleCartClick} count='0'/>
                </div>
            </div>
        </div>
    );
}

export default NavBar
