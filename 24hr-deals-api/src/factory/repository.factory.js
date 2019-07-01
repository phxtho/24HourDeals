const mongoose = require('mongoose');

const server = 'mongo:27017';
const database = '24hr-deals';  

const repoFactory = {}; 

// Connect to MongoDB
mongoose
    .connect(
    `mongodb://${server}/${database}`,
    { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Mapping repo name to repo implementation
let repoList = [{name: 'accounts', source:'./repositories/account.repository'},
                {name: 'products', source:'./repositories/productRepository'}]; 

// Adds repos as properties of factory                
repoList.forEach((repo)=>{
    repoFactory[repo.name] = require(repo.source);
});


module.exports = repoFactory;