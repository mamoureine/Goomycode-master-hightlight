# Git, CI, and QA Calculator

A small command-line calculator for practicing Git collaboration, continuous
integration, and quality assurance. It uses only JavaScript and Node.js at
runtime.

## Run it

Install Node.js 22 or later, then install the development dependencies and run
the checks:

```sh
npm ci
npm run build
npm run lint
npm test
```

Try a calculation:

```sh
node src/cli.js add 8 5
```

Supported operations are `add`, `subtract`, `multiply`, and `divide`. The
calculator accepts finite numbers and reports invalid input or division by zero
as an error.

## Part 1: Practice Git collaboration

For a new project, create an empty GitHub repository, then connect it to the
local project:

```sh
git init
git add .
git commit -m "Initial calculator project"
git branch -M main
git remote add origin https://github.com/<your-name>/<repository>.git
git push -u origin main
```

For later changes, stage only the intended files and commit with a useful
message:

```sh
git status
git add src/calculator.js test/calculator.test.js
git commit -m "Add calculator subtraction"
git push
```

Develop a feature on its own branch and open a pull request when it is ready:

```sh
git switch main
git pull --no-rebase origin main
git switch -c feature/subtraction
# Make and test the change.
git add .
git commit -m "Add subtraction operation"
git push -u origin feature/subtraction
```

Ask a classmate to review the pull request, leave specific feedback, and merge
only after checks pass and requested changes are addressed. Before starting
another task, update `main` and create a new branch. To practice a merge
conflict, have two collaborators edit the same line on separate branches.
Integrate the latest `main` into the feature branch with
`git merge origin/main`, edit conflict markers so the intended change remains,
then run the checks, stage the resolved file, and commit. Do not commit the
`<<<<<<<`, `=======`, or `>>>>>>>` markers.

## Part 2: Continuous integration

The GitHub Actions workflow in `.github/workflows/ci.yml` runs for pushes to
`main` and pull requests targeting `main`. It installs the locked dependencies,
checks the JavaScript build, runs ESLint, and executes the unit and CLI tests.
A failed step makes the workflow fail and is visible in the commit and pull
request checks. GitHub can email or otherwise notify you about failed workflow
runs; check **Settings → Notifications → Actions** in your account to configure
those notifications.

## Part 3: Quality assurance

The tests in `test/` cover arithmetic, invalid values, division by zero, and
command-line input/output and failure behavior. ESLint checks the project for
style and common JavaScript mistakes. For each pull request, review whether the
change meets its goal, handles invalid input, has relevant tests, and passes
all CI checks. Record actual peer feedback and any resulting changes in
[`QA_REPORT.md`](./QA_REPORT.md); do not claim a review that did not happen.
