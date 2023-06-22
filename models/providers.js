const mongoose = require('mongoose');

const providersSchema = {
    company_name: {
        type: String,
        required: true,
        unique: true
    },
    CIF: {
        type: String,
        required: true,
        unique: true
    },
    adress: {
        type: String,
        required: true
    },
    url_web: {
        type: String,
        required: true,
        unique: true
    }
};
// Crear el esquema
const schema = mongoose.Schema(providersSchema);

// Crear el modelo --> Colección
const provider = mongoose.model('Providers', schema);

module.exports = provider;


// Insert a provider

/* {
    "_id": ObjectId("62b062cff3fa93bf9d66fa06"),
    "company_name": "Teatro Marquina",
    "CIF": "B40236882",
    "address": "Calle de Prim 11",
    "url_web":"https://www.tortillasmarquina.com"
}

// save in BBDD
p.save()
.then((data)=>console.log(data))
.catch(err=>console.log(err)) */
