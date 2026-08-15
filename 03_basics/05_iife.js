//Immedieatly invoked function Expressions


(function chai(){
    //Named IIFE
    console.log(`DB CONNECTED`);
    
})();
//it is used to avoid global scope polution

((NAME)=>{
    console.log(`DB CONNECTED TWO ${NAME}`);
    
})("RAHUL")
