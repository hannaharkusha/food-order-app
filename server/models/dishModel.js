const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: String,
    ingredients: [String],
    price: String,
    category: String
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;