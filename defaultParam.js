/*
    IN this we have function with numArray Parameter but I Call add(numArray) method 
    without passing arguments. It give error because that parameter get num value.

    So to resolve that problem we set default value in arguments. 
    So if we call function without with arguments or parameter. That function pick
    Default value that we have set in Function.
*/

// Before set Default parameter example

function add(numArray) {
    let total = 0;

    numArray.forEach(element => {
        total += element;
    });
    console.log(total);
}
add();

// After set Default Parameter Example

function add1(numArray = []) {
    let total = 0;

    numArray.forEach(element => {
        total += element;
    });
    console.log(total);
}
add1();
