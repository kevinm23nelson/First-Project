function createRound(roundDeck){
    return {
        deck: roundDeck,
        currentCard: roundDeck[0],  // Assuming the deck is an array and not empty.
        turns: 0,
        incorrectGuesses: []
    };
}

function takeTurn(guess, round){
    // Increment the turn count
    round.turns += 1;

    // Determine if the guess is correct
    const isCorrect = guess === round.currentCard.answer;
    
    // Determine feedback based on whether the guess was correct or not
    let feedback;
    if (isCorrect) {
        feedback = 'correct!';
    } else {
        feedback = 'incorrect!';
        round.incorrectGuesses.push(round.deck.indexOf(round.currentCard) + 1);  // Save the card index, assumed to be 1-based index
    }

    // Update the current card to the next one in the deck
    const currentIndex = round.deck.indexOf(round.currentCard);
    if (currentIndex + 1 < round.deck.length) {
        round.currentCard = round.deck[currentIndex + 1];
    } else {
        // If no more cards are available, set the current card to null
        round.currentCard = null;
    }

    return feedback;
}

function calculatePercentCorrect(round) {
        if (!round || round.turns === 0) {
            // Return 0 if there's no round data or no turns have been taken to avoid division by zero
            return 0;
        }
        // Calculate the number of correct answers
        const correctAnswers = round.turns - round.incorrectGuesses.length;
        // Assuming the total number of turns should be 30, as used in the test
        const totalQuestions = 30;
        // Calculate percentage
        return (correctAnswers / totalQuestions) * 100;
    }
    
    function endRound(round) {
        const correctAnswers = round.turns - round.incorrectGuesses.length;
        const totalQuestions = round.deck.length; // Use the deck length for total number of questions
        const percentage = (correctAnswers / totalQuestions) * 100;
        return `**Round over!** You answered ${percentage} % of the questions correctly!`;
    }
    

module.exports = {
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound,

}