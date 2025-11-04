// ⚡ Part 3: if...else if, switch case, falsy values & nullish coalescing — 10 Output Based Questions
// Concept focus: condition checking, falsy values (false, 0, "", null, undefined, NaN) and ?? operator

// // Q1
let a = 0;
if (a) console.log("Truthy");
else console.log("Falsy");
// falsy

// Q2
let value = null ?? "default";
console.log(value);
// o/p : default -------> because nullish coalescing opearator(??)


// Q3
let x;
let y = x ?? 10;
console.log(y);

// output : 10 because in x undefined is assigned so as ?? operator is there no result is right hand side

// Q4
let name = "";
console.log(name || "Guest");
console.log(name ?? "Guest");

// o/p:Guest
//      ""

// Q5
let n = NaN;
if (n) console.log("True");
else console.log("False");

// o/p:False beacause NaN is Falsy values

Q6
let choice = 2;
switch (choice) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Other");
}

// output: Two
//          Three
// Because ther is no break statemnet after that particular case

// Q7
let userInput = undefined;
let result = userInput ?? "No Value";
console.log(result);

// output: No value because of nulliesh operator ??

// Q8
let num = "5";
if (num == 5) console.log("== works");
if (num === 5) console.log("=== works");
// output: == works , because loose comparision

// Q9
let test = 0 || "fallback";
let check = 0 ?? "fallback";
console.log(test, check);

// output:  fallback 0   #because or operator and nullish operator


// Q10
let score = null;
if (score ?? 0 > 50) console.log("Passed");
else console.log("Failed");

// Output: Failed # Because ?? null is Nullish it gives default value which is 0 
// ,then 0 is greater than 50 means false so False block will be excuted
