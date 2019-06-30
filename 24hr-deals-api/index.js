const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dealsAPI = express();

dealsAPI.use(bodyParser.json());
dealsAPI.use(bodyParser.urlencoded({ extended: false }));

dealsAPI.use('/products', cors(), require('./src/controllers/products.controller'));
dealsAPI.use('/accounts', cors(), require('./src/controllers/accounts.controller'));

const PORT = 5000;

dealsAPI.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
})
