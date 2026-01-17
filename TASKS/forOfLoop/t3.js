// TASK 3: Print each character of your name in uppercase
// const name = "alice";  // Use your own name
console.log("\nTask 3: Print name in uppercase");

const name = "arju";
console.log(name.toUpperCase());

///2nd usway strung building
let result = "";
for(const char of name){
    result += char.toUpperCase();
}
console.log(result);

///join method
let chars = [];
for (const char of name){
    chars.push(char.toUpperCase());
}
console.log(chars.join(""));

//map
const NAME = name.split('').map(char => char.toUpperCase()).join("");
console.log(NAME)