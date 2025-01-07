
// function that gives out a sum of numbers through addition
function addNumbers(num1, num2){
    return num1 + num2;
}
const result = addNumbers(20, 10);
console.log(result); 

// exercise 2
function reverseString(str) {
    return str.split("").reverse().join("");
}

const reversed = reverseString("hello");
console.log(reversed); // Outputs: "olleh"

function alphabeticalOrder(string) {
    return string.split('').sort().join('');
}

let name = "Esther";
let lettersInOrder = alphabeticalOrder(name);
console.log(lettersInOrder);
