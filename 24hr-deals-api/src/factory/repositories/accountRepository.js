const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema
let accountSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    name: {
        type: String,
        required: true
    }
});

let mongoAccount = mongoose.model('Account', accountSchema);

class AccountRepo {
    insertAccount(account) {
        let accountDoc = new mongoAccount(account);
        accountDoc.save((err, accountDoc) => {
            if (err) return console.error(err);
            console.log('Saved: ' + accountDoc);
        });
    };
}

const accountRepo = new AccountRepo();
module.exports = accountRepo;
