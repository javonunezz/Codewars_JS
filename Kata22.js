// Create a class called Warrior which calculates and keeps track of their level and skills, and ranks them as the warrior they've proven to be.

// Business Rules:

// A warrior starts at level 1 and can progress all the way to 100.
// A warrior starts at rank "Pushover" and can progress all the way to "Greatest".
// The only acceptable range of rank values is "Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest".
// Warriors will compete in battles. Battles will always accept an enemy level to match against your own.
// With each battle successfully finished, your warrior's experience is updated based on the enemy's level.
// The experience earned from the battle is relative to what the warrior's current level is compared to the level of the enemy.
// A warrior's experience starts from 100. Each time the warrior's experience increases by another 100, the warrior's level rises to the next level.
// A warrior's experience is cumulative, and does not reset with each rise of level. The only exception is when the warrior reaches level 100, with which the experience stops at 10000
// At every 10 levels, your warrior will reach a new rank tier. (ex. levels 1-9 falls within "Pushover" tier, levels 80-89 fall within "Champion" tier, etc.)
// A warrior cannot progress beyond level 100 and rank "Greatest".
// Battle Progress Rules & Calculations:

// If an enemy level does not fall in the range of 1 to 100, the battle cannot happen and should return "Invalid level".
// Completing a battle against an enemy with the same level as your warrior will be worth 10 experience points.
// Completing a battle against an enemy who is one level lower than your warrior will be worth 5 experience points.
// Completing a battle against an enemy who is two levels lower or more than your warrior will give 0 experience points.
// Completing a battle against an enemy who is one level higher or more than your warrior will accelarate your experience gaining. The greater the difference between levels, the more experinece your warrior will gain. The formula is 20 * diff * diff where diff equals the difference in levels between the enemy and your warrior.
// However, if your warrior is at least one rank lower than your enemy, and at least 5 levels lower, your warrior cannot fight against an enemy that strong and must instead return "You've been defeated".
// Every successful battle will also return one of three responses: "Easy fight", "A good fight", "An intense fight". Return "Easy fight" if your warrior is 2 or more levels higher than your enemy's level. Return "A good fight" if your warrior is either 1 level higher or equal to your enemy's level. Return "An intense fight" if your warrior's level is lower than the enemy's level.
// Logic Examples:

// If a warrior level 1 fights an enemy level 1, they will receive 10 experience points.
// If a warrior level 1 fights an enemy level 3, they will receive 80 experience points.
// If a warrior level 5 fights an enemy level 4, they will receive 5 experience points.
// If a warrior level 3 fights an enemy level 9, they will receive 720 experience points, resulting in the warrior rising up by at least 7 levels.
// If a warrior level 8 fights an enemy level 13, they will receive 0 experience points and return "You've been defeated". (Remember, difference in rank & enemy level being 5 levels higher or more must be established for this.)
// If a warrior level 6 fights an enemy level 2, they will receive 0 experience points.
// Training Rules & Calculations:

// In addition to earning experience point from battles, warriors can also gain experience points from training.
// Training will accept an array of three elements (except in java where you'll get 3 separated arguments): the description, the experience points your warrior earns, and the minimum level requirement.
// If the warrior's level meets the minimum level requirement, the warrior will receive the experience points from it and store the description of the training. It should end up returning that description as well.
// If the warrior's level does not meet the minimum level requirement, the warrior doesn not receive the experience points and description and instead returns "Not strong enough", without any archiving of the result.
// Code Examples:

// var bruce_lee = new Warrior();
// bruce_lee.level();        // => 1
// bruce_lee.experience();   // => 100
// bruce_lee.rank();         // => "Pushover"
// bruce_lee.achievements(); // => []
// bruce_lee.training(["Defeated Chuck Norris", 9000, 1]); // => "Defeated Chuck Norris"
// bruce_lee.experience();   // => 9100
// bruce_lee.level();        // => 91
// bruce_lee.rank();         // => "Master"
// bruce_lee.battle(90);     // => "A good fight"
// bruce_lee.experience();   // => 9105
// bruce_lee.achievements(); // => ["Defeated Chuck Norris"]'
const rangeRanks = [
  { rank: "Pushover", level: 9 },
  { rank: "Novice", level: 19 },
  { rank: "Fighter", level: 29 },
  { rank: "Warrior", level: 39 },
  { rank: "Veteran", level: 49 },
  { rank: "Sage", level: 59 },
  { rank: "Elite", level: 69 },
  { rank: "Conqueror", level: 79 },
  { rank: "Champion", level: 89 },
  { rank: "Master", level: 99 },
  { rank: "Greatest", level: 100 },
];

class Warrior {
  constructor() {
    (this._level = 1),
      (this._experience = 100),
      (this._rank = "Pushover"),
      (this._achievements = []);
  }
  // Metodo para verificar la experiencia y acordarla con el nivel
  experienceRank() {
    if (this._experience <= 10000) {
      this._level = Math.trunc(this._experience / 100);
      const rank = rangeRanks.find(
        (rankLevel) => this._level <= rankLevel.level
      );
      this._rank = rank.rank;
    } else {
      this._experience = 10000;
      this._level = 100;
      this._rank = "Greatest";
    }
  }
  rankEnemy(enemy_level) {
    return rangeRanks.find((rankLevel) => enemy_level <= rankLevel.level).rank;
  }

  level() {
    return this._level;
  }

  experience() {
    return this._experience;
  }

  rank() {
    return this._rank;
  }

  achievements() {
    return this._achievements;
  }

  training(list) {
    if (this._level >= list[2]) {
      this._achievements.push(list[0]);
      this._experience += list[1];
      this.experienceRank();
      return list[0];
    } else {
      return "Not strong enough";
    }
  }

  battle(enemy_level) {
    if (enemy_level > 100) {
      ("Invalid level");
    }
    const enemyRank = rangeRanks.find(
      (rankLevel) => this.rankEnemy(enemy_level) == rankLevel.rank
    );
    const warriorRank = rangeRanks.find(
      (rankLevel) => this._rank == rankLevel.rank
    );
    // console.log("el rango del enemigo es", enemyRank.rank);
    // console.log("el rango de tu guerrero es", warriorRank.rank);
    // console.log("el nivel del enemigo es", enemy_level);
    // console.log("el nivel de tu guerro es", this._level);
    if (enemyRank.level > warriorRank.level && enemy_level >= this._level + 5) {
      return "You've been defeated";
    }
    //GOOD
    if (enemy_level > 100 || enemy_level < 1) {
      return "Invalid level";
    }

    if (enemy_level === this._level) {
      this._experience += 10;
      this.experienceRank();
      return "A good fight";
    }
    if (enemy_level === this._level - 1) {
      this._experience += 5;
      this.experienceRank();
      return "A good fight";
    }
    if (enemy_level <= this._level - 2) {
      this._experience += 0;
      this.experienceRank();
      return "Easy fight";
    }
    if (enemy_level > this._level) {
      this._experience +=
        20 * (enemy_level - this._level) * (enemy_level - this._level);
      this.experienceRank();
      return "An intense fight";
    }
  }
}

const Goku = new Warrior();
console.log(Goku);
console.log(Goku.training(["Do ten push-ups", 95, 1]));
console.log(Goku.battle(0));
console.log(Goku.battle(1));
console.log(Goku.battle(3));
Goku.training(["Survive one night at the Forest of Death", 170, 2]);
Goku.training(["Mastered the Spirit Bomb", 1580, 10]);
Goku.battle(2);
Goku.battle(9);
console.log(Goku);
console.log(Goku.battle(14));

console.log(Goku);
