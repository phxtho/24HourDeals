const commandInvoker = () => {
    var currentPromise = 'default';
    var commands = [];

    return {
        execute: function (command) {
            // Execute the command and return a promise
            currentPromise = command.execute(command.model);

            // Push it on the stack
            commands.push(command);

            return currentPromise;
        },

        undo: function () {
            var command = commands.pop();
            currentPromise = command.undo(command.model);
        },

        getCurrentValue: function () {
            return currentPromise;
        }
    }
}

module.exports = commandInvoker();
