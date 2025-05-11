#Interfaces vs Types in TypeScript

TypeScript degine two ways to deeifne the data. one if inerface and another is type. though it seems it works same but there is slighly deiffernt purpose.

first of all strucrure and defination. `type` structure with object shape and primives and unions where `interface` only work with object shape. In `interface` there is you can use `extends` keywor on the other hand type have `&` to intersection the operators.

### example of types

<pre> ```
    type User = {
        name: string;
        email: string;
    };

    type Admin = User & {
        role: string;
    };

    type ID = string | number;
``` </pre>
