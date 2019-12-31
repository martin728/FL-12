function makeNumber(line){
    var regex = /\d+/g;
    var matches = line.match(regex);
    if(matches){
        return matches.join('')
    }else{
        return '';
    }
}

console.log(makeNumber('ijifjgdj'));