
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
