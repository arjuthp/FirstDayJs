// Example 6: Transform array elements
console.log("\n=== FOR...OF LOOP - Example 6: Transform Data ===");
const temperatures = [20, 25, 30, 15];//dclares const arr celcius
const fahrenheit = []; // declares empty farhenit array
const Kelvin = [];

//ttemp stored here collected in farhenite
for (const celsius of temperatures) {
  const f = (celsius * 9/5) + 32;
  const K = (celsius + 273.15);
  fahrenheit.push(f); //push adds a new element at the end of the array
  Kelvin.push(K);
}
console.log("Celsius:", temperatures);
console.log("Fahrenheit:", fahrenheit);
console.log("Kelvin:", Kelvin);

