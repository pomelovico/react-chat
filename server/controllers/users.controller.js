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
};
exports.userRegist = function(req,res){
    MongoClient.connect(url, (err, db)=>{
        var result = db.collection('liko').find({},{name:1});
        result.toArray((err,docs)=>{
            var len = docs.length,
                i = 0,
                body = req.body;
            for(; i<len;i++){
                if(body.name === docs[i].name)
                    break;
            }
            if(i === len){
                var date = new Date();
                var userid = (Math.random()*1000).toFixed().toString()
                    + date.getHours().toString()
                    + date.getDate().toString()
                    + (date.getMonth()+1).toString()
                    + date.getFullYear().toString();
                var data = {
                    name:body.name,
                    profile:body.profile,
                    pwd:body.password,
                    phone:body.phone,
                    userid:userid,
                    friends:[]
                }
                db.collection('liko').insert(data);
                res.send({
                    code:8000,
                    Content:{
                        islogin: true,
                        user:data
                    }
                });
            }else{
                res.send({
                    code:8003,
                    Content:{
                        isLogin:false
                    }
                });
            }
        });
    });
};
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