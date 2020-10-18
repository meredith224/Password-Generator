var generateBtn = document.querySelector("/generate");

//Password to be written to input
function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("/password");

    passwordText.value = password;
}

//Generate button
generateBtn.addEventListener("click", writePassword);

//3 arrays for letters, numbers and symbols
var letters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols=["~", "!", "@", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "<", ">", "{", "}"];
var numbers=[0,1,2,3,4,5,6,7,8,9]

//letter array contains lowercase and uppercase letters
var passArray=letters   

function generatePassword(){
    var passwordLenmgth = prompt("Pick the length of your password between 8-128 characters");
    console.log(passwordLength)

//set password length range
    if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("Password Must contain between 8-128 characters");
    }

//user answers prompts for numbers and/or symbols
var addNum = confirm("Do you want Numbers in your password?"
var addChar = confirm("Do you want Symbols in your password?")

//will add numbers and/or symbols into Password Array if selected
if(addNum === true){
    passArray = passArray.concat(number)
    console.log(passArray)
}
if(addChar === true){
    passArray = passArray.concat(Char)
    console.log(passArray)
}

//results need to be made into a string
var result = '';
//and will loop for length of password from prompt
for(var i = 0; i < passwordLength; i++){
    console.log("loop count" + i)
    result = result + passArray[Math.floor(Math.random()* passArray.length)];

    console.log(result)
}
return result;
}