/**
 * Created by LikoLu on 2016/5/12.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/liko';

exports.userLogin = function(req,res){
    MongoClient.connect(url, (err, db)=>{
        var result = db.collection('liko').find();
        var ifHas = false;
        var user = {};
        console.log(req.body);
        result.toArray((err,docs)=>{
            docs.map(v=>{
                if(v.name == req.body.username){
                    ifHas = true;
                    user['name'] = v.name;
                    user['id'] = v.userid;
                }
            });
            res.send({
                code:ifHas?8000:8001,
                status:ifHas,
                Content:{
                    islogin:ifHas,
                    user:user
                }
            });
        });
    });
}
exports.userChatList = function(req,res){
    MongoClient.connect(url, (err, db)=>{
        var result = db.collection('liko').find({userid:req.body.userid});
        result.toArray((err,docs)=>{
            docs.length ?
                res.send({code:8000,status:true,Content:docs[0].friends}) :
                res.send({code:8002,status:false,Content:null});
        });
    });
}