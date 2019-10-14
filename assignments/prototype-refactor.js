/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObjects {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObjects {
  constructor(charStatAttributes) {
    super(charStatAttributes);
    this.healthPoints = charStatAttributes.healthPoints;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(humanoidattributes) {
    super(humanoidattributes);
    this.team = humanoidattributes.team;
    this.weapons = humanoidattributes.weapons;
    this.language = humanoidattributes.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

// STRETCH TASK
class Villain extends Humanoid {
  constructor(villainAttributes) {
    super(villainAttributes);
    this.lightningBolt = villainAttributes.lightningBolt;
    this.opponentHealth = villainAttributes.opponentHealth;
  }

  attack() {
    this.opponentHealth -= 10;
    return `A flash of light! The great ${this.name} will finish you and use your bones for stew!`;
  }
}

class Hero extends Humanoid {
  constructor(heroAttributes) {
    super (heroAttributes);
    this.holyLight = heroAttributes.holyLight;
    this.opponentHealth = heroAttributes.opponentHealth;
  }

  returnFire() {
    this.opponentHealth -= 15;
    return `${this.name} fires back, unshaken.`;
  }
}

// New Villain Created
const Maestro = new Villain ({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 5,
  },
  healthPoints: 15,
  name: 'Maestro',
  team: 'Forest Kingdom',
  weapons: [
    'Staff',
    'Dagger',
    'Spellbook',
  ],
  language: 'Demonic',
  lightningBolt: 'Lightning Strike!',
  opponentHealth: 20,
});

// New Hero Created
const HeroMan = new Hero ({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 20,
  name: 'HeroMan',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Sword&Shield',
  ],
  language: 'Human',
  holyLight: "Holy Light, strike with thine might!",
  opponentHealth: 15,
});

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  console.log(`${HeroMan.name} walked into ${Maestro.name}s trap!`);
  console.log(`${Maestro.name} has the following weapons ${Maestro.weapons} while ${HeroMan.name} has ${HeroMan.weapons}`);
  console.log(`${Maestro.name} can use ${Maestro.lightningBolt}`);
  console.log(`${HeroMan.name} can use ${HeroMan.holyLight}`);
  console.log(`${HeroMan.name} has ${Maestro.opponentHealth} and ${Maestro.name} has ${HeroMan.opponentHealth}`);
  console.log(`${Maestro.attack()}`);
  console.log(`${HeroMan.name} recoils, and now has ${Maestro.opponentHealth} Health`);
  console.log(`${HeroMan.returnFire()}`);
  console.log(`${Maestro.name} falters, crumbling to the ground, leaving ${HeroMan.opponentHealth} Health left`);
