const accountsModel = {};

// we can do a DB call to populate this if we want to
accountsModel.accounts = [
    {
        name: 'Person One',
        basket: {

        }

    },
    {
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
