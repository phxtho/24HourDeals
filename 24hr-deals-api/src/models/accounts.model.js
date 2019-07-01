// let repoFactory = require('../factory/repositoryFactory');
let repoFactory = require('../factory/repositories/accountRepository');


class AccountsModel {
    constructor(repoFactory) {
        this.factory = repoFactory;
    }

    addAccount(account) {
        this.factory.insertAccount(account);
    };

    removeAccount(account) {
        this.factory.deleteAccount(account);
    };
}

const accountsModel = new AccountsModel(repoFactory);
module.exports = accountsModel;
