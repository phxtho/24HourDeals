const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema
let productSchema = new Schema ({
    id : {
        type: Number,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    desription : {
        type: String
    },
    price : {
        type : Number,
        required : true
    },
    stock : {
        type : Number
    },
    dealStartTime : {
        type : Number
    },
    dealDuration : {
        type: Number
    },
    categories : {
        type : []
    }

});