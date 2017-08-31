enum POSITION  {
    GUARD,
    DEFENCE,
    FRONT,
    KEEPER
}

let myPostion = POSITION.FRONT; //POSITION['FRONT']

let myPostionText = POSITION[0];

console.log(`I play at ${myPostion}`);
console.log(`My friend plays at ${myPostionText}`);

enum position {
    Guard,
    HK,
    Electrician
}
let myPos: position = position.Guard;
let myPos1: position = position['Electrician'];
console.log("myPos->" + myPos);
console.log("myPos1=>" + myPos1);
console.log(position['0']);
console.log(position[0]);
console.log(position);