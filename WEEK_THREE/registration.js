console.log("MTN Subscription Script Loaded");

// ==========================
// REGEX PATTERNS
// ==========================

// Email format check
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Ugandan phone check
const phonePattern = /^(?:\+256|0)7\d{8}$/;

//phonePattern.test("0771234567")
//phonePattern.test("12345")

// Strong password check
const passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/;




// ==========================
// GET FORM AND RESULT AREA
// ==========================
//Connecting to html
const form = document.getElementById("mtnForm");
// listen for when the form is submitted
const resultDiv = document.getElementById("resultMessage");


// ==========================
// LISTEN FOR SUBMIT
// ==========================

form.addEventListener("submit", function(event){

  // Stop page refresh which it normally does sometimes
  event.preventDefault();
// event.preventDefault();

  // Get user inputs
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  console.log("User Entered:");
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Password:", password);

  // ==========================
  // VALIDATION CHECK using .test adn ! means not
  // ==========================

  if(!emailPattern.test(email) ||
     !phonePattern.test(phone) ||
     !passwordPattern.test(password)) {

    // ACCESS DENIED using backticks to allow variables to be inputted easily, innerHTML replaces content inside a div

    resultDiv.innerHTML = `
      <div class="alert alert-danger">
        🚫 ACCESS DENIED <br>
        You entered:<br>
        Email: ${email}<br>
        Phone: ${phone}
        Password: ${password}
      </div>
    `;

    console.log("❌ ACCESS DENIED");
    console.log("Invalid Data Entered");

    return;
  }

  // ==========================
  // IF VALID → ACCESS ALLOWED
  // ==========================

  // CREATING A USER OBJECT RECORD
  const user = {
    email: email,
    phone: phone,
    subscribedAt: new Date()
  };

  // Convert object to string
  const userString = JSON.stringify(user);

  //JSON.stringify(user);
  // converts 
//   {
//   email: "test@gmail.com",
//   phone: "0771234567"
// }
// to CODE '{"email":"test@gmail.com","phone":"0771234567"}'

// If you want to read it later on, convert it back
//const storedUser = JSON.parse(localStorage.getItem("mtnSubscriber"));
//console.log(storedUser.email);

  // Save in localStorage STORED DATA PERMANENTLY INTO BROWSER
  localStorage.setItem("mtnSubscriber", userString);

  // Save in sessionStorage instead
//sessionStorage.setItem("mtnSubscriber", userString);
// console.log("Session Storage Before Submit:");
// console.log(sessionStorage.getItem("mtnSubscriber"));

  //Removing the localstorage
  //Type in browser
  //localStorage.getItem("mtnSubscriber");
  //localStorage.removeItem("mtnSubscriber");
  //localStorage.clear();

console.log(user);
console.log(userString);

  resultDiv.innerHTML = `
    <div class="alert alert-success">
      ✅ ACCESS ALLOWED <br>
      Welcome ${email}
    </div>
  `;

  console.log("✅ ACCESS ALLOWED");
  console.log("Saved User Object:", user);

});