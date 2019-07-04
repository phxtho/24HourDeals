const repoFactory = require('../factories/repository.factory');
const accountRepo = repoFactory.accounts;

let post = (model) => {
    return accountRepo.insertAccount(model);
}
let remove = (model) => {
    return accountRepo.deleteAccountByEmail(model.email,res);
}
let get = (model) => {
    return accountRepo.getAllAccounts();
}

let getById = (model) => {
    return accountRepo.getAccountById(model);
};

let getByUserName = (model) => {
    return accountRepo.getAccountByUserName(model.params.username, res);
}

let getByEmail = (model) => {
    return accountRepo.getAccountByEmail(model.body.email, res);
}

let update = (model) =>{
    return accountRepo.updateAccount(model.body);
}
let updateUndo = (model) => {
    return accountRepo.updateAccount(model.body);
}

let getTransactionHistory = (model) => {
    return accountRepo.getTransactions(model);
}

let checkOutTransaction = (model) => {
    return accountRepo.insertTransactions(model.id, model.data);
}

class Command {
    constructor(execute, undo, model){
        this.execute = execute;
        this.undo = undo;
        this.model = model;
    }
}

let accountCommands = {};

accountCommands.createAccount =  (model) => {
        return new Command(post, remove, model);
};

accountCommands.deleteAccountByEmail = (model) => {
    return new Command(remove, post, model);
};

accountCommands.deleteAccountByUserName = (model) => {
    return new Command(remove, post, model);
};

accountCommands.getAllAccounts = (model) => {
    return new Command(get, get, model);
};

accountCommands.getAccountById = (model) => {
    return new Command(getById, getById, model);
};

accountCommands.getAccountByEmail = (model) => {
    return new Command(getByEmail, getByEmail, model);
};

accountCommands.getAccountByUserName = (model) => {
    return new Command(getByUserName, getByUserName, model);
};

accountCommands.updateAccount = (model) => {
    return new Command(update, updateUndo, model);
};

accountCommands.updateUndoCommand = (model) => {
    return new Command(updateUndo, update, model);
};

accountCommands.getTransactionHistory = (model) => {
    return new Command(getTransactionHistory, getTransactionHistory, model);
};

accountCommands.checkOutTransaction = (model) => {
    console.log('new checkOut Command');
    return new Command(checkOutTransaction, checkOutTransaction, model )
} 


module.exports = accountCommands;
