var a = prompt("Enter a value of a", "");
var b = prompt("Enter a value of b", "");
var c = prompt("Enter a value of c", "");

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Invalid input data");
} else {

    var rootPart = Math.sqrt(b * b - 4 * a * c);
    var denom = 2 * a;

    var root1 = (-b + rootPart) / denom;

    if (rootPart === 0) {
        console.log("x = " + root1);
    } else if (rootPart > 0) {
        var root2 = (-b - rootPart) / denom;
        console.log("x1 = " + root1 + " and x2 = " + root2);
    } else {
        console.log("no solution");
    }

}