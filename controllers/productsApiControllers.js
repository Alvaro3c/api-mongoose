// Controlador - Lógica de negocio de la app
const fetch = require('node-fetch');
const Product = require('../models/products'); // Modelo BBDD Mongo

const getProduct = async (req,res) => {
    if (req.params.id) { // con ID
        try {
            let products = await Product.find({id:req.params.id},'-_id -__v'); //[{}]
            res.status(200).json(products[0]); // Respuesta de la API para 1 producto {}
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({
                msj: `ERROR: ${error}`
            });
        }
    } else { // sin ID --> TODOS los products
        try {
            let products = await Product.find({},'-_id -__v'); // []
            res.status(200).json(products); // Respuesta de la API para muchos productos
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({
                msj: `ERROR: ${error}`
            });
        }
    }
}

const createProduct = async (req,res) => {
    console.log("Esto es el console.log de lo que introducimos por postman", req.body); // Objeto recibido de producto nuevo
    const newProduct = req.body; // {} nuevo producto a guardar

    // Líneas
    // para guardar 
    // en una BBDD SQL o MongoDB
    try {
        let response = await new Product(newProduct); // objeto de vuelta de la petición
        let answer = await response.save(); // Guardar en la BBDD
    
        console.log("Este es el console.log de lo que devuelve la api", answer);
    
        res.status(201).json({
            msj: `Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`,
            "product": answer
        });
    }        
    
    catch (error) {
        console.log(`ERROR: ${error}`);
        res.status(400).json({
            msj: `ERROR: ${error}`
        });
    }
}

/* const deleteProduct = async (req,res)=>{
    const msj ="Has enviado un DELETE para borrar product";
    console.log(msj);
    res.json({"message":msj});
} */
module.exports = {
    getProduct,
    createProduct,
    //deleteProduct
    //editProduct,
    
}

// OTRA MANERA

// const products = {
//     getProducts: async (req, res) => {
//         if (req.params.id) {
//             try {
//                 let response = await fetch(`https://fakestoreapi.com/products/${req.params.id}`); //{}
//                 let products = await response.json(); //{}
//                 res.render('products', { "products": [products] }); // Pinta datos en el pug
//             }
//             catch (error) {
//                 console.log(`ERROR: ${error.stack}`);
//             }
//         } else {
//             try {
//                 let response = await fetch(`https://fakestoreapi.com/products`); // []
//                 let products = await response.json(); // []
//                 res.render('products', { products }); // Pinta datos en el pug
//             }
//             catch (error) {
//                 console.log(`ERROR: ${error.stack}`);
//             }
//         }
//     },
//     createProduct: async (req, res) => {
//         console.log("Esto es el consol.log de lo que introducimos por postman",req.body); // Objeto recibido de producto nuevo
//         const newProduct = req.body; // {} nuevo producto a guardar
    
//         // Líneas
//         //para guardar 
//         // en una BBDD SQL o MongoDB
    
//         let response = await fetch('https://fakestoreapi.com/products', {
//             method: "POST",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newProduct)
//         })
//         let answer = await response.json(); // objeto de vuelta de la petición
//         console.log("Este es el console.log de lo que devuelve la api",answer);
    
//         res.send(`Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`);
//     },
//     deleteProduct: async (req, res) =>  console.log("Borrando pruducto"),
//     editProduct: async (req, res) =>  console.log("Borrando pruducto")
// }

// module.exports = products;
