const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const email = document.getElementById('email');
const num = document.getElementById('phone');
const pass = document.getElementById('password');
const confirmation = document.getElementById('confirm-pass');
const errorDisplay = document.querySelectorAll('.error');
const inputField = document.querySelectorAll('input');
const submitBtn = document.getElementById('submit');

// for first name, & last name --> already validated
let count = 2;

// to display blank error string upon validation of a field
function Valid(currentErrorDisplay, messageString, booleanTest) {
    console.log('Valid function called:', currentErrorDisplay, messageString, booleanTest);
    currentErrorDisplay.textContent = messageString; // sets message to string passed through func
    booleanTest != 0 ? ++count : count = count // 0 = false, meaning input not valid so count of valid inputs does not increase.
} 

// listening to every input field upon clicking
for(let i=0; i<inputField.length ; i++){
    let currentField = inputField[i]
    let currentErrorField = errorDisplay[i]

    currentField.addEventListener('keyup', (e)=>{
        console.log('Keyup event triggered:', e.target.value);
        let msg = currentErrorField
        e.target.value != "" ? Valid(msg, '', 0) : Valid(msg, '* This field is required', 0)
    })
}

//