// GUESS THAT NUMBER GAME 

const enterNumText = `Please enter a number greater than zero`
// message to be used throughout the project

 let restartGame = true; 
//  as long as this remains true, the game will restart

 let rangeNum; 
//  For storing the range of the number to be guessed

let randomNum; 
// For storing the number to be guessed 

let attempts 
// For storing the number of attempts the user has left 

let guess; 
// for storing the users guess 

let playAgain; 
// for storing the users response to play again or not 

alert (`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game! :D`);

// 
while (restartGame){

    rangeNum = prompt(`Please enter a maximum number for the range:`);
// Asks the user to enter a number that will set the upper bound for the random number that will be created (AKA number to be guessed)

rangeNum =parseInt(rangeNum); 
// Using parseInt to attempt to convert the user's response into a number value (NOTE: the value returned from a prompt is a string value. If the value cannot be converted, the the value returned with be NaN (Not a Number))

while (!rangeNum || rangeNum <1) {
    rangeNum=prompt(enterNumText); 
    rangeNum=parseInt(rangeNum); 
    // Verifies that the user's entry for the range is a number greater than zero (NOTE: NaN has a default boolean value of false. All numbers + and - have a default boolean value of true, with the exception of zero)
}

randomNum = Math.floor(Math.random()*rangeNum)+1;
attempts=parseInt(prompt(`Please enter the number if attempts allowed:`))

while (!attempts || attempts <1) {
    attempts=parseInt(prompt(enterNumText));
}

guess=prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);
// continues looping until the user guesses the correct number or runs out of attempts (NOTE: loops until the BREAK keyword is run)
while (true){
    guess=parseInt(guess); 

    while (!guess || guess <1 || guess> rangeNum) {
        guess= parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`))
    }

    break;
}
    break;
}














