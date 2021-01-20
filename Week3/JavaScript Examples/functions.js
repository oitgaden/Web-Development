function getFullName(firstName, lastName) {
    let fullName = firstName + lastName;
    return fullName;
}

console.log(getFullName('Tom', 'Smith'));
console.log(getFullName(1, 2));

function calculate(value1, value2, calcFunction) {
    const multiplier = 5;
    return calcFunction(value1, value2) * multiplier;
}

function add(value1, value2) {
    return value1 + value2;
}

function multiply(value1, value2) {
    return value1 * value2;
}

console.log(calculate(2, 3, add));
console.log(calculate(2, 3, multiply));