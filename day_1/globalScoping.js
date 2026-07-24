var a=56;
console.log(56);
{
    console.log(a);
    var a=45; //in var both redeclaration and reassignment is possible
    console.log(a);
    var b=74;
    console.log(b);
    a=78;
    console.log(a);
}
console.log(a);
console.log(b);