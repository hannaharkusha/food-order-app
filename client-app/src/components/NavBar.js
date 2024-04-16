import React, {useState} from "react";
import CartButton from "./CartButton";
import Button from "./Button";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function NavBar({ itemsInCart , updateCartItems, setItemsInCart }) {

    const [cartOpened, setCartOpened] = useState(false);
    const [checkoutOpened, setCheckoutOpened] = useState(false);

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

    const handleAddMoreClick = () =>{
        setCartOpened(!cartOpened);
    }

    const itemsInCartPrice = () => {
        const totalPrice = itemsInCart.reduce((total, item) => {
            return total + parseFloat(item.price);
        }, 0);
        return totalPrice.toFixed(2);
    }

    const price = itemsInCartPrice();

    const handleCheckoutAndBackClick = () =>{
        setCheckoutOpened(!checkoutOpened);
        setCartOpened(!cartOpened);
    }

    const handlePlusClick = (item) =>{
        updateCartItems(item);
    }

    const handleMinusClick = (item) =>{
        const indexToRemove = itemsInCart.findIndex(cartItem => cartItem.name === item.name);
        if (indexToRemove !== -1) {
            const updatedCart = [...itemsInCart];
            updatedCart.splice(indexToRemove, 1);
            setItemsInCart(updatedCart);
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        }
    }

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
                <div className='cart-overlay' id='cart-overlay'>
                    <div className='cart'>
                        {Object.values(itemsInCart.reduce((acc, item) => {
                            if (!acc[item.name]) {
                                acc[item.name] = {...item, count: 0};
                            }
                            acc[item.name].count++;
                            return acc;
                        }, {})).map(item => (
                            <div className='cart-item' key={item.name}>
                                <div>
                                    {item.name} {item.count > 1 && `(${item.count}x)`}
                                </div>
                                <div>
                                <div>{item.price * item.count}</div>
                                <div className='plus-minus-icons'>
                                    <div onClick={() => handleMinusClick(item)}>-</div>
                                    <div onClick={() => handlePlusClick(item)}>+</div>
                                </div>
                                </div>
                            </div>
                        ))}
                        <div className='cart-item total'>
                            <div>Total:</div>
                            <div>{price}</div>
                        </div>
                        <div className='buttons'>
                            <button className='button-form add-more' onClick={handleAddMoreClick}>Add products</button>
                            <button className='button-form' onClick={handleCheckoutAndBackClick}>Checkout</button>
                        </div>
                    </div>
                </div>
            )}
            {checkoutOpened && (
                <div className='cart-overlay' id='checkout-overlay'>
                    <div className='checkout'>
                        <div className='order-form-header'>Confirm order details</div>
                        {Object.values(itemsInCart.reduce((acc, item) => {
                            if (!acc[item.name]) {
                                acc[item.name] = { ...item, count: 0 };
                            }
                            acc[item.name].count++;
                            return acc;
                        }, {})).map(item => (
                            <div className='cart-item-order' key={item.name}>
                                <div>
                                    {item.name} {item.count > 1 && `(${item.count}x)`}
                                </div>
                                <div>{item.price * item.count}</div>
                            </div>
                        ))}
                        <div className='cart-item-order total-order'>
                            <div>Total:</div>
                            <div>{price}</div>
                        </div>
                        <div className='order-form'>
                            <div className='form-label'>Order details:</div>
                            <input type='text' placeholder='Name' required='true'/>
                            <input type='text' placeholder='Address' required='true'/>
                            <input type='tel' placeholder='Phone number' required='true'/>
                            <input type='email' placeholder='E-mail' required='true'/>
                        </div>
                        <div className='buttons buttons-order-form'>
                            <button className='button-form add-more' onClick={handleCheckoutAndBackClick}>Back to cart</button>
                            <button className='button-form'>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavBar;