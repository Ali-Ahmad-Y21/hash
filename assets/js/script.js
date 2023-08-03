const accounts01 =[["admin01", "123"],["admin02", "234"],["admin03", "345"]]
const accounts02 ={admin01:"123",admin02:"234",admin03:"345"}
let p1 ={name:"ja3far",age:22,ststus:"lebanon"}
// let p2 ={name:"ja3far",age:22,ststus:"lebanon"}
// let p3 ={name:"ja3far",age:22,ststus:"lebanon"}
// console.log(accounts01)
// console.log(accounts02.keys)
// console.log(accounts02.admin03)
// let admin = prompt("enter username")
// function main(){
//     if(admin in accounts02){
//         console.log(`welcome ${admin} your pass is: ${accounts02[admin]}`)
//     }else{
//         console.log("you are not registered")
//     }
    
  
// }
function  getAge(){
    let name=prompt("enter your name")
    if(p1.name == name){
        console.log(`${p1.name} is ${p1.age} years`)
    }else{
        console.log("worng name")
    }
}