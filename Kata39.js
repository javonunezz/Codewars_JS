// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  let towerBase = "*".repeat(nFloors + nFloors - 1);
  const towerList = towerBase.split("");
  let towerBuild = [];
  for (let i = 0; i < nFloors; i++) {
    towerBuild.push(towerList.join(""));
    towerList[towerList.length - 1 - i] = " ";
    towerList[i] = " ";
  }
  return towerBuild.reverse();
}

console.log(towerBuilder(3));
