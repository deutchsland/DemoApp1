/**
 * Created by 8000570084 on 2016/11/29.
 */
"use strict"

module.exports = function (router) {
    router.get('/sale', function(req,res) {
        console.log('amdin');
        res.render('salesupport/sale', {title:"saleSupport"});
    });
        router.get('/sale/support', function(req,res) {
        console.log('amdin');
        res.render('salesupport/oneKeyRenew', {title:"oneKeyRenew"});
    });
}
