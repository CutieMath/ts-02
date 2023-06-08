// Simple way to check types
// However if we have number[] or string[], typeof will return 'object'
function detectTypes(val: number | string){
    if(typeof val === 'string'){
        return val.toLowerCase();
    }
    if(typeof val === 'number'){
        return val + 3;
    }
}


// Cautionary tail
function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return;
    }
    id.toLocaleLowerCase();
}


// In operator narrowing
// Check custom types
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


// instanceof narrowing
function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}


// Type predications
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