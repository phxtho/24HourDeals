const repoFactory = () => {

    let repoList = [{name: 'accounts', source:'./repositories/accountRepository'},
                    {name: 'products', source:'./repositories/productRepository'}]; 

    repoList.forEach((repo)=>{
        this[repo.name] = require(repo.source)();
    });
};

module.exports = new repoFactory;