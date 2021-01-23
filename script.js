
// character sets
var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

var upperCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialCharacters = ["@", "%", "+", "!", "#", "$", "^", "?", ":", ",", "(", ")", "{", "}", "[", "]", "~" ];

// characters that user chose
var chosenCharacters = [];

//messages to user
var characterQuantity = prompt("How many characters would you like your password to be? (between 8 and 123)")

var characterLC = confirm("Would you like your password to include lower case letters?")

var characterUP = confirm("Would you like your password to include upper case letters")

var characterN = confirm("Would you like your password to include numbers?")

var characterSC = confirm("Would you like your password to include special characters?")

// determining what characters will be chosen
if (characterLC){chosenCharacters.push(lowerCase)}
if (characterUP){chosenCharacters.push(upperCase)}
if (characterN){chosenCharacters.push(numeric)}
if (characterSC){chosenCharacters.push(specialCharacters)}

console.log(chosenCharacters)
// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword () {

  
  for(var i=0; i < l; i++ )
  {  
  text += chosenCharacters.charAt(Math.floor(Math.random() * characterQuantity.length));
  }
  return text;
  }




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
