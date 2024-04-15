const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { dishesData } = require('./data');
const Dish = require("./models/dishModel");
const cors = require('cors');



const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

app.use(cors());


// Insert data into MongoDB
// Dish.insertMany(dishesData)
//  .then(() => console.log('Data inserted successfully'))
// .catch(error => console.error('Error inserting data:', error));


// Define your routes here
app.get('/api/dishes', async (req, res) => {
    try {
        const dishes = await Dish.find();
        res.json(dishes);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/orderapp')
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server after connecting to MongoDB
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });
