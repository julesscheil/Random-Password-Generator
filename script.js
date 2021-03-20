// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// prompts
// length of password (between 8 and 128)
// character types upper, lower, numeric, and/or special characters
// validate input and at least one character type should be selected
// password generates
// password displayed in alert or written on page