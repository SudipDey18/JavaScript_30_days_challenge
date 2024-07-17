// Day 4: Loops

// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
// Ans
for(let i = 1; i<=10; i++){
    console.log(i);
};

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
// Ans
for(let i = 1; i<=10; i++){
    console.log(`${5} x ${i} = ${5*}`);
};
// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
// Ans
let i = 1;
let sum = 0;
while(i<=10){
    sum +=i;
};
console.log(sum);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
// Ans
let j = 10;
while(i>=1){
    console.log(i);
};

// Activity 3: Do... While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
// Ans
let x = 1;
do{
    console.log(x);
} while(x<6);

// Task 6: Write a program to calculate the factorial of a number uing a do...while loop.
// Ans
let num = 6;
let y = 1;
let factorial = 1;
do {
    factorial *= y;
} while (y<=num);
console.log(factorial);

// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops:
/*
*
**
***
****