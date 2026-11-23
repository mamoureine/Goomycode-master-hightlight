const { add, subtract, multiply, divide } = require("./calculator");

const operations = { add, subtract, multiply, divide };

function run(args, output = console.log, reportError = console.error) {
  const [operation, leftText, rightText, ...extraArgs] = args;
  const calculate = Object.hasOwn(operations, operation)
    ? operations[operation]
    : undefined;

  if (!calculate || !leftText || !rightText || extraArgs.length > 0) {
    reportError("Usage: node src/cli.js <add|subtract|multiply|divide> <number> <number>");
    return 1;
  }

  const left = Number(leftText);
  const right = Number(rightText);

  try {
    output(String(calculate(left, right)));
    return 0;
  } catch (error) {
    reportError(error.message);
    return 1;
  }
}

if (require.main === module) {
  process.exitCode = run(process.argv.slice(2));
}

module.exports = { run };
