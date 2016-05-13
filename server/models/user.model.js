/**
 * Created by LikoLu on 2016/5/12.
 */
var users = [
    {name:'liko',pwd:'111'},
    {name:'vico',pwd:'222'}
];
module.exports = {
    find:function(callback){
        callback(null,users);
    }
};