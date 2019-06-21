const express = require('express');
const bodyParser = require('body-parser');

const dealsAPI = express();

dealsAPI.use(bodyParser.json());
dealsAPI.use(bodyParser.urlencoded({ extended: false }));

dealsAPI.use('/products', require('./controllers/products.controller'));
dealsAPI.use('/accounts', require('./controllers/accounts.controller'));

const PORT = 5000;

dealsAPI.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
})
