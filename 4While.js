// Example 4: Process array until condition
console.log("\n=== WHILE LOOP - Example 4: Array Processing ===");
const tasks = ["task1", "task2", "stop", "task3", "task4"];
let index = 0;
while (index < tasks.length && tasks[index] !== "stop") {
  console.log(`Processing: ${tasks[index]}`);
  index++;
}
console.log("Stopped!");