function post(table, model) {console.log("posted an item " + table)}
function remove(table, model) {console.log("removed an item in " + table)}
function get(table, model){console.log("selected info in " + table)}
function update(table, model){console.log("updated info in " + table)}
function updateUndo(table, model){console.log("undid last update in " + table + 'resetting data to ' + model)}


var Command = function (execute, undo, table,model) {
    this.execute = execute;
    this.undo = undo;
    this.table = table;
    this.model = model;
}

var postCommand = function (table, model) {
    return new Command(post, remove, table, model);
};

var deleteCommand = function (table, model) {
    return new Command(remove, post, table, model);
};

var getCommand = function (table, model) {
    return new Command(get, get, table, model);
};

var updateCommand = function (table, model) {
    return new Command(update, updateUndo, table, model);
};

var updateUndoCommand = function (table, model) {
    return new Command(updateUndo, update, table, model);
};

module.exports = {Command, postCommand, deleteCommand, getCommand,updateCommand, updateUndoCommand}; 