console.log('hello questions.js');
// I got the quiz questions and answers from w3school.com js quiz

const question = [
  { question0: 'Inside which HTML element do we put the JavaScript?', answers: ['<javascript>', '<js>', '<script>', '<scripting>'], correctAnswer: '<script>' },
  {
    question1: 'Where is the correct place to insert a JavaScript?',
    answers: ['The <body> section', 'The <head> section', 'The <header> section', 'The <footer> section'],
    correctAnswer: 'The <body> section',
  },
  {
    question2: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    answers: ['<script src=xxx.js>', '<script href=xxx.js>', '<script name=xxx.js>', answer4],
    correctAnswer: '<script src=xxx.js>',
  },
  { question3: 'The external JavaScript file must contain the <script> tag.', answers: ['false', 'true', answer3, answer4], correctAnswer: 'false' },
  {
    question4: 'How do you write "Hello World" in an alert box?',
    answers: ['alertBox("Hello World")', 'msgBox("Hello World")', 'alert("Hello World")', 'msg("Hello World")'],
    correctAnswer: 'alert("Hello World")',
  },
  {
    question5: 'How do you create a function in JavaScript?',
    answers: ['function = myFunction()', 'function:myFunction()', 'function myFunction()', answer4],
    correctAnswer: 'function myFunction()',
  },
  { question6: 'How do you call a function named "myFunction"?', answers: ['myFunction()', 'call myFunction()', 'call function myFunction()', answer4], correctAnswer: 'myFunction()' },
  { question7: 'How to write an IF statement in JavaScript?', answers: ['if i == 5 then', 'if i = 5 then', 'if i = 5', 'if (i == 5)'], correctAnswer: 'if (i == 5)' },
  { question8: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?', answers: ['if i <> 5', 'if (i != 5)', 'if i =! 5 then', 'if (i<>5)'], correctAnswer: 'if (i != 5)' },
  { question9: 'Which event occurs when the user clicks on an HTML element?', answers: ['onmouseover', 'onclick', 'onchange', 'onmouseclick'], correctAnswer: 'onclick' },
];
