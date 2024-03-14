/*
 * Create Player.
 * Players can take turns playing the game by attacking the enemy Gameboard.
 * The game is played against the computer, so make the ‘computer’ capable of making random plays.
 * The AI does not have to be smart, but it should know whether or not a given move is legal
 * (i.e. it shouldn’t shoot the same coordinate twice).
 */

function Player(turn) {
  function attack(gameBoard, x, y) {
    if (turn === "computer" && !x && !y) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }

    return gameBoard.receiveAttack(x, y);
  }

  return { attack };
}

module.exports = { Player };
