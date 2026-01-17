// TASK 5: Given an array, print each item with its position
// const cities = ["Tokyo", "Paris", "London", "New York", "Dubai"];
// Expected output: "Position 0: Tokyo", "Position 1: Paris", etc.
console.log("\nTask 5: Cities with positions");

const cities = ["Tokyo", "Paris", "London", "New York", "Dubai"];
let position = 0;
for(const city of cities){////for ...of 
    console.log(`"Position ${position} : ${city}" `)
    position++;
}    

///orrrrrrrrrrrrrrr

cities.forEach((city, index) => {
    console.log(`Position ${index}: ${city}`);
});