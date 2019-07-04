const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema
let productSchema = new Schema ({
    name : {
        type: String,
        //required: true
    },
    description : {
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
        type : String
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
        return productModel.find().exec();
    };

    getProductsById(id) {
        return productModel.findById(id).exec();
    };

    insertProduct(product) {
        // let productDoc = new productModel(product);
        
        return productModel.create(product);

        // return productDoc.save((err, productDoc)=>{
        //     if(err) return console.error(err);
        //     console.log('Saved: ' + productDoc);
        // });
    };

    updateProduct(update) {
        // Use traditional findById for full-fledged validations
        productModel.findById(update.id, function(err, productDoc) {
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


