/*
    In this part we use Arrow Function to reduce the code and Return the Callback method 
    result and store in let varibale.
*/

// Example of without use of Arrow Function
function add(...num) {   
    let total = num.reduce(function(x,y){
        return x+y;
    });
    console.log(total);
}
add(2,3,4,5,6);

/*
    In below Example with Arrow Function we reduce 2 line of code 
    remove function keyword, Curly Brackets and return type.
*/


// Example of Arrow function used instaed of Callback function
function add1(...num) {
    let total = num.reduce((x, y) => x + y);
    console.log(total);
}
add1(2,3,4,5,6);
