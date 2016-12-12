/**
 * Created by 8000570084 on 2016/11/29.
 */
"use strict"

var mongoose = require('mongoose'),
    Proposal = require('../../models/proposalSheet'),
    moment = require('moment'),
    _ = require('underscore');


module.exports = function (router) {
    router.get('/sale', function(req,res) {
        console.log('amdin');
        res.render('salesupport/sale', {title:"saleSupport"});
    });
        router.get('/sale/support', function(req,res) {
        console.log('amdin');
        res.render('salesupport/oneKeyRenew', {title:"oneKeyRenew"});
    });

    router.post('/proposal',function(req,res){
            console.log("come in");
            var proposalInfo  = req.body.proposal;
            console.log("proposalInfo "+JSON.stringify(proposalInfo));
            var proposalModel = new Proposal(proposalInfo);
            proposalModel.save(function(err){
                console.log("come here");
                var model = {};
                if(err){
                    model.err = err;
                    return model;
                }
                console.log("saved"+proposalModel._id);
                var page = 1;
                var condition = {};
                if(req.body.tokenNo){
                    condition["tokenNo"] = new RegExp(req.body.tokenNo,'gi');
                }
                Proposal.paginate(condition,page,10,function(err,pageCount,items){
                    if(err){
                        console.log("err :"+err);
                        return res.json({err:err});
                    }
                    console.log("err");
                    model.title="投保单列表",
                    model.page = page,
                    model.items=items,
                    model.pageCount=pageCount,
                    model.view = "detail",
                    model.showMessage = "proposal SUCCESS"
                   // res.render('/salesupport/detail',model);
                    console.log("model : "+JSON.stringify(model));
                    res.json(model);

                },{
                    sortBy:{
                        name:1
                    }
                });
            })
    });



}
