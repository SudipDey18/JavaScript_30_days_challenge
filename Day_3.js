// Day 3: Control Structures

// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
// Ans
let numb = -9;
if(numb < 0){
    console.log("This number is negative number");
}else if(numb == 0){
    console.log("Thi number is 0");
}else {
    console.log("This number is posative numbe");
};

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
// Ans
let age = 19;
if (age>=18){
    console.log("you are eligible for voting");
}else {
    console.log("your age is les than 18"); 
};

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
// Ans
let number1 = 68;
let number2 = 46;
let number3 = 37;
if (number1<number2){
    if(number2>number3){
        console.log(`The lergest number is: ${number2}`);
    }else{
        console.log(`The largest number is: ${number3}`);
    };
}else {

    if(number1>number3){
        console.log (`The largest number is: ${number1}`);
    }else {
        console.log (`The largest number is: ${number3}`);
    };
};

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
// Ans
let Day = 5;
switch (Day) {
    case 1:
        console.log("Monday");
        break ;
    case 2:
        console.log("Tuesday");
        break ;
    case 3:
        console.log("Wednesday");
        break ;
    case 4:
        console.log("Thursday");
        break ;
    case 5:
        console.log("Friday");
        break ;
    case 6:
        console.log("Saturday");
        break ;
    case 7:
        console.log("Sunday");
        break ;
    default :
        console.log("invalid input");
        break ;
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
// Ans
let marks = 56;
switch (true) {
    case (marks>=85):
        console.log(`Gread is 'A'`);
        break ;
    case (marks>=70):
        console.log(`Gread is 'B'`);
        break ;
    case (marks>=65):
        console.log(`Gread is 'C'`);
        break ;
    case (marks>=40):
        console.log(`Gread is 'D'`);
        break ;
    case (marks<40):
        console.log(`Gread is 'F'`);
        break ;
    default :
        console.log("invalid input");
        break ;
}

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let number4 = 6;
(number4%2===0) ? console.log(`${number4} is even number`) : console.log(`${number4} is odd number`);

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console
// Ans
let new_year = 2002;
if((new_year % 4 == 0 && new_year % 100 != 0) || new_year%400 == 0){
    console.log(`${new_year} is a leap year`);
}else{
    console.log(`${new_year} is not a leap year`);
}
