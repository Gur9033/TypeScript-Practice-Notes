"use strict";
const message = "Hello, TypeScript";
console.log(message);
function total(price, qty) {
    return price * qty;
}
console.log(total(234, 767));
//Type System
//The any type allows a variable to hold values of different types and turns off many TypeScript checks for that value.
let value = 10;
value = "gurleen";
value = true;
console.log(value);
//Unknown
let un = "hello"; // unknown = must check before using
if (typeof un === "string") {
    console.log(un.toUpperCase());
}
//Type Inference
//Type inference means TypeScript automatically figures out a value's type from its initial value.
let name = "Gurleen";
//let age= 23;
let isStudent = true;
console.log(name);
//console.log(age);
console.log(isStudent);
//Type Annotations
//A type annotation explicitly tells TypeScript what type a variable, function parameter, or return value should have.
let username = "Gurleen";
let age = 23;
let isLoggedIn = true;
console.log(username);
console.log(age);
console.log(isLoggedIn);
function addition(a, b) {
    return a + b;
}
console.log(addition(10, 20)); // 30 
const students = {
    name: "Gurleen",
    age: 23,
    course: "Full Stack Development"
};
console.log(students);
const u = {
    name: "jungkook",
    city: "South korea",
};
console.log(u.population ?? "Unknown");
console.log(u.city);
//UNIONS
const msg = 556;
console.log(msg);
//Exact values (literal types)
let light = "green";
// light = "purple";// ERROR: only the 3 colours are allowed
console.log(light);
//ARRAYS
//Arrays store multiple values. Add a type to describe what kind of values the array contains.
const scores = [354, 567, 878, 686];
const student = ["Jungkook", "Lion king"];
console.log(scores);
console.log(scores.push(545));
console.log(student);
console.log(student.push("Gurleen"));
//ENUMS
//An enum defines a set of named constants. Numeric enums start at 0 by default.
//NUMBER ENUMS - FOR INDEXING
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
let move = Direction.right;
console.log(move);
//console.log(Direction.down)
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["Success"] = "SUCCESS";
    Status["Failed"] = "FAILED";
})(Status || (Status = {}));
const currentStatus = Status.Pending;
console.log(currentStatus);
let myRole = "viewer";
//myRole = "fjffjfjf"; //not matched
console.log(myRole);
//TUPLES
//A tuple describes an array with a fixed expected order of types.
let person = ["Aman", 21];
console.log(person[0]);
console.log(person[1]);
//Union Types
//A union type allows a value to be one of several specified types. Use the vertical bar (|) to combine types.
let id;
id = "A102";
id = 102;
const s = {
    id: 45,
    fname: "Gurleen"
};
console.log(s.id);
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
console.log(add(3, 4));
console.log(multiply(3, 4));
