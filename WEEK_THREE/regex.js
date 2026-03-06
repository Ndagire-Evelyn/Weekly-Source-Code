//regex
//regex is a powerful tool for pattern matching and manipulation in strings. 
// It allows you to search, replace, and extract specific patterns of characters from text. 
// In JavaScript, you can create regular expressions using the RegExp constructor or by using literal syntax with forward slashes.

//Example of using regex to validate an email address
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = "john@example.com";
const isValidEmail = emailPattern.test(email);
console.log(isValidEmail); // Output: true
//In this example, we define a regular expression pattern to validate an email address. 
// The pattern checks for the presence of characters before and after the "@" symbol, as well as a valid domain structure. 
// We then use the test() method to check if the email string matches the pattern, returning true if it is valid and false otherwise.

//Example of using regex to extract all numbers from a string
const text = "The price is 100 dollars and the discount is 20%";
const numberPattern = /\d+/g;
const numbers = text.match(numberPattern);
console.log(numbers); // Output: ["100", "20"]
//In this example, we use a regular expression to extract all sequences of digits from the input string. 
// The \d+ pattern matches one or more digits, and the g flag allows us to find all matches in the string. 
// The match() method returns an array of all the numbers found in the text.

//Example of using regex to replace all occurrences of a word in a string
const originalText = "The quick brown fox jumps over the lazy dog. The dog was not happy.";
const replacedText = originalText.replace(/dog/g, "cat");
console.log(replacedText); // Output: "The quick brown fox jumps over the lazy cat. The cat was not happy."
//In this example, we use the replace() method with a regular expression to replace all occurrences of the word "dog" with "cat". 
// The g flag ensures that all instances of "dog" are replaced in the string, resulting in a new string with the desired substitutions.

//Example of using regex to split a string into an array of words
const sentence = "Hello, how are you doing today?";
const wordPattern = /\w+/g;
const words = sentence.match(wordPattern);
console.log(words); // Output: ["Hello", "how", "are", "you", "doing", "today"]
//In this example, we use a regular expression to extract all the words from the input sentence. 
// The \w+ pattern matches sequences of word characters (letters, digits, and underscores), and the g flag allows us to find all matches. 
// The match() method returns an array of all the words found in the sentence.

//Example of using regex to validate a phone number
const phonePattern = /^\+\d{3}-\d{3}-\d{4}$/;
const phoneNumber = "+256-756-7890";
const isValidPhoneNumber = phonePattern.test(phoneNumber);
console.log(isValidPhoneNumber); // Output: true
//In this example, we define a regular expression pattern to validate a phone number in the format of "+256-756-7890". 
// The pattern checks for a plus sign followed by three digits, a hyphen, three more digits, another hyphen, and finally four digits. 
// We use the test() method to check if the phone number string matches the pattern, returning true if it is valid and false otherwise.
//In summary, regular expressions are a powerful tool for working with strings in JavaScript. 
// They allow you to perform complex pattern matching and manipulation tasks, making it easier to validate input, extract information, and modify text as needed. 
// By mastering regex, you can enhance your ability to work with strings effectively in your JavaScript applications.

//Note: Regular expressions can be complex and may require practice to master. 
// It's important to test your regex patterns thoroughly to ensure they work as intended and to avoid unintended matches or errors. 
// There are many online tools available that can help you build and test regular expressions, making it easier to learn and use them effectively in your projects.

//Example of using regex with capturing groups to extract specific parts of a string
const datePattern = /(\d{4})-(\d{2})-(\d{2})/;
const dateString = "2024-06-15";
const match = dateString.match(datePattern);
if (match) {
    const year = match[1];
    const month = match[2];
    const day = match[3];
    console.log(`Year: ${year}, Month: ${month}, Day: ${day}`); // Output: Year: 2024, Month: 06, Day: 15
}
//In this example, we use a regular expression with capturing groups to extract the year, month, and day from a date string in the format "YYYY-MM-DD". 
// The parentheses in the regex pattern create capturing groups that allow us to access specific parts of the matched string. 
// We then use the match() method to retrieve the captured values and log them to the console. 
// This demonstrates how regex can be used to extract structured information from strings effectively.

//Example of using regex with lookahead and lookbehind assertions
const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const password = "Password123!";
const isValidPassword = passwordPattern.test(password);
console.log(isValidPassword); // Output: true
//In this example, we use a regular expression with lookahead assertions to validate a password. 
// The pattern checks for the presence of at least one uppercase letter, one digit, and one special character, while also ensuring that the password is at least 8 characters long. 
// The test() method is used to check if the password string matches the pattern, returning true if it is valid and false otherwise. 
// This demonstrates how regex can be used to enforce complex validation rules for user input.

//Example of using regex to remove whitespace from a string
const stringWithWhitespace = "   Hello, World!   ";
const trimmedString = stringWithWhitespace.replace(/^\s+|\s+$/g, '');
console.log(trimmedString); // Output: "Hello, World!"
//In this example, we use a regular expression to remove leading and trailing whitespace from a string. 
// The pattern /^\s+|\s+$/g matches any whitespace characters at the beginning (^\s+) or end (\s+$) of the string, and the replace() method replaces them with an empty string. 
// This is a common use case for regex when you want to clean up user input or format strings in a specific way.

//Example of using regex to validate a URL
const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/;
const url = "https://www.example.com";
const isValidUrl = urlPattern.test(url);
console.log(isValidUrl); // Output: true
//In this example, we use a regular expression to validate a URL. 
// The pattern checks for an optional "http://" or "https://" at the beginning, followed by a domain name with one or more subdomains, and an optional path. 
// The test() method is used to check if the URL string matches the pattern, returning true if it is valid and false otherwise. 
// This demonstrates how regex can be used to validate complex string formats such as URLs effectively.

//In conclusion, regular expressions are a versatile and powerful tool for working with strings in JavaScript. 
// They allow you to perform a wide range of operations, from simple validations to complex pattern matching and manipulation. 
// By mastering regex, you can enhance your ability to handle string data effectively in your applications, making it easier to validate user input, extract information, and format strings as needed.

//Note: Regular expressions can be difficult to read and understand, especially for complex patterns. 
// It's important to use comments and clear variable names when working with regex to improve readability and maintainability of your code. 
// Additionally, testing your regex patterns with various input cases can help ensure they work as intended and avoid unintended matches or errors.

//Example of using regex to validate an email address with more specific rules
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const email = "user@example.com";
const isValidEmail = emailPattern.test(email);
console.log(isValidEmail); // Output: true
//In this example, we use a more specific regular expression to validate an email address. 
// The pattern checks for a combination of letters, digits, and certain special characters before the "@" symbol, followed by a valid domain name and a top-level domain with at least two characters. 
// This provides a more robust validation for email addresses compared to a simpler pattern. The test() method is used to check if the email string matches the pattern, returning true if it is valid and false otherwise.

//Example of using regex to redirect a URL to a new domain
const urlPattern = /^https?:\/\/(www\.)?old-domain\.com(\/.*)?$/;
const oldUrl = "http://www.old-domain.com/page";
const newUrl = oldUrl.replace(urlPattern, 'https://www.new-domain.com$2');
console.log(newUrl); // Output: "https://www.new-domain.com/page"
//In this example, we use a regular expression to match URLs from an old domain and redirect them to a new domain. 
// The pattern checks for URLs that start with "http://" or "https://", optionally followed by "www.", and then the old domain name. 
// The replace() method is used to construct the new URL by replacing the old domain with the new one while preserving the path (if any) using a capturing group. 
// This demonstrates how regex can be used for URL manipulation and redirection in web applications.

//Example of using regex to redirect a page to a new page
const pagePattern = /^\/old-page(\/.*)?$/;
const oldPageUrl = "/old-page/subpage";
const newPageUrl = oldPageUrl.replace(pagePattern, '/new-page$1');
console.log(newPageUrl); // Output: "/new-page/subpage"
//In this example, we use a regular expression to match URLs that start with "/old-page" and redirect them to "/new-page". 
// The pattern checks for URLs that start with "/old-page" and captures any additional path information using a capturing group. 
// The replace() method is used to construct the new page URL by replacing "/old-page" with "/new-page" while preserving the additional path information. 
// This demonstrates how regex can be used for page redirection in web applications, allowing you to easily update URLs without breaking existing links.