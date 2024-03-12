import { Ship } from "./ship";

test("this ship's Length is 4", () => {
  expect(Ship(2).getLength()).toBe(2)
})
test.skip("This Ship has been HIt!!!", () => {
  const ship = Ship(3)
  ship.hit()
  ship.hit()
  expect(ship.getHits()).toBe(2)
})

test.skip("This Ship is Sunk!!!", () => {
  const ship = Ship(3)
  ship.hit()
  ship.hit()
  ship.hit()
  expect(ship.isSunk()).toBe(true)
})