const connection = require("./connection");

orm = {
    selectAll: function(table, cb){
        const query = "SELECT * FROM ??";

        connection.query(query, table, (err, res) => {
            if(err) throw err;

            cb(res);
        })
    },

    insertOne: function(table, col, colVal, cb){
        const query = "INSERT INTO ?? SET ?? = ?";

        connection.query(query, [table, col, colVal], (err, res) => {
            if(err) throw err;

            cb(res);
        })
    },

    updateOne: function(table, col1, colVal1, col2, colVal2, cb){
        const query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

        connection.query(query, [table, col1, colVal1, col2, colVal2], (err, res) => {
            if(err) throw err;

            cb(res);
        })
    }
}

module.exports = orm;