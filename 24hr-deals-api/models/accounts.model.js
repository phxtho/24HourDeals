const accountsModel = {};
let repoFactory = require('../factory/repositoryFactory');

accountsModel.addAccount = (account) => {
    repoFactory.accounts.insertAccount(account);
};

accountsModel.removeAccount = (account) => {
    repoFactory.accounts.deleteAccount(account);
};


module.exports = accountsModel;
