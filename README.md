**FlashCards Game - Technical Overview**

*Description*
This project is a text-based flashcard game designed to run in a Node.js environment. Players are presented with a series of programming-related questions and must select the correct answer from multiple choices. The game provides immediate feedback on the player's answers, tracks the number of correct and incorrect responses, and displays the success rate at the end of each round.

![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)

---

*Technologies Used*

JavaScript (ES6): The game is developed using modern JavaScript, leveraging ES6 features for enhanced code structure and performance. This includes the use of arrow functions, let and const for variable declarations, template literals for string interpolation, and modules for encapsulating functionality.

Node.js: This platform runs our JavaScript code on the server side. It's used here mainly for its module ecosystem, powered by npm (Node Package Manager), which facilitates the management of the project’s dependencies.

Mocha & Chai: These JavaScript libraries are used for writing unit tests to ensure the game functions as expected. Mocha provides the test framework, which allows for structuring test suites that describe game logic and behavior, while Chai offers a rich set of assertions to verify the correctness of the game's functionality.

*Install/Setup Instructions*

Follow these instructions to get the FlashCards game up and running on your local machine.

Prerequisites:

Before you begin, ensure you have Node.js installed on your computer. You can download and install Node.js from nodejs.org.

Clone the Repository:

First, clone the repository to your local machine using Git. Open a terminal and run the following command:

```git clone https://github.com/your-username/flashcards-game.git```

Then cd into the file:

```cd flashcards-game```

Replace https://github.com/your-username/flashcards-game.git with the actual URL of your repository.

Install Dependencies:

Navigate into the project directory and install the required npm packages:

```npm install```

This command installs all the dependencies defined in the package.json file, including Mocha and Chai for running the tests.

Running the Game:

To start the game, simply run the following command in your terminal:

```node game.js```

This will execute the game.js file using Node.js, and the game interface will appear in your terminal.

Running Tests:

If you want to run the tests to ensure the game logic is functioning correctly, execute the following command:

```npm test```

This command runs the test suites defined in the project using Mocha, and you will see the test results in your terminal.
