const repoFactory = require('../factories/repository.factory');
const productRepo = repoFactory.products;

function post(model) {
    console.log("posted an item ");
    return productRepo.insertProduct(model);
}
function remove(model) {
    console.log("removed an item in ");
    return productRepo.deleteProduct(model);
}
function get(model){
    return productRepo.getAllProducts();
}

function getById(model){
    console.log("selected info by id in ");
    return productRepo.getProductsById(model.params.id);
}
function update(model){
    console.log("updated info in " );
    return productRepo.updateProduct(model.body);
}
function updateUndo(model){
    console.log("undid last update in table resetting data to ");
    return productRepo.updateAccount(model.body);
}

var Command = function (execute, undo, table, model) {
    this.execute = execute;
    this.undo = undo;
    this.table = table;
    this.model = model;
}

module.exports = {
    insertProduct = function (table, model) {
        return new Command(post, remove, table, model);
    },

    deleteProduct = function (table, model) {
        return new Command(remove, post, table, model);
    },

    getAllProducts = function (table, model, getBy) {
        return new Command(get, get, table, model);
        
    },
    getProductsById = function (table, model) {
        return new Command(getById, getById, table, model);
    },

    updateProduct = function (table, model) {
        return new Command(update, updateUndo, table, model);
    }
}; 