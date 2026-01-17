console.log("\n\n=== FOR...OF LOOP TASKS ===\n");

// TASK 1: Loop through this array and print each animal

console.log("Task 1: Print all animals");

const animals = ["dog", "cat", "rabbit", "hamster"];
const result = [];
for(const animal of animals){
    result.push(animal);
}
console.log(result);
