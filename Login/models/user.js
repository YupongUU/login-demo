var mongoose = require("mongoose")    //顶会议用户组件
var Schema = mongoose.Schema; //创建模型
var userScheMe = new Schema({
    userid: String,
    password: String
});//定义一个新的模型，但是此模式还未和users关联

exports.user = mongoose.model('users', userScheMe);//与users集合关联
