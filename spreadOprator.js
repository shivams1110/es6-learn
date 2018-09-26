/*  Spread Operator is denaoted with three dot(...)
    if you used three dots with adn array to add into new array using 
    that Spread Operator
*/

let example1 = [1,2,3,4,5,6]

let example2 = [...example1]

example2.push("hello")

console.log(example2);

for (const data of example2) {
    console.log(data);
    
}

let example3 = {
    firstName: 'Shiavm'
}

let example4 = {
    fName: example3,
    lastName: "Sharma"
}

console.log(example4);

