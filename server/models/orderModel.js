const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Dish = require('./dishModel'); // Import the Dish model

const orderSchema = new Schema({
    name: String,
    dishes: [{ type: Schema.Types.ObjectId, ref: 'Dish' }], // Use Dish as the type
    price: String,
    time: String,
    phoneNumber: String,
    mail: String,
    address: String
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;