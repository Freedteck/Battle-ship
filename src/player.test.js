import { Player } from "./player";
import { Gameboard } from "./gameBoard";
import { Ship } from "./ship";

const gameBoard1 = Gameboard();
const gameBoard2 = Gameboard();

// Player game
const ship1 = Ship(4);
const ship2 = Ship(7);
const ship3 = Ship(3);
const ship4 = Ship(2);
gameBoard1.placeShip(ship1, 0, 1);
gameBoard1.placeShip(ship2, 3, 1);
gameBoard1.placeShip(ship3, 2, 8);
gameBoard1.placeShip(ship4, 9, 1);

// computer Game
const ship5 = Ship(3);
const ship6 = Ship(4);
const ship7 = Ship(6);
const ship8 = Ship(2);
gameBoard2.placeShip(ship5, 9, 1);
gameBoard2.placeShip(ship6, 4, 4);
gameBoard2.placeShip(ship7, 0, 1);
gameBoard2.placeShip(ship8, 6, 5);

test("This Player has played", () => {
  
  const player = Player("player");

  expect(player.attack(gameBoard2, 0, 6)).toBe(true);
});

test("Computer has played", () => {

  const computer = Player("computer");

  expect(computer.attack(gameBoard1)).toBe(true);
});
