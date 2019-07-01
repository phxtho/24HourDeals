// let repoFactory = require('../factory/repositoryFactory');
let repoFactory = require('../factories/repository.factory');


class AccountsModel {
    constructor(repoFactory) {
        this.repo = repoFactory.accounts;
    }

    addAccount(account) {
        this.repo.create(account);
    };

    removeAccount(account) {
        this.repo.deleteAccount(account);
    };
}

const accountsModel = new AccountsModel(repoFactory);
module.exports = accountsModel;
