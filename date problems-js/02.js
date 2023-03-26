// Write a JavaScript function to get the current date.

// Note : Pass a separator as an argument.

// Test Data :

// console.log(curday('/'));

// console.log(curday('-'));

// Output :

// "11/13/2014"

// "11-13-2014"



// original date string in format: yyyy-mm-dd
const originalDateStr = "2023-03-24";

// create a new Date object from the original date string
const originalDate = new Date(originalDateStr);

// get the day, month, and year components of the date
const day = originalDate.getDate();
const month = originalDate.getMonth() + 1; // add 1 to convert from 0-based index to 1-based index
const year = originalDate.getFullYear();

// create the formatted date string with slashes between the components
const formattedDateStr = `${day}-${month}-${year}`;

console.log(formattedDateStr); // output: "24/3/2023"
