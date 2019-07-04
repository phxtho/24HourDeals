/*
    We can also look at implementing query support for categories:
    http://expressjs.com/en/api.html#req.query
*/

const express = require('express');
const repoFactory = require('../factories/repository.factory');

const productsRepo = repoFactory.products;
const controller = express();

// get all products
controller.get('/', (req, res) => {
    console.log('ftw');
    let promise = productsRepo.getAllProducts();
    promise.exec((err,data)=>{
        if(err) {
            res.status(404).send(err)
        } else {
            res.status(200).send(data);
        }
    });
});

// get product with id
controller.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    product = productsModel.getProduct(id);

    if (!!product) {
        res.status(200).send({
            product: product
        })
    } else {
        res.status(404).send({
            message: 'Product not found.'
        })
    }
});

// create product
controller.post('/', (req, res) => {
    productsRepo.insertProduct(req.body);
    res.send(req.body);
});

// update all products
// TODO: implement
controller.put('/', (req, res) => {
    res.status(200).send({
        message: 'Update all products'
    })
})

// update product
controller.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (productsModel.updateProduct(req.body)) {
        res.status(200).send({
            message: `Updated product with id ${id}`,
            product: productsModel.getProduct(id)
        })
    } else {
        res.status(400).send({
            message: `Failed to update product with id: ${id}`
        })
    }
})

// delete a product
controller.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (productsModel.removeProduct(id)) {
        res.status(200).send({
            message: `Deleted product with id: ${id}`
        })
    } else {
        res.status(404).send({
            message: 'Resource does not exist'
        })
    }
})

module.exports = controller;