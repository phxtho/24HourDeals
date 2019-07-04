const repoFactory = require('../factories/repository.factory');
const productRepo = repoFactory.products;

let post = (model) => {
    console.log("posted an item ");
    return productRepo.insertProduct(model);
}
let remove = (model) => {
    console.log("removed an item in ");
    return productRepo.deleteProduct(model);
}
let get = (model) => {
    return productRepo.getAllProducts();
}

let getById = (id) => {
    console.log("selected info by id in ");
    return productRepo.getProductsById(id);
}
let update = (model) => {
    console.log("updated info in " );
    return productRepo.updateProduct(model.body);
}
let updateUndo = (model) => {
    console.log("undid last update in table resetting data to ");
    return productRepo.updateAccount(model.body);
}

class Command {
    constructor(execute, undo, model) {
        this.execute = execute;
        this.undo = undo;
        this.model = model;
    }
}

let productsCommand = {};

productsCommand.insertProduct = (model) => {
    return new Command(post, remove, model);
}

productsCommand.deleteProduct = (model) => {
    return new Command(remove, post, model);
}

productsCommand.getAllProducts =  (model) =>{  
    return new Command(get, get, model);
}
productsCommand.getProductsById = (model) => {
    return new Command(getById, getById, model);
}

productsCommand.updateProduct = (model) => {
    return new Command(update, updateUndo, model);
} 

module.exports = productsCommand;