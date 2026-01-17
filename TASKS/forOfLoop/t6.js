
// TASK 6: Find the highest number in an array
// const numbers = [34, 78, 23, 89, 45, 67];
// Hint: Start with a variable set to 0, compare each number
console.log("\nTask 6: Find highest number");

const numbers = [34, 78, 23, 89, 45, 67];
let highest = 0;
numbers.forEach(number => { highest = number > highest ? number : highest;});

console.log(`The highest number is ${highest}`);

///orr for..of
for(const number of numbers){
    if(number > highest){
        highest = number;
    }
}
  console.log(`The highest number is ${highest}`);