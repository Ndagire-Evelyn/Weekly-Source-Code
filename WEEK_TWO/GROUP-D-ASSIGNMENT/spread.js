//The spread operator is often used in combination with destructuring. 
// It allows you to unpack elements from an array or properties from an object into distinct variables.
//In the example below, we use the spread operator to extract the first two elements of the `numbers` array into separate variables (`one` and `two`), 
// while the rest of the elements are collected into a new array called `rest`.
const numbers =[1, 2, 3, 4, 5, 6]
const [one, two, ...rest] = numbers

console.log(one) // 1
console.log(two) // 2
console.log(rest) // [3, 4, 5, 6]

//The spread operator can also be used to create a new array by combining existing arrays. 
// In the example below, we have two arrays, `array1` and `array2`, and we use the spread operator to create a new array called `combinedArray` that contains all the elements from both arrays.
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]

console.log(combinedArray) // [1, 2, 3, 4, 5, 6]

//The spread operator can also be used to create a new object by combining existing objects.
// In the example below, we have two objects, `object1` and `object2`, and we use the spread operator to create a new object called `combinedObject` that contains all the properties from both objects.
const object1 = { a: 1, b: 2 }
const object2 = { c: 3, d: 4 }
const combinedObject = { ...object1, ...object2 }

console.log(combinedObject) // { a: 1, b: 2, c: 3, d: 4 }

// We can use the spread operator with objects too. 
// In the example below, we have an object called `person` with properties `name` and `age`.
//  We use the spread operator to create a new object called `updatedPerson` that contains all the properties of `person`, but with an additional property `city`.
const person = { name: 'Alice', age: 30 }
const updatedPerson = { ...person, city: 'New York' }

console.log(updatedPerson) // { name: 'Alice', age: 30, city: 'New York' }
 
//changing and adding properties and property values
const car = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const car_more = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const mycar = {...car, ...car_more}

console.log(mycar) // { brand: 'Ford', model: 'Mustang', color: 'yellow', type: 'car', year: 2021 }

// Notice that the properties that did not match were added, and the property that did match was overwritten by the last object.

