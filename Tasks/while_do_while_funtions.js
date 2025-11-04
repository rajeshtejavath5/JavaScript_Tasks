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













// doc 2:


// 🧠 1. Function Definition & Function Expression
console.log(a()); 
console.log(b());
function a() {
  return "Function Declaration";
}
var b = function() {
  return "Function Expression";
};

// 🟩 Expected Output:
// Function Declaration
// Type error: b is not a function because b is considered as variable

// ✅ Function declarations are hoisted fully, but function expressions are hoisted as undefined.

// ⚙️ 2. Anonymous Function (inside expression)
let greet = function() 
{
  return "Hello!";
};
console.log(typeof greet);
console.log(greet.name);

// 🟩 Expected Output:
// function
// greet
// ✅ Even anonymous functions get an inferred name (greet) when assigned to a variable.

// ⚡ 3. IIFE (Immediately Invoked Function Expression)

// let result = (function(x, y) {
//   return x * y;
// })(3, 4);

// console.log(result);

// 🟩 Expected Output: 12

// ✅ IIFE executes immediately after its definition.

// 🏹 4. Arrow Function and this
let user = 
{
  name: "Noor",
  say: () => {
    console.log(this.name);},
};
user.say();

// 🟩 Expected Output:  undefined

// ✅ Arrow functions don’t have their own this, they take it from the surrounding scope (here: global).

// 🔁 5. Generator Function
function* counter() {
  yield 1;
  yield 2;
  return 3;
}

let gen = counter();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// 🟩 Expected Output:
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: true }

// ✅ Generators return iterator objects with {value, done} pairs.

// 🚀 6. First-Class Function
function greet(name) {
  return "Hello " + name;
}

function execute(fn, value) {
  return fn(value);
}

console.log(execute(greet, "Students"));

// 🟩 Expected Output: Hello Students

// ✅ Functions can be passed as arguments → “first-class citizens.”

// 🧪 7. Pure Function
let count = 0;
function add(a, b) {
  return a + b;
}
console.log(add(3, 4));   
console.log(count);

// 🟩 Expected Output:  Note if you 3,4 =>5 times it will give same output 5 times no changes 

// 7
// 0

// ✅ Pure functions have no side effects and depend only on input values.

// ⚙️ 8. Default Parameters
function multiply(a, b = 5) {
  return a * b;
}
console.log(multiply(3));
console.log(multiply(3, 2));

// 🟩 Expected Output: 15 in next time 6

// ✅ Default parameters apply when no argument or undefined is passed.

// 🔄 9. Recursion
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(4));

// 🟩 Expected Output: 24

// ✅ Function calls itself repeatedly until base condition met.

// 🔔 10. Callback & Higher-Order Function
function printResult(fn, num) {
  console.log(fn(num));
}
function double(n) {
  return n * 2;
}
printResult(double, 10);

// 🟩 Expected Output:20

// ✅ printResult is a higher-order function (takes a function as an argument).
//  double is a callback function.









