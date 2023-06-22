const express = require('express');
// Rutas de productos
const providerApiController = require("../controllers/providerApicontrollers");
const providerApiRouter = express.Router();

//providerApiRouter.get('/api/providers', providerApiController.getProviders)
providerApiRouter.post('/api/providers', providerApiController.createProvider)
providerApiRouter.get('/api/providers', providerApiController.getProviders)


module.exports = providerApiRouter;