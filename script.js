// character sets to make chosenCharacters array
var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var upperCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["@", "%", "+", "!", "#", "$", "^", "?", ":", ",", "(", ")", "{", "}", "[", "]", "~"];


var generateBtn = document.querySelector("#generate");

//function that choses random characters from array 
function randomArray(array) {
  var Index = Math.floor(Math.random() * array.length);
  return array[Index]
}


function generatePassword() {
  var passwordString = [] //this is what the actual password will be made out of
  var chosenCharacters = [] //these are the characters the user chooses with the confirm questions 


  //select length of password 
  var characterQuantity = prompt("How many characters would you like your password to be? (between 8 and 128)")

  //if the characters are not within the provided limits you will have to start over 
  if (characterQuantity < 8 || characterQuantity > 128) {
    alert("Please choose a valid number")
    return generatePassword()
  }

  //boolean variables chosen by user and stored to make users own array of characters 
  var characterLC = confirm("Would you like your password to include lower case letters?");
  var characterUP = confirm("Would you like your password to include upper case letters");
  var characterN = confirm("Would you like your password to include numbers?");
  var characterSC = confirm("Would you like your password to include special characters?");

  //if no characters are selected user returns to beginning 
  if (!characterLC && !characterUP && !characterN && !characterSC) {
    alert("Please select at least one type of character.")
    return generatePassword()
  }



  // determining what characters will be sent to chosenCharacter array after user checks booleans
  if (characterLC) {
    chosenCharacters = chosenCharacters.concat(lowerCase)
  }
  if (characterUP) {
    chosenCharacters = chosenCharacters.concat(upperCase)
  }
  if (characterN) {
    chosenCharacters = chosenCharacters.concat(numeric)
  }
  if (characterSC) {
    chosenCharacters = chosenCharacters.concat(specialCharacters)
  }

  //use the randomArray function and character Quantity to make a random array of characters with a specific length 
  while (passwordString.length < parseInt(characterQuantity) ) {
    passwordString.push(randomArray(chosenCharacters))

  }

  //makes the array one string 
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