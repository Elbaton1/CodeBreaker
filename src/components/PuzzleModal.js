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
      Imagine you have a box, and you write a label on it saying "favorite number." Inside the box, you can put any number you want. Later, if you want to change the number, you can just take out the old number and put in a new one. This is what **variables** do in JavaScript: they store information so you can use it later.

      ### Why Do We Use Variables?
      Variables help us keep track of things in our program, like scores in a game or names of people. Instead of repeating the same information over and over again, we put it in a variable.

      ### How to Create a Variable
      There are three main ways to create variables in JavaScript:
      
      - **let**: Use this when you expect the value to change.
      - **const**: Use this when the value will stay the same and won't change.
      - **var**: This is an older way to create variables and isn't used much anymore.

      ### Example
      Think of a game where you need to store the player's score and name. Here's how we can do that using variables:
      \`\`\`javascript
      let score = 100; // 'score' is a variable that stores the number 100
      const playerName = "Alex"; // 'playerName' is a constant variable that stores the word 'Alex'
      \`\`\`

      Here, \`score\` holds the number 100, and \`playerName\` holds the name "Alex". The value of \`score\` can change as the game progresses, but \`playerName\` will stay the same.

      ### Your Turn
      How would you create a variable named 'score' and put the number 100 in it? (Hint: Use 'let' because the score might change as the game goes on.)`,
      answer: "let score = 100;"
    },
    {
      question: "What are data types in JavaScript?",
      hint: "Data types help JavaScript understand what kind of information you are working with.",
      prompt: `### What Are Data Types?

      Just like in the real world, different things come in different forms. For example, your age is a number, but your name is a word. JavaScript uses **data types** to figure out what kind of information a variable is holding. It knows that you can do math with numbers but not with words.

      ### Types of Data in JavaScript
      There are a few common data types in JavaScript:

      - **String**: This is a word or a sentence. We surround it with quotes. For example, "Hello" or "Goodbye".
      - **Number**: This is any number, like 5, 42, or 3.14.
      - **Boolean**: This is a yes/no or true/false value. It helps us answer questions like, "Is the game over?" with either true or false.

      ### Example
      Let's say you have a game where you need to track the player's name, score, and whether they won the game:
      \`\`\`javascript
      let playerName = "John"; // String
      let score = 50; // Number
      let hasWon = false; // Boolean
      \`\`\`
      In this example, \`playerName\` is a string because it's a word, \`score\` is a number because it's a number, and \`hasWon\` is a boolean because it can only be true or false.

      ### Your Turn
      What type of data is \`42\` in JavaScript? (Hint: Think about whether it's a word, a number, or a yes/no value.)`,
      answer: "Number"
    },
    {
      question: "How do you define a function in JavaScript?",
      hint: "A function is like a set of instructions that you can reuse whenever you need.",
      prompt: `### What is a Function?

      Think of a function like a recipe. Imagine you have a recipe for making cookies. Instead of writing out all the steps each time you want to bake cookies, you can just write down the recipe once and use it over and over again. In programming, we use **functions** to do the same thing. We write down the instructions once, and we can call on them whenever we need.

      ### Why Use Functions?
      Functions help make our code simpler and less repetitive. Instead of writing the same code multiple times, we can put that code in a function and reuse it whenever we want.

      ### Example
      Let's say you want to greet a player by printing "Hello, Player!" on the screen. Here's how we could write that as a function:
      \`\`\`javascript
      function greet() {
        console.log("Hello, Player!");
      }
      \`\`\`
      Now, whenever we call the \`greet\` function, it will print "Hello, Player!" on the screen.

      ### Your Turn
      How would you create a function named \`calculateSum\` that takes two numbers and adds them together? (Hint: Think of it as writing a recipe that will add two ingredients together.)`,
      answer: `function calculateSum(a, b) { return a + b; }`
    },
    {
      question: "What is a loop in JavaScript?",
      hint: "A loop lets you repeat the same action multiple times without writing the same code again.",
      prompt: `### What is a Loop?

      Imagine you're playing a game where you have to collect 10 coins. Instead of writing "collect a coin" 10 times, you can tell the computer to repeat that action 10 times. This is what a **loop** does in programming: it tells the computer to do the same thing over and over until a certain condition is met.

      ### Why Do We Use Loops?
      Loops are great for repeating tasks without making the code too long. For example, instead of writing the same code to print numbers from 1 to 10, you can use a loop to do it for you.

      ### Example
      Here's a simple loop that prints the numbers 0 to 4 on the screen:
      \`\`\`javascript
      for (let i = 0; i < 5; i++) {
        console.log(i);
      }
      \`\`\`
      This loop starts with \`i = 0\`, and it keeps printing numbers until \`i\` reaches 4.

      ### Your Turn
      Write a loop that prints the numbers from 1 to 3. (Hint: Start the loop at 1 and make it stop after 3.)`,
      answer: `for (let i = 1; i <= 3; i++) { console.log(i); }`
    },
    {
      question: "What is an array in JavaScript?",
      hint: "An array is like a list where you can store multiple pieces of related information.",
      prompt: `### What is an Array?

      Imagine you have a list of your favorite fruits: apples, bananas, and cherries. Instead of writing down each fruit separately, you can store them all together in one list. In programming, we use **arrays** to store lists of related information, like a list of numbers or words.

      ### How Do Arrays Work?
      Arrays are useful because they let you keep track of multiple pieces of information in one place. You can access the items in the array using their position (called an index), starting with 0 for the first item.

      ### Example
      Here's an array that stores three fruits:
      \`\`\`javascript
      let fruits = ['apple', 'banana', 'cherry'];
      \`\`\`

      To get the first fruit from the list, we use its position in the array (index 0).

      Example:
      \`\`\`javascript
      console.log(fruits[0]); // Prints 'apple'
      \`\`\`

      ### Your Turn
      How would you get the first item from an array named \`fruits\`? (Hint: Remember that the first item is at position 0.)`,
      answer: "fruits[0];"
    },
    {
      question: "What is an object in JavaScript?",
      hint: "An object is like a box where you store different pieces of information about one thing.",
      prompt: `### What is an Object?

      Imagine you have a box labeled "car." Inside this box, you keep information like the car's brand, color, and speed. In programming, an **object** is a way to store different pieces of information about one thing, all in one place.

      ### Example
      Let's say you want to store information about a car:
      \`\`\`javascript
      let car = {
        brand: 'Toyota',
        color: 'red',
        speed: 120
      };
      \`\`\`

      This object stores three pieces of information about the car: its brand, color, and speed. You can access this information whenever you need it.

      ### Your Turn
      How would you create an object called 'car' with the properties 'brand' as 'Toyota' and 'year' as 2020?`,
      answer: "let car = { brand: 'Toyota', year: 2020 };"
    },
    {
      question: "What is a conditional in JavaScript?",
      hint: "Conditionals are like making decisions in a program based on certain conditions.",
      prompt: `### What is a Conditional?

      Imagine you're playing a game and you reach a checkpoint. Depending on your score, the game might give you extra health or continue as usual. In JavaScript, we use **conditional statements** to make decisions in our code. These decisions allow us to perform different actions based on different conditions.

      ### Why Do We Use Conditionals?
      Conditionals help make our programs smarter by allowing them to react to different situations. For example, we might want to check if a player's health is low and then restore it if needed.

      ### Example
      Let’s say we want to check if the player has enough points to win:
      \`\`\`javascript
      let score = 50;
      if (score >= 100) {
        console.log("You win!");
      } else {
        console.log("Keep playing!");
      }
      \`\`\`

      ### Your Turn
      Write a conditional statement that checks if the player's score is greater than or equal to 50, and if it is, print "Level Up!" Otherwise, print "Keep trying!".`,
      answer: `if (score >= 50) { console.log("Level Up!"); } else { console.log("Keep trying!"); }`
    },
    {
      question: "What is a switch statement in JavaScript?",
      hint: "A switch statement allows us to choose between many possible actions.",
      prompt: `### What is a Switch Statement?

      Imagine you're at a restaurant, and the waiter gives you a menu with five items. Depending on what you choose, the waiter will bring you the corresponding item. In JavaScript, the **switch** statement lets us choose between multiple possible outcomes based on a specific value.

      ### Why Use a Switch Statement?
      Switch statements are useful when we have many options to choose from and don't want to write a lot of "if-else" statements.

      ### Example
      Let's say we want to choose a power-up in a game:
      \`\`\`javascript
      let powerUp = "speed";
      switch(powerUp) {
        case "speed":
          console.log("You got the speed boost!");
          break;
        case "shield":
          console.log("You got the shield!");
          break;
        case "health":
          console.log("You got the health boost!");
          break;
        default:
          console.log("No power-up selected.");
      }
      \`\`\`

      ### Your Turn
      Write a switch statement that prints different messages for different power-ups, like "speed," "shield," and "strength."`,
      answer: `switch(powerUp) { 
        case "speed": console.log("Speed boost!"); break; 
        case "shield": console.log("Shield activated!"); break; 
        case "strength": console.log("Strength boost!"); break; 
        default: console.log("No power-up selected."); 
      }`
    },
    {
      question: "How do you declare a class in JavaScript?",
      hint: "A class is like a blueprint for creating objects.",
      prompt: `### What is a Class?

      Think of a class like a blueprint for building something. For example, if you have a blueprint for a house, you can build multiple houses from that same blueprint. In JavaScript, a **class** is a blueprint for creating objects with similar properties and methods.

      ### Example
      Let’s say we want to create a class for a player in a game:
      \`\`\`javascript
      class Player {
        constructor(name, score) {
          this.name = name;
          this.score = score;
        }
        greet() {
          console.log("Hello, " + this.name);
        }
      }
      let player1 = new Player("Alex", 0);
      player1.greet(); // "Hello, Alex"
      \`\`\`

      ### Your Turn
      How would you create a class called \`Car\` with a constructor that takes in \`brand\` and \`year\`?`,
      answer: `class Car { constructor(brand, year) { this.brand = brand; this.year = year; } }`
    },
    {
      question: "How do you handle errors in JavaScript?",
      hint: "Try-catch blocks help us manage unexpected errors in our code.",
      prompt: `### What is Error Handling?

      Imagine you’re driving a car and something unexpected happens, like a flat tire. You have a plan in place to fix it and continue driving. In JavaScript, we use **try-catch** blocks to handle unexpected errors that might occur in our code, so the program can keep running smoothly.

      ### Example
      Let's say we’re trying to run some code that might throw an error:
      \`\`\`javascript
      try {
        let result = someUndefinedFunction();
      } catch (error) {
        console.log("An error occurred: " + error.message);
      }
      \`\`\`

      In this example, if something goes wrong inside the \`try\` block, the \`catch\` block will handle the error and print a message to the screen.

      ### Your Turn
      How would you write a try-catch block that tries to log the result of a function called \`divideByZero\`, but catches any errors that might occur?`,
      answer: `try { 
        let result = divideByZero(); 
      } catch (error) { 
        console.log("An error occurred: " + error.message); 
      }`
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
