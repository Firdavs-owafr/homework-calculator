// let num1 = prompt('birinchi sonni kirit')
// let num2 = prompt('ikkinchi sonni kirit')
// console.log(+ num1 + +num2);
let opr = prompt("Operator:")
let num1 = prompt("Number 1:")
let num2 = prompt("Number 2:")
if(opr == "+"){
    console.log(+ num1 + + num2 );
}else if(opr == "-"){
    console.log(- num1 - - num2);
}else if(opr == "*"){
    console.log(num1 *  num2);
}else if(opr == "/"){
    console.log(num1  / num2);
}else{
    console.log(`I don't know`);
}