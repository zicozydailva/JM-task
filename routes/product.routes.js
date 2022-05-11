const {getProducts} = require("../controllers/products.controllers");

const router = require("express").Router()

router.get("/products", getProducts)
router.get("/all", getProducts)

module.exports = router;