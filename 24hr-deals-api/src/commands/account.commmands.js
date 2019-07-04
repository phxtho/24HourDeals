const repoFactory = require('../factories/repository.factory');
const accountRepo = repoFactory.accounts;

function post(table, model) {
    console.log("posted an item " + table);
    accountRepo.accounts.create(model,(err,ret)=>{
        if(err) res.status(404).send(err);
        res.status(200).send(ret);
    });
}
function remove(table, model) {
    console.log("removed an item in " + table);
    accountRepo.deleteAccountByEmail(model.email,res);
}
function get(table, model){
    console.log("selected info in " + table);
    return accountRepo.getAllAccounts();
}

function getById(table, model){
    console.log("selected info by id in " + table);
    accountRepo.getAccountById(model.params.id, res);
}
function update(table, model){console.log("updated info in " + table)}
function updateUndo(table, model){console.log("undid last update in " + table + 'resetting data to ' + model)}


var Command = function (execute, undo, table,model) {
    this.execute = execute;
    this.undo = undo;
    this.table = table;
    this.model = model;
}

var postCommand = function (table, model) {
    return new Command(post, remove, table, model);
};

var deleteCommand = function (table, model,) {
    return new Command(remove, post, table, model,);
};

var getCommand = function (table, model,res) {
    return new Command(get, get, table, model, res);
};

var getByIdCommand = function (table, model,res) {
    return new Command(getById, getById, table, model, res);
};

var updateCommand = function (table, model,res) {
    return new Command(update, updateUndo, table, model, res);
};

var updateUndoCommand = function (table, model,res) {
    return new Command(updateUndo, update, table, model, res);
};

module.exports = {Command, postCommand, deleteCommand, getCommand, getByIdCommand, updateCommand, updateUndoCommand}; 