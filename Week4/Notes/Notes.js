/*let string = `kjshdf
lksjdf
lkjsdf`; //shift 1
console.log(string) */

let name = (fName,lName) => `${fName} ${lName}`
console.log(name("jarred","griffith"))

let somefun = (a,b)=> {
    let result = "";
    for (let i = 0; i<b;i++) {
        result += a;
    }
    return result; 
}

console.log(somefun("Jarred",9)); 
