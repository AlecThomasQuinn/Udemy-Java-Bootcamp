let isAccounteLocked = false;
let userRole = 'admin'

if (isAccounteLocked){
    console.log(`SOL kid, you're locked out`);
} else if (userRole === 'admin') {
    console.log('Welcome Admin');
}else{
    console.log('Welcome');
}

// challenge

let temp = 5;

if (temp > 5){
    console.log(`The world is enveloped in a fiery passion of rage and anger - I'd stay inside if I were you.`);
} else if (temp < 5){
    console.log(`Only go outside if you want to feel the coldness of an aloof and uncaring world.`);
} else{
    console.log(`Perfection has been achieved. Total balance has been secured. This is Nirvana. This is paradise.`);
}