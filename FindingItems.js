// Example 4: Find items that match a condition
console.log("\n=== FOR...OF LOOP - Example 4: Filter Items ===");
const numbers = [5, 12, 8, 130, 44, 3];


console.log("Numbers greater than 10:");
for (const num of numbers) {
  if (num > 10) {
    console.log(num);
  }
}

const Filtered = numbers.filter(num=> num<100);
console.log("Numbers less than 100: ", Filtered);
