// Day 5: Functions

// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
// Ans
function odd_even(num) {
    if (num % 2 == 0) {
        console.log(`${num} is even number`);
    } else {
        console.log(`${num} is odd number`);
    }
}
odd_even(18);

// Task 2: Write a function to calculate the square of a number and return the result.
// Ans
function square(num) {
    return num*num;
}
console.log(square(5));

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function max(num1,num2) {
    if (num1>num2) {
        console.log(`The maximum number is ${num1}`);
    } else {
        console.log(`The maximum number is ${num2}`);
    }
}
max(45,31);
// Task 4: Write a function expression to concatenate two strings and return the result.
// Ans
function concatenate(str1, str2) {
    return str1 + " " + str2;
}
console.log(concatenate("Hi","Sudip"));
// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
let sum = (num1,num2) => {
    return num1 + num2;
}
console.log(sum(5,45));
// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
//Ans
let check = (string1, char) => (string1.includes(char));
console.log(check ("Dip","i"));

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
// Ans
let product = (num1, num2 = 2) => (num1 * num2);
console.log(product(4));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
// Ans
let greeting = ( name, age =18 ) => (`Hi I am ${name}, my age ${age}`);
console.log(greeting("Sudip Dey",19));

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
// Ans
let print = () => console.log("Executed");
let function1 = (func, num) => {
    for (let index = 1; index <= num; index++) {
        func();
    }
}
function1(print,3);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
// Ans
let function2 = (x) => ++x;
let function3 = (y) => ++y;
function highorderfun(fun1,fun2,num) {
    let temp = fun1(num);
    console.log(fun2(temp));
}
highorderfun(function2,function3,5);