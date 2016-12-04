"use strict";
var mongoose = require('mongoose'),
    mongoosePaginate = require('mongoose-paginate'),
    uniqueValidator = require('mongoose-unique-validator'),
    updatedTimestamp = require('mongoose-updated_at'),
    validator = require('validator');
var proposalSheetSchema = new mongoose.Schema({
    tokenNo:{
        type:String,
        required:true
    },
    tokenType:{
        type:String,
        required:true
    },
    vinNo:{
        type:String,
        required:true
    },
    engineNo:{
        type:String
    },
    enrollDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    startProposalDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    vinTypeNo :{
        type:String
    },
    viechleNo: {
        type:String
    },
    purchasePrice:{
        type:Number,
        required:true
    },
    realNo: {
        type:Number,
        required:true
    },
    viechleType:{
        type:String
    },
    customerNo:{
        type:Number,
        min:0
    },
    quality:{
        type:Number,
        min:0
    },
    runDistance:{
        type:Number,
        min:0
    },
    carOwnerCard:{
        type:String
    }

});
//添加create、update字段
proposalSheetSchema.plugin(updatedTimestamp);
proposalSheetSchema.plugin(mongoosePaginate);
//添加唯一字段校验
proposalSheetSchema.plugin(uniqueValidator,{
    message:"duplited!"
})
module.exports = mongoose.model('Proposal',proposalSheetSchema);

//mongoose.connect( 'mongodb://localhost/Ecommer' );
