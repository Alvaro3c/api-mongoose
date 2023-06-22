const Provider = require('../models/providers');
const fetch = require('node-fetch')
const getProviders = async (req, res) => {
    try {
        let providers = await Provider.find({}, '-_id -__v'); // []
        res.status(200).json(providers); // Respuesta de la API para muchos productos
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({
            msj: `ERROR: ${error}`
        });
    }
}

const createProvider = async (req, res) => {

    const newProvider = req.body;
    try {
        let provider = await new Provider(newProvider);
        let savedProvider = await provider.save();
        res.status(201).json({
            msj: savedProvider
        });
    }
    catch (error) {
        console.log(`ERROR: ${error}`);
        res.status(400).json({
            msj: `ERROR: ${error}`
        });
    }
}

module.exports = {
    createProvider,
    getProviders
}