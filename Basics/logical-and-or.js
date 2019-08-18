let temp = 5;

//logical AND operator && - if both sides are true. False otherwise

if (temp >4 && temp <6){
    console.log(`Perfection has been achieved. Total balance has been secured. This is Nirvana. This is paradise.`);
}

// logical OR operator ||

if (temp <=4 || temp >=6 ){
    console.log(`Extremes are exctiting, but you should only go outside if you are EXTREMELY ready to die`);
}

//challenge

let ruevenVegan1 = false;
let ruevenVegan2 = false;

if (ruevenVegan1 === true && ruevenVegan2 === true){
    console.log('kindly gtfo');
} else if (ruevenVegan1 === true || ruevenVegan2 === true){
    console.log('kindly stfu while I eat real food');
} else{
    console.log('thank god here have some bacon burgers');
}
