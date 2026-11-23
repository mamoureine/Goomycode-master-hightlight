function assertFiniteNumber(value, name) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number`);
  }
}

function add(left, right) {
  assertFiniteNumber(left, "left");
  assertFiniteNumber(right, "right");
  return left + right;
}

function subtract(left, right) {
  assertFiniteNumber(left, "left");
  assertFiniteNumber(right, "right");
  return left - right;
}

function multiply(left, right) {
  assertFiniteNumber(left, "left");
  assertFiniteNumber(right, "right");
  return left * right;
}

function divide(left, right) {
  assertFiniteNumber(left, "left");
  assertFiniteNumber(right, "right");
  if (right === 0) {
    throw new RangeError("Cannot divide by zero");
  }
  return left / right;
}

module.exports = { add, subtract, multiply, divide };
