//introduction to Date in JavaScript
//Based Milliseconds since January 1, 1970, 00:00:00 UTC     Unix Epoch

//The Date object in JavaScript is a built-in object that allows you to work with dates and times. It provides various methods for creating, manipulating, and formatting dates. You can create a Date object using the Date constructor, which can take different parameters to specify the date and time.

     //Here are some common ways to create a Date
        //i)Current Date and Time

const now = new Date();
console.log(now);


       // ii)From Timestamp (Milliseconds)

const dateFromTimestamp = new Date(1000); // 1s from Unix Epoch
console.log(dateFromTimestamp);


        //iii)From Date String
   //(year,m,d,hm)
const specificDate = new Date("2022-01-01");
console.log(specificDate); // Output: 2022-01-01T00:00:00.000Z

const dateFromComponents = new Date(2022, 0, 1); // Note: month is 0-indexed
console.log(dateFromComponents);

      //iv). From Date String

const date = new Date("2026-03-02");
console.log(date); // Output: 2026-03-02T00:00:00.000Z


//ISO format is recommended:

const date = new Date("2026-03-02T10:30:00");
console.log(date);

 new Date("03/02/2026") // May be interpreted as March 2, 2026 or February 3, 2026 depending on locale settings. Avoid this format for consistency.


        //D. From Individual Components
new Date(year, month, day, hours, minutes, seconds, milliseconds) //7 options, only year and month are required

//Example:

new Date(2026, 2, 2); // March 2, 2026
//Months are 0-indexed
0 = January
1 = February

  


          //2) Getting Date Values
const obj = {
  hour:3,
  color:"red",
  height:3,
  hour: 3,
  
}

    const d = new Date(); //  3/2/2026
    d.getFullYear(); // Returns the year (e.g., 2026)
    d.getMonth(); // Returns the month (eg 2 for March)
    d.getDate(); // Returns the day of the month (e.g., 2)
    d.getDay(); // Returns the day of the week (0-6, where 0 is Sunday)
    d.getHours(); // Returns the hour (0-23)
    d.getMinutes(); // Returns the minutes (0-59)
    d.getSeconds(); // Returns the seconds (0-59)
    d.getMilliseconds(); // Returns the milliseconds (0-999)
    d.getTime(); // Returns the timestamp in milliseconds since January 1, 1970



 // 3) Setting Date Values
//You can modify dates using set methods:

//Method	Example
const date = new Date(); //  3/3/2026

//setFullYear()

const d = date.setFullYear(2030);
console.log(d);
const daM = new Date(d);
console.log(daM);

//setMonth()
date.setMonth(5);
//setDate()
date.setDate(1);
//setHours()
date.setHours(12);
//setMinutes()
date.setMinutes(30);
//setSeconds()
date.setSeconds(45);
//setMilliseconds()
date.setMilliseconds(500);





               //Timestamps & Calculations

       //Get Timestamp
       //A timestamp is a digital record of the date and time when an event occurred, usually represented in a human-readable format

 Date.now(); //Returns current time in milliseconds.

// Calculate Difference Between Dates
// Calculate money for a car 
const date1 = new Date("2026-03-01");
const date2 = new Date("2030-03-01");
const date3 = new Date("2026-03-02T10:30:00");
console.log(date1); // 3/1/2026
console.log(date2); // 3/5/2026
console.log(date3); // 3/2/2026 10:30 AM

const diff = date2 - date1;

console.log(diff); //  345600000 milliseconds difference. equals 4 days in milliseconds (4 * 24 * 60 * 60 * 1000)

const date4 = new Date(diff);

// Convert to days:
// 5 students
// 15 mangoes

// mangoes = 15/5 // 3
 //day-hr-min-s-ms
const days = diff / (1000 * 60 * 60 * 24 * 1);
console.log(days);

// Convert to hours:
const hours = diff / (1000 * 60 * 60 * 24 * 24);


                   //4) Formatting Dates
   //A. Default Format
   const date = new Date();
   date.toString(); //"Mon Mar 02 2026 12:45:00 GMT+0000"  Returns a human-readable string representation of the date and time.

   //B. ISO Format
   //in full is  "YYYY-MM-DDTHH:mm:ss.sssZ"
   //Z stands for Zulu time (UTC)
   const date = new Date();
   const isoString = date.toISOString();
   console.log(isoString); // output: 2026-03-02T12:45:00.000Z

  //  C. Local Date & Time
const date = new Date();
const formattedDate = date.toLocaleDateString("en-US", {
  year: "numeric", // "2-digit" for two-digit year (e.g., "26")
  month: "long", // "short" = "Mar") or "numeric" = "03")
  day: "numeric",
});
console.log(formattedDate);
// Output: "March 2, 2026"

date.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
// Output: "12:45:00 PM"


// Common Real-World Use Cases
//  1. Time spent by a car in the parking lot
const entryTime = new Date("2026-03-01T08:00:00");
const exitTime = new Date("2026-03-01T12:30:00");

const duration = exitTime - entryTime;
console.log(duration); // 16200000 milliseconds (4.5 hours)
// To calculate the cost, you can convert the duration to hours and multiply by the hourly rate:
const hours = duration / (1000 * 60 * 60);
console.log(hours); //

const hourlyRate = 500; //500/= per hour
const cost = hours * hourlyRate;
console.log(cost + "/="); //