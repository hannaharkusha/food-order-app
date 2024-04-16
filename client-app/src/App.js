import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import MenuCard from "./components/MenuCard";
import Gallery from "./components/Gallery";
import Delivery from "./components/Delivery";

function App() {
    // Initialize cart items state
    const [itemsInCart, setItemsInCart] = useState(
        JSON.parse(localStorage.getItem('cartItems')) || []
    );

    // Function to update cart items
    const updateCartItems = (newItem) => {
        const updatedItems = [...itemsInCart, newItem];
        setItemsInCart(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    }

    const workingHours = [
        ["Mo", "14-23"],
        ["Tue", "14-23"],
        ["We", "14-23"],
        ["Th", "14-23"],
        ["Fr", "14-23"],
        ["Se", "10-23"],
        ["Su", "10-23"]
    ];

    const location = "Ciemna 4-6, 31-053 Cracow";
    const number = "(48) 000 000 000";

    return (
        <div className="App">
            <NavBar itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} updateCartItems={updateCartItems}/>
            <Landing slogan='Your culinary dream just a touch away' header ='Your Restaurant'/>
            <MenuCard updateCartItems={updateCartItems} />
            <Gallery />
            <Delivery cost=' 5$' hours={workingHours} phone={number} location={location}/>
        </div>
    );
}

export default App;