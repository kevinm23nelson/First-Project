function createRound(roundDeck) {
    return {
        deck: roundDeck,
        currentCard: roundDeck[0],
        turns: 0,
        incorrectGuesses: []
    };
}

function takeTurn(guess, round) {
    round.turns += 1;
    const isCorrect = guess === round.currentCard.correctAnswer;
    let feedback = isCorrect ? 'correct!' : 'incorrect!';
    if (!isCorrect) {
        round.incorrectGuesses.push(round.deck.indexOf(round.currentCard) + 1);
    }
    const currentIndex = round.deck.indexOf(round.currentCard);
    if (currentIndex + 1 < round.deck.length) {
        round.currentCard = round.deck[currentIndex + 1];
    } else {
        round.currentCard = null;
        feedback += ' ' + endRound(round);
    }
    return feedback;
}

function calculatePercentCorrect(round) {
    if (!round || round.turns === 0) {
        return 0;
    }
    const correctAnswers = round.turns - round.incorrectGuesses.length;
    const totalQuestions = 30;
    return (correctAnswers / totalQuestions) * 100;
}
    
function endRound(round) {
        const correctAnswers = round.turns - round.incorrectGuesses.length;
        const totalQuestions = round.deck.length; 
        const percentage = (correctAnswers / totalQuestions) * 100;
        return `**Round over!** You answered ${percentage} % of the questions correctly!`;
}
    
module.exports = {
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound,

}