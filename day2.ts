//UNION
function show(value: string | number){
    if(typeof value === "string")
    {
        console.log(value.toUpperCase());
    }
    else
    {
        console.log(value.toFixed(1));
    }
}
show("abc");
show(7);
//Intersection ( & ) means AND
type Student = 
{
    name: string;
    course:string;
}
type Worker =
{
    company: string;
}
type WorkingStudent = Student & Worker ;
const w:WorkingStudent =
{
    name : "Gurleen",
    course : "Web Development",
    company : "TechCorp"
}
console.log(w.name,w.course,w.company); 

//FUNCTION
// Type for inputs and outputs
function greet(name: string): string
{
    return "hello," + name;
}
console.log(greet("gurleen"));

const square = (n: number) => n * n; //Arrow Function
console.log(square(4)); 

//Optional and default inputs
function welcome(name: string , greeting?: string) // ? that is optional
{
    return(greeting?? "Hi") + "," + name;
}
console.log(welcome("Jashan"));
console.log(welcome("Gurleen","Hello,"));

function power(base: number, exp: number = 2) // 2 is default 
{
    return base * exp;
}
console.log(power(5));
console.log(power(5,4)); 

//Functions that return nothing
function sayHi(): void
{
    console.log("Hi!");
}
sayHi(); 

//OBJECTS
const student: {name: string , age: number} = {
    name: "Jashan",
    age: 23
}
console.log(student.name);
//student.grade = "A";  //Error: grade is not  part of the shape 

//Optional and read-only
type Product = {
    readonly id: number,
    name: string,
    discount?: number
}
const phone:Product = {
    id :1,
    name : "Phone",
}
console.log(phone.name = "SmartPhone");
//console.log(phone.id = 2) //Error: readonly 

//Interfaces
interface Users {
    id: number;
    name: string;
    email?: string;  //optional
}
const user:Users = {
    id: 1,
    name: "Pawan",
};
console.log(user.name);

//Extending an interface
interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}
const d: Dog = {
    name: "Jack",
    breed: "Labrador"
}
console.log(d.name , d.breed); 

//Advanced Types
//keyof - get the property names
type User = {
    id: number;
    name: string;
};
type UserKeys = keyof User;
const k:UserKeys = "name";
console.log(k);

//typeof - copy the type of a value
const settings = {
    theme: "dark",
    size: 14
};
type Settings = typeof settings;
const another:Settings = {
    theme: "light",
    size: 12,
}
console.log(another.theme);

//as const - lock the exact values
const colors = ["red" , "green" , "blue"] as const;
type Color = (typeof colors) [number];
const c: Color = "green";
console.log(c);

//Type Guards
//typeof - for basic types
function double(x: string | number)
{
    if(typeof x === "number")
    {
        return x * 2;
    }
    return x + x;
}
console.log(double(4) ,double("abc"));

//in - check if a property exists
type Bird = 
{
    fly(): void;
}
type Fish =
{
    swim(): void;
}
function move (pet: Bird | Fish)
{
    if("fly" in pet)
    {
        pet.fly();
    }
    else
    {
        pet.swim();
    }
};
console.log(move);

//instanceof - check the class
function shows(v: Date | string)
{
    if(v instanceof Date)
    {
        console.log(v.getFullYear());
    }
    else
    {
        console.log(v.toUpperCase());
    }
}
shows("hi !");

