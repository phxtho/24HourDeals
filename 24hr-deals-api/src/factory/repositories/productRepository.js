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


let productModel = mongoose.model('Product', productSchema);

const productRepo = () => {

    this.insertProduct = (product) => {
        let productDoc = new productModel(product);
        productDoc.save((err, productDoc)=>{
            if(err) return console.error(err);
            console.log('Saved: ' + productDoc);
        });
    };

    this.getAllProducts = () => {
        mongoose.model('products').find((err, products) => {
            res.send(products);
        });
    };

}
module.exports = productRepo;


