
// TASK 2: Calculate the total of these numbers

console.log("\nTask 2: Calculate total score");

const scores = [85, 90, 78, 92, 88];
let total = 0;
for(const score of scores) {
    total += score;
}
console.log(`Total score: ${total}`);
