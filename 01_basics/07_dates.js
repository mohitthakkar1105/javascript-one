let date = new Date();
console.log(date); // Current date and time
console.log(date.toString()); // Current date and time in string format
console.log(date.toDateString());  // Tue Sep 08 2026
console.log(date.toISOString()); //2026-09-08T10:53:19.259Z
console.log(date.toJSON());//2026-09-08T10:53:19.259Z
console.log(date.toLocaleString()); // 8/9/2026, 4:23:19 pm
console.log(date.toLocaleDateString()); //8/9/2026
console.log(typeof date); // object

let date1 = new Date(2026,0, 8, 10, 30, 0); // 0 means jan, in js month start from 0 to 11
console.log(date1.toLocaleString()); // 8/9/2026, 10:30:00 am

// yy-mm-dd 
let yyMmDd = new Date("2026-09-08");
console.log(yyMmDd.toLocaleString()); // 8/9/2026, 5:30:00 am

// mm/dd/yyyy
let mmDdYyyy = new Date("09/08/2026");
console.log(mmDdYyyy)
console.log(mmDdYyyy.toLocaleString()); // 8/9/2026, 5:30:00 am

// dd-mm-yyyy
let ddMmYyyy = new Date("24-09-2026");
console.log(ddMmYyyy.toLocaleString()); // invalid date format, will return Invalid Date

// Date.now() iska use Otp me 
let now = Date.now();
console.log(now); // Current timestamp in milliseconds 
console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds

// getMonth() , or kuch uske relate methods 
let date2 = new Date(); 
console.log(date2.getMonth()); // 8
console.log(date2.getFullYear()); // 2026
console.log(date2.getDate()); // 8
console.log(date2.getHours()); // 10
console.log(date2.getMinutes()); // 30
console.log(date2.getSeconds()); // 0
console.log(date2.getTime()); // 1788867970689
