#!/usr/bin/env node

import { calculate } from "./calculator.js";

const [leftText, operator, rightText] = process.argv.slice(2);
const left = Number(leftText);
const right = Number(rightText);

if (leftText === undefined || rightText === undefined || operator === undefined) {
  console.error("Usage: node src/cli.js <number> <+|-|*|/> <number>");
  process.exitCode = 1;
} else {
  try {
    console.log(calculate(left, operator, right));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
