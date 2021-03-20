// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength;
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numericCharacters = "0123456789";
var specialCharacters = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var upperCase;
var numberChar;
var specialChar;

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

// Upper case character check prompt function
function upperCasePrompt() {
  upperCase = confirm("Do you want to include upper case letters? \nYes = OK No =Cancel");
  // upperCaseChat = upperCaseChar.toLowerCase();
  if (upperCase == true) {
    return upperCase;
  }else {
    return upperCase;
  }
}

//Include Numeric characters prompt function
function numericPrompt() {
  numberChar = confirm("Do you want to include numbers? \nYes = OK No = Cancel");
  // numberChar = numberChar.toLowerCase();
  if(numberChar==true) {
    return numberChar;
  }else {
    return numberChar;
  }
}

// Include special characters prompt function
function specialCharPrompt() {
  specialChar =confirm("Do you want to include special characters? \nYes = OK No = Cancel");
  // specialChar = specialChar.toLowerCase();
  return specialChar;
}


// Generate password function using user input
function generatePassword() {
passwordLengthPrompt();
console.log(passLength);
upperCasePrompt();
console.log(upperCase);
numericPrompt();
console.log(numberChar);
specialCharPrompt();
console.log(specialChar);
var includeCharacters = lowerCaseLetters;
var genPassword = "";

// Creates which characters to include
if (upperCase && numberChar && specialChar){
  includeCharacters += upperCaseLetters + numericCharacters;
}else if (upperCase && numberChar){
  includeCharacters +=upperCaseLetters + numericCharacters;
}
}

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