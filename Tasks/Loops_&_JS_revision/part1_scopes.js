// Q1
// function test() {
//   var x = 10;
//   if (true) {
//     var x = 20;
//     console.log(x);
//   }
//   console.log(x);
// }
// test();

// O/P: 20
//      20
// explanation: beacuase var is fun scoped so x value is redecalred and re-assigned
// ------------------------------

// Q2
// function example() {
//   let y = 5;
//   if (true) {
//     let y = 10;
//     console.log(y);
//   }
//   console.log(y);
// }
// example();

// o/p: 10
//      5
// explanation: because let is an block scoped

// ------------------------------
// //Q3
// function run() {
//   if (true) {
//     var a = 100;
//     let b = 200;
//     const c = 300;
//   }
//   console.log(a);
//   console.log(typeof(b));
// }
// run();

// o/p: 100
//      Undefined 
// Actually b and c are block scoped ,
// as we are trying to access them outside of block 
// so it is refernce error (ReferenceError: b is not defined),but we are printing type of that reference error 
// so output is undefined

// ------------------------------
// // Q4
// var x = 1;
// function outer() {
//   console.log(x);
//   var x = 2;
// }
// outer();

// o/p: undefined
// as var is function scoped outside var is not consider inside function
// inside declarations hoisted so var supports hoisting as we are trying to access before assignment it consoles as undefined
// ------------------------------

// // Q5
// let x = 10;
// {
//   let x = 20;
//   {
//     let x = 30;
//     console.log(x);
//   }
//   console.log(x);
// }
// console.log(x);

// o/p: 30
//      20 
//      10
// Explanation: let supports block level accessing as every variable is accessed within the block

// ------------------------------
// // Q6
// {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }
// console.log(a);
// console.log(typeof b);
// console.log(typeof c);

// o/p:
// 1
// undefined
// undefined
// Explanation:
// Actually b and c are block scoped ,
// as we are trying to access them outside of block 
// so it is refernce error (ReferenceError: b is not defined),but we are printing type of that reference error 
// so output is undefined

// ------------------------------

// // Q7
// for (var i = 0; i < 3; i++) {}
// console.log(i);

// for (let j = 0; j < 3; j++) {}
// console.log(typeof j);
// // o/p:
// // 3
// // undefined
// // Explantion: in first console we printing i value after loop ending/after block
// //             in second console let does not support accessing out of block ,so reference error : j is not defined
// //             as we are written to  print type of that j i.e is undefined


// // ------------------------------
// // Q8
// function demo() {
//   console.log(a);
//   var a = 50;
//   console.log(a);
// }
// demo();
// // o/p: undefined
// //      50
// // Explanation: var is function scoped and supports hosting

// // ------------------------------
// Q9
// function blockTest() {
//   const value = 5;
//   if (true) {
//     const value = 10;
//     console.log(value);
//   }

//  console.log(value);
// }
// blockTest();
// // o/p: 10
// //      5
// // Explanation: const is block scoped,here value is initialized in diff blocks

// // Q10
// function testScope() {
//   if (true) {
//     var x = "var inside";
//     let y = "let inside";
//   }
//   console.log(x);
//   console.log(typeof y);
// }
// testScope();
// // op:
// // var inside
// // undefined




