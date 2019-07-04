/*
    We can also look at implementing query support for categories:
    http://expressjs.com/en/api.html#req.query
*/

const commandInvoker = require('../commands/command.invoker');
const commandFactory = require('../factories/command.factory');
let productCommands = commandFactory['products'];

const express = require('express');
const repoFactory = require('../factories/repository.factory');

const productsRepo = repoFactory.products;
const controller = express();

// get all products
controller.get('/', (req, res) => {
    commandInvoker.execute(productCommands.getAllProducts()).then((product,error) => {
        if(error){res.status(400).send(error)}
        res.status(200).send(product);
    })
})

// get product with id
controller.get('/:id', (req, res) => {
    const id = req.params.id;
    commandInvoker.execute(productCommands.getProductsById(id)).then((product,error) => {
        if(error){res.status(400).send(error)}
        res.status(200).send(product);
    })
});

// create product
controller.post('/', (req, res) => {
    commandInvoker.execute(productCommands.insertProduct(req.body)).then((product,error) => {
        if(error){res.status(400).send(error)}
        res.status(200).send(product);
    })
});

module.exports = controller;