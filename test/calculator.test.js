import assert from "node:assert/strict";
import test from "node:test";

import { calculate } from "../src/calculator.js";

test("calculate handles all supported operations", () => {
  assert.equal(calculate(8, "+", 4), 12);
  assert.equal(calculate(8, "-", 4), 4);
  assert.equal(calculate(8, "*", 4), 32);
  assert.equal(calculate(8, "/", 4), 2);
});

test("calculate rejects unsupported operators", () => {
  assert.throws(() => calculate(2, "^", 3), {
    name: "TypeError",
    message: "Unsupported operator: ^",
  });
});

test("calculate rejects division by zero", () => {
  assert.throws(() => calculate(2, "/", 0), {
    name: "RangeError",
    message: "Cannot divide by zero.",
  });
});

test("calculate rejects non-finite inputs", () => {
  assert.throws(() => calculate(Number.NaN, "+", 3), {
    name: "TypeError",
    message: "Both inputs must be finite numbers.",
  });
});
