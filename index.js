const express = require('express');
const mongoose = require('mongoose');
import helmet from "helmet";
const bodyParser = require("body-parser");
const providerApiRoutes = require('./routes/providerApiRoutes');
const productApiRoutes = require('./routes/productApiRoutes');
app.use(helmet());
// Connect to MongoDB
mongoose.connect('mongodb://localhost/api-mongo-providers', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Create an Express app
const app = express();

app.use(bodyParser.json());

app.use('/', providerApiRoutes);
app.use('/', productApiRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
