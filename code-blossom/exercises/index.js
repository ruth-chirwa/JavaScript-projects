let girlsNames = ["Ruth", "Esther", "Alice", "Sana", "Omega"]
console.log(girlsNames);


//exercise 2

girlsNames.push("Miracle"); 
console.log(girlsNames); 


//exercise 3

girlsNames.shift("Ruth");
console.log(girlsNames);


//exercise 4 

girlsNames.sort();
console.log(girlsNames);



 // excerise 1
 const datejan = new Date("2000-01-01T00:00:00");
console.log(datejan);  // This will log the full date
const year = datejan.getFullYear();  // Get the year of the date
console.log(year);  // This will log '2000'
const day = datejan.getDay(); 
console.log(day); 
const month = datejan.getMonth();
console.log(month); 
const date = datejan.getDate();
console.log(date);
 