function makeNumber(line){
  var regex = /\d+/g;
  var matches = line.match(regex);
  if(matches){
      return matches.join('')
  }else{
      return '';
  }
}

function countNumbers(line){
  var mapOfResult = new Map();
  var numbersOnly = makeNumber(line);
  for(var x in numbersOnly){
      console.log(numbersOnly[x]);
      let num = numbersOnly[x];
      if(mapOfResult.get(num)) {
      mapOfResult.set(num,mapOfResult.get(num)+1);
      } else {
      mapOfResult.set(num,1);
      }
  }
  return mapOfResult;
}

  console.log(countNumbers('aa11dd334'));