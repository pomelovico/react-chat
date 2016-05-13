/**
 * Created by LikoLu on 2016/5/12.
 */
var usersCtrl = require('../controllers/users.controller');

module.exports = function(app){
    app.route('/api/login')
        .post(function(req,res){
            usersCtrl.userLogin(req,res);
        })
};