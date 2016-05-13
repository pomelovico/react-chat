/**
 * Created by LikoLu on 2016/5/12.
 */
var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost','me');

/*db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
    console.log('open');
});*/
var PersonSchema = new mongoose.Schema({
    name: String,
    age: Number,
    height: {},
    test:{}
});
PersonSchema.methods.speak = ()=>{
    console.log(this.name);
};
PersonSchema.methods.findByName = cb=>{
    return this.model('potato').find({name:'liko'},cb);
}
var PersonModel = db.model("potato",PersonSchema,'potato');

/*使用实体来创建一条数据*/
var PersonEntity = new PersonModel({name:'vio',age:(Math.random()*100).toFixed(0),height:170+(Math.random()*10).toFixed(0),test:{a:10,b:[1,2,3]}});
PersonEntity.save();
/*使用模型创建一条数据*/
/*    var Temp = {name:'vico',age:23};
 PersonModel.create(Temp,function(err){});*/
console.log("PersonEntity:",PersonEntity.temp);
// PersonEntity.speak();
/*    PersonEntity.findByName(function(err,v){
 console.log(v);
 });*/
PersonModel.find((err,persons)=>{
    persons.map(v=>{
        console.log(v);
    })
});