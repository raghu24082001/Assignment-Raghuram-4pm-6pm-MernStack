// 1. What is JavaScript?
// JavaScript is a scripting programming language used to make web pages interactive and dynamic (e.g., form validation, animations, API calls). It runs in the browser and also on servers (Node.js).

// 2. What are variables?
// Variables are containers to store data values.
// Example:

// let age = 22;
// 3. Difference between var, let, const

// Keyword	Scope	Re-declare	Re-assign
// var	Function scope	Yes	Yes
// let	Block scope	No	Yes
// const	Block scope	No	No
// 4. What is datatype?
// Datatype defines the type of value a variable can hold.

// 5. Types of primitive datatypes

// String

// Number

// Boolean

// Undefined

// Null

// BigInt

// Symbol

// Example:

// let name = "Vijay";   // String
// let age = 22;         // Number
// 6. What are non-primitive datatypes?
// Reference types that store collections or complex data:

// Object

// Array

// Function

// Example:

// let arr = [1,2,3];
// let obj = {name: "Vijay"};
// 7. What are operators?
// Operators are symbols used to perform operations on values.

// Example:

// let sum = 5 + 3;
// 8. Types of operators

// Arithmetic: + - * / %

// Assignment: = += -=

// Comparison: == === != > <

// Logical: && || !

// Increment/Decrement: ++ --

// Ternary: condition ? a : b

// 9. What is expression?
// A piece of code that produces a value.

// 5 + 3   // expression
// 10. What is statement?
// A complete instruction executed by JavaScript.

// let x = 10;   // statement
// 11. What is control statement?
// Statements that control the flow of execution.
// Examples: if, for, while, switch

// 12. What are conditional statements?
// Used to make decisions.

// if

// if-else

// else if

// switch

// Example:

// if(age > 18){
//   console.log("Adult");
// }
// 13. What are looping statements?
// Used to repeat code.

// for

// while

// do...while

// for...of

// for...in

// 14. What is hoisting?
// JavaScript moves variable and function declarations to the top of their scope before execution.

// Example:

// console.log(a);
// var a = 5;   // undefined (hoisted)
// 15. What is scope?
// Scope defines where a variable can be accessed.

// Global scope

// Function scope

// Block scope (let, const)

// 16. What is closure?
// A closure is when a function remembers variables from its outer scope, even after the outer function has finished.

// Example:

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// let fn = outer();
// fn(); // 1
// fn(); // 2
// Inner function remembers count → this is closure.