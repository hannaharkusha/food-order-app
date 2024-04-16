const express = require('express');
const router = express.Router();
const Order = require('./models/orderModel');

// Route to create a new order
// Route to create a new order
router.post('/', async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;