// Example 3: Sum until threshold
//A point where something changes or stops

console.log("\n=== WHILE LOOP - Example 3: Sum Until Threshold ===");
let currentSum = 0;
let i = 1;
while (currentSum < 50) {
  currentSum += i;
  console.log(`Added ${i}, sum is now ${currentSum}`);
  i++;
}
