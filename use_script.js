"use strict";
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
    alert(this);// undefined
}
myfunction();
