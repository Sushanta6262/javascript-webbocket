/* 
Function- a javascript function is a block of code designed to perform a particular task.

*/
// function sayName(){
//     console.log("G");
//     console.log("I");
//     console.log("F");
//     console.log("T");
// }
// sayName();
//sayName-Reference
//()-Execution
// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNumber("a",4);
// function addTwoNumber1(number1,number2){
//     let result=number1+number2;
//     return result;
// }
// const result = addTwoNumber1(3,5);
// console.log("result :",result);
// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter your username");
//     }
//     else{
//         return `${username} just logged in`;
//     }
// }
// console.log(loginUserMessage());
// function calculatePrice(val,...num1){ //(...)-rest operator
//     return val;
//     return num1;//multipul value can't return ones a time
// }
// console.log(calculatePrice(200,300,400,500));
const user = {
    username : "gift",
    price : 400
}
function handelObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handelObject(user);