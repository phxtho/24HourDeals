const express = require('express');
const factory = require('../factories/repository.factory');
const categoryRepository = factory.categories;
const categories = express();

// get all categories
categories.get('/', (req, res) => {
    categoryRepository.getAllCategories()
    .exec((err, category)=>{
        if(err) { res.status(404).send(err); }
        else { res.status(200).send(category); }
    });
});

// get category by id
categories.get('/:id', (req, res) => {
    const id = req.params.id;
    categoryRepository.getCategoryById(id)
    .exec((err,ret)=>{
        if(err) { res.status(404).send(err); }
        else { res.status(200).send(ret); }
    });
});

// // get category by name
// categories.get('/:name', (req, res) => {
//     const name = req.params.name;
//     categoryRepository.getCategoryByName(name)
//     .exec((err,ret)=>{
//         if(err) { res.status(404).send(err); }
//         else { res.status(200).send(ret); }
//     });
// });

// create category
categories.post('/', (req, res) => {
    categoryRepository.insertCategory(req.body)
    .then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(404).send(err);
    });
});

// update category
categories.put('/:id', (req, res) => {
    const id = req.params.id;

    let category = {};
    categoryRepository.updateCategory(id, req.body)
    .then((resolve, err) => {
        if (!resolve) {
            res.status(404).send("not found");
        } else if (err) {
            res.status(400).send(err)
        } else {
            category = resolve;
            res.status(200).send(category);
        }
    });
})

// delete a category
categories.delete('/:id', (req, res) => {
    const id = req.params.id;

    if (categoryRepository.deleteCategory(id)) {
        res.status(200).send({
            message: `Deleted category with id: ${id}`
        })
    } else {
        res.status(404).send({
            message: 'Resource does not exist'
        })
    }
})

module.exports = categories;