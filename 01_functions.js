function myName(){
    console.log("nilesh")
}
// myName()

function addTwoNumber(number1,number2){
    console.log(number1+number2);
}
//const res = addTwoNumber(2,4) //6
//console.log(res) // undefined because the function does not return anything, it only logs the sum to the console. If you want to get the result of the addition, you should return the sum from the function like this: given below


function add(number1, number2) {
    let result = number1+number2;
    return result
}
const resul = (add(1,3))
//console.log("Resul:",resul)// Result: 4 because the function now returns the sum of the two numbers, which is then stored in the variable `result` and logged to the console.


function add2(num1,num2){
    return num1 + num2
}
const rest=add2(2,8)
//console.log("resultt:",rest)

function login(username){
    return`${username}  is the loogedIn`
}
// console.log(login("nitesh"))
// console.log(login(""))
// console.log(login())

function log(username){
    if(username==undefined ){
        console.log("please provide a username")
        return
    }
    return `${username} is notlogged in`
}
//console.log(log("nik"))
// console.log(log(''))
// console.log(log())

//v-20
function calculatorPrice(...n1){
    return n1
}
//console.log(calculatorPrice(10,12,33,42,45,22))

//obj with function
const user = {
    name:"nitesh",
    age: 20
}
function xyz(anyobject){
    console.log(`name is ${user.name} and age is ${user.age}`)//this will always print the values from the user object, regardless of what is passed to the function. If you want to use the values from the passed object, you should use anyobject instead of user in the console.log statement. Here's the corrected version:
    console.log(`name is ${anyobject.name} and age is ${anyobject.age}`)
}
//xyz(user) 
// xyz({
//     name:"nilesh",
//     age: 22
// })  

//function with array
const myArr = [200,300,400,100,880]
function arrfun(getarray){
    return getarray[0]
}
console.log(arrfun(myArr));
console.log(arrfun([20,30,40,10]))