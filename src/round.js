function createRound(roundDeck) {
    return {
        deck: roundDeck,
        currentCard: roundDeck[0],  // Assuming the deck is an array and not empty.
        turns: 0,
        incorrectGuesses: []
    };
}





module.exports = {
    createRound,

}