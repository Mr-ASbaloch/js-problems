// Write a JavaScript function to get the number of days in a month.

// Test Data :

// console.log(getDaysInMonth(1, 2012));

// console.log(getDaysInMonth(2, 2012));

// console.log(getDaysInMonth(9, 2012));

// console.log(getDaysInMonth(12, 2012));

// Output :

// 31
// 29
// 30
// 31

let date = new Date();
let month = date.getMonth();
// console.log(month);

// get month name specific
let arr = [
  "jan",
  "feb",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "sep",
  "oct",
  "nov",
  "december",
];
let nameMonth = arr[month];

console.log(nameMonth);


// function to get days in any month 

function getDaysInMonth(year, month) {
  return new Date(year,month ,0).getDate();
}
const date1=new Date();
// console.log(date1);

const currentYear=date1.getFullYear();
// console.log(currentYear);

const currentMonth=date1.getMonth() +1 ;
// console.log(currentMonth);

console.log(getDaysInMonth(2023,5));

console.log(getDaysInMonth(2023,4));
console.log(getDaysInMonth(2023,6));

