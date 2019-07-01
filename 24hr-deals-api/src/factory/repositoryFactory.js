const mongoose = require('mongoose');

const repoFactory = () => {

    // Connect to MongoDB
    mongoose
        .connect(
            'mongodb://mongo:27017/24hr-deals',
            { useNewUrlParser: true }
        )
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));


    let repoList = [{ name: 'accounts', source: './repositories/accountRepository' },
    { name: 'products', source: './repositories/productRepository' }];

    repoList.forEach((repo) => {
        this[repo.name] = require(repo.source)();
    });
};

module.exports = repoFactory;