let number = [1,2,3,4,5]
console.log(number.length-1)
let sliced = number.slice(2,4)
console.log(number.length-1)
console.log(sliced)
console.log(number)
number.splice(1,3,20,30,40,50)
console.log(number)


// const accounts01 =[["admin01", "123"],["admin02", "234"],["admin03", "345"]]
// const accounts02 ={admin01:"123",admin02:"234",admin03:"345"}
// let users ={
//     user01:{
//         name:"ahmad",
//         age:"22",
//         state:"lebanon"
//     },
//     user02:{
//         name:"ali",
//         age:"2"
//     },
//     user03:{
//         name:"mohmed",age:"2092"
//     },
//     user04:{
//         name:"mouad",age:"222"
//     }
// }

// console.log(accounts01)
// console.log(accounts02.keys)
// console.log(accounts02.admin03)
// let admin = prompt("enter username")
// function main(){
//     if(admin in accounts02){
//         console.log(`welcome ${admin} your pass is: ${accounts02[admin]}`)
// //     }else{
// //         console.log("you are not registered")
// //     }
    
  
// // }
// function  getAge(){
//     let name=prompt("enter your name")
//     if(users.name == name){
//         console.log(`${users.name} is ${users.age} years`)
//     }else{
//         console.log(`worng name chekout this names${users.name}`)
//     }
// }