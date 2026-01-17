
// TASK 6: Create a countdown timer from 10 to 1, then print "Happy New Year!"
// TODO: Write your code here
console.log("\nTask 6: Countdown");
for(let i = 10; i>=1; i--){
    console.log(i);
} 
console.log("Happy New Year!");

///////////////////////////
console.log("using ======process.stdout.write()")

let count = 5;
const timer = setInterval(()=>{
    process.stdout.write(`\rCountdown: ${count} `);
    count--;
    if(count < 1){
        clearInterval(timer);
        console.log("\rHAPPY NEW YEAR!!!");
    }
}, 1000); 