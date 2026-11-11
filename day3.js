"use strict";
const update = {
    name: "Gurleen"
};
console.log(update);
const settings = {
    theme: "dark",
    notifications: true
};
console.log(settings);
const user = {
    name: "gurleen",
    age: 23
};
console.log(user);
const d = {
    name: "Gurleen",
    email: "gurleen@gmail.com"
};
console.log(d);
const P = {
    name: "Lion King",
    age: 24
};
console.log(P);
const myRole = {
    admin: true,
    user: true,
    guest: false
};
console.log(myRole);
let result = "success";
//let result:FinalResult = "errors";
//let result:FinalResult = "loading";
console.log(result);
let userName = "Gurleen";
//userName = null;  //Error
console.log(userName);
//2) ReturnType
function add(a, b) {
    return a + b;
}
// Result: number
//3) Parameters
function adds(a, b) {
    return a + b;
}
let tags = [10, 20]; // Correct
// Error: second value string hai
//tags = [10, "20"];
console.log(tags);
//TypeScript Generics
//Generics let you write reusable code that works with different types while preserving type information. A type parameter such as T is a placeholder for a type
//A generic function
function getValue(value) {
    return value;
}
console.log(getValue("Gurleen"));
console.log(getValue(786));
console.log(getValue(true));
/*//Generics with arrays
function getFirst<T>(item: T[]): T{
    return item[0];
}
const firstNumber = getFirst([10,20,30]);
const firstList = getFirst(["aman","jashan","Gurleen"]);
console.log(firstNumber);
console.log(firstList);*/
//Multiple type parameters
function pair(first, second) {
    return { first, second };
}
const results = pair("Gurleen", 23);
console.log(results);
const numberBox = { value: 100 };
const stringBox = { value: "Hello" };
console.log(numberBox);
console.log(stringBox);
//Generic constraints with extends
function printLength(value) {
    return value.length;
}
console.log(printLength("Hello")); // 5
//printLength([10, 20, 30]);       // 3 
//printLength(123);                // Error: number has no length property
//TypeScript Promises
//A Promise represents the eventual result of an asynchronous operation. It fulfills with a value or rejects with a reason, usually an error.
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Operation successful!");
    }
    else {
        reject("Operation Failed");
    }
});
//console.log(myPromise);
myPromise
    .then((result) => console.log(result))
    .catch((error) => console.error(error.message))
    .finally(() => console.log("Task completed"));
//A delayed operation
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data received!"), 2000);
    });
}
getData().then((data) => console.log(data));
//async and await
function getUser() {
    return Promise.resolve("Gurleen");
}
async function displayUser() {
    const user = await getUser();
    console.log(user);
}
displayUser();
//API example with error handling
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }
        const user = await response.json();
        console.log(user);
    }
    catch (error) {
        console.log("Error:", error);
    }
}
fetchData();
