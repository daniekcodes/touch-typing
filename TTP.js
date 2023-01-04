// To import readlineSync module
const readlineSync = require('readline-sync');

function practiceTouchTyping(length) {
    // Generate a random string to type
    const correctString = generateRandomString(length);
    console.log(`Type the following characters: ${correctString}`);

    // Get input from user
    let userInput = readlineSync.question('Enter the following characters: ');

    // Trim if the first or last character is a space
    userInput = userInput.trim();

    // Check if the input from user is correct
    if (userInput === correctString) {
        console.log('Good job!')
    } else {
        console.log(`That's incorrect. The correct phrase is: ${correctString}`)
    }
}

function generateRandomString(length) {
    let result = '';
    const characters = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz;';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// The string is set to 10 characters
practiceTouchTyping(10);

