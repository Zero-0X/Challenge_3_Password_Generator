// Assignment Code
// Write password to the #password input
// Add event listener to generate button
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria THEN I select which criteria to include in the password
// WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//  WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered THEN a password is generated that matches the selected criteria
// WHEN the password is generated THEN the password is either displayed in an alert or written to the page

var lowercase = ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
var uppercase = ('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
var numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
var specialCharacters = ('`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', ';', ',', '<', '.', '>', '/', '?');


function getUserInput() {

  var password = '';
  var includeLowercase = confirm('Click OK to include lowercase letters');
  var includeUppercase = confirm('Click OK to include uppercase letters');
  var includeNumbers = confirm('Click OK to include numbers');
  var includeSpecialCharacters = confirm('Click OK to include special characters');
  var passwordLength = Number(prompt ('Please provide an amount between 8-128'));
  var combined = [];

  return [passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters];
}


  function generatePassword() {
    var choices = getUserInput();

    var password = '';
    var includeLowercase = choices[1];
    var includeUppercase = choices[2];
    var includeNumbers = choices[3]
    var includeSpecialCharacters = choices[4];
    var charAmount = choices[0];
    var combined = [];

  if(includeLowercase) {
    combined = combined.concat(lowercase);
  }

  if(includeUppercase) {
    combined = combined.concat(uppercase);
  }

  if (includeNumbers) {
    combined = combined.concat(numbers);
  }

  if (includeSpecialCharacters) {
    combined = combined.concat(specialCharacters);
  }

  for (var count = 0; count < charAmount; count++) {
    var randomNum = Math.random();
    var randomIndex = Math.floor(randomNum * combined.length);
    var randomChar = combined[randomIndex];

    password += randomChar;
  }

  return password;

}

var password = generatePassword();

console.log(password);