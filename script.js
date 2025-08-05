// Part 1: Variable declarations and conditionals
// ----------------------------------------------
let age = 21;
let isMember = true;

const conditionalResult = document.getElementById('conditional-result');

if (age >= 18 && isMember) {
  conditionalResult.textContent = "Access granted. Welcome, member!";
} else if (age >= 18) {
  conditionalResult.textContent = "Access granted. Please consider becoming a member.";
} else {
  conditionalResult.textContent = "Access denied. You must be at least 18 years old.";
}

// Part 2: Custom Functions
// -------------------------

// Function to greet user
function greetUser(name) {
  return `Hello, ${name}! Welcome to the site.`;
}

// Function to calculate sum of two numbers
function calculateSum(a, b) {
  return a + b;
}

const greetBtn = document.getElementById('greet-btn');
const sumBtn = document.getElementById('sum-btn');
const functionResult = document.getElementById('function-result');

greetBtn.addEventListener('click', () => {
  functionResult.textContent = greetUser("Alice");
});

sumBtn.addEventListener('click', () => {
  const sum = calculateSum(5, 7);
  functionResult.textContent = `Sum of 5 and 7 is ${sum}`;
});

// Part 3: Loop Examples
// -----------------------

// Loop 1: For loop - list numbers 1 to 5
const loopList = document.getElementById('loop-list');

for (let i = 1; i <= 5; i++) {
  const li = document.createElement('li');
  li.textContent = `Number: ${i}`;
  loopList.appendChild(li);
}

// Loop 2: While loop - list even numbers less than 10
let count = 2;
while (count < 10) {
  const li = document.createElement('li');
  li.textContent = `Even number: ${count}`;
  loopList.appendChild(li);
  count += 2;
}

// Part 4: DOM Interactions
// -------------------------

const inputText = document.getElementById('input-text');
const displayBtn = document.getElementById('display-btn');
const displayArea = document.getElementById('display-area');

displayBtn.addEventListener('click', () => {
  let text = inputText.value.trim();
  if(text) {
    displayArea.textContent = `You typed: ${text}`;
  } else {
    displayArea.textContent = 'Please type something!';
  }
});
