// I got the quiz questions and answers from w3school.com js quiz

const questions = [
  { question: 'Inside which HTML element do we put the JavaScript?', answers: ['&lt; javascript &gt;', '&lt; js &gt;', '&lt; script &gt;', '&lt; scripting &gt;'], correctAnswer: '&lt; script &gt;' },
  {
    question: 'Where is the correct place to insert a JavaScript?',
    answers: ['The &lt; body &gt; section', 'The &lt; head &gt; section', 'The &lt; header &gt; section', 'The &lt; footer &gt; section'],
    correctAnswer: 'The &lt; body &gt; section',
  },
  {
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    answers: ['&lt; script src=xxx.js &gt;', '&lt; script href=xxx.js &gt;', '&lt; script name=xxx.js &gt;'],
    correctAnswer: '&lt; script src=xxx.js &gt;',
  },
  { question: 'The external JavaScript file must contain the &lt; script &gt; tag.', answers: ['false', 'true'], correctAnswer: 'false' },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: ['alertBox("Hello World")', 'msgBox("Hello World")', 'alert("Hello World")', 'msg("Hello World")'],
    correctAnswer: 'alert("Hello World")',
  },
  {
    question: 'How do you create a function in JavaScript?',
    answers: ['function = myFunction()', 'function:myFunction()', 'function myFunction()'],
    correctAnswer: 'function myFunction()',
  },
  { question: 'How do you call a function named "myFunction"?', answers: ['myFunction()', 'call myFunction()', 'call function myFunction()'], correctAnswer: 'myFunction()' },
  { question: 'How to write an IF statement in JavaScript?', answers: ['if i == 5 then', 'if i = 5 then', 'if i = 5', 'if (i == 5)'], correctAnswer: 'if (i == 5)' },
  { question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?', answers: ['if i <> 5', 'if (i != 5)', 'if i =! 5 then', 'if (i<>5)'], correctAnswer: 'if (i != 5)' },
  { question: 'Which event occurs when the user clicks on an HTML element?', answers: ['onmouseover', 'onclick', 'onchange', 'onmouseclick'], correctAnswer: 'onclick' },
];
