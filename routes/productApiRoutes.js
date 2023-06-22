const express = require('express');
// Rutas de productos
//const productApiController = require("../controllers/productApiController");
const productApiRouter = express.Router();
const productApicontroller = require('../controllers/productsApiControllers')

productApiRouter.get('/api/products', productApicontroller.getProduct)
productApiRouter.post('/api/products', productApicontroller.createProduct)


module.exports = productApiRouter;