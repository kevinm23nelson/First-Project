const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('guess', function() {
  it('should be a function', function () {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return "correct!" when the guess is correct', function() {
    let result = evaluateGuess('answer', 'answer');
    expect(result).to.equal('correct!');
  });

  it('should return "incorrect!" when the guess is incorrect', function() {
    let result = evaluateGuess('incorrectAnswer', 'answer');
    expect(result).to.equal('incorrect!');
  });
});