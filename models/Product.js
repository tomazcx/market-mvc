const mongoose = require("mongoose")
const { Schema } = mongoose

const Product = mongoose.model(
    'Product', //nome do model
    new Schema({
        title: { type: String, required: true },
        price: { type: Number, required: true },
        img: { type: String, required: true },
        description: { type: String, required: false },
        category: { type: String, required: true }
    })
)

module.exports = Product