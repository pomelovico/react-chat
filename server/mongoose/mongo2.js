/**
 * Created by LikoLu on 2016/5/11.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/liko';

module.exports.findUser = function(userid,callback){
    MongoClient.connect(url, function(err, db) {
        console.log("Connected correctly to server");
        var res = db.collection('liko').find();
        res.toArray(function(err,docs){
            docs.map(function(v,k){
                if(v.name == userid){
                    callback(true);
                    return ;
                }
            });
        });
        return false;
    });
    return 444;
}

module.exports.test = function(){
   return 123;
};