// Why we need typings support during developement
console.log(1<2<3)

console.log(3>2>1)

console.log(3<2<1)




//Complex Typing Intersection, Union, interface and type

//can use type keyword too, but its recommended to use interface when defining abstract types
interface HasName {
    fname: string,
    lname: string
};

interface HasAddress {
    city: string,
    zip: string
};

//use type to define a concrete type
type PlayerType = (HasName & HasAddress) | null;

let player: PlayerType = {fname: "A", lname: "L", city: "P", zip: "411007"};

console.log(player);

player = null;

//functions and typings
function multiply(x : number, y : number): number | string {

    let rand = Math.random();
    if(rand <= 0.5) {
        return x * y;
    }
    return 'Num'+ (y + x);
}

console.log(multiply(3, 6));
console.log(multiply(6, 9));


