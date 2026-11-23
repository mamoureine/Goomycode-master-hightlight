const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const path = require("node:path");
const test = require("node:test");

const cliPath = path.join(__dirname, "..", "src", "cli.js");

function invokeCli(args) {
  return spawnSync(process.execPath, [cliPath, ...args], { encoding: "utf8" });
}

test("prints the result and succeeds for valid input", () => {
  const result = invokeCli(["add", "8", "5"]);

  assert.equal(result.status, 0);
  assert.equal(result.stdout.trim(), "13");
  assert.equal(result.stderr, "");
});

test("reports invalid operations and numbers as failures", () => {
  const badOperation = invokeCli(["power", "2", "3"]);
  assert.equal(badOperation.status, 1);
  assert.match(badOperation.stderr, /Usage:/);

  const inheritedOperation = invokeCli(["toString", "2", "3"]);
  assert.equal(inheritedOperation.status, 1);
  assert.match(inheritedOperation.stderr, /Usage:/);

  const badNumber = invokeCli(["divide", "five", "2"]);
  assert.equal(badNumber.status, 1);
  assert.match(badNumber.stderr, /finite number/);
});

test("reports division by zero as a failure", () => {
  const result = invokeCli(["divide", "5", "0"]);

  assert.equal(result.status, 1);
  assert.match(result.stderr, /Cannot divide by zero/);
});
