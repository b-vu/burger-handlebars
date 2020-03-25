const orm = require("../config/orm");

const burger = {
    all: function(cb){
        orm.selectAll("burgers", res => {
            cb(res);
        })
    },

    create: function(col, colVal, cb){
        orm.insertOne("burgers", col, colVal, res => {
            cb(res);
        })
    },

    update: function(col1, colVal1, col2, colVal2, cb){
        orm.updateOne("burgers", col1, colVal1, col2, colVal2, res => {
            cb(res);
        })
    }
}

module.exports = burger;