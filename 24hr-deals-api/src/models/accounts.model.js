let repoFactory = require('../factory/repositoryFactory');

const accountsModel = () => {
    
    this.addAccount = (account) => {
        repoFactory.accounts.insertAccount(account);
    };
    
    this.removeAccount = (account) => {
        repoFactory.accounts.deleteAccount(account);
    };
    
};

module.exports = accountsModel;
