/**
 * Created by shado on 2016/11/26.
 */
"use strict"
var UserInfo = require('../../models/userInfo'),
    mongoose = require('mongoose');
   // auth = require('../../')
module.exports = function (router) {
        router.get('/userAdd',function(req,res){
            var user = req.user,

                model = {
                    message:"showmessage"
                };
            console.log(req.user);
            UserInfo.findOne({name:user.name},function(err,userInfo,next){
                if(err){
                    return next(err);
                }if(userInfo){
                    model.userInfo = userInfo;
                    model.title = "用户信息";
                    res.render('user/add',model);
                }
            })

        });
    router.get('/saleSupport',function(req,res){
        res.redirect('salesupport/sale');
    });
}
