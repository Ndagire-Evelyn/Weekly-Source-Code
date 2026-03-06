//Closure = A function is defined inside of another function,
//The inner function has access to the variables and scope of the outer function.
//Allow for private variables and state maintenance
//example 1
// function makeCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(count);
//     }
// }
// const counter = makeCounter();
// counter();
// counter();
// counter();
// In this example, `makeCounter` is a function that initializes a variable `count` to 0 and returns an anonymous function.
// The returned function is a closure that has access to the `count` variable. Each time we call `counter()`, it increments the `count` variable and logs its value.
// The output will be:
// 1
// 2
// 3

//Example 2
// function outer(){
//      let message = "Hello";//variable

//      function inner(){
//         console.log(message);
//      }

//      inner();
// }

// message = "Goodbye" // this will not change the message variable inside the outer function because it is a different variable in a different scope.

// outer();

// In this example, the `outer` function defines a variable `message` and an inner function `inner` that logs the value of `message`. When we call `outer()`, it executes the `inner` function, which has access to the `message` variable defined in the `outer` function. 
// Even though we assign a new value to `message` after defining the `outer` function, it does not affect the value of `message` that is accessed by the `inner` function because they are in different scopes. 
// The output will be "Hello".

// // In summary, closures allow inner functions to access and manipulate variables from their outer functions, enabling powerful patterns for data encapsulation and state management in JavaScript.

// // In the example below, we have a function called `createCounter` that returns an object with two methods: `increment` and `getCount`.
// // The `count` variable is defined in the outer function and is accessible to both methods, allowing them to maintain and manipulate the state of the counter.
// function createCounter() {
//     let count = 0; // This variable is private to the createCounter function    
//     return {
//         increment: function() {
//             count++;
//         },
//         getCount: function() {
//             return this.increment(), count; // Call increment to update the count before returning it
//         }
//     }
// }

// const counter = createCounter();
// console.log(counter.getCount()); // Output: 1
// console.log(counter.getCount()); // Output: 2
// console.log(counter.getCount()); // Output: 3
// console.log(counter.getCount()); // Output: 4   

// // In this example, the `createCounter` function initializes a private variable `count` and returns an object with two methods: `increment` and `getCount`.
// // The `increment` method increments the `count` variable, while the `getCount` method calls `increment` to update the count before returning its value. 
// // Each time we call `counter.getCount()`, it increments the count and returns the updated value, demonstrating how closures allow us to maintain state across function calls.

// //example 3
// function makeAdder(x) {
//     return function(y) {
//         return x + y;
//     }
// }  
// const add5 = makeAdder(5);
// const add10 = makeAdder(10);
// console.log(add5(2));  // Output: 7
// console.log(add10(2)); // Output: 12
// // In this example, the `makeAdder` function takes a parameter `x` and returns an inner function that takes another parameter `y`. 
// // The inner function has access to the `x` variable from the outer function, allowing it to add `x` and `y` together. 
// // When we create `add5` and `add10`, they are closures that capture the value of `x` (5 and 10, respectively). 
// // When we call `add5(2)`, it adds 5 and 2 to return 7, and when we call `add10(2)`, it adds 10 and 2 to return 12. 
// // This demonstrates how closures can be used to create functions with specific behavior based on the parameters passed to the outer function.

// //example 4
// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++;
//         console.log(count);
//     }
//     return innerFunction;
// }

// const counter1 = outerFunction();
// const counter2 = outerFunction();
// counter1(); // Output: 1
// counter1(); // Output: 2
// counter1(); // Output: 3
// counter2(); // Output: 1
// counter2(); // Output: 2    
// In this example, the `outerFunction` creates a private variable `count` and returns an `innerFunction` that increments and logs the value of `count`.
// When we create `counter1` and `counter2`, they are separate closures that each have their own `count` variable. 
// Calling `counter1()` increments and logs its own `count`, while calling `counter2()` does the same for its own `count`. 
// This demonstrates how closures can maintain separate state for different instances of a function.

//example 5
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    }
}

const counterA = createCounter();
const counterB = createCounter();
counterA.increment();
counterA.increment();
console.log(counterA.getCount());
console.log(counterB.getCount());
// In this example, the `createCounter` function returns an object with two methods: `increment` and `getCount`.
// Each time we call `createCounter()`, it creates a new closure with its own `count` variable.
// When we call `counterA.increment()`, it increments the `count` variable in the closure associated with `counterA`. 
// When we call `counterB.getCount()`, it returns the `count` variable from the closure associated with `counterB`, which is still 0 because we haven't called `increment()` on `counterB`. 
// This demonstrates how closures allow us to maintain separate state for different instances of a function.
