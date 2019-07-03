const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categorySchema = new Schema ({
    id : {
        type: Number,
        required: true
    },
    name : {
        type: String,
        required: true
    },
});

let categoryModel = mongoose.model('Category', categorySchema);

class CategoryRepo {
    constructor (){
        this.model = categoryModel;
    }

    //********     GETS    ********

    getAllCategories() {
        return categoryModel.find();
    }

    getCategoryById(categoryId) {
        return categoryModel.findById(categoryId);
    }

    getCategoryByName(categoryName) {
        return categoryModel.find({name: categoryName});
    }

    //  ********    INSERTS     ********

    insertCategory(category) {
        let category = new categoryModel(category);
        category.save((err, category)=>{
            if(err) return console.error(err);
            console.log('Saved: ' + category);
            return category;
        });
    }

    //  ********    UPDATES     ********

    updateCategory(categoryUpdate) {
        categoryModel.findById(categoryUpdate.id, function(err, category){
            if (err) return console.error(err)
            else{
                category.save(categoryUpdate);
            }
        });
    }

    //  ********    DELETE     ********

    deleteCategory(id){
        var id = id;
        categoryModel.findByIdAndRemove(id).exec();
    }
}

const categoryRepo = new CategoryRepo();
module.exports = categoryRepo;