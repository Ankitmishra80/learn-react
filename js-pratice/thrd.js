let a = 10; // block scope and global

{
    let a = 20;
    console.log("Inside a:", a);
    // here o/p is 20
}

console.log("Outside a:", a);
// here o/p is 10