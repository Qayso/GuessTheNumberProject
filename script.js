/* Within the function called "randomNumber", it allows for a two parameters to be passed. One will be the value that is taken from the input from the HTML document. The other is a random number that has been generated.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/

counter = 0;

// Guess the number for client
function randomNumber(userGuess, computersNumber) {
  // YOUR CODE BELOW
  // first if statement for checking correct values between 1-100 if otherwise will respond with an error type message
  if (userGuess < 1 || userGuess > 100) {
    counter++;
    return "Sorry, that is not a proper value";
    // Response if users guess is lower than computers number
  } else if (userGuess < computersNumber) {
    counter++;
    return "Higher! " + "Guesses = " + counter;
    // Response if users guess is higher than computers number
  } else if (userGuess > computersNumber) {
    counter++;
    return "Lower! " + "Guesses = " + counter;
    //  Response if user guesses correctly!
  } else {
    counter++;
    return (
      "Correct, the number is " +
      computersNumber +
      " --Final Guesses = " +
      counter
    );
  }
}

// YOUR CODE ABOVE

/* Have the Computer Guess your Number ---------------------------------------------

    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/
// Declaring variables 
let currentNumber = 1; 
 let lowest = 1 ; 
let highest = 100;

// function for starting the game
function startCompGuess() {
  // This should return a string that denotes the first guessed number

  // YOUR CODE ...
  return "Is your number " + currentNumber + "?";
}

// Creating guess from replies "lower" or "higher"
let createGuess = () => {
   currentNumber = Math.floor(Math.random() * (highest - lowest + 1)) + lowest;
    return currentNumber

  };

// Responses and refactoring values for createGuess function
function compGuess(reply) {
  /*
      The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating the logic and response.

    This should return a string indicating the computers response.
    */
  switch (reply) {
    case "lower":
       highest = currentNumber - 1
      createGuess();

      return "Your number is lower? Is it " + currentNumber + "?";

    case "higher":
      lowest = currentNumber + 1
      createGuess();

      return "Your number is higher? Is it " + currentNumber + "?";

    case `correct`:
      return "I knew it was " + currentNumber + "!";
  }
}
