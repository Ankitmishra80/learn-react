function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
// o/p - 30


function checkEvenOdd(num1) {
    if (num1 % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));
// Even , Odd


function square(n) {
    return n * n;
}
console.log(square(5));
// o/p 25


const square = (n1) => {
    return n1 * n1;
};
console.log(square(5));
// o/p 25


function cube(num11) {
    return num11 * num11 * num11;
}
console.log(cube(3));
// 27


function findLargest(d, e, f) {

    if (d >= e && d >= f) {
        return d;
    } 
    else if (e >= d && e >= f) {
        return e;
    } 
    else {
        return f;
    }
}
console.log(findLargest(10, 25, 15));
// o/p 25


function checkNumber(num) {

    if (num > 0) {
        return "Positive";
    } 
    else if (num < 0) {
        return "Negative";
    } 
    else {
        return "Zero";
    }
}
console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));
// o/p Positive, Negative, Zero


function multiply(j, k) {
    return j * k;
}
console.log(multiply(5, 4));
// o/p 20


function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log(celsiusToFahrenheit(0));
// o/p 32