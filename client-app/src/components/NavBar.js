import React, {useState} from "react";
import CartButton from "./CartButton";
import Button from "./Button";

function NavBar({ itemsInCart }) {

    const [cartOpened, setCartOpened] = useState(false);

    const handleCartClick = () =>{
        setCartOpened(!cartOpened);
    }
    const handleNavbarLinkClick = (to) => {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const destination = document.getElementById(to);
        if (destination) {
            const topOffset = destination.offsetTop - navbarHeight;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
    };

    const itemsInCartPrice = () => {
        const totalPrice = itemsInCart.reduce((total, item) => {
            return total + parseFloat(item.price);
        }, 0);
        console.log(totalPrice);
        return totalPrice;
    }


    const price = itemsInCartPrice();

    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <div className='navbar-left'>
                    <div className='logo'>LOGO</div>
                </div>
                <div className='navbar-right'>
                    <a className='link' onClick={() => handleNavbarLinkClick('menu')}>Menu</a>
                    <a className='link' onClick={() => handleNavbarLinkClick('gallery')}>Gallery</a>
                    <a className='link' onClick={() => handleNavbarLinkClick('delivery')}>Delivery</a>
                    <a className='link' onClick={() => handleNavbarLinkClick('contact')}>Contact</a>
                    <CartButton  style='cart-button' onClick={handleCartClick}  count={price} />
                </div>
            </div>
            {cartOpened && (
                <div className='cart-overlay'>
                    <div className='cart'>
                    {itemsInCart.map(item => (
                        <div className='cart-item'  key={item.id}>
                            <div>{item.name}</div>
                            <div>{item.price}</div>
                        </div>
                    ))}
                        <div className='cart-item total'>
                            <div >Total:</div>
                            <div>{price}</div>
                        </div>
                        <div className='buttons'>
                            <Button className='button' buttonText='I want smth else' />
                            <Button className='button' buttonText='Checkout' />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavBar;