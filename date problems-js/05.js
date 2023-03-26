// Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).   



// Test Data :

// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));

// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));

// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));

// Output :

// "Date1 = Date2"

// "Date1 > Date2"

// "Date2 > Date1"


//  get current date 

let currDate=new Date();
console.log(currDate);

// the specific date 

let specDate=new Date("2024/11/10");
console.log(specDate);

// comparision 


if (currDate > specDate){
    console.log("current date is greater");
}
else{
    console.log("your date is future date");
}

// other form 

if (currDate > specDate){
    console.log("current date is greater than specDate");
}
else{
    console.log("current Date is less than specDate");
}


