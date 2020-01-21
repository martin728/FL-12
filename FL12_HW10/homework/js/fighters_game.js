class Fighter {

    constructor(object) {
        this.name = object.name;
        this.damage = object.damage;
        this.hp = object.hp;
        this.strength = object.strength;
        this.agility = object.agility;
        this.wins = 0;
        this.loss = 0;
    }

    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getHp() {
        return this.hp;
    }
    getStrength() {
        return this.strength;
    }
    getAdgility() {
        return this.agility;
    }
    heal(plusHp) {
        this.hp += plusHp;
    }
    dealDamage(damage) {
        this.hp -= damage;
    }
    addWin() {
        this.wins += 1;
    }
    addLoss() {
        this.loss += 1;
    }
    logCombatHistory() {
        console.log(`Name:${this.name}, wins:${this.wins}, loses:${this.loss}`)
    }
    attack(opponent) {
        const MAX_NUMBER = 100;
        let isAttackSuccessful = Math.random() * MAX_NUMBER < MAX_NUMBER - (this.agility + this.strength);
        if (isAttackSuccessful) {
            opponent.dealDamage(this.damage);
            console.log(`${this.name} makes ${this.damage} damage to ${opponent.name}`);
        } else {
            console.log(`${this.name} attack is missed`)
        }
    }
}



function battle(firstFighter, secondFighter) {
    if (firstFighter.getHp() <= 0 || secondFighter.getHp() <= 0) {
        console.log('Players already have zero HP');
    } else {
        while (firstFighter.getHp() > 0 && secondFighter.getHp() > 0) {
            firstFighter.attack(secondFighter);
            if (secondFighter.getHp() <= 0) {
                console.log(`${firstFighter.getName()} is win`);
                firstFighter.addWin();
                secondFighter.addLoss();
                break;
            }
            secondFighter.attack(firstFighter);
            if (firstFighter.getHp() <= 0) {
                console.log(`${secondFighter.getName()} is win`);
                firstFighter.addLoss();
                secondFighter.addWin();
            }
        }
    }
}

const diana = new Fighter({
    name: 'Diana',
    damage: 25,
    hp: 100,
    strength: 30,
    agility: 25
});
const serhii = new Fighter({
    name: 'Serhii',
    damage: 10,
    hp: 100,
    strength: 25,
    agility: 25
});

battle(diana, serhii);

diana.logCombatHistory();
serhii.logCombatHistory();