const getProducts = require("../controllers/products.controllers");

const router = require("express").Router()

router.get("/products", getProducts)

module.exports = router;