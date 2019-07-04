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

        undo: function (res) {
            var command = commands.pop();
            current = command.undo(command.table, command.model, res);
        },

        getCurrentValue: function () {
            return current;
        }
    }
}

module.exports = executor;