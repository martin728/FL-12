function convert(...args) {
    const stringTypeName = 'string';
    const numberTypeName = 'number';

    let newArray = new Array();
    for (let x of args) {
        if (typeof x === stringTypeName) {
            newArray.push(parseInt(x));
        } else if (typeof x === numberTypeName) {
            newArray.push(x.toString());
        }
    }
    return newArray;
}

let multiply = (a) => {
    const multiplier = 2;
    console.log(a * multiplier);
};

function executeForEach(array, foo) {
    for (let x of array) {
        foo(x);
    }
}

let plusThree = (a) => {
    const numToAdd = 3;
    return a + numToAdd;
};

function mapArray(array, foo) {
    const stringTypeName = 'string';
    let newArray = new Array();
    for (let x of array) {
        if (typeof x === stringTypeName) {
            newArray.push(foo(parseInt(x)));
        } else {
            newArray.push(foo(x));
        }
    }
    return newArray;
}

let intNumbers = (a) => {
    const divider = 2;
    return a % divider === 0;
};

function filterArray(array, foo) {
    let newArray = new Array();
    for (let x of array) {
        if (foo(x) === true) {
            newArray.push(x);
        }
    }
    return newArray;
}

function reverseString(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

function makeListFromRange(array) {
    let a = array[0];
    let b = array[1];
    let myArray = new Array();
    for (let i = a; i <= b; i++) {
        myArray.push(i);
    }
    return myArray;
}

function getArrayOfKeys(array, propertyName) {
    let newArray = new Array();
    for (let x of array) {
        newArray.push(x[propertyName])
    }
    return newArray;
}


function substitute(numbers) {
    const limit = 30;
    let newArray = new Array();
    for (let x of numbers) {
        if (x < limit) {
            newArray.push('*');
        } else {
            newArray.push(x);
        }
    }
    return newArray;
}

function getPastDay(date, daysToSubstract) {
    let changedDate = new Date(date);
    changedDate.setDate(date.getDate() - daysToSubstract);
    return changedDate.getDate();
}

function formatDate(date) {
    let formattedDate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate() +
        ' ' + date.getHours() + ':' + date.getMinutes();
    return formattedDate;
}