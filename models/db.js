/**
 * Created by shado on 2016/10/31.
 */
var $data = require('jaydata');
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
};
module.exports = db();
