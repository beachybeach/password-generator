// Assignment code here

const generatePassword = () => {
  const pass = '';
  const lower = window.prompt('Would you like to use lowercase letters?');
  if (lower == 'Yes') {
    console.log('nice we made it this far lol');
  }
  window.prompt('Would you like to use uppercase letters?');
  window.prompt('Would you like to use numbers?');
  window.prompt('Would you like to use special characters??');
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log('hello');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
