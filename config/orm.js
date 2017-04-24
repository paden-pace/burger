var connection = require("./connection");


var orm = {
    selectAll: function(whatToSelect, table, orderCol, orderBy){
        var queryString = "SELECT ?? FROM ?? ORDER BY ? ?";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol, orderBy], function(err, result) {
            console.log(results);
        });
    }, 
    insertOne: function(tableToIns, colOne, colTwo, valOne, valTwo){
        var queryString = "INSERT INTO ?? (??, ??) VALUES (??, ?)";
        console.log(queryString);
        connection.query(queryString, [tableToIns, colOne, colTwo, valOne, valTwo], function(err, result) {
            console.log(results);
        });
    }, 
    updateOne: function(tableToUp, setCol, setVal, whereCol, whereVal){
        var queryString = "UPDATE ?? SET ?? = ?? WHERE ?? = ??";
        console.log(queryString);
        connection.query(queryString, [tableToUp, setCol, setVal, whereCol, whereVal], function(err, result) {
            console.log(results);
        });
    }
};

module.exports = orm;