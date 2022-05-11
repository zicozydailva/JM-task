const Product = require("../models/Product")

const getProducts = async (req, res) => {
    try {
        const data = await Product.find({})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = getProducts