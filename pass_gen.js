<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>    
        // debugger
       var specialCharacters = [
        '@',
        '%',
        '+',
        '\\',
        '/',
        "'",
        '!',
        '#',
        '$',
        '^',
        '?',
        ':',
        ',',
        ')',
        '(',
        '}',
        '{',
        ']',
        '[',
        '~',
        '-',
        '_',
        '.'
        ];
        // Array of numbers to be included in password
        var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        // Array of lowercase letters to be included in password
        var lowerCasedCharacters = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
        ];
        // Array of uppercase letters to be included in password
        var upperCasedCharacters = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
        ];
        var passLength = 10
        var useUpper = true
        var useLower = true
        var useNumbers = true
        var useSpec = true
        function randomIndex(arr) {
            return arr[Math.floor(Math.random() * arr.length)]
        }
        function generatePassword() {
            var selectedOption = []
            var generatedPassword =[]
            var guaranteed = []
            if (useUpper) {
                selectedOption = selectedOption.concat(upperCasedCharacters)
                guaranteed.push(randomIndex(upperCasedCharacters))
            }
            if (useLower) {
                selectedOption = selectedOption.concat(lowerCasedCharacters)
                guaranteed.push(randomIndex(lowerCasedCharacters))
            }
            if (useNumbers) {
                selectedOption = selectedOption.concat(numericCharacters)
                guaranteed.push(randomIndex(numericCharacters))
            }
            if (useSpec) {
                selectedOption = selectedOption.concat(specialCharacters)
                guaranteed.push(randomIndex(specialCharacters))
            }
            console.log(selectedOption)
            console.log(guaranteed)
            for(var i = 0; i < passLength; i++){
                generatedPassword.push(randomIndex(selectedOption))
            }
            for(var i = 0; i < guaranteed.length; i++){
                generatedPassword[i] = guaranteed[i]
            }
            return generatedPassword.join('')
        }
        console.log(generatePassword())
    </script>
</body>
</html>