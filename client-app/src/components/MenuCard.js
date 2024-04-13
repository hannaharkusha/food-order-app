import React, { useState, useEffect } from "react";
import axios from "axios";
import Dish from "./Dish";

function MenuCard(props) {
    const [dishes, setDishes] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/dishes')
            .then(response => {
                setDishes(response.data);
                const uniqueCat = new Set(response.data.map(dish => dish.category));
                setCategories(Array.from(uniqueCat));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleCartClick = () =>{
        {props.handleAddClick()}
    }



    return (
        <div className='menu-container' id='menu'>
            <div className='menu-categories'>
                {categories.map(category => (
                <div className='category'>{category}</div>
                ))}
            </div>
            <div className='menu-content'>
                {dishes.map(dish => (
                   <Dish name={dish.name} price={dish.price} ingredients={dish.ingredients.join(', ')} addToCart={handleCartClick} />
                ))}
            </div>
        </div>
    );
}

export default MenuCard;
