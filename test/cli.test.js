import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";

const cliPath = fileURLToPath(new URL("../src/cli.js", import.meta.url));

test("CLI prints the result for valid input", () => {
  const result = spawnSync(
    process.execPath,
    [cliPath, "8", "+", "4"],
    { encoding: "utf8" },
  );

  assert.equal(result.status, 0);
  assert.equal(result.stdout.trim(), "12");
});

test("CLI reports invalid arithmetic as an error", () => {
  const result = spawnSync(
    process.execPath,
    [cliPath, "8", "/", "0"],
    { encoding: "utf8" },
  );

  assert.equal(result.status, 1);
  assert.match(result.stderr, /Cannot divide by zero/);
});
