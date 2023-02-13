//userName
let userName = prompt('What is your name');

//5 questions about me.
let questions = [{ question: (`Hey ${userName} do you think I have a kid? yes/no`), answer: 'no' },{ question: 'What is my favorite color?', answer: 'red' }, { question: 'What is my favorite animal?', answer: 'cats' }, { question: 'What is my favorite place in the world?', answer: 'the mountains'}, { question: 'Who is my favorite person?', answer: 'wife'}];

let correctAnswers = 0;
let i = 0;

while (correctAnswers < questions.length) {
  let answer = prompt(questions[i].question).toLowerCase();
  if (answer === questions[i].answer) {
    alert('Correct!');
    correctAnswers++;
  } else {
    alert('Incorrect. The correct answer is ' + questions[i].answer);
  }
  i++;
}
console.log('user name:', userName);
console.log('the score:', correctAnswers);


/* document.write(`Thanks for playing my game ${userName}!`);

document.write(`Your scored ${count} on the 'How well do you know Cam' quiz.`); */
