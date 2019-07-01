const repositoryFactory = require('../factory/repositoryFactory');
const accountsModel = {}

accountsModel.addAccount = (account) => {
    this.repositoryFactory.insertAccount(account);
}

accountsModel.removeAccount = (account) => {
    this.repositoryFactory.deleteAccount(account);
};


module.exports = accountsModel;
