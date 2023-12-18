// var ans = new Promise((Res,Rej)=>{
//     if(true){
//         return Res();
//     }
//     else{
//         return Rej();
//     }
// })
// ans.then(function(){
//     console.log("Resolve the condition");
// })
// .catch(function(){
//     console.log("Rejected the condition");
// })
/*
1.user will ask for a number between 0 to 9 if the number is below 5 resolve of not rejected ?
2.  i.reach the house
    ii.open the gate
    iii. prepare food and have that
    iv. scroll instagram reels
*/
// var num = 0;
// var ans = new Promise((Res,Rej)=>{
//     if(num<5){
//         return Res();
//     }
//     else{
//         return Rej();
//     }
// })
// ans.then(function(){
//     console.log("Resolve the condition");
// })
// .catch(function(){
//     console.log("Rejected the condition");
// })
// var ans = new Promise(function(res,rej){
//     return res("reach the house");
// })
// var p2 = ans.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res("open the gate");
//     })
// })
// var p3 = p2.then (function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res("prepare food and have that");
//     })
// })
// var p4 = p3.then (function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res("scroll instagram reels");
//     })
// })
// var p5 = p4.then (function(data){
//     console.log(data);
// })
// const promiseEx3 = new  Promise(function(res,rej){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             res({username: "pratush",password : "1234"})
//         }
//         else{
//             rej('Error: Somthing went wrong')
//         }
//     },2000)
// })
// // promiseEx3.then((user)=>{
// //     console.log(user);
// //     return user.username
// // }).then((username)=>{
// //     console.log(username);
// // }).catch(function(error){
// //     console.log(error);
// // })
// async function NewpromiseEx3(){
//     try{
//         const response = await promiseEx3
//     console.log(response);
//     } catch (error){
//         console.log(error);
//     }
// }
// NewpromiseEx3();


async function getAllUser(){
    try{
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }catch (error) {
        console.log("E:",error);
    }
}
getAllUser()