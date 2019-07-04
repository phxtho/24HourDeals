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
    return AccountModel.create(account);
} 

accountRepo.getAllAccounts = () => {
    return AccountModel.find().exec();
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
    return AccountModel.deleteOne({email : emailAddress});
};

accountRepo.updateAccount = (account) => {
    AccountModel.findById(account.id, function(err, accountDoc) {
        if (err) return console.error(err);
        else {
            accountDoc.save(account);
        }
    })
}

module.exports = accountRepo;
