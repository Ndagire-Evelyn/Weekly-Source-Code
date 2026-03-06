//  //objects
//  //You should declare objects with the const keyword.

//  //type, model, and color are properties
// //"Fiat", 500, and "white" are property values
// const car = {
//   type: "Fiat",
//   model: "500",
//   color: "white"
// };

// // an Object literal
// const person = {
//   firstName:"John",
//    lastName:"Doe",
//     age:50,
//    eyeColor:"blue"
//   };

// // you can also create an object with "new object"
// const Driver = new Object({
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// });

// //object properties
// //dot notation
// objectName.propertyName
// person.firstName;

// //bracket notation
// objectName["propertyName"]
// person["firstName"];

//Objects can also have methods.
//Object methods are actions that can be performed on objects.
//Object methods are function definitions stored as property values:
// const customer = {
//   firstName: "John",
//   lastName : "Doe",
//   age      : 50,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// //This example uses the JavaScript toUpperCase() method to convert a text to uppercase:
// person.name = function () {
//   return (this.firstName + " " + this.lastName).toUpperCase();
// };

// //displaying object properties
// // Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Add Properties
// let text = person.name + "," + person.age + "," + person.city;

//The properties of an object can be collected in a loop:
const persn = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log(persn.name + "," + persn.age + "," + persn.city);

// // Build a Text
// let text1 = "";
// for (let x in person) {
//   text1 += person[x] + " ";
// };
// //You must use person[x] in the loop.
// //person.x will not work (Because x is the loop variable).

// //Object.values() creates an array from the property values:
// // Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Create an Array
// const myArray = Object.values(person);

// // Stringify the Array
// let text3 = myArray.toString();

// //object entries()
// //Object.entries() makes it simple to use objects in loops:
// const fruits = {Bananas:300, Oranges:200, Apples:500};

// let text4 = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//   text4 += fruit + ": " + value + "<br>";
// }