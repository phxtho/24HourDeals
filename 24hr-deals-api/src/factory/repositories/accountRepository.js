const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema
let accountSchema = new Schema ({
    id : {
        type: String,
        required: true
    },
    email : {
        type: String
    },
    name : {
        type: String,
        required: true
    },
    adresses : {
        type : []
    },
    billingDetails: {
        type : []
    }
});

// Compile model
let mongoAccount = mongoose.model('Account', accountSchema);

const accountRepo = () => {

    this.insertAccount = (account) => {
        let accountDoc = new mongoAccount(account);
        accountDoc.save((err, accountDoc)=>{
        if(err) return console.error(err);
        console.log('Saved: ' + accountDoc);
    });
    };
}

module.exports = accountRepo;