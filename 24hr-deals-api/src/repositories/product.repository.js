const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema
let productSchema = new Schema ({
    name : {
        type: String,
        //required: true
    },
    desription : {
        type: String
    },
    price : {
        type : Number,
        //required : true
    },
    stock : {
        type : Number
    },
    dealEndTime : {
        type : Number
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

    getAllProducts() {
        return productModel.find();
    };

    getProductsById(id) {
        return productModel.findById(id);
    };

    insertProduct(product) {
        let productDoc = new productModel(product);
        return productDoc.save((err, productDoc)=>{
            if(err) return console.error(err);
            console.log('Saved: ' + productDoc);
        });
    };

    updateProduct(update) {
        //Use traditional findById for full-fledged validations
        productModel.findById(update.id, function(err, productDoc){
            if (err) return console.error(err);
            else {
                productDoc.save(update);
            }
        })
    }

    deleteProduct(product){
        var id = product.id;
        productModel.findByIdAndRemove(id).exec();
    }
}

const productRepo = new ProductRepo();
module.exports = productRepo;


