// Task 1: Arrow Functions

// 1. Square each element in the array
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers);

// 2. Filter strings with more than 5 characters
const strings = ["apple", "banana", "kiwi", "watermelon", "grape"];
const longStrings = strings.filter(str => str.length > 5);
console.log(longStrings);

// Task 2: Destructuring

// 3. Extract properties into variables
const person = { name: "Alice", age: 30 };
const { name, age } = person;
console.log(name, age);

// 4. Function to destructure and log properties
function logPersonDetails({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
logPersonDetails(person);

// Task 3: Template Literals

// 5. Introduce a person
function introducePerson(name, age) {
  return `Hi, my name is ${name} and I am ${age} years old.`;
}
console.log(introducePerson("Alice", 30));

// 6. Log book information
const books = [
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
];
books.forEach(book => {
  console.log(`${book.title} by ${book.author}, published in ${book.year}.`);
});

// Task 4: Spread and Rest Operators

// 7. Concatenate two arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray);

// 8. Function using rest operator
function collectArgs(...args) {
  console.log(args);
}
collectArgs(1, 2, 3, 4, 5);

// Task 5: Classes and Inheritance

// 9. Animal and Bird classes
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

class Bird extends Animal {
  constructor(name, sound, canFly) {
    super(name, sound);
    this.canFly = canFly;
  }
}

const parrot = new Bird("Parrot", "Squawk", true);
parrot.makeSound();
console.log(parrot.canFly);

// 10. Calculate shape areas
class Shape {
  calculateArea() {
    throw new Error("Method not implemented.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  calculateArea() {
    return this.side ** 2;
  }
}

const shapes = [
  new Circle(5),
  new Square(4),
];
shapes.forEach(shape => {
  console.log(shape.calculateArea());
});

// Task 6: Promises

// 11. Promise with delay
const delayedPromise = new Promise(resolve => {
  setTimeout(() => resolve("Success after 3 seconds"), 3000);
});
delayedPromise.then(console.log);

// 12. Fetch data using promises
function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}

// Task 7: Async/Await

// 13. Refactor promise to async/await
async function delayedAsync() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  console.log("Success after 3 seconds");
}
delayedAsync();

// 14. Fetch data from two APIs
async function fetchCombinedData(url1, url2) {
  const [data1, data2] = await Promise.all([
    fetch(url1).then(res => res.json()),
    fetch(url2).then(res => res.json()),
  ]);
  return { data1, data2 };
}

