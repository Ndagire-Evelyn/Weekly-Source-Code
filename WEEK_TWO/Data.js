console.log("vehicle arives")
console.log("Calculate fee")
console.log("Print receipt")
// Control flow structures, these are;
//-Decisions/Conditional statements

//This is an if statement
let hoursParked = 2;
if(hoursParked < 3) {
    console.log("Apply short pay fee.")
}
//tenary operator
let hoursParked1 = 3;
//Condition ? expressionIfTrue : expressionIfFalse;
 let fee = hoursParked1 < 3 ? 2000 : 3000;
console.log(fee)

let eligibilty;
let age = 20;
if(age >= 18) {
    eligibilty = "You can vote."
} else {
    eligibilty = "You are not eligible you vote yet."
}
//If turned into a tenary operator, then.
//age >= 18 ? eligibilty = "You can vote." : eligibilty = "You are not eligible you vote yet.";


//This is an if-else statement
let vehicleType = "Truck";
if(vehicleType === "Truck") {
    console.log("Charge 5000")
} else {
    console.log("Pay 3000")
}

//This is an else-if statement
let vehicleType1 = "Taxi";
if(vehicleType1 === "Truck") {
    console.log("Charge 5000")
} else if(vehicleType1 === "Taxi") {
    console.log("Pay 4000")
} else {
    console.log("Pay 3000")
}

//Switch statement, alt for else-if and it is clean
let vehicleType2 = "Taxi";
switch(vehicleType2) {
    case "Truck":
        console.log("Pay 5000")
        break;
    case "Taxi":
        console.log("Pay 3000")
        break;
    case "Boda Boda":
        console.log("Pay 2000")
        break;
    default:
        console.log("Unknown Vehicle type") 
}

function calculateFee(vehicleType, hoursParked) {
    if(hoursParked < 3) {
        console.log("Pay 2k")
    } else {
        switch(vehicleType) {
            case "Truck":
                console.log("Pay 5000")
                break;
            case "Taxi":
                console.log("Pay 3000")
                break;
            case "Boda Boda":
                console.log("Pay 2000")
                break;
            default:
                console.log("Unknown Vehicle type") 
        }
    }
}
calculateFee("Coaster", 1)

let number = prompt("Enter a number:")
switch(true) {
    case number > 0:
        alert("Number is positive")
        break;
    case number === 0:
        console.log("The number entered is a zero")
        break;
    case number < 0:
        console.log("The number is negative")
        break;
    default:
        console.log("Not a number") 
}

//Syntax for If statements
//if(condition) {Code runs if the condition is true}

//Syntax for If else statements
//if(condition) {Code runs if the condition is true} else{The code runs if the condition is false}

////Syntax for else-If statements
//if(condition) {Code runs if the condition is true} else if{Another condition to check} else{Runs if both aren't true}

//Syntax for switch
/*switch(what is being checked/case value) {
    case condition:
        if true;
        break;
    default
}
*/


//-Repetition/Loop
//It is about doing things multiple times
//-Conditional Logic