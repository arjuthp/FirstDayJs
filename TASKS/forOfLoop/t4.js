// TASK 4: Count how many numbers are greater than 50

console.log("\nTask 4: Count numbers > 50");

const values = [23, 67, 45, 89, 12, 56, 34, 91];
let count = 0;

values.forEach(value => {
    if(value > 50){
        console.log(value);
        count++;
    
    }
})
console.log(`the nos greater than 50 is ${count}`);