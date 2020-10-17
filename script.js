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

