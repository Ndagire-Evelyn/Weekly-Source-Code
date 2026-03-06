 //regular expressions
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 //ruthtusiime@mail.com

 //regex for zipcode
 const zipRegex = /^\d{5}$/

 //regex for password
 const passwordRegex = /^(?=.[A-Z])(?=.\d).{6,}$/;

 //regex for name
 const nameRegex = /^[A-Za-z\s]{2,100}$/;
const firstName = document.getElementById("firstName") 
const password = document.getElementById("password")

let errorCount=0;

firstName.style.border=""
password.style.border=""


function validation(e) {
   let firstNameError= document.getElementById("firstNameError")
    if(firstName.value.trim() == "" || firstName.value.trim().length < 3) {
        firstName.style.border="1px solid red"
      firstNameError.style.color="red"
      firstNameError.textContent="please fill in first name"
       errorCount++ 
    } else{
        firstName.style.border="1px solid green"
        firstNameError.textContent=""
    }

    const passwordRegex = /^(?=.[A-Z])(?=.\d).{6,}$/;
    if (!passwordRegex.test(password.value)) {
        password.style.border = "1px solid red"
        document.getElementById("passwordError").style.color="red"
        document.getElementById("passwordError").textContent="password must be at least 6 characters, include an uppercase letter and a number"
        errorCount++
    } else {
        password.style.border = "1px solid green"
        document.getElementById("passwordError").textContent=""
    }


    //all the other validations have to be above the input "if".
    if(errorCount > 0) {
        e.preventDefault()
        return false
    }
    return true
}