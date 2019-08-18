// VARIABLE is undefined
let name = 'Jen';
console.log(name);

let anotherName  //no =, no definition
console.log(anotherName);

if(anotherName === undefined){
    console.log('there is something without a name');
} else{
    console.log('saulgoodman');
};

// this 'square' function requires an argument
let square = function(num){
    return num;
};

// but here it is called without an argument. num is not
let result = square();
console.log(result);

//Variable is EXPLICITLY a variable to be undefined
let age = 24;

age = undefined;
console.log(age);

// the problem with explicitly defining a variable as undefined is that
// it becomes hard to know when reading the console if the variable is
// undefined because JS assigned it that value or if you the dev assigned
// it that value. Convenvtion dictats that when the dev needs a variable
// to act as undefined that we assign in 'null' instead.
age = null;
console.log(age);