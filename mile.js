"use strict"
//Case Sensitive
const str='riju';
const Str='riju';
console.log(str);
console.log(Str);
if(str==Str)
{
    console.log("yes");
}
else{
    console.log("no");
}
if(str===Str)
{
    let type= typeof Str;
    console.log(type);
    console.log(Str);
}
else{
    console.log("Not yet")
}
//Identifier
let a=6;// a is variable
console.log(a);
let msg="this is me";// msg is identifier
console.log(typeof msg);
//comments
//This is Javascript basics ----- single line comment
/*
*this is rijwana
*want to became a software developer---- multi line comment
*/
//strict mode
let x=5;// dublicate cannot allowed in strict mod
myfunction()
function myfunction(){
    "use strict";
  let y=6;//cause error without let --- inner function
} 
//delete x;  causing error

/*X={                   //X is not declare//statements


    name: 'riju',
    age :20

};*/
/*var obj={};_______________________//mile.js:50 Uncaught TypeError: Cannot assign to read only property 'x' of object '#<Object>'
Object.defineProperty(obj,"x",{value:0,writable:false});
obj.x=4;*/
//delete Object.prototype; ---Uncaught TypeError: Cannot delete property 'prototype' of function Object() { [native code] }
//var eval=3;---//Unexpected eval or arguments in strict mode
//var agruments=9; keywords // public, private,public,implements,interface,package as so..
function myfunction()
{
    alert(this);
}
myfunction();
//Statements
const A="rijuma is a clever girl";//the text ends with semicolon it consider as statement
console.log(A);
//Keywords and reserved words variable
//Example----
/*break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield
*/
//typeof operator
let B=typeof A;
console.log(B);
//OPERATOR
let S;//Undefined
console.log(S);
let T;
T=null;//NULL
console.log(T);
let person=[
    {
        name :"ashiq",
        age :12,
        EatMoreChoco:true,

    },
    {
        name:"afzal",
        age:8,
        EatMoreChoco:false,
    }
];
for(let s of person)
{
   
    console.log(typeof s.EatMoreChoco,s.EatMoreChoco);//Boolean operator
}
let Q="riju";//string
console.log(typeof Q);
let N=90;//number--- support all values of float,int
console.log(typeof N);
//objective type// object type ntng but to access the key value pair using using obj
//2 ways
//object constructor syntax
var obj=new Object();
obj.name ='riju';
obj.profession='Software Developer';
console.log(obj.name);
//object literal syntax
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