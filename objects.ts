function buildObjectData(personData){
    let fname = personData.fname, lname = personData.lname, address = personData.address;
    //return `${personData.fname} ${personData.lname} resides at ${personData.address}`;
    return `${fname} ${lname} resides at ${address}`
}
function buildAObjectData({id, ename, salary}){
    return `${id} ${ename} earns ${salary}`
}


const 
    fname =  'A',
    lname = 'B',
    address = '1st St. NYC',
    profession = "Police";


const personObject = {
    fname: fname,
    lname: lname,
    address: address,
    occupation: profession
}

const personObject1 = {
    fname,
    lname,
    address,
    profession
}

const id = 1,
ename = "AB",
salary = 1278;

const aPerson = {
    id,
    ename,
    salary
};


//if we pass extra data it will work, if we pass less data also it works, but fails to compile.
console.log(buildObjectData(personObject));

console.log(buildAObjectData(aPerson));



interface Human {
    fname : string,
    lname: string
}
interface Player {
    fname : string
}

let p5: Human = {fname: 'A', lname: 'B'};
let pl1: Player = p5;

for (let p in personObject1) {
    console.log(p);
}


let array = ['Aa', 'Bb', 'Cc', 9, true];

console.log(array);

console.log(JSON.stringify(array));












//Object destructing
/*function buildObjectData({fname, lname, address}){
    return `${fname} ${lname} resides at ${address}`
}*/