function factorial(num) {

    let result = 1;

    for (let i = 1; i <= num; i++) {
        result = result * i;
    }

    return result;
}
console.log(factorial(5));
// o/p 120


function isPrime(num1) {

    if (num1 < 2) {
        return false;
    }

    for (let j = 2; j < num1; j++) {

        if (num1 % j === 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));
// o/p true, false


function reverseNumber(num11) {

    let reverse = 0;

    while (num11 > 0) {

        let digit = num11 % 10;

        reverse = reverse * 10 + digit;

        num11 = Math.floor(num11 / 10);
    }

    return reverse;
}
console.log(reverseNumber(12345));
// o/p 54321


function isPalindrome(n) {

    let original = n;
    let reverse = 0;

    while (n > 0) {

        let digit1 = n % 10;

        reverse = reverse * 10 + digit1;

        n = Math.floor(n / 10);
    }

    return original === reverse;
}
console.log(isPalindrome(121));
console.log(isPalindrome(123));
// o/p true, false 

