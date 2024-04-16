import React, {useState} from "react";
import CartButton from "./CartButton";
import Alert from "./Alert";

function NavBar({ itemsInCart , updateCartItems, setItemsInCart }) {

    const [cartOpened, setCartOpened] = useState(false);
    const [checkoutOpened, setCheckoutOpened] = useState(false);
    const [orderAlertOpened, setOrderAlertOpened] = useState(false);

    const [orderDetails, setOrderDetails] = useState({
        name: '',
        address: '',
        phone: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleConfirmClick = () => {
        const orderData = {
            ...orderDetails,
            dishes: itemsInCart,
            price: price,
            time: Date.now()
        };

        fetch('http://localhost:5000/api/orders', { // Update the port to 5000
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        })
            .then(response => {
                if (response.ok) {
                    setOrderAlertOpened(true);
                    console.log('Order placed successfully');
                    setTimeout(() => {
                        setOrderAlertOpened(false);
                    }, 3000);
                } else {
                    throw new Error('Failed to place order');
                }
            })
            .catch(error => {
                console.error('Error placing order:', error);
            });
    };

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
                                <div>{(item.price * item.count).toFixed(2)}</div>
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
                                <div>{(item.price * item.count).toFixed(2)}</div>
                            </div>
                        ))}
                        <div className='cart-item-order total-order'>
                            <div>Total:</div>
                            <div>{price}</div>
                        </div>
                        <div className='order-form'>
                            <div className='form-label'>Order details:</div>
                            <input
                                type='text'
                                name='name'
                                placeholder='Name'
                                value={orderDetails.name}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type='text'
                                name='address'
                                placeholder='Address'
                                value={orderDetails.address}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type='tel'
                                name='phone'
                                placeholder='Phone number'
                                value={orderDetails.phone}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type='email'
                                name='email'
                                placeholder='E-mail'
                                value={orderDetails.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className='buttons buttons-order-form'>
                            <button className='button-form add-more' onClick={handleCheckoutAndBackClick}>Back to cart
                            </button>
                            <button className='button-form' onClick={handleConfirmClick}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
            {orderAlertOpened && (
                <Alert message='Your order placed succesfully!'/>
            )}
        </div>
    );
}

export default NavBar;