let score="1254556ffh"
let statement=true
console.log(typeof score);  // type of score is string

let NewScore= Number(score) // Convert string to number 
let state=Number(statement)

console.log(typeof NewScore);
console.log(NewScore);
console.log(state);



// "123"=> 123
// "123abd">> can not converted NaN
// true>> 1 & false>> 0


let isLoggedin= 0
let booleanisLoggedin= Boolean(isLoggedin)
console.log(booleanisLoggedin);
 
//1>>  true & 0>> false
// "">> false
//"sa">> true


let num=2545
let Stnum= String(num)

console.log(Stnum);
console.log(typeof Stnum);
