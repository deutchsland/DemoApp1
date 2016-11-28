/**
 * Created by shado on 2016/10/31.
 */



module.exports = function (router) {
    router.get('/admin', function(req,res) {
        console.log('amdin');
        res.render('admin/products', {title:"Shopping Marts"});
    });
}
