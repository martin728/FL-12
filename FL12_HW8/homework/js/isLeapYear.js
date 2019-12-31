function isLeapYear(date){
    var parsedDate = new Date(date);
    var year = parsedDate.getFullYear();
    if(isNaN(year)){
        return 'Invalid date';
    } else {
        var isLeapYear = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
        return year + ' is ' +( isLeapYear?'':'not') + ' a leap year';
    }
}

console.log(isLeapYear(123123123));