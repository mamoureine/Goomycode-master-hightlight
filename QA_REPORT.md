# QA Report

## Automated tests

The unit tests in `test/calculator.test.js` exercise addition, subtraction,
multiplication, division, rejection of non-finite/non-numeric values, and
division by zero. The CLI tests in `test/cli.test.js` check successful output,
an unsupported operation, invalid numeric input, and division by zero. Run
them with `npm test`.

## Linter

ESLint is configured to report unused variables and selected common JavaScript
errors, while enforcing consistent quotes and semicolons. `npm run lint`
completed without findings in the local verification run.

The local build check and all six tests also passed.

## Code review

No peer pull-request reviews have been conducted as part of creating this
starter project. Students should record each real review here, including the
pull request, reviewer feedback, and changes made. Do not report a review until
a classmate has actually completed it.
