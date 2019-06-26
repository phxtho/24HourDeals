const accountsModel = {};

// we can do a DB call to populate this if we want to
accountsModel.accounts = [
    {
        id: 0,
        name: 'Person One',
        basket: {

        }

    },
    {
        id: 1,
        name: 'Person Two',
        basket: {

        }
    }
]

accountsModel.addAccount = (product) => {

};

accountsModel.removeAccount = (product) => {

};


module.exports = accountsModel;
