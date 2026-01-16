// ============================================
// FOR LOOP - 6 Examples (Simple to Intermediate)
// ============================================

// Example 1: Basic counting from 1 to 5
console.log("=== FOR LOOP - Example 1: Basic Counting ===");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Example 2: Print even numbers from 0 to 10
console.log("\n=== FOR LOOP - Example 2: Even Numbers ===");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// Example 3: Loop through an array
console.log("\n=== FOR LOOP - Example 3: Array Loop ===");
const fruits = ["apple", "banana", "orange", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}


// Example 4: Sum all numbers from 1 to 10
console.log("\n=== FOR LOOP - Example 4: Calculate Sum ===");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(`Sum of 1 to 10 is: ${sum}`);

// Example 5: Create a multiplication table
console.log("\n=== FOR LOOP - Example 5: Multiplication Table ===");
const number = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Example 6: Nested loop - Create a pattern
console.log("\n=== FOR LOOP - Example 6: Nested Loop Pattern ===");
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "* ";
  }
  console.log(stars);
}


// ============================================
// FOR...OF LOOP - 6 Examples (Simple to Intermediate)
// ============================================

// Example 1: Basic iteration over array
console.log("\n\n=== FOR...OF LOOP - Example 1: Basic Iteration ===");
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// Example 2: Calculate total price
console.log("\n=== FOR...OF LOOP - Example 2: Sum Prices ===");
const prices = [10, 25, 30, 15];
let total = 0;
for (const price of prices) {
  total += price;
}
console.log(`Total price: $${total}`);
//imp



// Example 3: Loop through string characters
console.log("\n=== FOR...OF LOOP - Example 3: String Characters ===");
const word = "HELLO";
for (const letter of word) {
  console.log(letter);
}

// Example 4: Find items that match a condition
console.log("\n=== FOR...OF LOOP - Example 4: Filter Items ===");
const numbers = [5, 12, 8, 130, 44, 3];
console.log("Numbers greater than 10:");
for (const num of numbers) {
  if (num > 10) {
    console.log(num);
  }
}

// Example 5: Work with array of objects
console.log("\n=== FOR...OF LOOP - Example 5: Objects in Array ===");
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 }
];
for (const student of students) {
  console.log(`${student.name} scored ${student.grade}`);
}
//imp

// Example 6: Transform array elements
console.log("\n=== FOR...OF LOOP - Example 6: Transform Data ===");
const temperatures = [20, 25, 30, 15];
const fahrenheit = [];
for (const celsius of temperatures) {
  const f = (celsius * 9/5) + 32;
  fahrenheit.push(f);
}
console.log("Celsius:", temperatures);
console.log("Fahrenheit:", fahrenheit);
//imp

// ============================================
// WHILE LOOP - 6 Examples (Simple to Intermediate)
// ============================================

// Example 1: Basic countdown
console.log("\n\n=== WHILE LOOP - Example 1: Countdown ===");
let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}
console.log("Blast off!");

// Example 2: Keep doubling until limit
console.log("\n=== WHILE LOOP - Example 2: Doubling Numbers ===");
let num = 1;
while (num < 100) {
  console.log(num);
  num *= 2;
}

// Example 3: Sum until threshold
console.log("\n=== WHILE LOOP - Example 3: Sum Until Threshold ===");
let currentSum = 0;
let i = 1;
while (currentSum < 50) {
  currentSum += i;
  console.log(`Added ${i}, sum is now ${currentSum}`);
  i++;
}

// Example 4: Process array until condition
console.log("\n=== WHILE LOOP - Example 4: Array Processing ===");
const tasks = ["task1", "task2", "stop", "task3", "task4"];
let index = 0;
while (index < tasks.length && tasks[index] !== "stop") {
  console.log(`Processing: ${tasks[index]}`);
  index++;
}
console.log("Stopped!");
//imp


// Example 5: User attempts simulation
console.log("\n=== WHILE LOOP - Example 5: Attempts Simulation ===");
let attempts = 0;
let maxAttempts = 5;
let success = false;
while (attempts < maxAttempts && !success) {
  attempts++;
  // Simulate random success (50% chance)
  success = Math.random() > 0.5;
  console.log(`Attempt ${attempts}: ${success ? "Success!" : "Failed"}`);
}

// Example 6: Find first occurrence
console.log("\n=== WHILE LOOP - Example 6: Search Array ===");
const items = [5, 8, 12, 15, 20, 25];
const target = 15;
let position = 0;
let found = false;
while (position < items.length && !found) {
  if (items[position] === target) {
    found = true;
    console.log(`Found ${target} at position ${position}`);
  } else {
    position++;
  }
}
if (!found) {
  console.log(`${target} not found`);
}
