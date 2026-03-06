//The JSON format is syntactically identical to the code for creating JavaScript objects.
//Because of this, a JavaScript program can easily convert JSON data into native JavaScript objects.
//JavaScript has a built in function for converting JSON strings into JavaScript objects:
JSON.parse()
//JavaScript also has a built in function for converting an object into a JSON string:
JSON.stringify()
//You can receive pure text from a server and use it as a JavaScript object.
//You can send a JavaScript object to a server in pure text format.
//You can work with data as JavaScript objects, with no complicated parsing and translations.

//example
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Output: John
const person = { name: "Alice", age: 25, city: "Los Angeles" };
const personJson = JSON.stringify(person);
console.log(personJson); // Output: {"name":"Alice","age":25,"city":"Los Angeles"}

//In the example above, we first parse a JSON string into a JavaScript object and access its properties. Then, we create a JavaScript object and convert it into a JSON string.
//JSON is a widely used format for data exchange, and JavaScript's built-in functions make it easy to work with JSON data in web applications.

//Note: When using JSON.parse(), the input string must be in valid JSON format. If the string is not properly formatted, it will throw a SyntaxError. Always ensure that your JSON strings are correctly structured before parsing them.

//example of invalid JSON string
const invalidJsonString = '{"name": "John", "age": 30, "city": "New York"';
try {
    const jsonObject = JSON.parse(invalidJsonString);
} catch (error) {    console.error("Error parsing JSON:", error.message);
}   // Output: Error parsing JSON: Unexpected end of JSON input

//In the example above, the JSON string is missing a closing curly brace, which makes it invalid. When we attempt to parse it, a SyntaxError is thrown, and we catch it to log an error message. Always ensure that your JSON strings are properly formatted to avoid such errors.

//example of using JSON with a server (using fetch API)
fetch('https://api.example.com/data')
    .then(response => response.json()) // Parse the JSON from the response

//example of sending JSON data to a server
const data = { name: "Alice", age: 25, city: "Los Angeles" };
fetch('https://api.example.com/data', { 
    method: 'POST', // Specify the HTTP method
    headers: { 'Content-Type': 'application/json' }, // Set the content type to JSON
    body: JSON.stringify(data) // Convert the JavaScript object to a JSON string
})
    .then(response => response.json()) // Parse the JSON from the response
    .then(result => console.log(result)) // Log the result from the server
    .catch(error => console.error('Error:', error)); // Handle any errors that occur during the fetch operation
//In the examples above, we demonstrate how to use the fetch API to retrieve JSON data from a server and how to send JSON data to a server using a POST request. 
// The fetch API provides a convenient way to work with JSON data in web applications, allowing you to easily parse responses and send data in the correct format.

//example of using JSON with localStorage
//Storing a JavaScript object in localStorage as a JSON string
const user = { name: "Bob", age: 28, city: "Chicago" };
localStorage.setItem('user', JSON.stringify(user));
//Retrieving the JSON string from localStorage and parsing it back into a JavaScript object
const userJson = localStorage.getItem('user');
const userObject = JSON.parse(userJson);
console.log(userObject.name); // Output: Bob
//In this example, we store a JavaScript object in localStorage by converting it to a JSON string using JSON.stringify(). 
// When we retrieve the data from localStorage, we parse the JSON string back into a JavaScript object using JSON.parse(), allowing us to access its properties as needed.

//example of using JSON with error handling
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
try {    const jsonObject = JSON.parse(jsonString);
    console.log(jsonObject.name); // Output: John
}catch (error) {    console.error("Error parsing JSON:", error.message);}
//In this example, we wrap the JSON parsing in a try-catch block to handle any potential errors that may occur if the JSON string is not properly formatted. 
// If an error occurs during parsing, we catch it and log an error message to the console. 
// This is a good practice to ensure that your application can gracefully handle invalid JSON data without crashing.

//example of using JSON with nested objects
const jsonString = '{"name": "John", "age": 30, "address": {"street": "123 Main St", "city": "New York"}}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.address.street); // Output: 123 Main St
//In this example, we have a JSON string that contains a nested object for the address. 
// When we parse the JSON string, we can access the nested properties using dot notation, allowing us to retrieve specific information from the nested structure.  
// This demonstrates how JSON can represent complex data structures, making it a powerful format for data exchange in web applications.