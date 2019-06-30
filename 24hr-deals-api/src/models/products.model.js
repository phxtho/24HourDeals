const productsModel = {}

productsModel.products = [
    {
        id: 0,
        name: 'TV One',
        description: 'this is a pure dog tv',
        price: 100,
        stock: 5,
        dealEndTime: "July 5, 2019 13:55:00",
        dealDuration: 1,
        category: 'Electronics'
    },
    {
        id: 1,
        name: 'TV Two',
        category: 'Electronics',
        description: 'this is a pure dog tv',
        price: 100,
        stock: 5,
        dealEndTime: "July 5, 2019 13:55:00",
        dealDuration: 1,
        category: 'Electronics'
    }
]

productsModel.addProduct = (product) => {
    productsModel.products.push(product);
    return true;
};

productsModel.getProduct = (id) => {
    let product = productsModel.products.find(x => x.id === id);
    return product;
};

productsModel.updateProduct = (product) => {
    let productIndex = productsModel.products.findIndex(x => x.id === product.id);
    if (productIndex === -1) {
        // If we can't find the product we create one
        this.addProduct(product)
    } else {
        this.products[product.id] = product;
    }
}

productsModel.removeProduct = (id) => {
    let productIndex = productsModel.products.findIndex(x => x.id === id);

    if (productIndex !== -1) {
        productsModel.products.splice(productIndex, 1);
        return true;
    } else {
        return false;
    }
};

module.exports = productsModel;