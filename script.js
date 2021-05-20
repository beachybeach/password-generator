// Assignment code here

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
let lower;
let upper;
let nums;
let spec;


const generatePassword = () => {
  const len = window.prompt('How many characters would you like your password? Choose between 8 and 30');
  if (!len) {
    window.alert('You need to enter a value!')
  } else if (len < 8 || len > 30) {
    window.alert('Password must be between 8 and 30!');
  }
  //let password = [];
  else {
    let lower = window.confirm('Would you like to use lowercase letters?');
    let upper = window.confirm('Would you like to use uppercase letters?');
    let nums = window.confirm('Would you like to use numbers?');
    let spec = window.confirm('Would you like to use special characters??');
  } if (!lower && !upper && !nums && !spec) {
    window.alert('You need to enter at least one password element!');
  }
  /*if (lower == 'Yes' || lower == "yes" || lower == "YES") {
    password.push(letters[Math.floor(Math.random() * letters.length)]);
    console.log(password);
  }

  if (upper == 'Yes' || upper == "yes" || upper == "YES") {
    password.push(letters[Math.floor(Math.random() * letters.length)].toLocaleUpperCase());
    console.log(password);
  }

  if (nums == 'Yes' || nums == "yes" || nums == "YES") {
    password.push(numbers[Math.floor(Math.random() * numbers.length)]);
    console.log(password);
  }

  if (spec == 'Yes' || spec == "yes" || spec == "YES") {
    password.push(special[Math.floor(Math.random() * letters.length)]);
    console.log(password);
  }
  return password.join('');
*/
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
