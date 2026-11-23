const assert = require("node:assert/strict");
const test = require("node:test");
const { add, subtract, multiply, divide } = require("../src/calculator");

test("supports the four arithmetic operations", () => {
  assert.equal(add(8, 5), 13);
  assert.equal(subtract(8, 5), 3);
  assert.equal(multiply(8, 5), 40);
  assert.equal(divide(10, 4), 2.5);
});

test("rejects values that are not finite numbers", () => {
  assert.throws(() => add("8", 5), TypeError);
  assert.throws(() => subtract(Number.NaN, 1), TypeError);
  assert.throws(() => multiply(1, Number.POSITIVE_INFINITY), TypeError);
});

test("rejects division by zero", () => {
  assert.throws(() => divide(5, 0), {
    name: "RangeError",
    message: "Cannot divide by zero",
  });
});
