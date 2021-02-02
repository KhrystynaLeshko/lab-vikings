// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
    return `${this.name} has received ${damage} points of damage`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
    return `A Saxon has received ${damage} points of damage`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  armyAttack(attackingArmy, defendingArmy) {
    const attackingIndex = Math.floor(Math.random() * attackingArmy.length);
    const defendingIndex = Math.floor(Math.random() * defendingArmy.length);

    const randomAttacker = attackingArmy[attackingIndex];
    const randomDefender = defendingArmy[defendingIndex];

    const damage = randomDefender.receiveDamage(randomAttacker.attack());

    if (randomDefender.health <= 0) {
      defendingArmy.splice(defendingIndex, 1);
    }
    return damage;
  }

  vikingAttack() {
    return this.armyAttack(this.vikingArmy, this.saxonArmy);
    //  const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    //  const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    //  const poorSaxon = this.saxonArmy[saxonIndex];
    //  const badViking = this.vikingArmy[vikingIndex];

    //  const vikingAttackValue = badViking.strength;
    //  const damage = poorSaxon.receiveDamage(badViking.strength);

    //  if (poorSaxon.health <= 0) {
    //    this.saxonArmy.splice(saxonIndex, 1);
    //  }

    //  return damage;
  }
  saxonAttack() {
    return this.armyAttack(this.saxonArmy, this.vikingArmy);
    //  const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    //  const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    //  const badSaxon = this.saxonArmy[saxonIndex];
    //  const poorViking = this.vikingArmy[vikingIndex];

    //  const damage = poorViking.receiveDamage(badSaxon.strength);

    //  if (poorViking.health <= 0) {
    //    this.vikingArmy.splice(vikingIndex, 1);
    //  }

    //  return damage;
  }
  showStatus() {
    if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    }
    if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
