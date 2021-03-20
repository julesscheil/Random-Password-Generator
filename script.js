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
  }
  return passLength;
}

// Include upper case character prompt function
function upperCasePrompt() {
  upperCase = confirm("Do you want to include upper case letters? \nYes = OK No =Cancel");
    return upperCase;
}

// Include numeric characters prompt function
function numericPrompt() {
  numberChar = confirm("Do you want to include numbers? \nYes = OK No = Cancel");
    return numberChar;
}

// Include special characters prompt function
function specialCharPrompt() {
  specialChar =confirm("Do you want to include special characters? \nYes = OK No = Cancel");
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
//set initial lowercase character set because they are always included
var includeCharacters = lowerCaseLetters;
var genPassword = "";

// Creates which characters to include
if (upperCase && numberChar && specialChar){
  includeCharacters += upperCaseLetters + numericCharacters;
}else if (upperCase && numberChar){
  includeCharacters +=upperCaseLetters + numericCharacters;
}else if (numberChar && specialChar){
  includeCharacters += numericCharacters + specialCharacters;
}else if (upperCase && specialChar){
  includeCharacters += upperCaseLetters + specialCharacters;
}else if (upperCase){
  includeCharacters += upperCaseLetters;
}else if (numberChar){
  includeCharacters += numericCharacters;
}else if (specialChar){
  includeCharacters += specialCharacters;
}else{
  includeCharacters === lowerCaseLetters;
}

for (var i=0; i<passLength; i++) {
  genPassword  += includeCharacters.charAt(Math.floor(Math.random()* includeCharacters.length));
}
return genPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);