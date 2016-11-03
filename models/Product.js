/**
 * Created by shado on 2016/10/31.
 */
var $data = require('jaydata');

var product = function() {
    $data.Class.define('Product', $data.Entity, null, {
        Id: { type: "int", key: true, computed: true },
        Task: { type: String, required: true, maxLength: 200 },
        DueDate: { type: Date },
        Completed: { type: Boolean }
    }, null);
    return Product;
};

module.exports = Product();

