const {getAllProducts} = require("../controllers/products.controllers");

const router = require("express").Router()

router.get("/products", getAllProducts)

module.exports = router;