import express from require('express')

const dealsAPI = express();

dealsAPI.use('/products', require('./controllers/products.controller'));

const PORT = 5000;

dealsAPI.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
})
