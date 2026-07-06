var c = 20
let d=200//global scope
{
    let a=1//local scope
    const b=2
    var c=0
    // console.log("inner a:",a)
    //console.log("inner:",d)
}
// console.log("outer d:",d)
//console.log(b)
// console.log(c)

//v-22
function one(){
    const username = 'nilesh'

    function two(){
        const website='kkab'
        console.log(username);
    }
    //console.log(website);
    two()    
}
//one()

if(true){
    const username = "nitesh"
    if(username=="nitesh"){
        const website = "netflix"
        //console.log(username + website)
    }
    //console.log(website)
}
//console.log(username)

//*********************************************************************
addone(3)
function addone(num){
    return num+1
}

//two(4) //error use it after initalization
const two = function(num){
    return num+2
}  
