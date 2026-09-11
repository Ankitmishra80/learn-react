// WAP to print numbers from 1 to 10 using a for loop.

for(let i = 0; i<=10; i++){
    console.log(i);
}

// WAP to print numbers from 10 to 1 using a while loop.

let a = 10;
while(a>0){
    console.log(a);
    a--;
}

// WAP to print even numbers from 1 to 20 using a for loop.
for(let b=1; b<21; b++){
    if(b%2 === 0){
    console.log(b);
    }
}


// WAP to print odd numbers from 1 to 15 using a while loop.
let c = 1;
while(c<16){
    if(c%2 === 1){
        console.log(c);
    }
    c++;
}

// // WAP to print multiplication table of 5(i.e., 5 x 1 = 5.. 5 x 10 = 50)
for(let d = 1; d<11; d++){
    console.log(`5 * ${d} = ${5 * 1}`);
}


// find the sum of numbers from 0 to 100 suing a loop.
let sum =0;
for(let e =1; e<101; e++){
    sum = sum + e;
} 
console.log(sum);

// print all numbers between 1 to 50 that are divisible by 3
for(let f=1; f<51; f++){
    if(f%3 === 0){
        console.log(f);
    }
}


// Ast the user for a number and print whether each number from 1 to that number is even or odd
// e.g "1 is odd", "2 is even"

let variable = prompt("Giv a number");
for(let g=1; g<=variable; g++){
    if(g%2===0){
        console.log(`${g} is even`);
    }else{
        console.log(`${g} is odd`);
    }
}


// how many numbers b/w 1 to 100 are divisible by both 3 & 5
for (let h = 1; h<101; h++){
    if(h%3 === 0 && h%5 === 0){
        console.log(h);
    }
}
