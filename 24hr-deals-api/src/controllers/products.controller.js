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

// controller.get('/', (req, res) => {
//     const id = req.params.id;
//     commandInvoker.execute(productCommands.getAllProducts()).then((account,error) => {
//         if(error){res.status(400).send(error)}
//         res.status(200).send(account);
//     })
// });

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

// // update all products
// // TODO: implement
// controller.put('/', (req, res) => {
//     res.status(200).send({
//         message: 'Update all products'
//     })
// })

// // update product
// controller.put('/:id', (req, res) => {
//     const id = parseInt(req.params.id, 10);

//     if (productsModel.updateProduct(req.body)) {
//         res.status(200).send({
//             message: `Updated product with id ${id}`,
//             product: productsModel.getProduct(id)
//         })
//     } else {
//         res.status(400).send({
//             message: `Failed to update product with id: ${id}`
//         })
//     }
// })

// // delete a product
// controller.delete('/:id', (req, res) => {
//     const id = parseInt(req.params.id, 10);

//     if (productsModel.removeProduct(id)) {
//         res.status(200).send({
//             message: `Deleted product with id: ${id}`
//         })
//     } else {
//         res.status(404).send({
//             message: 'Resource does not exist'
//         })
//     }
// })

module.exports = controller;