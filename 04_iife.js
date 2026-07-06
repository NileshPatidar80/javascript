//Immediately Invokeed function expressions(IIFE)

(function chai(){
    //named IIFE
    console.log(`DB conneted`);
})();

( (name) => {
    console.log(`DB connected two ${name}`);
})("nilesh");
