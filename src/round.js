function createRound(roundDeck) {
    return {
        deck: roundDeck,
        currentCard: roundDeck[0],  // Assuming the deck is an array and not empty.
        turns: 0,
        incorrectGuesses: []
    };
}

function takeTurn(guess, round) {
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



module.exports = {
    createRound,
    takeTurn,

}