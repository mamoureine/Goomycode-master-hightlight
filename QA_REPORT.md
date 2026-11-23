# QA Report

## Unit tests

`test/calculator.test.js` checks all four supported arithmetic operations,
rejects an unsupported operator and division by zero, and validates non-finite
inputs. The same test suite runs locally and in GitHub Actions.

## Linter

The project uses ESLint with rules for unused variables, duplicate imports,
unreachable code, and constant binary expressions. Initial local result:
`npm run lint` passed with no reported issues.

## Code review

No peer review has been conducted yet because this workspace is not connected to
a shared GitHub repository. To complete this section, open a pull request,
request a classmate's review, and record the pull request link, feedback, and
any resulting changes here.
