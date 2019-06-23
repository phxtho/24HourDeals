/*
    How to run:

    1. npm install
    2. node index.js to run
    3. ???
    4. Profit
*/

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const dealsAPI = express();

// dealsAPI.use(cors);
dealsAPI.use(bodyParser.json());
dealsAPI.use(bodyParser.urlencoded({ extended: false }));

dealsAPI.use('/products', cors(), require('./controllers/products.controller'));
dealsAPI.use('/accounts', cors(), require('./controllers/accounts.controller'));

const PORT = 5000;

dealsAPI.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
})
