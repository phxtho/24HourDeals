const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema
let accountSchema = new Schema({
    email: {
        type: String,
        unique: true,
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    addresses : {
        type : Array
    },
    billingDetails: {
        type : Array
    },
    basket: {
        type: Array
    },
    previousTransactions: {
        type: Array
    }
});

// Compile model
let AccountModel = mongoose.model('Account', accountSchema);


const accountRepo = {}

accountRepo.accounts = AccountModel;

accountRepo.insertAccount = (account) => {
    let accountDoc = new AccountModel(account);
    accountDoc.save((err, accountDoc) => {
        if (err) {
            console.error(err)
            return (err);
        }
        return (accountDoc);
    });
};

accountRepo.getAllAccounts = () => {
    return AccountModel.find();
};

accountRepo.getAccountById = (accountId) => {
    return AccountModel.findById(accountId);
};

accountRepo.getAccountByEmail = (emailAdress) => {
    return AccountModel.find({email: emailAdress});
}

accountRepo.getAccountByUserName = (userName) => {
    return AccountModel.find({username: userName});
}

accountRepo.deleteAccountByUserName = (userName) => {
    return AccountModel.deleteOne({name : userName});
};

accountRepo.deleteAccountByEmail = (emailAddress) => {
    return Account.deleteOne({email : emailAddress});
};

accountRepo.createTransactions = (transaction) => {
    let transactions = new AccountModel.previousTransactions(transaction);
    transactions.save((err, transactions) => {
        if (err) {
            console.error(err)
            return (err);
        }
        return (transactions);
    });
}

accountRepo.getTransactions = (accountId) => {
    //Should return a Pending promise
    let func = async () => {
        let transactionHistory = {};
        await AccountModel.findById(accountId, (err,account)=>{
            transactionHistory = account.previousTransactions;
        });
        return transactionHistory;
    };
    return func();
}

accountRepo.insertTransactions = (id, transaction) => {
    let func = async () => {
        let transactions = {};
        await AccountModel.findByIdAndUpdate(id, {
            $push: transaction
        }, {new: true}, (err,account)=>{
            if (err) {
                console.log(err);
            } else if (account) {
                transactions = account
            }
        });
        return transactions;
    };
    return func();
};

accountRepo.getBasket = (accountId) => {
    let func = async () => {
        let basket = {};
        await AccountModel.findById(accountId, (err,account)=>{
            if (account) {
                basket = account.basket;
            } else if (err) {
                basket = err;
            }
        });
        return basket;
    };
    return func();
}

accountRepo.updateBasket = (accountId, basket) => {
    let func = async () => {
        let basketData = {};
        await AccountModel.findByIdAndUpdate(accountId, {
            $push: basket
        }, {new: true}, (err,account)=>{
            if (err) {
                console.log(err);
            } else if (account) {
                basketData = account
            }
        });
        return basketData;
    };
    return func();
}

accountRepo.deleteBasketItem = (accountId, basket) => {
    let func = async () => {
        let basketData = {};
        await AccountModel.findOneAndUpdate(accountId, {
            $pull: basket
        }, {safe: true}, (err,account)=>{
            if (err) {
                console.log(err);
            } else if (account) {
                basketData = account
            }
        });
        return basketData;
    };
    return func();
}

module.exports = accountRepo;
