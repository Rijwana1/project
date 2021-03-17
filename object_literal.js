//objective type// object type ntng but to access the key value pair using using obj
//2 ways
//object constructor syntax
var obj=new Object();
obj.name ='riju';
obj.profession='Software Developer';
console.log(obj.name);
var user1= {
    name : 'rijuraj',
    id: 123,
    Sayhi: function(){
        console.log("hello "+user1.name);// obj.sayHi is not a function--- user1 replaced by this

    }
}
user1.Sayhi();

user1['first name']='some name';
console.log(user1);

var propName = 'first name';
console.log(user1[propName]);