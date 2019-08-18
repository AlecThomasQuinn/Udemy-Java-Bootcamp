// functions take input (argument), run it through the program, and then spit out an output.
// like the school system takes young children and spits out NPCs

let greetUser = function(){
    console.log('User, this is a greeting.');
}

greetUser();

let square = function(numberArg){
    squaredArg = numberArg * numberArg;
    console.log(squaredArg);
    return squaredArg;
}

square(3);

// 3 is the argument that is passed into the function as (input).
// 3 is now running through the (((program))). It takes the place 'numberArg'
// and is multiplied by itself as numberArg * numberArg
// the value of 3 * 3 is 9, and 9 is stored as the value of 'squaredArg'
// then the function returns (output) 'sqauredArg', which in this case is 9.
// Thus the output is 9.

square(10);

// challenge

// convert Fahrenheit to Celsius

let convert = function(degreesEFF){
    let degreesSEE = (degreesEFF - 32) * (5/9);
    console.log(degreesSEE);
    return degreesSEE;
}

convert(451);