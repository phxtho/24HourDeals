const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categorySchema = new Schema ({
    name: {
        type: String,
        required: true
    }
});

let categoryModel = mongoose.model('Category', categorySchema);

const categoryRepo = {}

categoryRepo.categories = categoryModel;

    //********     GETS    ********

    categoryRepo.getAllCategories = () => {
        return categoryModel.find();
    }

    categoryRepo.getCategoryById = (categoryId) => {
        return categoryModel.findById(categoryId);
    }

    // categoryRepo.getCategoryByName = (categoryName) => {
    //     return categoryModel.find({name: categoryName});
    // }

    //  ********    INSERTS     ********

    categoryRepo.insertCategory = (category) => {
        return categoryModel.create(category);
    }

    //  ********    UPDATES     ********

    categoryRepo.updateCategory = (id, categoryUpdate) => {
        let func = async () => {
            let category = {};
            await categoryModel.findByIdAndUpdate(id, {
                 $set: categoryUpdate,
            }, {new: true}, (err, categoryDoc)=>{
                if (err) {
                    console.log(err);
                } else if (categoryDoc){
                    category = categoryDoc;
                }
           });
           return category;
        };
        return func();
    }

    //  ********    DELETE     ********

    categoryRepo.deleteCategory = (categoryId) => {
        return categoryModel.deleteOne({_id: categoryId});
    }

module.exports = categoryRepo;