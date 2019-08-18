//lexical or static scoping

//SCOPE TREE
// var1 (GLOBAL)
//      var2 (Local) this local scope can grab var 1
//          var4 (local) this local scope can grab var 2 and var 1
//      var3 (local) this local scope can ONLY GRAB VAR1


let var1 = 'var1'; 

if (true){
    console.log(var1); 
    let var2 = 'var2'; 
    console.log(var2);

    if (true){
        let var4 = 'var4';
        console.log(var4);
    }
};

console.log(var2); 

if (true){
    let var3 = 'var3';
    console.log(var3);
}

