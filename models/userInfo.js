/**
 * Created by shado on 2016/11/26.
 */
"use strict";
var mongoose = require('mongoose'),
    mongoosePaginate = require('mongoose-paginate'),
    uniqueValidator = require('mongoose-unique-validator'),
    updatedTimestamp = require('mongoose-updated_at'),
    validator = require('validator');
var userInfoSchema = new mongoose.Schema({
    name:{
        type:String ,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    address :[{
        type:String,
        default:'none'
    }],
    isValid :{
        type:String,
        default:1
    },
    company:{
        type:String,
        default:'none'
    },
    password:{
        type:String
    },
    roles:{
        type:String
    },
    createDate: {
        type:Date,
        required:true,
        default:Date.now()
    }


});


//添加create、update字段
    userInfoSchema.plugin(updatedTimestamp);
    userInfoSchema.plugin(mongoosePaginate);
//添加唯一字段校验
    userInfoSchema.plugin(uniqueValidator,{
        message:"duplited!"
    })
module.exports = mongoose.model('UserInfo',userInfoSchema);

//mongoose.connect( 'mongodb://localhost/Ecommer' );


