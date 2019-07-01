const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
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

    module.exports = productRepo;

}