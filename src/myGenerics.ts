// 1. Take two types
function identityOne(val: boolean | number): boolean | number {
    return val;
}

// 2. Take any type (do not use this)
function identityTwo(val: any): any {
    return val;
}

// 3. Log the param value type, return type will be the param value type
function identityThree<Type>(val: Type): Type {
    return val;
}

// 4. Same as 3. but simpler syntax
function identityFour<T>(val: T): T {
    return val;
}


interface Bottle {
    brand: string;
    type: string;
}

identityFour<Bottle>({
    brand: "Gin",
    type: "Alcohol"
})

// 5. Return the type as the param type in array
function getSearchProducts<T>(products: T[]): T {
    // do some db operations
    const myIndex = 3;
    return products[myIndex];
}

// 6. Convert into arrow function 
const getArrowFunctionSearchProducts = <T>(products: T[]): T => {
    // do some db operations
    const myIndex = 3;
    return products[myIndex];
}

// 7. Take two types
function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}
anotherFunction("Hello", 2); // the second param must be a number


// 8. Take two types with one extend custom defined type
interface Database {
    connection: string,
    username: string,
    password: string
}

function thirdFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}
thirdFunction("Hello", {connection: "test", username: "username", password: "password"})


// 9. Handle multiple types
interface Quiz {
    name: string,
    type: string,
}
interface Course {
    name: string,
    author: string,
    subject: string,
}
// This can take both Quiz and Course types
class Sellable<T> {
    public cart: T[] = [];
    addToCart(product: T){
        this.cart.push(product);
    }
}



