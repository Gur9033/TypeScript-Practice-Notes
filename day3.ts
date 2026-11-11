//TypeScript Utility Types
//Utility types are built-in TypeScript types that transform an existing type into another type. They reduce repetition and help keep application data structures consistent.
//Partial — make every property optional
interface User 
{
    name: string;
    age: number;
    email: string;
}
const update: Partial<User> = {
    name : "Gurleen"
}
console.log(update);

//Required — make every property required
interface Settings 
{
    theme?: string;
    notifications?: boolean;
}
const settings: Required<Settings> = {
    theme : "dark",
    notifications : true
}
console.log(settings);

//Readonly — prevent property reassignment through this type
interface Users
{
    name: string;
    age: number;
}
const user: Readonly<Users> = {
    name: "gurleen",
    age: 23
}
console.log(user);
//user.age = 34; // TypeScript Error

//Pick — select properties
interface Data
{
    name: string;
    age: number;
    email: string;
}
type DataContact = Pick<Data , "name" | "email">
const d:DataContact = {
    name: "Gurleen",
    email: "gurleen@gmail.com"
}
console.log(d);

//Omit — remove properties
interface UserText 
{   
    name: string;   
    age: number;   
    password: string; 
}
type PublicUser = Omit<UserText, "password">;
const P:PublicUser = {
    name: "Lion King",
    age: 24
}
console.log(P);

//Record — map keys to a value type
type Role = "admin" | "user" | "guest";
const myRole: Record<Role , boolean> = {
    admin: true,
    user: true,
    guest: false
}
console.log(myRole);

//Exclude and Extract
type Status = "success" | "errors" | "loadings";
type FinalResult = Exclude<Status , "loadings">;
type ResultStatus = Extract<Status , "success" | "errors">;
let result:FinalResult = "success";
//let result:FinalResult = "errors";
//let result:FinalResult = "loading";
console.log(result);
//Exclude removes matching union members; Extract keeps matching union members.

//NonNullable, ReturnType, Parameters, Awaited
type Name = NonNullable<string | null | undefined>
let userName: Name = "Gurleen";
//userName = null;  //Error
console.log(userName);
//2) ReturnType
function add(a: number , b: number): number 
{
    return a + b;
}
type AddResult = ReturnType<typeof add>
// Result: number
//3) Parameters
function adds(a: number, b: number): number {
    return a + b;
}
type AddTags = Parameters<typeof adds>;
let tags: AddTags = [10, 20]; // Correct
// Error: second value string hai
//tags = [10, "20"];
console.log(tags);
//4) Awaited
type ApiResult = Awaited<Promise<string>>;

//TypeScript Generics
//Generics let you write reusable code that works with different types while preserving type information. A type parameter such as T is a placeholder for a type
//A generic function
function getValue<T>(value: T): T
{
    return value;
}
console.log(getValue<string>("Gurleen"));
console.log(getValue<number>(786));
console.log(getValue<boolean>(true));

/*//Generics with arrays
function getFirst<T>(item: T[]): T{
    return item[0];
}
const firstNumber = getFirst([10,20,30]);
const firstList = getFirst(["aman","jashan","Gurleen"]);
console.log(firstNumber);
console.log(firstList);*/

//Multiple type parameters
function pair<T, U>(first: T, second: U)
{
    return{first , second};
}
const results = pair<string , number>("Gurleen" , 23);
console.log(results);

//Generics with interfaces
interface Box<T>
{
    value: T;
}
const numberBox: Box<number> = { value: 100 }; 
const stringBox: Box<string> = { value: "Hello" };
console.log(numberBox);
console.log(stringBox);

//Generic constraints with extends
function printLength<T extends { length: number }>(  value: T ): number 
{   
    return value.length; 
}
console.log(printLength("Hello")); // 5
//printLength([10, 20, 30]);       // 3 
//printLength(123);                // Error: number has no length property


//TypeScript Promises
//A Promise represents the eventual result of an asynchronous operation. It fulfills with a value or rejects with a reason, usually an error.
const myPromise: Promise<string> = new Promise((resolve , reject) => {
    const success = true;
    if(success)
    {
        resolve("Operation successful!");
    }
    else
    {
        reject("Operation Failed");
    }
});
//console.log(myPromise);

myPromise
  .then((result) => console.log(result))
  .catch((error: Error) => console.error(error.message))
  .finally(() => console.log("Task completed")); 

//A delayed operation
function getData(): Promise<string> 
{
    return new Promise ((resolve) => {
        setTimeout(() =>
        resolve("Data received!"),2000);
    });
}
getData().then((data) => console.log(data));


//async and await
function getUser(): Promise<string> 
{   
    return Promise.resolve("Gurleen"); 
}
async function displayUser(): Promise<void> 
{   
    const user = await getUser();   
    console.log(user); 
}
displayUser();


//API example with error handling
async function fetchData(): Promise<void>
{
    try
    {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if(!response.ok)
        {
            throw new Error("Failed to fetch user");
        }
        const user: unknown = await response.json();
        console.log(user);
    }
    catch(error: unknown)
    {
        console.log("Error:" , error)
    }
}
fetchData();


