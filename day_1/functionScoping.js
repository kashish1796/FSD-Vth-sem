greet();
console.log(greet); 
function greet(){
    let section="cse18";
    let branch="cse";
    console.log(`${section}-${branch}`);
}
greet();
console.log(greet); //it will give error because section is not defined in global scope