// Day 6: Arrays

// Activity 1: Array Creation and Access
let array1 = [1,2,3,4,5];
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
// Ans
console.log(array1);

// Task 2: Access the first and last elements of the array and log them to the console.
// Ans
let firstelement = array1[0];
let lastelement = array1[array1.length-1];
console.log(`First element: ${firstelement}, Last Element: ${lastelement}`);

// Activity 2: Array Methods (Basic)
let array2 = [5,6,65,12,18,57,48,23];
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
// Ans
console.log(`Before push: ${array2}`);
array2.push(11);
console.log(`After push: ${array2}`);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
// Ans
console.log(`Before pop: ${array2}`);
array2.pop();
console.log(`After pop: ${array2}`);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
// Ans
console.log(`Before shift: ${array2}`);
array2.shift();
console.log(`After shift: ${array2}`);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
console.log(`Before unshift: ${array2}`);
array2.unshift(15);
console.log(`After unshift: ${array2}`);

// Activity 3: Array Methods (Intermediate)
let array3 = [4,6,84,21,64,31,75,64,15,64,34,94,15,17];
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
// Ans
let newarr = array3.map( (item) => (item*item));
console.log(newarr);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
// Ans
let evenarr = array3.filter( (item) => {
    if(item % 2 == 0){
        return item;
    }
});
console.log(evenarr);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
// Ans
let total = array3.reduce( (sum, item) => (sum+item),0);
console.log(total);

// Activity 4: Array Iteration
let array4 = [45,26,75,51,35,54,24,20,34];
// Task 10: Use a for loop to iterate over the array and log each element to the console.
for(let i = 0; i < array4.length; i++){
    console.log(array4[+i]);
};

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
// Ans
array4.forEach( (item) => {
    console.log(item);
});

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
// Task 13: Access and log a specific element from the two-dimensional array.