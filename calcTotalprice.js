// Example 2: Calculate total price
console.log("\n=== FOR...OF LOOP - Example 2: Sum Prices ===");
const prices = [10, 25, 30, 15];
let total = 0;
let i = 0;

for (const price of prices) {
    console.log(`Index: ${i}, Price:${price}`);
    total += price;
    i++;
}
console.log(`Total price: $${total}`);




