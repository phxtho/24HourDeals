const express = require('express');
const accounts = express();

const commandInvoker = require('../commands/command.invoker');
const commandFactory = require('../factories/command.factory');
let accountCommands = commandFactory['accounts'];

// var Command = require('../commands/command')


// create an account
accounts.post('/', (req, res) => {
    commandInvoker.execute(accountCommands.createAccount(req.body)).then((response,error)=>{
        if(error){res.status(400).send(error)}
        res.status(200).send(response);
    });
});

// get all accounts
accounts.get('/', (req, res) => {
    // Unit of Work
    commandsToExecute = async () => {
        // get accounts
        let accounts = {};
        await commandInvoker.execute(accountCommands.getAllAccounts(req))
                            .then((resolve,error)=>{
                                accounts = resolve;
                            });
        return accounts
    }

    // Execute the Unit of Work
    commandsToExecute().then((accounts,error)=>{
        if(!accounts) 
            {res.status(404).send(error);}
        else
            {res.status(200).send(accounts);}
    });

});

// get account by id
accounts.get('/:id', (req, res) => {
    const id = req.params.id;
    commandInvoker.execute(accountCommands.getAccountById(id)).then((account,error) => {
        if(error){res.status(400).send(error)}
        res.status(200).send(account);
    })
});

// get account transaction history
accounts.get('/:id/transactions', (req, res) => {
    const id = req.params.id;
    commandInvoker.execute(accountCommands.getTransactionHistory(id)).then((response,error) => {
        if(error){res.status(400).send(error)}
        res.status(200).send(response);
    })
});

// checkout on an account
accounts.post('/:id/transactions', (req, res) => {
    const id = req.params.id;
    let account = {};
    accountRepo.insertTransactions(id, req.body).then((resolve, err)=>{
        if (!resolve) {
            res.status(404).send("not found");
        } else if (err) {
            res.status(400).send(err)
        } else {
            account = resolve;
            res.status(200).send(account);
        }
    });
});

// update all accounts
// not implemented

// update account
accounts.put('/:id', (req, res) => {
    const id = req.params.id;

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

accounts.delete('/:id', (req, res) => {
    const id = req.params.id;

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