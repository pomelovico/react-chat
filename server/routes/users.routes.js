/**
 * Created by LikoLu on 2016/5/12.
 */
var usersCtrl = require('../controllers/users.controller');

module.exports = function(app){
    app.route('/api/login')
        .post(function(req,res){
            usersCtrl.userLogin(req,res);
        });
    app.route('/api/user/regist')
        .post(function(req,res){
            usersCtrl.userRegist(req,res);
        });
    app.route('/api/chatlist')
        .post(function(req,res){
            usersCtrl.userChatList(req,res);
        });

};