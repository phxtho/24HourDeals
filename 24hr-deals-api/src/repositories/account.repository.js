const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema
let accountSchema = new Schema({
    email: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    adresses : {
        type : Array
    },
    billingDetails: {
        type : Array
    }
});

// Compile model
let Account = mongoose.model('Account', accountSchema);

class AccountRepo {
    constructor(){
        this.model = Account;
    }

    insertAccount(account) {
        let accountDoc = new Account(account);
        accountDoc.save((err, accountDoc) => {
            if (err) return console.error(err);
            return (accountDoc);
        });
    };
}

const accountRepo = new AccountRepo();
module.exports = accountRepo;
