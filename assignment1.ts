const formatString = (input: string, toUpper?: boolean) => {
    if (input && toUpper === true) {
        console.log(input.toUpperCase());
    } else if (input && toUpper === false) {
        console.log(input.toLowerCase());
    } else {
        console.log(input.toUpperCase());
    }
};
formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);

type FilterRating = {
    title: string;
    rating: number;
};
const filterByRating = (items: FilterRating[]) => {
    const result = items.filter((filter) => filter.rating >= 4);
    console.log(result);
};
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
filterByRating(books);

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const emptyArray: T[] = [];
    return emptyArray.concat(...arrays);
}
console.log(concatenateArrays([1, 2], [3, 4], [5]));

class Vehicle {
    constructor(private make: string, private year: number) {}
    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}

class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year);
    }
    getModel() {
        console.log(`Model: ${this.model}`);
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();

type AlphaNumeric = string | number;
const processValue = (value: AlphaNumeric): number => {
    if (typeof value === "string") {
        return value.length;
    } else {
        return value * 2;
    }
};
console.log(processValue("hello"));
console.log(processValue(10));

interface Product {
    name: string;
    price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
    return products.reduce((max, curr) => (max.price > curr.price ? max : curr));
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
];
getMostExpensiveProduct(products);

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}
function getDayType(day: Day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        console.log("Weekend");
    } else {
        console.log("Weekday");
    }
}
getDayType(Day.Friday);
getDayType(Day.Sunday);

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n >= 0) {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        } else {
            reject("Error: Negative number not allowed");
        }
    });
}
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
