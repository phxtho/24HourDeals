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

// get specific account transaction history
accounts.get('/:id/transaction-history', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.status(200).send({
        message: 'Transaction History'
    })
});

// get specific account basket
accounts.get('/:id/basket', (req, res) => {
    const id = parseInt(req.params.id, 10);
});

// replace all accounts
accounts.post('/', (req, res) => [

]);

// create all accounts
accounts.post('/', (req, res) => {

});

// create account with id
accounts.post('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
});

// create account basket
accounts.post('/:id/basket', (req, res) => {
    const id = parseInt(req.params.id, 10);
});

// this might be more logical as a seperate endpoint
// If it were a seperate endpoint we can post a transaction object (our basket object) to the endpoint and start a transaction
accounts.post('/:id/checkout', (req, res) => {
    const id = parseInt(req.params.id, 10);
});

// update all accounts
accounts.put('/', (req, res) => {
    const id = parseInt(req.params.id, 10);
});

// update account
accounts.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
});

// update account basket
accounts.put('/:id/basket', (req, res) => {

});

module.exports = accounts;