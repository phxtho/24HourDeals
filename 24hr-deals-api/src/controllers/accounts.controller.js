const express = require('express');
const repoFactory = require('../factories/repository.factory');
const accountRepo = repoFactory.accounts;
const accounts = express();

// create an account
accounts.post('/', (req, res) => {
    accountRepo.accounts.create((err,ret)=>{
        if(err) res.status(404).send(err);
        res.status(200).send(ret);
    });
});

// get all accounts
accounts.get('/', (req, res) => {
    let promise = accountRepo.getAllAccounts();
    promise.exec((err,acc) => {
        if(err) {
            res.status(404).send(err)
        } else {
            res.status(200).send(acc);
        }
    });
});

// get account by id
accounts.get('/:id', (req, res) => {
    const id = req.params.id;
    accountRepo.getAccountById(id).exec((err,ret)=>{
        if(err) { res.status(404).send(err) }
        else { res.status(200).send(ret);}
    });
});

/**************************************TO DO***********************/

// get account transaction history
// TODO: implement
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
        basket: accountsModel.getBasket(id)
    })
});

// checkout on an account
// TODO: implement
accounts.post('/:id/transactions/', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.status(200).send({
        message: `Checkout on account`
    });
});

// update all accounts
// TODO: implement
accounts.put('/', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.status(200).send({
        message: `Update all accounts`
    });
});

// update account
accounts.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (accountsModel.updateAccount(req.body)) {
        res.status(200).send({
            message: `Updated account with id ${id}`,
            account: accountsModel.getAccount(id)
        })
    } else {
        res.status(400).send({
            message: `Failed to update account with id: ${id}`
        })
    }
});

// update account basket
accounts.put('/:id/basket', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (!!accountsModel.updateBasket(id, req.body)) {
        res.status(200).send({
            message: `Updated basket of account with id ${id}`,
            basket: accountsModel.getBasket(id)
        })
    } else {
        res.status(400).send({
            message: `Failed to update basket of account with id ${id}`
        })
    }
});

accounts.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (accountsModel.removeAccount(id)) {
        res.status(200).send({
            message: `Deleted account with id: ${id}`
        })
    } else {
        res.status(404).send({
            message: 'Resource does not exist'
        })
    }
});

module.exports = accounts;