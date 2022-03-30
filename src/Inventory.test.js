import Inventory from "./Inventory";


test('a new inventory contains zero clicks', () => {
   const inventory = new Inventory();
   expect(inventory.clicks()).toBe(0)
});

test('a new inventory contains 0 wire', () => {
   const inventory = new Inventory()
   expect(inventory.wire()).toBe(0)
});

test('returns an inventory with a click', () => {
   const state = {clicks: 0}
   const inventory = new Inventory();
   const newState = inventory.addClicks(1, state);
   expect(newState.clicks).toBe(1)
});

test('can add autoclickers', () => {
   const state = {autoclickers: 0}
   const inventory = new Inventory();
   const newState = inventory.addAutoClickers(1, state);
   expect((newState.autoclickers)).toBe(1)
});

test('can purchase wire', () => {
   const state = {wire: 0, money: 100};
   const inventory = new Inventory();
   const newState = inventory.purchaseWire(1, state);
   expect(newState.wire).toBe(500);
   expect(newState.money).toBe(95.00);
});

test('has money', () => {
   const inventory = new Inventory()
   expect(inventory.money()).toBe(100.00)
});