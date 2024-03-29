/*
 * Begin your app by creating the Ship class/factory (your choice).
 * Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.
 * REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.
 * Ships should have a hit() function that increases the number of ‘hits’ in your ship.
 * isSunk() should be a function that calculates whether a ship is considered sunk based on its length and the number of hits it has received.
 */

function Ship(length) {
  let noOfHits = 0;

  const hit = () => {
    noOfHits++;
  };

  const isSunk = () => noOfHits === length;

  const getHits = () => noOfHits;

  const getLength = () => length;

  return { hit, isSunk, getHits, getLength };
}

module.exports = { Ship };
