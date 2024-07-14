// Day 2: Operators

// Activity 1: Arithmetic Operations
let num1 = 15;
let num2 = 2;
// Task 1: Write a program to add two numbers and log the result to the console.
// Ans
console.log(`${num1} + ${num2} = ${num1+num2}`);

// Task 2: Write a program to subtract two numbers and log the result to the console.
// Ans
console.log(`${num1} - ${num2} = ${num1-num2}`);

// Task 3: Write a program to multiply two numbers and log the result to the console.
// Ans
console.log(`${num1} * ${num2} = ${num1*num2}`);

// Task 4: Write a program to divide two numbers and log the result to the console.
// Ans
console.log(`${num1} / ${num2} = ${num1/num2}`);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
// Ans
console.log(`${num1} % ${num2} = ${num1%num2}`);

// Activity 2: Assignment Operators
let a_number = 15;
// Task 6: Use the += operator to add a number to a variable and log the result to the console.
// Ans
a_number += 5;
console.log(a_number);

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
// Ans
a_number -= 4;
console.log(a_number);

// Activity 3: Comparison Operators
let num_4 = 16;
let num_5 = 14;
let num_6 = 14;
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
// Ans
console.log(num_4 > num_5);
console.log(num_4 < num_5);

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
// Ans
console.log(num_6 >= num_5);
console.log(num_5 <= num_4);

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
console.log(num_6 == "14");
console.log(num_6 === "14");

// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
// Ans
let age = 19;
let have_licence = true;
if (age >= 18 && have_licence) {
    console.log("You Can drive car");
}else{
    console.log("You Cannot Drive");
}

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
// Ans
let courcePurchased = false;
let areYouTeacher = true;
if (courcePurchased || areYouTeacher) {
    console.log("You can access this cource");
}else{
    console.log("You Cannot access this cource");
}

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
// Ans
if (!false) {
    console.log("Executed");
} else {
    console.log("Error !");
}

// Activity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let newNumber = -65;
(newNumber < 0) ? console.log("This is negative number") : console.log("This is positive number");