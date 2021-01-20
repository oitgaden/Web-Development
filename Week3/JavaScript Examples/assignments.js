var firstName; // function scope
let lastName = 'Smith'; // block scoped, single quote, no semi-colon
const value = 10; // constant (cannot be modified later)
var noValue;

console.log(noValue);

firstName = "Tom";
console.log(firstName);

firstName = 5;
console.log(firstName);

firstName = undefined;
console.log(firstName);

// value = 5;

