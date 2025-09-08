class Hero {
    constructor({ name = 'hero', xp = 0 } = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} получив ${amount} опита`);
        this.xp += amount;
    }
}

class Warrior extends Hero {
    constructor({ weapon, ...restProps } = {}) {
        super(restProps);

        this.weapon = weapon;
    }

    attack() {
        console.log('воїн наносить урон');
    }
}

class Berserk extends Warrior {
    constructor({ warcry, ...restProps }) {
        super(restProps);

        this.warcry = warcry;
    }

    babyRange() {
        console.log(this.warcry);
    }
}

class Mage extends Hero {
    constructor({ spells, ...restProps }) {
        super(restProps);

        this.spells = spells;
    }

    cast() {
        console.log('наніс урон');
    }
}

const mango = new Warrior({ name: 'Mango', xp: 1000, weapon: 'sword' });

console.log(mango);
mango.attack();
mango.gainXp(1000);

const alex = new Mage({ name: 'Alex', xp: 500, spells: ['маг сила'] });

console.log(alex);
alex.cast();
alex.gainXp(700);

const kiwi = new Berserk({
    name: 'Kiwi',
    xp: 3450,
    weapon: 'axe',
    warcry: 'Waaaaa',
});

console.log(kiwi);
kiwi.babyRange()
kiwi.attack();
kiwi.gainXp(1500);
