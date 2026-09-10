let x=10;
let y=20;

if(x>5 && y<25){
    console.log("A");
}else{
    console.log("B");
}

// o/p A

let isAdmin = true;
let isLoggedIn = false;

if(isAdmin || isLoggedIn){
    console.log("Acess grant ");
}else{
    console.log("Acess denied ");
}

// o/p Acess grant

let temp = 35;

if(!(temp<30)){
    console.log("hot temp");
}else{
    console.log("temp not hot")
}

// o/p hot temp

let a = 0;
if(0){
    console.log("true");
}else{
    console.log("false");
}
// false

let score = 78;

let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";
console.log(grade);
//o/p B


let points = 20;

let status = points > 100 ? "Gold" : points > 50 ? "Silver" : "Bronze";
console.log(status);
// o/p Bronze


let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log(access);
// o/p Deny


let aa=3;
let bb= aa++;
console.log(aa, bb);
//o/p 4, 3


let p=4;
let q=++p;
console.log(p, q);
// o/p 5,5


let m =10;
console.log(m--); // line 1 --> 10
console.log(m); // line 2  --> 9

let n = 5;
let result = n++ + ++n;     // for n++ -. 5, for ++n --> 7 after 
console.log(result);
// o/p 12



let likes = 100;

function likePost(){
    return ++likes;
}
console.log(likePost()); // 101
console.log(likes);      // 101


