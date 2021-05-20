// Assignment code here

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

const generatePassword = () => {
  let password = [];
  const lower = window.prompt('Would you like to use lowercase letters?');
  if (lower == 'Yes' || lower == "yes" || lower == "YES") {
    password.push(letters[Math.floor(Math.random() * letters.length)]);
    console.log(password);
  }
  const upper = window.prompt('Would you like to use uppercase letters?');
  if (upper == 'Yes' || upper == "yes" || upper == "YES") {
    password.push(letters[Math.floor(Math.random() * letters.length)].toLocaleUpperCase());
    console.log(password);
  }
  const nums = window.prompt('Would you like to use numbers?');
  if (nums == 'Yes' || nums == "yes" || nums == "YES") {
    password.push(numbers[Math.floor(Math.random() * numbers.length)]);
    console.log(password);
  }
  const spec = window.prompt('Would you like to use special characters??');
  if (spec == 'Yes' || spec == "yes" || spec == "YES") {
    password.push(special[Math.floor(Math.random() * letters.length)]);
    console.log(password);
  }
  return password.join('');
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
