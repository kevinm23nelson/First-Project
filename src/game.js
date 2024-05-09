const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

// Import game functions from other modules
const { createDeck, countCards } = require('./deck');
const { createRound } = require('./round');

function printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
    -----------------------------------------------------------------------`);
}

function printQuestion(round) {
    util.main(round);
}

// Define the start function
function start() {
    // Create a deck with the prototype questions
    const deck = createDeck(prototypeQuestions);
    
    // Create a new round with the deck
    const round = createRound(deck);
    
    // Print the initial game message
    printMessage(deck);
    
    // Kick off the game interaction
    printQuestion(round);
}

// Invoke the start function to make the game playable when the file is run
start();

module.exports = { 
  printMessage, 
  printQuestion 

};
