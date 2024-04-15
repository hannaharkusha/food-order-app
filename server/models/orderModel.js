const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dishSchema = require('./dishModel.js')

const orderSchema = new Schema({
    name: String,
    dishes: [dishSchema],
    price: String,
    time: String,
    phoneNumber: String,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;