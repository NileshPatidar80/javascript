function greet(){
    console.log("Hello! JavaScript");
}
// greet();

function takename(name){
    console.log("Hello",name);
}
// takename("Nilesh");


function functionreturn(a,b){
    return a+b;
}
// console.log(functionreturn(2,4))

function evenodd(num){
    if(num%2==0){
        return "Even";
    }else{
        return "Odd";
    }
}
// console.log(evenodd(200))

//function expression
const multiply = function (a,b){
    return a*b;
}
// console.log(multiply(2,6));

//arrow function
const Square = (x) => x*x;
// console.log(Square(5))

//default parameter
function greet(name = "Guest"){
    console.log("Hello",name)
}
// greet("nilesh")

//callbackfunction
function call(name,callback){
    console.log("User",name);
    callback();
}
function done(){
    console.log("process completed");
}
//call("nilesh",done);

//sum using rest parameter 
function sum(...number){
    return number.reduce((total,num) => total+num,0)
}
//console.log(sum(1,2,3,4,15))

//IIFE
// (function() {
//     console.log(`"Executed Immediately"`)
// })();

//find the largest 3 number
function largest(a,b,c){
    if(a>=b && a>=c){
        return a;
    }else if(b>=a && b>=c){
        x=`largest is b:${b}`
        return x;
    }else{
        return c;
    }
}
//console.log(largest(2,5,4));

//check prime number
function isPrime(num) {
    if (num <= 1) return "Not Prime";

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "Not Prime";
        }
    }
    return "Prime";
}
//console.log(isPrime(11)); // Output: Prime

//Reverse a string using function
function reversestring(str){
    return str.split("").reverse().join();
}
//console.log(reversestring("Nilesh Patidar"))

//find factorial of a number
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
//console.log(factorial(5)); // Output: 120

//write a function to print number fron 1 to n.
function printnumber(n){
    for (let i =1; i<=n;i++){
        console.log(i);
    }
}
//printnumber(4)

//creat a function that returns the sum of two number
function add(a,b){
    return a+b;
}
//const add = (a,b)=>a+b // also with the help of arrow function
//console.log(add(2,4))

//write a function to check if a number is zero, positive, negative
// function check(number){
//     if(number>0){
//         return `Number is Positive:${number}`;
//     }else if(number<0){
//         return "Negative";
//     }else{
//         return "Zero"
//     }
// }
const check = (number)=>{return number>0?"positive": number<0?"negative":"zero"; }// with arrow function
// console.log(check(-1))
// console.log(check(0))
// console.log(check(1))

//Write a function that takes a string and return its length without using .length directly
function getlength(str){
    let count = 0;
    for (let char of str){
        count++
    }
    return count;
}
//console.log(getlength("nilesh"))

//WAF to find the sum  of all element in an array
// function sumarr(arr){
//     let sum1 = 0;
//     for(let i=0;i<=arr.length-1;i++){
//         sum1 += arr[i];
//     }
//     return sum1;
// }
function sumarr(arr){
    let sum=0;
    for(let i of arr){
        sum += i;
    }
    return sum ;
}
//console.log(sumarr([2,3,2,6,99,43,23,1]))


//WAF to find the maximum number of an array 
// function findmax(arr){
//     let max = arr[0]
//      for(let i=1;i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//      }
//     return max;
// }
// function findmax(arr){
//     let max=arr[0];
//     for(let num of arr){
//         if(num>max)
//             max=num;
//     }
//     return max
// }
const findmax = (arr) => Math.max(...arr);
//console.log(findmax([3, 9, 1, 6])); // Output: 9
//console.log(findmax([200,4,5,1,900,2,990,1000]))

//WAF to check if a string is a palindrome
function isPalindrome(str){
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
// console.log(isPalindrome("madam"))//true //"racecar"
// console.log(isPalindrome("hello"))//false

//WAF to count the vowels
 function countVowels(str){
    let count =0;
    let vowels = "aeiouAEIOU";
    for(let char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    return count;
}
// function countVowels(str){
//     let matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0 ;
// }
//console.log(countVowels("nilesh Patidar"))

//WAF to delete the duplicate element of an array
// function duplicatearry(arr){
//     return[...new Set(arr)];
// }

// function duplicatearry(arr){
//     let result=[];
//     for(let num of arr){
//         if(!result.includes(num)){
//             result.push(num);
//         }
//     }
//     return result ;
// }
function duplicatearry(arr){
    return arr.filter((item,index) => arr.indexOf(item) === index);
}
//console.log(duplicatearry([2,3,1,2,1,5,8,8,4,3,2,6,8]))

//WAF to swap the two number without using the third variable
////using arithmetic method
// function swap(a,b){
//     a=a+b;
//     b=a-b;
//     a=a-b;
//     console.log(`value of a ${a} and b ${b}`)
// }
////using Destructing method(modern-js)
function swap(a,b){
    [a,b]=[b,a];
    console.log("After Swap:",a,b);
}
//swap(13,17);

//create a number to generate the fibonacci series up to n terms
// function fibonacci(n){
//     let a=0,b=1;
//     for(let i=1;i<=n;i++){
//         console.log(a);
//         let next = a+b;
//         a=b;
//         b=next;
//     }
// }
//fibonacci(10)

//find the second largest no.in an array
function secondlargest(arr){
    let first = -Infinity;
    let second= -Infinity;

    for(let num of arr){
        if(num>first){
            second=first;
            first=num;
        }else if(num>second && num!=first){
            second = num;
        }
    }
    return second;
}
// function secondlargest(arr){
//     let second=[...new Set(arr)];
//     second.sort((a,b) => b-a)
//     return second[1];
// }
//console.log(secondlargest([1,3,5,10,2,11]))

//check wheather a number is prime or not
