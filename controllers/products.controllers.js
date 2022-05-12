const Product = require("../models/Product")

const getAllProducts = async (req, res) => {
    try {
        const {sort, price, specifications, search} = req.query

        const queryObject = {}

        // add stuffs based on condition

        if(specifications && specifications !== 'all') {
            queryObject.specifications = specifications
        }

        if(search) {
            queryObject.name = {$regex: search, $options: 'i'}
        }

        let result = Product.find(queryObject)

        if(sort === 'latest') {
            result = result.sort("-createdAt")
        }

        if(sort === 'oldest') {
            result = result.sort("createdAt")
        }

        if(price === 'asc') {
            result = result.sort("price")
        }

        if(price === 'desc') {
            result = result.sort("-price")
        }

        if(sort === 'a-z') {
            result = result.sort("name")
        }

        if(sort === 'z-a') {
            result = result.sort("-name")
        }

        let products = await result

        let productTotal = await Product.countDocuments(queryObject)

        res.status(200).json({productTotal, products})

    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getAllProducts}