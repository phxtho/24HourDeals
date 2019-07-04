const mongoose = require('mongoose');

// server = '127.0.0.1:27017';
const server = 'mongo:27017';
const database = '24hr-deals';  

const repoFactory = {}; 
mongoose.set('useFindAndModify', false);
// Connect to MongoDB
mongoose
    .connect(
    `mongodb://${server}/${database}`,
    { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Mapping repo name to repo implementation
let repoList = [{name: 'accounts', source:'../repositories/account.repository'},
                {name: 'products', source:'../repositories/product.repository'}]; 

for (const repo of repoList) {
    repoFactory[repo.name] = require(repo.source);
};


module.exports = repoFactory;