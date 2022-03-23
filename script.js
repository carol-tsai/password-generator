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
  var password ="";
  var length = prompt("How many characters would you like your password to contain?");

  // Ask user for the length of the password and check that is is at least 8 characters and no more than 128 character
  if (length<8) {
    window.alert("Password must be at least 8 characters")
    return;
  } else if (length > 128) {
    window.alert("Password must be less than 129 characters")
    return;
  }

  // Creating an array with all possible characters
  var characterBank = [" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~", "0123456789", 
    "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  var characterType = ["special chacters", "numbers", "lower case letters", "upper case letters"]
  
  var wanted = [];

  //  Confirm whether or not to include lowercase, uppercase, numberic, and/or special characters
  for (i = 0; i < characterType.length; i++) {
    wanted[i] = window.confirm("Click OK to confirm including " + characterType[i]);
  }

  // Check that at least one character type is selected
  if (wanted.length<1) {
    window.alert("Must select at least one character type")
    return;
  }

  // Create a new array with just the characters we want for the password
  var characters = [];

  for (i=0;i<wanted.length; i++) {
    if (wanted[i]) {
      characters.push(characterBank[i]);
    }
  }

  // Generate characters for the password

  // Make sure that at least one of each character type in included in the password
  for (i=0;i<characters.length; i++) {
    var item = characters [i];
    var char = item[Math.floor(Math.random() * item.length)]; 
    password = password + char;
    length = length -1;
  }
  // Generate random characters for password till it reaches the desired length
  for (i=0; i< length; i++) {
    var item = characters[Math.floor(Math.random() * characters.length)];
    var char = item[Math.floor(Math.random() * item.length)]; 
    password = password + char;
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
