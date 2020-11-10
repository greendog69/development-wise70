const quiz = [
  {
    q: "Inside which HTML element do we put the JavaScript?",
    options: [
      { value: 1, text: "js" },
      { value: 2, text: "javascript" },
      { value: 3, text: "script" },
      { value: 4, text: "scripting" },
    ],
    optionIndex: 1,
  },
  {
    q:
      "What is the correct JavaScript syntax to change the content of the HTML element below?",
    options: [
      {
        value: 1,
        text: "document.getElementById('demo').innerHTML = 'Hello World!';",
      },
      {
        value: 2,
        text: "document.getElement('p').innerHTML = 'Hello World!';",
      },
      {
        value: 3,
        text: "document.getElementByName('p').innerHTML = 'Hello World!';",
      },
      { value: 4, text: "#demo.innerHTML = 'Hello World!';" },
    ],
    optionIndex: 2,
  },
  {
    q: "Where is the correct place to insert a JavaScript?",
    options: [
      { value: 1, text: "The <head> section" },
      { value: 2, text: "The <body> section" },
      {
        value: 3,
        text: "Both the <head> section and the <body> section are correct",
      },
    ],
    optionIndex: 3,
  },
  {
    q:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: [
      { value: 1, text: "script.js" },
      { value: 2, text: "app.js" },
      { value: 3, text: "server.js" },
    ],
    optionIndex: 4,
  },
  {
    q: "The external JavaScript file must contain the <script> tag.",
    options: [
      { value: 1, text: "true" },
      { value: 2, text: "false" },
    ],
    optionIndex: 5,
  },
  {
    q: "How do you write 'Hello World' in an alert box?",
    options: [
      { value: 1, text: "alertBox('Hello World');" },
      { value: 2, text: "alert('Hello World');" },
      { value: 3, text: "msg('Hello World');" },
      { value: 4, text: "msgBox('Hello World');" },
    ],
    optionIndex: 6,
  },
  {
    q: "How do you create a function in JavaScript?",
    options: [
      { value: 1, text: "function = myFunction()" },
      { value: 2, text: "function myFunction()" },
      { value: 3, text: "function:myFunction()" },
    ],
    optionIndex: 7,
  },
  {
    q: "How do you call a function named 'myFunction'?",
    options: [
      { value: 1, text: "call function myFunction()" },
      { value: 2, text: "myFunction()" },
      { value: 3, text: "call myFunction()" },
    ],
    optionIndex: 8,
  },
  {
    q: "How to write an IF statement in JavaScript?",
    options: [
      { value: 1, text: "if i = 5" },
      { value: 2, text: "if (i == 5)" },
      { value: 3, text: "if i == 5 then" },
      { value: 4, text: "if i = 5 then" },
    ],
    optionIndex: 9,
  },
  {
    q:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    options: [
      { value: 1, text: "if (i != 5)" },
      { value: 2, text: "if (i <> 5)" },
      { value: 3, text: "if i <> 5" },
      { value: 4, text: "if i =! 5 then" },
    ],
    optionIndex: 10,
  },
];
export default quiz;
