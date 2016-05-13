/**
 * Created by LikoLu on 2016/5/12.
 */
var userModel = require('../models/user.model');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/liko';

exports.userLogin = function(req,res){
    MongoClient.connect(url, (err, db)=>{
        console.log("Connected correctly to server");
        var result = db.collection('liko').find();
        var ifHas = false;
        result.toArray((err,docs)=>{
            docs.map(v=>{
                if(v.name == req.body.username){
                    ifHas = true;
                }
            });
            ifHas ? res.send({status:'success',code:1}) : res.send({status:'failed',code:0});
        });
    });
}