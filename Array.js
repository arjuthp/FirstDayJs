// Example 5: Work with array of objects
console.log("\n=== FOR...OF LOOP - Example 5: Objects in Array ===");
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 }
];
let highest = students[0];
let lowest = students[0];

for (const student of students) {
  console.log(`${student.name} scored ${student.grade}`);
  
  if(student.grade > highest.grade){
    highest = student;
  }
  if(student.grade < lowest.grade){
    lowest = student;
  }
}

console.log(`Highest grade:$${highest.name} (${highest.grade})`);
console.log(`Lowest grade:$${lowest.name} (${lowest.grade})`);


