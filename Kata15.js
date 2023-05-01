// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
  let index = 0;
  let plays1 = ""; // "12345"
  let plays2 = ""; // "678"
  const playsWins = ["123", "456", "789", "159", "357", "147", "258", "369"];
  // TODO: Check if the board is solved!
  board.forEach((row) => {
    row.forEach((casilla) => {
      index += 1;
      if (casilla == 1) {
        plays1 += index.toString();
      }
      if (casilla == 2) {
        plays2 += index.toString();
      }
    });
  });
  let winplayer = playsWins
    .map((gamewin) => gamewin.split("").every((char) => plays1.includes(char)))
    .find((play) => play == true);
  if (winplayer) {
    return 1;
  } else {
    let winplayer = playsWins
      .map((gamewin) =>
        gamewin.split("").every((char) => plays2.includes(char))
      )
      .find((play) => play == true);
    if (winplayer) {
      return 2;
    } else {
      if (plays1.split("").length + plays2.split("").length == 9) {
        return 0;
      } else {
        return -1;
      }
    }
  }
}

console.log(
  isSolved([
    [2, 1, 1],
    [1, 2, 2],
    [2, 1, 1],
  ])
);
