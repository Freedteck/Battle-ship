import { Gameboard } from "./gameBoard";
import { Ship } from "./ship";

test("This Ship has received Attack", () => {
  const ship = Ship(3);
  const game = Gameboard();
  game.placeShip(ship, 0, 0);
  game.placeShip(ship, 4, 1);

  expect(game.receiveAttack(5, 1)).toBe(true);
});

test("The ship is hit", () => {
  const ship = Ship(3);
  const game = Gameboard();
  game.placeShip(ship, 0, 0);
  game.receiveAttack(1, 0);
  expect(ship.getHits()).toBe(1);
});

test("All ships are Sunk", () => {
  const ship1 = Ship(3);
  const ship2 = Ship(3);
  const game = Gameboard();
  game.placeShip(ship1, 0, 0);
  game.placeShip(ship2, 4, 1);
  game.receiveAttack(1, 0);
  game.receiveAttack(2, 0);
  game.receiveAttack(0, 0);
  game.receiveAttack(4, 1);
  game.receiveAttack(5, 1);
  game.receiveAttack(6, 1);

  expect(game.checkAllShips()).toBe(true)
});
