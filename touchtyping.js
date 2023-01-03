// To import readlineSync module
const readlineSync = require('readline-sync');

function practiceTouchTyping(length) {
    // Generate a random string to type
    const correctString = generateRandomString(length);
    console.log(`Type the following string: ${correctString}`);

    // Get input from user
    const userInput = readlineSync.question('Enter the string: ');

    // Check if the input from user is correct
    if (userInput === correctString) {
        console.log('Correct!')
    } else {
        console.log(`Incorrect. The correct string was: ${correctString}`)
    }
}

function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz; ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


practiceTouchTyping(10);
practiceTouchTyping(10);