const express = require('express');
const productsModel = require('../models/products.model');

const controller = express();

controller.get('/', (req, res) => {

    res.status(200).send({
        products: productsModel.products
    })
});

controller.get('/:id', (req, res) => {

});

controller.post('/', (req, res) => {

});

controller.put('/', (req, res) => {

})

controller.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
})

controller.delete('/', (req, res) => {

})

controller.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
})

module.exports = controller;