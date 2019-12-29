let amountOfTries = 3;
const INITIAL_MAX_NUMBER = 8;
const INITIAL_MAX_PRIZE = 100;
let maxNumber = INITIAL_MAX_NUMBER;
let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
let totalPrize = 0;
let maxPrize = INITIAL_MAX_PRIZE;
let amountOfMoneyOnCureentAttempt = maxPrize;
const DECREASE_COEF = 2;
const INCREASE_RANGE = 4;
const MAX_TRIES = 3;

if (confirm('Do you want to play a game?')) {
    while (amountOfTries) {
        let str = `Choose a roulette pocket number from 0 to ${maxNumber}
Attempts left: ${amountOfTries}
Total prize: ${totalPrize}
Possible prize on current attempt:${amountOfMoneyOnCureentAttempt}`;

        let guessingNumber = Number(prompt(str));

        amountOfTries--;

        if (guessingNumber === randomNumber) {
            totalPrize += amountOfMoneyOnCureentAttempt;
            if (confirm(`Congratulation, you won!
            Your prize is: ${totalPrize}$.
            Do you want to continue?`)) {
                maxPrize *= DECREASE_COEF;
                amountOfMoneyOnCureentAttempt = maxPrize;
                amountOfTries = MAX_TRIES;
                maxNumber += INCREASE_RANGE;
                randomNumber = Math.floor(Math.random() * (maxNumber + 1));
            } else {
                amountOfTries = 0;
            }
        } else {
            amountOfMoneyOnCureentAttempt /= DECREASE_COEF;
        }
        if (!amountOfTries) {
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
            if (confirm('Do you want to play again?')) {
                totalPrize = 0;
                amountOfTries = MAX_TRIES;
                maxPrize = INITIAL_MAX_PRIZE;
                amountOfMoneyOnCureentAttempt = maxPrize
                randomNumber = Math.floor(Math.random() * (INITIAL_MAX_NUMBER + 1));
            } else {
                break;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}