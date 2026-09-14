//Joshua Dalton
//IT 505 Unit 2
//Higher Lower number guessing game
//How long until computer guesses it with different methods

const number = Math.floor(Math.random()*100)+1;
console.log("The answer is " + number);

let randomGuess = 0;
let randomAttempts = 0;

let sequenceGuess = 1;
let sequenceAttempts = 1;

let smartGuess = 50;
let smartAttempts = 0;
let high = 100;
let low = 1;

//random
while(number!=randomGuess){
    randomAttempts++;
    randomGuess = Math.floor(Math.random() * 100) + 1;
}

//sequence
while(number!=sequenceGuess){
    sequenceAttempts++;
    sequenceGuess++;
}

//smart
while(number!=smartGuess){
    smartAttempts++;
    if(smartGuess>number){
        high = smartGuess - 1;
    }
    else if(smartGuess<number){
        low = smartGuess + 1;
    }
    smartGuess = Math.floor((low + high) / 2);
}

console.log("It took random "+ randomAttempts +" guesses");
console.log("It took sequential "+sequenceAttempts +" guesses");
console.log("It took smart guesser "+ smartAttempts +" guesses");