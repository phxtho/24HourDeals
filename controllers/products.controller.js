import express from require('express')

const products = express();

products.get('/', (req, res) => {
    res.status(200).send({
        message: 'fuck git init'
    })
});

products.get('/:id', (req, res) => {

});

products.post('/', (req, res) => [

]);

module.exports = products;