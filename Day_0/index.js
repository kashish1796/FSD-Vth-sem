var a=2;
console.log(typeof(a));

let b="good"
console.log(typeof(b));

var a=5;  
console.log(typeof(a));

var a="1";//when we use let instead of var then it gives us error due to same var declaration
a=2+"1";
console.log(a);

var a;
a=7;
console.log(a);
{
    var a="1";
a=2+"1";
console.log(a);
}
console.log(a);