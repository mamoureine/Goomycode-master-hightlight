# Classroom Calculator

A small JavaScript project for practicing Git, continuous integration, and
quality assurance. The calculator supports addition, subtraction,
multiplication, and division through a command-line interface.

## Requirements

- Node.js 22 or later
- npm

## Run it

```sh
npm install
node src/cli.js 8 + 4
```

The result is `12`. Supported operators are `+`, `-`, `*`, and `/`. Division by
zero and invalid operators produce a clear error.

## Test and lint

```sh
npm ci
npm test
npm run lint
npm run build
```

The GitHub Actions workflow runs tests, lint, and a JavaScript syntax check on
pushes and pull requests targeting `main`. GitHub reports the check result on
the commit and pull request; notification delivery depends on each student's
GitHub notification settings.

## Git practice

Start a local repository with `git init`, then use `git status`, `git add`,
`git commit`, and `git log` to track changes. Create a feature branch with
`git switch -c feature/example`, make and commit a change, then merge it from
`main` with `git merge feature/example`.

To collaborate, add a shared remote (`git remote add origin <GitHub-URL>`), push
your branch (`git push -u origin <branch>`), and open a pull request for peer
review. Practice conflict resolution by making edits to the same lines on two
branches, merging one branch, then resolving the conflict markers in the other
before committing. No remote or peer review is configured for this local
exercise.

## Reports

- [QA report](QA_REPORT.md)
- [Short reflection](REFLECTION.md)
