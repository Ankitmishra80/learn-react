var a = 5;  // global

{
    var a = 6;  // this is also gl0bal becz they respect only function 
}

console.log(a);

// o/p is 2