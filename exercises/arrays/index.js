const numbers = [5, 2, 9, 1, 5, 6];

// Sort the array from lowest to highest
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 5, 5, 6, 9]


let arr = [1, 3, 2, 5];
let newArray = [];

// Sort the array in ascending order
arr.sort((a, b) => a - b);

// Copy the sorted values into newArray
newArray = [...arr];

console.log(newArray); // Output: [1, 2, 3, 5]

const number = [1, 2, 3, 4, 5];

// Calculate the sum of the numbers in the array
const sum = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15

let array = [1, 2, 3, 4];
let sumT = 0;

for (let j = 0; j < array.length; j++) { // Fixed syntax errors in the for loop
    sumT = array[j] + sumT; // Sum up the elements
}

console.log(sumT); // Output: 10
