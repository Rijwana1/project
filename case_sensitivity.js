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