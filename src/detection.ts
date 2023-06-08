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