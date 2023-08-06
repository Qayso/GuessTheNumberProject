/* Within the function called "randomNumber", it allows for a two parameters to be passed. One will be the value that is taken from the input from the HTML document. The other is a random number that has been generated.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/

let computersNumber = Math.floor(Math.random() * 100) + 1;

counter = 0;



function randomNumber(userGuess, computersNumber) {

 finalCount = counter;

    // YOUR CODE BELOW
 if (userGuess < 1 || userGuess > 100) {

    counter++;
    return "Sorry, that is not a proper value";

} else if (userGuess < computersNumber) {
    counter++;
    return "Higher! " + "Guesses = " + counter;

} else if (userGuess > computersNumber) {
    counter++;
    return "Lower! " + "Guesses = " + counter;

} else {
    counter++;
    return "Correct, the number is " + computersNumber + " --Final Guesses = " + counter; 
};

};





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

let currentNumber = 1;

function startCompGuess() {
    // This should return a string that denotes the first guessed number
    
    // YOUR CODE ...
    return "Is your number " + currentNumber + "?";

}


let createGuess = () => {
    let currentNumber = Math.floor(Math.random() * 100) + 1;
    return currentNumber;
  };

  createGuess();

function compGuess(reply) {
    /*
      The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating the logic and response.

    This should return a string indicating the computers response.
    */
switch (reply) {

    case 'lower':
        return "Your number is lower? Is it " + currentNumber + "?";

    case 'higher':
        return "Your number is higher? Is it " + currentNumber + "?";
    
    case `correct`:
        return "I knew it was " + currentNumber + "!";
};
};