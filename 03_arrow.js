const user = {
    username: "hitesh",
    price: 199 ,

    welcomemessage: function(){
        console.log(`${this.username},welcome to website`); 
    }
}
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
//console.log(this)

// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()

// const vhai = function(){
//     let username = "Nitesh"
//     console.log(this.username)
// }
// vhai()

const vhai = () => {
    let username = "Nitesh"
    console.log(this.username)
}
//vhai()

// const addThree = (num1,num2) => {
//     return num1 + num2
// }  // if we use curley braces in arrow function then must to use return, if we use parantheses no need to use return 
// console.log(addThree(2,4))

// const addThree = (num1,num2) =>  num1 + num2
// const addThree = (num1,num2) => (num1 + num2)
const addThree = (num1,num2) => ({user:"mukesh"})
console.log(addThree(2,4))