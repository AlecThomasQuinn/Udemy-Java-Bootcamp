// function add is a variable that is a function named add.
// this add function has TWO arguments, the arguments are 'a' and 'b'
// the arguments are the inputs of the function

let add = function(a, b){
    // below is the output of the function
    // we can tell this is the output because this 
    //is where in the function we have our return statement
    return a + b;
}


// we are calling the function 'add' with 2 arguments
// because the add function is defined on line 5 as a function that requires 2 arguments as inputs.
// on line 19 add is being called with the arguments of 10 and 1. 
// argument 'a' is 10 and argument 'b' is 1.

// we are storing the output of add(10, 1) in a variable called 'result'
let result = add(10, 1);

// the reason we stored the output of the add function is so that 
// it is easier for us to console.log() the result of the add function
// our console should log for us '11'
console.log(result);

// Default arguments

// let getScore = function(playerName, playerScore){
//     return 'playerName has scored playerScore points. Does this make you happy?';
// }

let getScore = function(playerName = 'Anon', playerScore = 0){
    return `${playerName} has scored ${playerScore} points. Does this make you happy?`;
};

console.log(getScore()); 
// BEFORE (lines 28-31) this returns undefined twice
// because the function is called to run without any arguments
// the variables are forced to resort to their default values - 'undefined'

// NOW it returns 'Anon' and '0' because we defualted these values by assigning them at the same time that the function is declared

// here only 1 argument is defined so the other will default 
console.log(getScore('Mr Sir'));

//ditto
console.log(getScore(undefined, 555));

// this logs 'Mr Sir' and '555' because the function is called w/ these values as arguments
console.log(getScore('Mr Sir', 555));

// challenge
// tip calculator

function justTheTipHAHAHA(total, percentageAsDecimal = .2){
    let tipSizeLOL = total * percentageAsDecimal;
    return tipSizeLOL;
};

// returns 20 via defaulting percentage
console.log(justTheTipHAHAHA(100));

// returns 10 because I'm cheap af
console.log(justTheTipHAHAHA(100, .1));