const message: string = "Hello, TypeScript";
console.log(message);

function total(price:number , qty:number){
    return price * qty;
}
console.log(total(234,767));

//Type System
//The any type allows a variable to hold values of different types and turns off many TypeScript checks for that value.
let value: any = 10;
value = "gurleen";
value = true;
console.log(value);

//Unknown
let un:unknown = "hello" // unknown = must check before using
if( typeof un === "string"){
    console.log(un.toUpperCase())
}

//Type Inference
//Type inference means TypeScript automatically figures out a value's type from its initial value.
let name = "Gurleen"
//let age= 23;
let isStudent = true;
console.log(name);
//console.log(age);
console.log(isStudent);

//Type Annotations
//A type annotation explicitly tells TypeScript what type a variable, function parameter, or return value should have.
let username: string = "Gurleen"; 
let age: number = 23; 
let isLoggedIn: boolean = true;
console.log(username);
console.log(age);
console.log(isLoggedIn);
function addition(a: number, b: number): number 
{   
    return a + b; 
}
console.log(addition(10, 20)); // 30 

//Type
//A type alias lets you give a reusable name to a type, including object shapes and unions.
type Students =
{
    name: string;
    age: number;
    course:string;
}
const students: Students =
{
    name: "Gurleen",
    age: 23,
    course: "Full Stack Development"
}
console.log(students);

type User = {
    name: string;
    city: string;
    population?: number; //optional
}
const u:User = {
    name: "jungkook",
    city: "South korea",
}
console.log(u.population??"Unknown");
console.log(u.city);


//UNIONS
const msg: string | number = 556;
console.log(msg);
//Exact values (literal types)
let light: "red" | "green" | "blue" = "green";
// light = "purple";// ERROR: only the 3 colours are allowed
console.log(light); 

//ARRAYS
//Arrays store multiple values. Add a type to describe what kind of values the array contains.
const scores:number[] = [354,567,878,686];
const student:string[] = ["Jungkook","Lion king"]
console.log(scores);
console.log(scores.push(545));
console.log(student);
console.log(student.push("Gurleen"));

//ENUMS
//An enum defines a set of named constants. Numeric enums start at 0 by default.
//NUMBER ENUMS - FOR INDEXING
enum Direction {
    up,
    down,
    left,
    right
}
let move:Direction = Direction.right
console.log(move);
//console.log(Direction.down)

enum Status {   
    Pending = "PENDING",
    Success = "SUCCESS",
    Failed = "FAILED" 
}
const currentStatus: Status = Status.Pending
console.log(currentStatus);

//NO USE OF ENUMS
type Role = "admin" | "editor" | "viewer";
let myRole:Role = "viewer";
//myRole = "fjffjfjf"; //not matched
console.log(myRole);

//TUPLES
//A tuple describes an array with a fixed expected order of types.
let person: [string , number] = ["Aman" , 21]
console.log(person[0]);
console.log(person[1]); 

//Union Types
//A union type allows a value to be one of several specified types. Use the vertical bar (|) to combine types.
let id: string | number;
id = "A102"; 
id = 102;
// id = true; // Type error

//TYPE ALIASES
type Id = string | number;
type Student = {
    id: Id,
    fname: string
}
const s:Student ={
    id:45,
    fname: "Gurleen"
};
console.log(s.id); 

//CALCULATION
type MathFn = (a: number , b:number) => number;
const add:MathFn = (a,b) => a+b;
const multiply:MathFn = (a,b) => a*b;
console.log(add(3,4));
console.log(multiply(3,4));







