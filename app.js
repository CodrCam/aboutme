//userName Question 1
let userName = prompt('What is your name');

//Kid? question 2
let q1guess = prompt(`Hey ${userName} do you think I have a kid? yes/no`).toLowerCase();

if (q1guess === 'yes'){
  alert('nope');
} else if(q1guess === 'no') {
  alert('Correct I do not');
  //console.log(q1guess);
}

//Color? Question 3
let q2guess = prompt('What is my favorite color?').toLowerCase();

if (q2guess === 'red'){
  alert('Indeed red is my favorite color');
} else if(q2guess !== 'red') {
  alert('Nope not that color....');
  //console.log(q2guess);
}

//Number? Question 4
let q3guess = prompt('What is my favorite number between 1-10?').toLowerCase();

if (q3guess === '7'){
  alert('Yep my number is 7');
} else if(q3guess !=='7') {
  alert('Guessed wrong....');
  //console.log(q3guess);
}

//Number? Question 5
let q4guess = prompt('What is my favorite animal?').toLowerCase();

if (q4guess === 'cat'){
  alert('Yea! The little fuzzbutts make me smile!');
} else if(q4guess !== 'cat') {
  alert('Nah, I do not think so');
  //console.log(q4guess);
}

//Number? Question 6
let q5guess = prompt('What is my favorite sport?').toLowerCase();

if (q5guess === 'football' || q5guess === 'skiing'){
  alert('Football is my favorite to watch, but skiing is my real favorite');
} else if(q5guess !== 'football' || q5guess !== 'skiing'){
  alert('I might like that but not my favorite.');
  //console.log(q4guess);
}

//Print Statement
document.write(`Thanks for playing my game ${userName}!`+'<br>');

document.write(`You guessed '${q1guess}' if I had kids I don't.`+'<br>');

document.write(`You guessed '${q2guess}' for my favorite color which is "red".`+'<br>');

document.write(`You guessed '${q3guess}' for my favorite number it was "7".`+'<br>');

document.write(`You guessed '${q4guess}' as my favorite animal which is a "cat".`+'<br>');

document.write(`You guessed '${q5guess}' as my favorite sport, I would have accepted 'football' or 'skiing'.`+'<br>');
