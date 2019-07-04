const commandFactory = {}; 

// Mapping repo name to repo implementation
let commandList = [{name: 'accounts', source:'../commands/account.commands'},
                {name: 'products', source:'../commands/product.commands'}]; 

for (const command of commandList) {
    commandFactory[command.name] = require(command.source);
};


module.exports = commandFactory;