import { add, PI } from "./math.js";
import getUser from "./math.js";
import type { User , Status } from "./types.js";
import { add as sum } from "./math.js"; 
console.log(sum(5, 10));

console.log(add(10, 20));
console.log(PI);

console.log(getUser());

const user:User = 
{
    name:"Gurleen",
    age:23
}
console.log(user);

const status:Status = "active";
console.log(status);