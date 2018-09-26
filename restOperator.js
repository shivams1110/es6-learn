
/*
    REst Operator is same as Spread Oprator
    but the thing that differntiate it from Spread Operator is
    we dont know how many parameter we pass in function so we add three dots(...)
    in Function argument parameter to take as array to get all values pass in that function 
*/

function add(...num) {
    console.log(num);
}
add(3,4,5,6,7)