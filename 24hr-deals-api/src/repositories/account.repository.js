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
        unique: true
    },
    addresses: {
        type: Array
    },
    billingDetails: {
        type: Array
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
    return AccountModel.create(account);
}

accountRepo.getAllAccounts = () => {
    return AccountModel.find().exec();
};

accountRepo.getAccountById = (accountId) => {
    return AccountModel.findById(accountId).exec();
};

accountRepo.getAccountByEmail = (emailAdress) => {
    return AccountModel.find({ email: emailAdress }).exec();
}

accountRepo.getAccountByUserName = (userName) => {
    return AccountModel.find({ username: userName }).exec();
}

accountRepo.deleteAccountByUserName = (userName) => {
    return AccountModel.deleteOne({ name: userName }).exec();
};

accountRepo.deleteAccountByEmail = (emailAddress) => {
    return AccountModel.deleteOne({ email: emailAddress }).exec();
};

accountRepo.updateAccount = (account) => {
    AccountModel.findById(account.id, function (err, accountDoc) {
        if (err) return console.error(err);
        else {
            accountDoc.save(account);
        }
    })
}

accountRepo.createTransactions = (transaction) => {
    let transactions = new AccountModel.previousTransactions(transaction);
    transactions.save((err, transactions) => {
        if (err) {
            console.error(err)
            return (err);
        }
        return (transactions);
    });
};

accountRepo.getTransactions = (accountId) => {
    //Should return a Pending promise
    console.log('wud');
    let func = async () => {
        let transactionHistory = {};
        await AccountModel.findById(accountId, (err, account) => {
            if (err)
                return (err);
            transactionHistory = account.previousTransactions;
        });
        return transactionHistory;
    };
    console.log(func);
    return func();
}

accountRepo.insertTransactions = (id, transaction) => {

    let func = async () => {
        let transactions = {};
        await AccountModel.findByIdAndUpdate(id, {
            $push: transaction
        }, { new: true }, (err, account) => {
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
        await AccountModel.findById(accountId, (err, account) => {
            if (err)
                return (err);
            console.log(account.basket);
            basket = account.basket;
        });
        return basket;
    };
    return func();
};

accountRepo.updateBasket = (accountId, basket) => {
    let func = async () => {
        let basketData = {};
        await AccountModel.findByIdAndUpdate(accountId, { $set: basket }, { upsert: true, new: true }, (err, account) => {
            if (err)
                return (err);
            console.log(account.basket);
            basketData = account.basket;
        });
        return test;
    };
    return func();
};

module.exports = accountRepo;
