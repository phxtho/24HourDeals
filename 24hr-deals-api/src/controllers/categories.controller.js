const express = require('express');
const factory = require('../factories/repository.factory');
const categoryRepository = factory.categories;
const controller = express();

// get all categories
controller.get('/', (req, res) => {
    let promise = categoryRepository.getAllCategories();
    promise.exec((err, category) => {
        if(err) {
            res.status(404).send(err)
        } else {
            res.status(200).send(category);
        }
    });
});

// get category by id
controller.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    category = categoryModel.getCategoryById(id);

    if (!!category) {
        res.status(200).send({
            category: category
        })
    } else {
        res.status(404).send({
            message: 'Category not found.'
        })
    }
});

// get category by name
controller.get('/:name', (req, res) => {
    category = categoryModel.getCategoryByName(name);

    if (!!category) {
        res.status(200).send({
            category: category
        })
    } else {
        res.status(404).send({
            message: 'Category not found.'
        })
    }
});

// create category
controller.post('/', (req, res) => {
    if (categoryModel.insertCategory(req.body)) {
        res.status(200).send({
            category: categoryModel.getCategory(req.body.id)
        })
    } else {
        res.status(400).send({
            message: 'Failed to create category'
        })
    }
});

// update category
controller.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (categoryModel.updateCategory(req.body)) {
        res.status(200).send({
            message: `Updated category with id ${id}`,
            category: categoryModel.getCategoryById(id)
        })
    } else {
        res.status(400).send({
            message: `Failed to update category with id: ${id}`
        })
    }
})

// delete a category
controller.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (categoryModel.deleteCategory(id)) {
        res.status(200).send({
            message: `Deleted category with id: ${id}`
        })
    } else {
        res.status(404).send({
            message: 'Resource does not exist'
        })
    }
})

module.exports = controller;