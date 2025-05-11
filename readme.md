#Interfaces vs Types in TypeScript

TypeScript degine two ways to deeifne the data. one if inerface and another is type. though it seems it works same but there is slighly deiffernt purpose.

first of all strucrure and defination. `type` structure work with object shape and primives and unions where `interface` only work with object shape. In `interface` there is you can use `extends` keywor on the other hand type have `&` to intersection the operators.

### Example of types

<pre> 
    type User = {
        name: string;
        email: string;
    };

    type Admin = User & {
        role: string;
    };

    type ID = string | number;
</pre>

### Example of Interface

<pre> 
    interface User {
        name: string;
        email: string;
    }

    interface Admin extends User {
        role: string;
    }
</pre>

## Explain the difference between any, unknown, and never types in TypeScript.

Differences between `any`, `unknown`, and `never` is crucial for writing type safe TypeScript code. Each of one doen a very important task.

### any

`any` didables all the type checking for a variables. when you dont know or dont care aboiut what type it will be you can use it there. It should vaoided if not necessary.
Example:

<pre>
    let data: any = "hello";
    data = 42;         
</pre>

### unknown

If you dont know the type it will be you can keep it as `unknown`. But when you use it you need to assign the type.
Example:

<pre>
    let value: unknown = "hello";
    value = 42;     
    if (typeof value === "string") {
        console.log(value.toUpperCase()); 
    }     
</pre>

### never

`never` represent value that never occure.It mostly use in a function that never return.
Example:

<pre>
    function throwError(message: string): never {
    throw new Error(message); 
    }
<pre>
