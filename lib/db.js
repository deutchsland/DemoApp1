/**
 * Created by shado on 2016/10/31.
 */
/*var $data = require('jaydata');
var product = require('Product');
var db = function(){
    $data.Class.defineEx('Database',[$data.EntityContext,$data.ServiceBase],null,{
        Products:{type:$data.EntitySet,elementType:Product}
    });
    return new Database({
        name:mongoDB,
        dataBaseName:'Ecommer',
        address:'localhost',
        port:27017

    });
};*/
"use strict";
var mongoose = require('mongoose');
var db = function(){
    return {
        config: function(conf){
            mongoose.connect('mongodb://' + conf.host + '/' + conf.database);
            var db = mongoose.connection;
            db.on('error',console.error.bind(console,'connection error:'));
            db.once('open',function callback(){
                console.log('db connection open');
            });
        }
    };
};
//module.exports = db();
module.exports = db();
