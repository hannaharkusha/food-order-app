import React, { useState, useEffect } from "react";
import axios from "axios";
import Dish from "./Dish";
import Alert from './Alert';

function MenuCard({ updateCartItems }) {
    const [dishes, setDishes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredDishes, setFilteredDishes] = useState([]);
    const [chosenCategory, setChosenCategory] = useState(null);
    const [alertOpen, setAlertOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/api/dishes')
            .then(response => {
                setDishes(response.data);
                setFilteredDishes(response.data.filter(dish => dish.category === 'Pasta'));
                const uniqueCat = new Set(response.data.map(dish => dish.category));
                setCategories(Array.from(uniqueCat));
                setChosenCategory('Pasta');
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleCartClick = (dish) => {
        updateCartItems(dish);
        setAlertOpen(true);
        setTimeout(() => {
            setAlertOpen(false);
        }, 3000);
    }

    const handleCategoryClick = (category) => {
        setChosenCategory(category);
        setFilteredDishes(dishes.filter(dish => dish.category === category));
    }

    return (
        <div className='menu-container' id='menu'>
            <div className='menu-categories'>
                {categories.map(category => (
                    <div
                        onClick={() => handleCategoryClick(category)}
                        className='category'
                        style={{backgroundColor: category === chosenCategory ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}}>
                        {category}
                    </div>
                ))}
            </div>
            <div className='menu-content'>
                {filteredDishes.map(dish => (
                    <Dish name={dish.name}
                          price={dish.price}
                          ingredients={dish.ingredients.join(', ')}
                          onClick={() => handleCartClick(dish)}/>
                ))}
            </div>
            {alertOpen && (
                <Alert message='Dish added to cart!'/>
            )}
        </div>
    );
}


export default MenuCard;
