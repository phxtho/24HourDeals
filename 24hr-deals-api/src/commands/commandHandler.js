var Command = require('./command')
let commands = [];

const commandList = {}

let executor = function () {
    var current = 'default';
    var commands = [];

    return {
        execute: function (command) {
            current = command.execute(command.table, command.model, command.res);
            commands.push(command);
        },

        undo: function () {
            var command = commands.pop();
            current = command.undo(command.table, command.model, command.res);
        },

        getCurrentValue: function () {
            return current;
        }
    }
}

// function run() {
//     var executorApp = new executor();

//     executorApp.execute(new Command.postCommand('accounts', {}));
//     executorApp.execute(new Command.postCommand('products', {}));
//     executorApp.execute(new Command.postCommand('test', {}));
//     executorApp.execute(new Command.postCommand('test2', {}));
//     executorApp.execute(new Command.updateCommand('updateTable', {id: 1}))

//     executorApp.undo();
//     executorApp.undo();
//     executorApp.undo();

// }
module.exports = executor;