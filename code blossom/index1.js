// JavaScript Fundamentals

// 1: Functions

// a. Create a function called `addNumbers` that takes two parameters and returns their sum.
function addNumbers(num1, num2) {
    return num1 + num2;
  }
  console.log(addNumbers(5, 10)); // Output: 15

  // b. Write a function `reverseString` that takes a string as input and returns its reverse.
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString('hello')); // Output: 'olleh'
  
  // c. Write a function that returns a string that has letters in alphabetical order.
  function alphabetizeString(str) {
    return str.split('').sort().join('');
  }
  console.log(alphabetizeString('webmaster')); // Output: 'abeemrstw'

  // 2: Conditionals
  
  // a. Write a function called `isEven` that takes a number as an argument and returns true if it's even and false if it's odd.
  function isEven(num) {
    return num % 2 === 0;
  }
  console.log(isEven(4)); // Output: true

  // b. Write a function that displays the largest integer among two integers.
  function findLargest(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  console.log(findLargest(7, 3)); // Output: 7

  // c. Create a function `getGrade` that takes a score as input and returns a letter grade.
  function getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }
  console.log(getGrade(85)); // Output: 'B'
 

  // 3: Loops
  
  // a. Write a function called `printNumbers` that prints all the numbers from `1` to `n`.
  function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }
  
  // b. Write a JavaScript for loop that iterates from 0 to 15 and checks if the current number is odd or even.
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
  
  // c. Write a JavaScript program that iterates integers from 1 to 100 with "FizzBuzz" logic.
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
  
  // 4: Objects and Arrays
  
  // a. Create an object `person` with properties `name`, `age`, and `city`.
  const person = {
    name: 'John',
    age: 25,
    city: 'New York',
  };
  
  // b. Add a new property `hobbies` to the `person` object.
  person.hobbies = ['reading', 'traveling', 'coding'];
  
  // c. Write a JavaScript program to get the volume of a cylinder with four decimal places using classes.
  class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    getVolume() {
      return +(Math.PI * this.radius ** 2 * this.height).toFixed(4);
    }
  }
  
  // Example Usage
  const cylinder = new Cylinder(3, 5);
  console.log(cylinder.getVolume()); // Output: Volume rounded to 4 decimal places