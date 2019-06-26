const productsModel = {}

productsModel.products = [
    {
        id: 0,
        name: 'TV One',
        category: 'Electronics',
        description: 'this is a pure dog tv'
    },
    {
        id: 1,
        name: 'TV Two',
        category: 'Electronics',
        description: 'this is a pure dog tv'
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
        this.addProduct(product)
    } else {
        this.products[product.id] = product;
    }
}

productsModel.removeProduct = (id) => {
    let productIndex = productsModel.products.findIndex(x => x.id === id);
    let product = productsModel.products.find(x => x.id === id);
    console.log(product);
    console.log(productIndex);

    if (productIndex !== -1) {
        productsModel.products.splice(productIndex, 1);
        return true;
    } else {
        return false;
    }
};

module.exports = productsModel;