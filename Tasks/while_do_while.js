// 🧠 for ,while, do while— 10 Output Based Questions
// 🧩 1. for loop

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);

// Expected Output: ? 15 just we are adding the values of i in sum

// 🧩 2. while loop

let num = 1;
let result = "";
while (num < 5) {
  result += num + " ";
  num++;
}
console.log(result);

// Expected Output: ? 1 2 3 4 beacause num+ " " which performs string concatination

// 🧩 3. do...while loop
let x = 5;
do {
  console.log(x);
  x++;
} while (x < 5);

// Expected Output: ? 5 because do while loop excutes atleast once 

// 🧩 4. continue statement
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// Expected Output: ?  3 is skippped becuase of continue
// 1
// 2
// 4
// 5

// 🧩 5. break statement
for (let i = 1; i <= 5; i++) {
  if (i === 4) break;
  console.log(i);
}

// Expected Output: ? break ; comes out of the loop when condition is met
// 1
// 2
// 3

// 🧩 6. for...of loop (array)
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color.toUpperCase());
}

// Expected Output: ?
// RED
// GREEN
// BLUE

// 🧩 7. for...in loop (object)
let person = { name: "Alice", age: 25, city: "Delhi" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Expected Output: ?  for in 
// name: Alice
// age: 25
// city: Delhi

// 🧩 8. Reverse a for loop
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// Expected Output: ?
// 5
// 4
// 3
// 2
// 1

// 🧩 9. Nested loop with continue
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) continue;
    console.log(i, j);
  }
}

// Expected Output: ?except j==2 all values are printed
// 1 1
// 1 3
// 2 1
// 2 3
// 3 1
// 3 3

// 🧩 10. Reverse traversal using while loop

let arr = [10, 20, 30];
let i = arr.length - 1;
while (i >= 0) {
  console.log(arr[i]);
  i--;
}

// Expected Output: ? arr.length gives length of arr which is not method its an property of array
// 30
// 20
// 10