//Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//Extract values from arrays and objects and assign them to variables in a convenient way.
//[]= to perform array destructuring
// //{}= to perform object destructuring
// //.........Example 1.........
// //syntax
// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a, b, c); // Output: 1 2 3

// //.........Example 2.........
// //skipping items in an array
// const arr2 = [10, 20, 30];
// const [x, , z] = arr2;
// console.log(x, z); // Output: 10 30

// //.........Example 3...........
// //Using rest operator to collect the remaining items in an array
// we use three dot(...)
// const arr3 = [5, 10, 15, 20];
// const [first, ...rest] = arr3;
// console.log(first); // Output: 5
// console.log(rest); // Output: [10, 15, 20]

// //.........Example 4...........
// //Destructuring objects
const person = { 
    name: "Bridget",
    age: 30,
    city: "Kampala" 
};
// const { name, age, city } = person;
// console.log(name, age, city); // Output: Bridget 30 Kampala

// //.........Example 5...........
// //Swapping the value of two variables
// let m = 1;
// let n = 2;
// [m, n] = [n, m]
// console.log(m, n) // Output: 2 1// 

//Swap two elements in an array
// let arr4 = [1, 2, 3, 4];
// [arr4[0], arr4[1]] = [arr4[1], arr4[0]];
// console.log(arr4); // Output: [2, 1, 3, 4]

// //string destructuring
// const str = "Hello";
// const [h, e, l, l2, o] = str;
// console.log(h, e, l, l2, o); // Output: H e l l o

// //object destructuring with renaming variables
// const person2 = { 
//     name: "Bridget",
//     age: 30,
//     city: "Kampala" 
// };
// const { name: personName, age: personAge, city: personCity } = person2;
// console.log(personName, personAge, personCity); // Output: Bridget 30 Kampala

// //object destructuring with default values
// const person3 = { 
//     name: "Bridget",
//     age: 30
// };
// const { name: personName2, age: personAge2, city: personCity2 = "Unknown" } = person3;
// console.log(personName2, personAge2, personCity2); // Output: Bridget 30 Unknown

// //object destructuring with nested objects
// const person4 = { 
//     name: "Bridget",
//     age: 30,
//     address: {
//         city: "Kampala",
//         country: "Uganda"
//     }
// };
// const { name: personName3, age: personAge3, address: { city: personCity3, country: personCountry3 } } = person4;
// console.log(personName3, personAge3, personCity3, personCountry3); // Output: Bridget 30 Kampala Uganda
