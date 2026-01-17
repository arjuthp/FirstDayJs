// TASK 5: You have an array of product objects. Print each product name and price.
console.log("\nTask 5: Print product details");
const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
];

let total = 0;
for(const product of products){
    console.log(`${product.name} costs $${product.price}`);
    total += product.price;
}
console.log(`Laptop costs-total $${total}`);
// Expected: "Laptop costs $999", etc.
