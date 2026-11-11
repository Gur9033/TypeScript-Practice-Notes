"use strict";
//UNION
function show(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(1));
    }
}
show("abc");
show(7);
const w = {
    name: "Gurleen",
    course: "Web Development",
    company: "TechCorp"
};
console.log(w.name, w.course, w.company);
//FUNCTION
// Type for inputs and outputs
function greet(name) {
    return "hello," + name;
}
console.log(greet("gurleen"));
const square = (n) => n * n; //Arrow Function
console.log(square(4));
//Optional and default inputs
function welcome(name, greeting) {
    return (greeting ?? "Hi") + "," + name;
}
console.log(welcome("Jashan"));
console.log(welcome("Gurleen", "Hello,"));
function power(base, exp = 2) {
    return base * exp;
}
console.log(power(5));
console.log(power(5, 4));
//Functions that return nothing
function sayHi() {
    console.log("Hi!");
}
sayHi();
//OBJECTS
const student = {
    name: "Jashan",
    age: 23
};
console.log(student.name);
const phone = {
    id: 1,
    name: "Phone",
};
console.log(phone.name = "SmartPhone");
const user = {
    id: 1,
    name: "Pawan",
};
console.log(user.name);
const d = {
    name: "Jack",
    breed: "Labrador"
};
console.log(d.name, d.breed);
const k = "name";
console.log(k);
//typeof - copy the type of a value
const settings = {
    theme: "dark",
    size: 14
};
const another = {
    theme: "light",
    size: 12,
};
console.log(another.theme);
//as const - lock the exact values
const colors = ["red", "green", "blue"];
const c = "green";
console.log(c);
//Type Guards
//typeof - for basic types
function double(x) {
    if (typeof x === "number") {
        return x * 2;
    }
    return x + x;
}
console.log(double(4), double("abc"));
function move(pet) {
    if ("fly" in pet) {
        pet.fly();
    }
    else {
        pet.swim();
    }
}
;
console.log(move);
//instanceof - check the class
function shows(v) {
    if (v instanceof Date) {
        console.log(v.getFullYear());
    }
    else {
        console.log(v.toUpperCase());
    }
}
shows("hi !");
