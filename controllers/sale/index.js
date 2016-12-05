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
            var proposalInfo  = req.body.proposal;
            var proposalModel = new Proposal(proposalInfo);
            proposalModel.save(function(err){
                var model = {};
                if(err){
                    model.err = err;
                    return res.json(model);
                }
                Proposal.paginate({},page,10,function(err,pageCount,items){
                    if(err){
                        return res.json({err:err});
                    }
                    model.title="投保单列表";
                    model.items=items;
                    model.pageCount=pageCount;
                    model.showMessage = "proposal SUCCESS";
                    //res.render('/salesupport/detail',model);
                    res.json(model);

                },{
                    sortBy:{
                        name:1
                    }
                })
            })
    });



}
