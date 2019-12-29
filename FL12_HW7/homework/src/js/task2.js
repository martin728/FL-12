/* eslint-disable no-var */
var amountOfTries = 3;
var amountOfMoney = 100;
var maxNumber = 8;
var randomNumber = Math.floor(Math.random() * (maxNumber + 1));
var totalPrize = 0;

// step 1
if (confirm('Do you want to play a game?')) {
    while (amountOfTries) {
        var str = `Choose a roulette pocket number from 0 to ${maxNumber}
Attempts left: ${amountOfTries}
Total prize: ${totalPrize}
Possible prize on current attempt:${amountOfMoney}
NUMBER - ${randomNumber}`;

        var guessingNumber = Number(prompt(str));

        amountOfTries--;

        if (guessingNumber === randomNumber) {
            totalPrize += amountOfMoney;
            if (confirm(`Congratulation, you won!
            Your prize is: ${totalPrize}$.
            Do you want to continue?`)) {
                amountOfTries = 3;
                maxNumber += 4;
                randomNumber = Math.floor(Math.random() * (maxNumber + 1));
            } else {
                amountOfTries = 0;
            }
        }

        if (!amountOfTries) {
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
            if (confirm('Do you want to play again?')) {
                totalPrize = 0;
                amountOfTries = 3;
                randomNumber = Math.floor(Math.random() * 9);
            } else {
                alert('Bye bye');
                break;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}