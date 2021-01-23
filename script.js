
// character sets to make full array 
var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var upperCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["@", "%", "+", "!", "#", "$", "^", "?", ":", ",", "(", ")", "{", "}", "[", "]", "~" ];



var generateBtn = document.querySelector("#generate");

function randomArray (array) {
var Index= Math.floor(Math.random() * randomArray.length);
return array[Index]
}

function generatePassword () {

//select length of password 
  var characterQuantity = prompt("How many characters would you like your password to be? (between 8 and 128)") 
    
  if (characterQuantity < 8 || characterQuantity > 128) {
    alert("Please choose a valid number")
return generatePassword ()}

//boolean variables chosen by user 
  var characterLC = confirm("Would you like your password to include lower case letters?");
  var characterUP = confirm("Would you like your password to include upper case letters");
  var characterN = confirm("Would you like your password to include numbers?");
  var characterSC = confirm("Would you like your password to include special characters?");

  if (!characterLC&&!characterUP&&!characterN&&!characterSC) {
    alert("Please select at least one type of character.")
  return generatePassword ()}

  var chosenCharacters = [];

// determining what characters will be chosen after user checks booleans
if (characterLC){chosenCharacters.push(lowerCase)}
if (characterUP){chosenCharacters.push(upperCase)}
if (characterN){chosenCharacters.push(numeric)}
if (characterSC){chosenCharacters.push(specialCharacters)}

//selecting characters for password 
var passwordString = []

while (passwordString.length < chosenCharacters.length) {
  passwordString.push(randomArray(chosenCharacters))
}

return passwordString.join("")
  }
  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
