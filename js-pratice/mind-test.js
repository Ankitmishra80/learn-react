if(true){
    var a = 5;
    let b = 10;
}

console.log(a); // actually var respect only function so the o/p are 5
console.log(b); // this throws a     ReferenceError, due to let is block-scope


const person = { name : "ankit"};
person.name = "mishra"; // Allowed: You can change the "insides" of the box (like changing the furniture). or inside its property 
person = {}; // Error: You cannot throw away the whole box and replace it with a new one.



let user1 = { name: "Ankit" };
let user2 = user1; // Both variables now point to the exact same object.

// Modifying user2 also changes user1!
user2.name = "Mishra"; 

console.log(user1.name); // Output: "Mishra"


//Array length Trick 
const numbers =;
numbers.length = 2; // Truncating the array manually
console.log(numbers); // Output: [1, 2]

// typeof Mystery (The famous legacy bug)
console.log(typeof null);      // Output: "object" 
console.log(typeof undefined); // Output: "undefined"