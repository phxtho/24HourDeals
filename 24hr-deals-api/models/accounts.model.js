const accountsModel = {};

// we can do a DB call to populate this if we want to
accountsModel.accounts = [
    {
        id: 0,
        name: 'Person One',
        basket: {
            id: 0,
            products: [
                {
                    id: 0,
                    amount: 1
                },
                {
                    id: 1,
                    amount: 2
                }
            ]
        }

    },
    {
        id: 1,
        name: 'Person Two',
        basket: {
            id: 1,
            products: [
                {
                    id: 0,
                    amount: 1
                }
            ]
        }
    }
]

accountsModel.addAccount = (account) => {
    accountsModel.accounts.push(account);
    return true;
};

accountsModel.getAccount = (id) => {
    let account = accountsModel.accounts.find(x => x.id === id);
    return account;
};

accountsModel.updateAccount = (account) => {
    let accountIndex = accountsModel.accounts.findIndex(x => x.id === account.id);
    if (accountIndex === -1) {
        // If we don't find the account we create one
        this.addAccount(account)
    } else {
        this.accounts[account.id] = account;
    }
}

accountsModel.removeAccount = (id) => {
    let accountIndex = accountsModel.accounts.findIndex(x => x.id === id);

    if (accountIndex !== -1) {
        accountsModel.accounts.splice(accountIndex, 1);
        return true;
    } else {
        return false;
    }
};

accountsModel.getBasket = (id) => {
    let account = accountsModel.accounts.find(x => x.id === id)

    if (!!account) {
        return account.basket;
    } else {
        return null;
    }
}

accountsModel.updateBasket = (id, basket) => {
    let account = accountsModel.accounts.find(x => x.id === id)
    if (!!account) {
        return account.basket = basket;
    } else {
        return null;
    }
}

module.exports = accountsModel;
