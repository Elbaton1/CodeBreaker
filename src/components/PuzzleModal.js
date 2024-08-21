import React, { useState, useEffect } from 'react';

function PuzzleModal({ onSolve, questionIndex, score, setScore }) {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [progress, setProgress] = useState((questionIndex + 1) * 10); // Adjusted progress for 10 questions

  useEffect(() => {
    setProgress((questionIndex + 1) * 10); // Update progress for 10 questions
  }, [questionIndex]);

  const questions = [
    {
      question: "What is a variable in JavaScript?",
      hint: "Think of a variable like a labeled box where you can store a value, like a number or a word.",
      prompt: `### What is a Variable?

Imagine you're playing a game, and you want to keep track of your score. Instead of writing your score down on a piece of paper each time, you can let the computer remember it for you. In programming, we use **variables** to store information. A variable is like a container, or a labeled box, where you can store information and then access it whenever you need.

### Why Are Variables Important?

Variables are super important because they help us remember information. In a game, you might use a variable to store the player's score, the level they are on, or even how many lives they have left. Instead of hardcoding numbers or data into your game, you store them in variables, so the game can change and react as players progress.

### How to Create a Variable

Creating a variable is like labeling a box and deciding what goes inside it. In JavaScript, we do this by using one of three keywords:
- **let**: This is used when the value of the variable might change.
- **const**: This is used when the value will not change.
- **var**: This is the old way of creating variables and isn’t used much anymore.

For example, in a game where we want to store the player's score, we might write:

\`\`\`javascript
let score = 100;
\`\`\`

This line of code tells JavaScript that we have a variable called \`score\`, and right now, it contains the value 100.

### Why Use \`let\`?

In the example above, we use \`let\` because the player's score will change as the game progresses. You might earn points, lose points, or reset the score to zero at the start of a new level.

Here's how we might update the score as the game goes on:
\`\`\`javascript
score = score + 10; // The player earns 10 points!
\`\`\`

Now, the variable \`score\` holds a new value. This is why using \`let\` is useful—it lets us change the value whenever we need to.

### Real-World Example

Imagine you’re running a lemonade stand. You want to keep track of how much money you’ve made throughout the day. Instead of writing it down on paper and constantly updating it, you could use a variable called \`earnings\`:

\`\`\`javascript
let earnings = 0; // Start the day with $0 in earnings.
earnings = earnings + 5; // You sell a lemonade and earn $5.
earnings = earnings + 3; // You sell another lemonade and earn $3.
\`\`\`

At the end of the day, the variable \`earnings\` will contain the total amount of money you made.

### Your Turn

Imagine you’re writing a game, and you want to create a variable to hold the player's score. How would you create a variable called \`score\` and give it an initial value of 100? Remember to use \`let\` because the score might change as the game goes on.`,
      answer: "let score = 100;"
    },
    {
      question: "What is a string in JavaScript?",
      hint: "A string is like a word or sentence, surrounded by quotes.",
      prompt: `### What is a String?

Think about when you write a text message. You're typing out words and sentences. In JavaScript, we use something called a **string** to represent text like this. A string can be a single word, a phrase, or even a whole paragraph.

### How to Create a String

In JavaScript, a string is created by putting text between quotes, like this:
\`\`\`javascript
let greeting = "Hello, world!";
\`\`\`
Here, the string "Hello, world!" is stored inside the variable \`greeting\`.

### Why Are Strings Useful?

Strings are used everywhere in programming. For example, you might use a string to store a player's name in a game, a message to show on the screen, or even a piece of dialogue for a character.

### Real-World Example

Imagine you're building a game where players have to type their name before starting. You would store their name in a variable using a string, like this:
\`\`\`javascript
let playerName = "Alice";
\`\`\`

Now, the player's name is stored in the \`playerName\` variable, and you can use it whenever you need to display their name.

### Your Turn

Imagine you want to store a simple greeting in a variable. How would you create a variable named \`greeting\` that stores the text "Hello!"?`,
      answer: `let greeting = "Hello!";`
    },
    {
      question: "What is a number in JavaScript?",
      hint: "A number is just like it sounds, a number like 5 or 10.",
      prompt: `### What is a Number?

In JavaScript, numbers work just like they do in real life. You can use them to count, do math, or keep track of scores in a game. Numbers can be whole numbers, like 5 or 10, or they can be decimals, like 3.14.

### How to Create a Number

You can store a number in a variable like this:
\`\`\`javascript
let age = 25;
\`\`\`

Here, the number 25 is stored in the variable \`age\`.

### Why Are Numbers Important?

Numbers are super important in programming because they help you keep track of things. For example, in a game, you might use numbers to keep track of the player's score, the time remaining, or how many enemies are left.

### Real-World Example

Let’s say you’re creating a game where players earn points for each correct answer. You would use a number to store their score:
\`\`\`javascript
let score = 0; // The player starts with 0 points.
score = score + 10; // The player earns 10 points for a correct answer.
\`\`\`

### Your Turn

Imagine you want to store the number 18 in a variable called \`age\`. How would you write that in JavaScript?`,
      answer: `let age = 18;`
    },
    {
      question: "How do you add two numbers in JavaScript?",
      hint: "Think of adding two numbers together just like you do in math class.",
      prompt: `### How to Add Two Numbers

Just like in math, adding two numbers together in JavaScript is simple. You use the plus sign (\`+\`) to add numbers together.

### Example

Let’s say you want to add 5 and 3:
\`\`\`javascript
let sum = 5 + 3;
\`\`\`

Now, \`sum\` will hold the value 8 because you added 5 and 3 together.

### Why Add Numbers?

Adding numbers is useful when you want to keep track of things like scores in a game, money earned, or even the number of items collected.

### Real-World Example

Imagine you’re building a game where players collect coins. Every time they collect a coin, you add 1 to their total. Here's how you might do that:
\`\`\`javascript
let coinsCollected = 0; // The player starts with 0 coins.
coinsCollected = coinsCollected + 1; // The player collects a coin.
\`\`\`

Now, the variable \`coinsCollected\` holds the number of coins the player has collected.

### Your Turn

How would you add the numbers 10 and 15 together and store the result in a variable called \`total\`?`,
      answer: `let total = 10 + 15;`
    },
    {
      question: "What is a boolean in JavaScript?",
      hint: "Booleans represent yes or no, true or false values.",
      prompt: `### What is a Boolean?

In real life, we often answer questions with yes or no. For example, "Is it raining?" could be answered with yes (true) or no (false). In JavaScript, **booleans** are just like this. They represent either \`true\` or \`false\`.

### Example

Here’s how we store a boolean value:
\`\`\`javascript
let isRaining = false;
\`\`\`

This means that \`isRaining\` is currently \`false\`. We could change it to \`true\` if it starts raining.

### Why Are Booleans Useful?

Booleans help us make decisions in our programs. For example, you might want to check if a player has won a game. If the answer is \`true\`, you might show a victory message; if the answer is \`false\`, you might let the player keep playing.

### Real-World Example

Let’s say you’re creating a game where the player has to reach the finish line. You can use a boolean to check if the player has reached the finish line:
\`\`\`javascript
let hasFinished = false; // The player hasn't finished the race yet.
hasFinished = true; // The player reaches the finish line, so we set it to true.
\`\`\`

### Your Turn

How would you create a variable named \`isSunny\` and set it to \`true\`?`,
      answer: `let isSunny = true;`
    }
  ];

  const currentQuestion = questions[questionIndex];

  if (!currentQuestion) {
    return <div>No more questions available. You've completed all the levels!</div>;
  }

  const handleSubmit = () => {
    if (answer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setFeedback('Correct! Well done.');
      setScore(score + 10); // Increment score by 10 for each correct answer
      setTimeout(() => {
        setFeedback('');
        onSolve(); // Proceed to the next level and close modal
      }, 1000); 
    } else {
      setFeedback('Incorrect. Please try again.');
    }
  };

  return (
    <div className="puzzle-modal">
      <h2>{currentQuestion.question}</h2>
      <p>{currentQuestion.prompt}</p>
      {showHint && <p><strong>Hint: </strong>{currentQuestion.hint}</p>}
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer here..."
      />
      <button onClick={handleSubmit}>Submit Answer</button>
      <button onClick={() => setShowHint(true)}>Show Hint</button>
      {feedback && <p className={`feedback ${feedback === 'Correct! Well done.' ? 'correct' : 'incorrect'}`}>{feedback}</p>}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default PuzzleModal;
