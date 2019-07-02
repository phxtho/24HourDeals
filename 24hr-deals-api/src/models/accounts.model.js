// let repoFactory = require('../factory/repositoryFactory');
let repoFactory = require('../factories/repository.factory');


class AccountsModel {
    constructor(repoFactory) {
        this.repo = repoFactory.accounts;
    }

    addAccount(account) {
        return this.repo.insertAccount(account);
    };

    removeAccount(account) {
        return this.repo.deleteAccountByUserName(account);
    };

    allAccounts() {
        return this.repo.getAllAccounts();
    }
}

const accountsModel = new AccountsModel(repoFactory);
module.exports = accountsModel;
