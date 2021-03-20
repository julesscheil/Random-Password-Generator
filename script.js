// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength;
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numericChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"

// Password length prompt function
function passwordLengthPrompt(){
  passLength = prompt("How many characters would you like your password to be? (8-128 characters)");
  if (passLength<8) {
    alert("Password length too short, must be between 8 - 128 characters. Try again.");
    passwordLengthPrompt();
  } else if (passLength>128) {
    alert("Password length too long, must be between 8-128 characters. Try again.")
    passwordLengthPrompt()
  }else if (isNaN(passLength)) {
    alert("Password length must be a number. Try again.");
    passwordLengthPrompt();
  }else {
  }
  return passLength;
}
passwordLengthPrompt();

//
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate password function
function generatePassword() {
  
  //code to ask user for parameters
  //use password to fill parameters
  //return password
  return "Temporary Password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// prompts
// length of password (between 8 and 128)
// character types upper, lower, numeric, and/or special characters
// validate input and at least one character type should be selected
// password generates
// password displayed in alert or written on page