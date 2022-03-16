// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate a random password with the following criteria:
  // GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

function generatePassword() {
  var password;
  var length = prompt("How many characters would you like your password to contain?");

  if (length<8) {
    window.alert("Password must be at least 8 characters")
  } else if (length > 128) {
    window.alert("Password must be less than 129 characters")
  }

  var characters = [" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~", "0123456789", 
    "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  var characterType = ["special chacters", "numbers", "lower case letters", "upper case letters"]
  
  var wanted = [];

  for (i = 0; i < characterType.length; i++) {
    wanted[i] = window.confirm("Click OK to confirm including " + characterType[i]);
  }

  for (i=0; i< length; i++) {
    // TODO: generate random characters for password
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
