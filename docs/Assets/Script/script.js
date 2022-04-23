var generateBtn = document.querySelector("#generate");

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){

  var password = ""

  //prompts user to choose password length
  var passLength = window.prompt("Password length (8-128 chars)");

  //confirms password length is within acceptable parameters and runs the
  //make password function, aborts if not
  if (passLength < 8) {
    alert("Password must be greater than 7 characters");
    return;
  }else if (passLength > 128) {
    alert("Password must be less than 128 characters");
    return;
  } else {
    makePassword ();
  }

  //function that combines user choices to make the password
  function makePassword() {

    //checking for user preference on characters used
    var lowCaseConfirm = confirm("Lowercase?");
    var upCaseConfirm = confirm("Uppercase?");
    var numeralsConfirm = confirm("Numbers?");
    var specialConfirm = confirm("Special?");

    //defining available characters as strings
    var lowCase = "abcdefghijklmnopqrstuvwxyz"
    var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var numerals = "1234567890"
    var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

    var selectChars = ""

    //adds only the users selected characters to the selected characters
    if (!lowCaseConfirm && !upCaseConfirm && !numeralsConfirm && !specialConfirm) {
      alert("Password must have at least one character set");
    }
    if (lowCaseConfirm === true){ 
      selectChars = selectChars += lowCase;
    }
    if (upCaseConfirm === true) {
      selectChars = selectChars += upCase;
    }
    if (numeralsConfirm === true) {
      selectChars = selectChars += numerals;
    }
    if (specialConfirm === true) {
      selectChars = selectChars += special;
    }
    
    //for loop that assigns password value from selected characters string, runs
    //for the user selected length of the password
    for (let i = 0; i < passLength; i++) {
      //gets a random number from the length of the selected characters string 
      var randomNumber = Math.floor(Math.random() * selectChars.length);
      //grabs a character from the string with the random number generated
      password += selectChars.substring(randomNumber, randomNumber+1);
    }
  }
  //gives the writePassword function its input by running the makePassword function
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);