//to debug ts files directly, compile with --sourceMap true flag
if(true) {
    let x:number = 10;
    console.log(x);
}

console.log(`X is : ${x}`);

const aData = 10;
aData = 20;

const aObj = {name: "A", id: 101};
aObj = {};

aObj.name = "B";

let numbers: number[] = [10, 20, 30];

let myName = new String('Vikash');
console.log(myName);
let myNameStr: string = "myName";

console.log(myNameStr);
for(let n in numbers){ //in iterates over keys and returns key
    console.log(n);
}
console.log("================================");
for(let n of numbers){//of iterates over keys but returns values hold at the key
    console.log(n);
}

console.log(numbers.toString());

let numbers1: number[] = [100, 200, 300];

const arrayConcat = numbers.concat(numbers1);
console.log(arrayConcat);

const arraySpread = [...numbers, numbers1];
console.log(arraySpread); //array spread

console.log("END");
































/***
 * The void operator evaluates the given expression and then returns undefined.
 * This operator allows inserting expressions that produce side effects into places where an expression that evaluates to undefined is desired.
 * Closure Compiler swaps in void 0 because it contains fewer characters than undefined, therefore producing equivalent, smaller code.

 **The real only semantic difference between void expr and undefined is that on ECMAScript 3, the undefined property of the global object (window.undefined on browser environments) is writable, whereas the void operator will return the undefined value always.
 ***/