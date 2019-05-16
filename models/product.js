const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/finalBeltDB', (err)=>console.log("connecting to db"))

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {type: String, unique: true, required: [true, "Name must be at least 3 characters"], minlength: 3},
  qty: {type: Number, required: [true, "Quantity must be greater than or equal to 0"], min: 0},
  price: {type: Number, required: [true, "Price must be greater than or equal to 0"], min: 0},
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);
