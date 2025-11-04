// // 🧩 Part 2: if, else if, and switch case — Practice Tasks

// // Concept focus: decision making and control flow

// // 🎯 Tasks
// //1. Write a program that checks a student's marks and prints:

// // "Grade A" if marks > 80
// // "Grade B" if marks between 60–80
// // "Grade C" if marks between 40–60
// // "Fail" otherwise

// const prompt = require('prompt-sync')();
// let marks = prompt("Enter a number: ");

// if (marks>80){
//     console.log("Grade A");
// }
// else if (marks>60 && marks<80) {
//    console.log("Grade B");
// }
// else if (marks>40 && marks<60) {
//    console.log("Grade C");
// }
// else{
//     console.log("Fail");
// }


// ==========================================
// // 2.Use a switch case to print the day name when given a number (1–7).

// let num=10;
// switch(num){
//     case 1:console.log("Sunday");
//             break;
//     case 2:console.log("Monday");
//             break;
//     case 3:console.log("Tuesday");
//             break;
//     case 4:console.log("Wednesday");
//             break;
//     case 5:console.log("Thursday");
//             break;
//     case 6:console.log("Friday");
//             break;
//     case 7:console.log("Saturday");
//             break;
//     default:
//         console.log("Invalid Input...!\n please Enter a number between 1-7")   
// }



//==========================================
// //Create a simple calculator using switch case (add, sub, mul, div).
// let a=2
// let b=2
// operation="mul"
// switch(operation){
//     case 'add':console.log(`addition of a and b is:  ${a+b}`);
//             break;
//     case 'sub':console.log(`subraction of a and b is:  ${a-b}`);
//             break;
//     case 'mul':console.log(`multiplication of a and b is:  ${a*b}`);
//             break;
//     case 'div':console.log(`division of a and b is:  ${a/b}`);
//             break;
//     default:console.log("Enter Proper Operation to perform");
//         break;
// }



// // 4.Using if...else if, check a person’s age group:
// // below 13 → "Child"
// // 13–19 → "Teen"
// // 20–59 → "Adult"
// // 60+ → "Senior"
// const prompt = require('prompt-sync')();
// let age = prompt("Enter a age: ");
// if (age>60){
//     console.log("Senior")
// }else if(age<59 && age>20){
//     console.log("Adult")
// }else if(age>13 && age<19){
//     console.log("Teen")
// }else{
//     console.log("Child")
// }


// //-----------------------------------------------

//// 5.Use switch to print a message for traffic light colors (red → stop, yellow → wait, green → go).

const prompt=require('prompt-sync')();
let message=prompt("Enter a message to display: ")
switch(message){
    case "red":console.log("stop")
            break;
    case "yellow":console.log("wait");
            break;
    case "green":console.log("go");
            break;
    default: console.log("Enter proper color name as per traffic guidelines:....!")
    break;

}