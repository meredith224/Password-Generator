function generatePassword() {
  // User Input requested
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for user validation 
  if (!enter) {
      alert("Needs a value");
  } else if (enter < 8 || enter > 128) {

      // Validates user input
      // Start user prompts for additional inputs
      enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {
      confirmNumber = confirm("Will this contain numbers?");
      confirmCharacter = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

  // First if statement that uses user input prompts to determine choices
  if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
      // converts letters to uppercase 
      toUpper = function (x) {
          return x.toUpperCase();
      };
      alpha2 = alpha.map(toUpper);
      choices = character.concat(number, alpha, alpha2);
  }

  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(alpha, alpha2);
  }

  // Else if for 2 positive options 
  else if (confirmCharacter && confirmNumber) {
      choices = character.concat(number);
  } else if (confirmCharacter && confirmLowercase) {
      choices = character.concat(alpha);
  } else if (confirmCharacter && confirmUppercase) {
      choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
      choices = alpha.concat(number);
  } else if (confirmLowercase && confirmUppercase) {
      choices = alpha.concat(alpha2);
  } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(alpha2);
  }

  // Else if for 1 positive option
  else if (confirmCharacter) {
      choices = character;
  }
  else if (confirmNumber) {
      choices = number;
  }
  else if (confirmLowercase) {
      choices = alpha;
  }

  // Created space variable to fill uppercase conversion
  else if (confirmUppercase) {
      choices = space.concat(alpha2)
  }
  // Else if for 4 negative options
  else if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("Criteria must be selected");
  };

  // password variable is an array placeholder for user generated amount of length
  var password = [];

\
  // Random selection for all variables: 
  for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
  }
 
  var ps = password.join("");
  UserInput(ps);
  return ps;

  function UserInput(ps) {
    document.getElementById("password").value = ps;
