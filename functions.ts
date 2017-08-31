//default argument function
function aFunc(p1:number, p2:number, p3:number=100){
    console.log("aFunc-----------");
    console.log(arguments);
    console.log(p1, ":", p2, ":", p3);
}

//optional argument function
function bFunc(p1:number, p2:number, p3?:number){
    console.log("bFunc-----------");
    console.log(arguments);
    console.log(p1, ":", p2, ":", p3);
}

//rest all/spread argument function
function cFunc(p1:number, p2:number, ...restAll:number[]){
    console.log("cFunc-----------");
    console.log(arguments);
    console.log(p1, "--", p2, "--", restAll);
}

aFunc(5,4);
bFunc(5,4,10);
cFunc(5, 4, 6,8,9);