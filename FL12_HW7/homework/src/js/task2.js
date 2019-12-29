var userNumber = 8;
var amountOfTries = 3;
var amountOfMoney=amountOfTries--;
switch (amountOfMoney) {
    case (amountOfTries = 3):
        alert("Your prize is: 5$");
        break
    case (amountOfTries = 2):
        alert("Your prize is: 50$");
        break
    case (amountOfTries = 1):
        alert("Your prize is: 100$");
        break
    case (amountOfTries > 3):
        alert("Your prize is: 0$");
        break
}
// var randomNumber = Math.floor(Math.random() * 9);
var randomNumber = 4;
// step 1
if (confirm('Do you want to play a game?')) {
    while (amountOfTries) {
        var str = `Choose a roulette pocket number from 0 to 8
Attempts left: ${amountOfMoney}
Total price: ${amountOfMoney}
Possible prize on current attempt:${amountOfMoney}`;
        var guessingNumber = Number(prompt(str));
        amountOfTries--;
        if (!amountOfTries) {
            alert(`Thank you for your participation. Your prize is:${amountOfMoney}`);
            break
        }
        if (guessingNumber === randomNumber)
            (confirm(`Congratulation, you won!
        Do you wnt to try again?
        Your prize is:${amountOfMoney}`));
        break
    }
} else {
    alert('You did not become a billionaire, but can.');
}