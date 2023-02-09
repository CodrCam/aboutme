//Score
let count = 0;

//userName Question 1
let userName = prompt('What is your name');

//Kid? question 2
let q1guess = prompt(`Hey ${userName} do you think I have a kid? yes/no`).toLowerCase();

if (q1guess === 'yes'){
  alert('nope');
  count--;
} else if(q1guess === 'no') {
  alert('Correct I do not');
  count++;
  //console.log(q1guess);
}
console.log(count);
//Color? Question 3
let q2guess = prompt('What is my favorite color?').toLowerCase();

if (q2guess === 'red'){
  alert('Indeed red is my favorite color');
  count++;
} else if(q2guess !== 'red') {
  alert('Nope not that color....');
  count--;
  //console.log(q2guess);
}
console.log(count);
//Fav Number? Question 4
let q3guess = prompt('What is my favorite number between 1-10?');
let textguess = parseInt(q3guess);

if (textguess === 7){
  alert('Yep my number is 7');
  count++;
} else if(textguess !== 7) {
  alert('Guessed wrong....');
  count--;
  //console.log(q3guess);
}
console.log(count);

//Animal? Question 5
let q4guess = prompt('What is my favorite animal?').toLowerCase();

if (q4guess === 'cat'){
  alert('Yea! The little fuzzbutts make me smile!');
  count++;
} else if(q4guess !== 'cat') {
  alert('Nah, I do not think so');
  count--;
  //console.log(q4guess);
}
console.log(count);
//Number Guess? Question 6
let q5guess = prompt('What is my favorite sport to watch or participate in?').toLowerCase();

if (q5guess === 'football' || q5guess === 'skiing'){
  alert('Football is my favorite to watch, but skiing is my real favorite');
  count++;
} else if(q5guess !== 'football' || q5guess !== 'skiing'){
  alert('I might like that but not my favorite.');
  count--;
  //console.log(q5guess);
}
console.log('last count:', count);

//Guess a number Question 7?
//Generates a random number between 1-5
let randoNum = Math.floor(Math.random() * 10) +1;
console.log('Random Number:', randoNum);
let randoStrNum = randoNum.toString();
//Guess from the User
let userGuessArray = [];
userGuessArray.push(prompt('Guess a number between 1-10, you get 4 guesses. Then I will let you know if any were right'));
//The number of guesses given to the user
let numOfGuess = 3;
// 1st attempt at While loop to iterate through the guesses
while(1 <= numOfGuess){
  numOfGuess--;
  userGuessArray.push(prompt(`Keep guesing, you have ${numOfGuess} guesses left, guess again.`));
  console.log('guess:', userGuessArray);
}
//Alert For user feedback

for(let i = 0; i < userGuessArray.length; i++) {
  if (userGuessArray[i] === randoStrNum){
    alert (`Awesome job the random number was ${randoNum}`);
  }else if(userGuessArray[i] !== randoStrNum) {
    alert(`Your guess of ${userGuessArray[i]} was wrong`);
  }
}


//Print Statement
document.write(`Thanks for playing my game ${userName}!`+'<br>');

document.write(`You guessed '${q1guess}' if I had kids I don't.`+'<br>');

document.write(`You guessed '${q2guess}' for my favorite color which is "red".`+'<br>');

document.write(`You guessed '${q3guess}' for my favorite number it was "7".`+'<br>');

document.write(`You guessed '${q4guess}' as my favorite animal which is a "cat".`+'<br>');

document.write(`You guessed '${q5guess}' as my favorite sport, I would have accepted 'football' or 'skiing'.`+'<br>');

document.write(`You guessed '${userGuessArray}' as the random number , and it was '${randoNum}''.`+'<br>');

document.write(`Your scored ${count} on the 'How well do you know Cam' quiz, if you're not negitive I appreciate the positivity :)`+'<br>');
