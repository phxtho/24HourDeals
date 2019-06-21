const express = require('express');
const accountsModel = require('../models/accounts.model');

const accounts = express();

// get all accounts
accounts.get('/', (req, res) => {
    res.status(200).send({
        accounts: accountsModel.accounts
    })
});

// get account by id
accounts.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
});

// get account transaction history
accounts.get('/:id/transaction-history', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.status(200).send({
        message: 'Transaction History'
    })
});

// get account basket
accounts.get('/:id/basket', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.status(200).send({
        message: `Basket of id ${id}`
    })
});

// create an account
accounts.post('/', (req, res) => [
    res.status(200).send({
        message: `Create an account`
    })
]);

// checkout on an account
accounts.post('/:id/transactions/', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.status(200).send({
        message: `Checkout on account`
    });
});

// update all accounts
accounts.put('/', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.status(200).send({
        message: `Update all accounts`
    });
});

// update account
accounts.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.status(200).send({
        message: `Update account with id ${id}`
    })
});

// update account basket
accounts.put('/:id/basket', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.status(200).send({
        message: `Update account with id ${id}`
    })
});

module.exports = accounts;