const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    specification: {
        type: Array,
        required: true,
    }
}, {timestamps: true})

module.exports = mongoose.model("Product", productSchema)