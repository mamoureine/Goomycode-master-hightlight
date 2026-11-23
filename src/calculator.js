export function calculate(left, operator, right) {
  if (!Number.isFinite(left) || !Number.isFinite(right)) {
    throw new TypeError("Both inputs must be finite numbers.");
  }

  switch (operator) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "/":
      if (right === 0) {
        throw new RangeError("Cannot divide by zero.");
      }
      return left / right;
    default:
      throw new TypeError(`Unsupported operator: ${operator}`);
  }
}
