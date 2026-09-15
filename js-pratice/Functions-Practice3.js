function countDigits(num) {

    let count = 0;

    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }

    return count;
}
console.log(countDigits(12345));
// o/p 5


//Default Parameter
function greet(name = "Guest") {
    return "Hello " + name;
}
console.log(greet("Ankit"));
console.log(greet());
// o/p Hello Ankit, Hello Guest


// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(10, 20));
// o/p 30


// Arrow Function
const addd = (aa, bb) => {
    return aa + bb;
};
console.log(addd(10, 20));
// o/p 30


// Callback Function
function greeet(name1) {
    return "Hello " + name1;
}

function processUser(name1, callback) {
    return callback(name1);
}
console.log(processUser("Ankit", greeet));
// Hello Ankit


// Function as an argument
function adddd(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function calculate(x, y, operation) {
    return operation(x, y);
}

console.log(calculate(10, 5, adddd));
console.log(calculate(10, 5, multiply));
// o/p 15, 50
