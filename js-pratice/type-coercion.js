// type-coercion

"5" + 1 // "51" → number converted to string
"5" - 1 // 4 → string converted to number
true + 1 // 2
null + 1 // 1
undefined + 1 // NaN

//Loose vs Strict Equality
// == compares value with type conversion
// === compares value + type (no conversion)
// Always prefer === for accurate comparisons.

"5" == 5; // true
"5" === 5; // false


// Truthy and Falsy Values
// Falsy values:
// false , 0 , "" , null , undefined , NaN

// Everything else is truthy, including:
// "0" , "false" , [] , {} , function(){}

console.log(Boolean(0));            // false
console.log(Boolean("0"));          // true
console.log(Boolean([]));           // true
console.log(Boolean(undefined));    // false
