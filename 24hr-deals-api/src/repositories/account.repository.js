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

// accountRepo.insertAccount = (account) => {
//     let accountDoc = new AccountModel(account);
//     accountDoc.save((err, accountDoc) => {
//         if (err) {
//             console.error(err)
//             return (err);
//         }
//         return (accountDoc);
//     });
// };

accountRepo.getAllAccounts = ( res) => {
    return AccountModel.find((err,ret)=>{
        if(err) res.status(404).send(err);
        res.status(200).send(ret);
    });
};

accountRepo.getAccountById = (accountId, res) => {
    return AccountModel.findById(accountId,(err,ret)=>{
        if(err) res.status(404).send(err);
        res.status(200).send(ret);
    });
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

accountRepo.deleteAccountByEmail = (emailAddress, res) => {
    return AccountModel.deleteOne({email : emailAddress}, (err,ret)=>{
        if(err) res.status(404).send(err);
        res.status(200).send(ret);
    });
};

module.exports = accountRepo;
