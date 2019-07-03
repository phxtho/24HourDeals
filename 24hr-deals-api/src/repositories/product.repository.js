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

class ProductRepo {
    constructor(){
        this.model = productModel;
    }

    //********     GETS    ********

    getAllProducts() {
        return productModel.find();
    }

    getProductsById(productId) {
        return productModel.findById(productId);
    }

    getProductsByName(productName) {
        return productModel.find({name: productName});
    }

    getProductsByPrice(productPrice) {
        return productModel.find({price: productPrice});
    }

    getProductsByDescription(productDescription){
        return productModel.find({desription: productDescription});
    }

    //  ********    INSERTS     ********

    insertProduct(product) {
        let productDoc = new productModel(product);
        productDoc.save((err, productDoc)=>{
            if(err) return console.error(err);
            console.log('Saved: ' + productDoc);
            return productDoc;
        });
    }

    //  ********    UPDATES     ********

    updateProduct(update) {
        //Use traditional findById for full-fledged validations
        productModel.findById(update.id, function(err, productDoc){
            if (err) return console.error(err);
            else {
                productDoc.save(update);
            }
        });
    }

    // ********     DELETE      ********

    deleteProduct(product){
        var id = product.id;
        productModel.findByIdAndRemove(id).exec();
    }
}

const productRepo = new ProductRepo();
module.exports = productRepo;


