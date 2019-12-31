var addOne = (x) => x+1;

function pipe(number,...args){
    var res;
    for(var x in args){
        if(!res){
            res = args[x](number);
        } else {
           res = args[x](res);
        }
    }
    return res;
}

console.log(pipe(1,addOne));