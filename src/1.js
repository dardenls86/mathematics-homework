// Random math homework generator
function generateMathHomework() {
  // Generate a random problem
  const problem = `Solve for x: ${getRandomNumber()} + ${getRandomNumber()} =`;

  // Get the user's answer
  const answer = prompt(problem);

  // Check if the answer is correct
  if (answer === getCorrectAnswer()) {
    console.log("Correct!");
  } else {
    console.log("Incorrect, try again.");
  }
}

// Generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Get the correct answer for the problem
function getCorrectAnswer() {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  return num1 + num2;
}

generateMathHomework();
