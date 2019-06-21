/*
    We can also look at implementing query support for categories:
    http://expressjs.com/en/api.html#req.query
*/

const express = require('express');
const productsModel = require('../models/products.model');

const controller = express();

// get all products
controller.get('/', (req, res) => {
    res.status(200).send({
        products: productsModel.products
    })
});


// get product with id
controller.get('/:id', (req, res) => {
    res.status(200).send({
        message: 'Get product with id'
    })
});

// create product
controller.post('/', (req, res) => {
    res.status(200).send({
        message: 'Create product'
    })
});

// update all products
controller.put('/', (req, res) => {
    res.status(200).send({
        message: 'Update all products'
    })
})

// update product with id
controller.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.status(200).send({
        message: `Update product with id ${id}`
    })
})

// delete all products
controller.delete('/', (req, res) => {
    res.status(501).send();
})

// delete product with id
controller.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.status(200).send({
        message: `Delete product with id ${id}`
    })
})

module.exports = controller;