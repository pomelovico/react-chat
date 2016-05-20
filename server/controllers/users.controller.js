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
        // console.log(req.body);
        var user = {};
        result.toArray((err,docs)=>{
            docs.map(v=>{
                if(v.name == req.body.username){
                    ifHas = true;
                    user['name'] = v.name;
                    user['id'] = v._id;
                }
            });
            res.send({code:'8001',Content:{islogin:ifHas,user:user}});
        });
    });
}