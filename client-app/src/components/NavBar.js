import React from "react";
import CartButton from "./CartButton";

function NavBar(){

    const handleCartClick = () =>{
        console.log('cart clicked');
    }

    const handleMenuClick = () => {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const menuContainer = document.getElementById('menu');
        if (menuContainer) {
            const topOffset = menuContainer.offsetTop - navbarHeight;
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
                    <a className='link' onClick={handleMenuClick}>Menu</a>
                    <a className='link'>Galery</a>
                    <a className='link'>Delivery</a>
                    <a className='link'>Contact</a>
                    <CartButton onClick={handleCartClick} count='0'/>
                </div>
            </div>
        </div>
    );
}

export default NavBar
