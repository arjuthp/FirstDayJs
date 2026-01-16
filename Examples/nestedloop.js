// Example 6: Nested loop - Create a pattern
console.log("\n=== FOR LOOP - Example 6: Nested Loop Pattern ===");
for (let i = 5; i >= 1; i--) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "* ";
  }
  console.log(stars);
}

for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= 6 - i; j++) {  // When i=1, j goes to 5; when i=5, j goes to 1
      stars += "* ";
    }
    console.log(stars);
  }