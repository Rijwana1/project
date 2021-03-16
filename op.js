//unary operator
let x=10;
x+=4;
console.log(x);
x-=4;
console.log(x);
++x;
console.log(x);
x++;
console.log(x);
--x;
console.log(x);
x--;
console.log(x);

//Bitwise operator
const s=1;
const r=2;
const q=3;

let Myinput=0;
Myinput = Myinput | s;

let msg=(Myinput & s) ? 'y':'n' ;
console.log(msg);

//Boolean operator
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
   
    console.log(typeof s.age,s.age);
    console.log(typeof s.EatMoreChoco,s.EatMoreChoco);
}
//mulitiplicative operator
let a=4;
let b=2;
const d=3.5;
const e=7;
const f=4.3;
a*=b;
c=d*e;
const g=d*f;//bugg
console.log(a);
console.log(c);
console.log(g.toFixed(2));
a/=b;
console.log(a);
a%=b;
console.log(a);
//return NaN ---Not a Number
const m='riju';
c*=m;
console.log(c);

//Additive
let num=23;
let num1=45;
console.log(num+num1);
let n='23';
console.log(num+n);
console.log(num1-num);
var name1="riju";
var age= 20;
var sen="myname is "+name1+" age "+age;
console.log(sen);
//Relational operator
//less than ,greater than
let v=5
let u=7;
if(v<u)
{
    console.log("v is less than u "+ v);
}
else if(u<v)
{
    console.log("u is less than v"+ u);
}
else
{
    console.log("Equal");

}
//less than or equal and greater than or equal
let A=5;
let B=5;
let C=(A>=B)?"yes":"no"
console.log(C);
B++;
let D=(A>=B)?"yes":"no"
console.log(D);
let E=(A<=B)?"yes":"no"
console.log(D);
//Equal to and Not equal to(lose equality operator)
let F=6
if(F==B && A!=B)
{
    console.log(true);
}
else
{
    console.log(false);
}

// Strictly equal and strictly not equal
const S='riju';
if(F===S && F===B)
{
    console.log("hello world");
} 
else{
    console.log("hello");
}
//Equality Operator
console.log(1==1);
console.log(1=='1');// intial value appied all value so it return true
function setValue(val){
    if(val==10)
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
}
setValue(10);
//conditional operator
let Age =  4;
let type = Age > 18 ? "Adult" : "Child";
console.log(type);
// Assignment operator
/*
* =,+=,-=,*=,/=,%=
*/
let H=8;
console.log(H);
H+=7;
console.log(H);
H-=3;
console.log(H);
H*=4;
console.log(H);
H/=2;
console.log(H)
H%=2;
console.log(H);
//comma operator
if((a=0),(b=2),(c=3))
{
    console.log(true)
}
else{
    console.log(false)

}
n=((a=0),(b=2),(c=3))
console.log(n);


