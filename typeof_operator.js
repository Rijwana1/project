//typeof operator
let A="riju"
let B=typeof A;
console.log(B);
//Primitive Data types
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

