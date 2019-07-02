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

module.exports = accountRepo;
