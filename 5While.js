
// Example 5: User attempts simulation
console.log("\n=== WHILE LOOP - Example 5: Attempts Simulation ===");
let attempts = 0;
let maxAttempts = 5; //sets tershold
let success = false; // boolean flag
while (attempts < maxAttempts && !success) {
  attempts++;
  // Simulate random success (50% chance)
  success = Math.random() > 0.5;
  console.log(`Attempt ${attempts}: ${success ? "Success!" : "Failed"}`);
}

