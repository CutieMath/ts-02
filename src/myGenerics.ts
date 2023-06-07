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