const chai = require('chai');
const expect = chai.expect;

const { createRound, takeTurn, calculatePercentCorrect } = require('../src/round');
const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');

    const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")

    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")

    const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

    const card4 = createCard(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method")

    const card5 = createCard(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method")

    const card6 = createCard(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()")

    const card7 = createCard(7, "Which array prototype is not an accessor method?", ["join()", "slice()", "splice()"], "splice()")

    const card8 = createCard(8, "What do iterator methods take in as their first argument?", ["callback function", "current element", "an array"], "callback function")

    const card9 = createCard(9, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")

    const card10 = createCard(10, "Which iteration method returns the first array element where the callback function returns true", ["find()", "filter()", "forEach()"], "find()")

    const roundDeck = createDeck([card1, card2, card3, card4, card5, card6, card7, card8, card9, card10])

describe('round', function() {
  it('should be able to create a game round object', function(){
    const round = createRound(roundDeck)
    expect(round).to.deep.equal({
        deck: roundDeck,
        currentCard: roundDeck[0],
        turns: 0,
        incorrectGuesses: []
        })
    })
})

describe('turn', function() {
    let round;
    let roundDeck;

    // Setup for each test to ensure fresh state
    beforeEach(function(){
        roundDeck = [
            {answer: "object"}, // Assuming a deck with simple objects
            {answer: "array"},
            {answer: "function"}
        ];
        round = createRound(roundDeck); // Assume this sets up the round correctly
    });

    it('should be able to change turns', function(){
        takeTurn("object", round);
        expect(round.turns).to.equal(1);
        takeTurn("array", round);
        expect(round.turns).to.equal(2);
    });

    it('should make the next card become the current card', function(){
        takeTurn("object", round);
        expect(round.currentCard).to.deep.equal(roundDeck[1]);  
    });

    it('should evaluate if the answer is correct', function(){
        takeTurn("object", round); // Correct answer for first card
        expect(round.incorrectGuesses).to.deep.equal([]);
        takeTurn("wrong answer", round); // Incorrect answer for second card
        expect(round.incorrectGuesses).to.deep.equal([2]); // Index of the second card if incorrect
    });

    it('should return feedback if correct or incorrect', function(){
        const correctResult = takeTurn("object", round); // Correct answer for first card
        expect(correctResult).to.equal('correct!');
        const wrongResult = takeTurn("wrong answer", round); // Incorrect answer for second card
        expect(wrongResult).to.equal('incorrect!');
    });

    it('should handle the end of the deck', function(){
        takeTurn("object", round); // First card
        takeTurn("array", round);  // Second card
        takeTurn("function", round); // Third card
        expect(round.currentCard).to.be.null; // Should be no more cards
    });
});

describe('calculate percentage correct', function () {
    it('should calculate the percent of correct answers', function () {
        const round = createRound(roundDeck)
        const percentage = calculatePercentCorrect(round)
        const expectedPercentage = ((round.turns - round.incorrectGuesses.length) / 30) * 100;
        expect(percentage).to.equal(expectedPercentage)
    })
});


