/**
 * Created by shado on 2016/10/31.
 */



module.exports = function (router) {
    router.get('/admin/p', function(req,res) {
        console.log('amdin');
        res.render('admin/products', {title:"Shopping Marts"});
    });
}
