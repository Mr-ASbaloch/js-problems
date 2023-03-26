// Write a JavaScript function to get the month name from a particular date.

// Test Data :

// console.log(month_name(new Date("10/11/2009")));

// console.log(month_name(new Date("11/13/2014")));

// Output :

// "October"

// "November"


let rightNow = new Date();

// console.log(rightNow);
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

let getNAme = arr[rightNow.getMonth ()] ;
console.log(getNAme);

// now we get the selected particular year date month 

let partDate=new Date("11/13/2009")
let partName=arr[partDate.getMonth()];
console.log(partName);


