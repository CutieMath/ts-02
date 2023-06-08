// 1. Simple way to check types
// However if we have number[] or string[], typeof will return 'object'
function detectTypes(val: number | string){
    if(typeof val === 'string'){
        return val.toLowerCase();
    }
    if(typeof val === 'number'){
        return val + 3;
    }
}


// 2. Cautionary tail
function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return;
    }
    id.toLocaleLowerCase();
}


// 3. In operator narrowing
interface User {
    name: string;
    email: string;
}
interface Admin {
    name: string;
    email: string;
    isAdmin: boolean;
}
function isAdmin(account: User | Admin){
    if ("isAdmin" in account){
        return account.isAdmin; 
    } 
    return false;
}


// 4. Instanceof narrowing
function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}


// 5. Type predicates
type Fish  = {
    swim: () => void
}
type Bird = {
    fly: () => void
}
// return boolean
function isFish(pet: Fish | Bird){
    return (pet as Fish).swim !== undefined;
}
// because the above function returns boolean, we don't know the type
function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "Fish food";
    } else {
        pet
        return "Bird food";
    }
}
// return type
function isFish2(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
// now we can use this function to check type
function getFood2(pet: Fish | Bird){
    if(isFish2(pet)){
        pet
        return "Fish food";
    } else {
        pet
        return "Bird food";
    }
}


// 6. Discriminated unions
interface Circle {
    kind: "circle",
    radius: number
}
interface Square {
    kind: "square",
    side: number
}
interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square;
function getShapeArea(shape: Shape){
    if (shape.kind === "circle"){
        return Math.PI * shape.radius ** 2;
    }
    return shape.side ** 2;
}
function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        default: 
            const _exhaustiveCheck: never = shape; // The never type
            return _exhaustiveCheck;
    }
}