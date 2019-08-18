// global (name)
//      local(name) 

let name = 'Alec';

if (true){
    let name = 'not Alec';  //"not Alec" is a variable that is shadowing 'Alec' because the scope of console.log searches up the tree only until it's variable has been found,
                             // even though 'Alec' is in the global scope and thus able to be used anywhere. 'not Alec' is shadowing 'Alec'
        if (true){
            console.log(name);
    }
}

if (true){
    console.log(name); //This console.log's parent has a variable name that = Alec. 
}