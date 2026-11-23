# Short Reflection

Learning Git, CI, and QA tools meant keeping several new ideas straight at once.
The most confusing Git part was understanding how the working tree, staging
area, commits, and branches are different. A merge conflict can also look
intimidating at first: Git marks the competing lines, but the developer still
has to decide which result is correct and commit the resolution. Practicing on
a small project makes it safer to learn these steps before working on a larger
team project.

The CI pipeline streamlines development by running the same checks whenever a
change is pushed or a pull request is opened. Instead of relying on someone to
remember every command, the workflow installs the project tools, checks style,
runs unit tests, and verifies that the JavaScript files parse correctly. A
failed check points the team to a problem before the change is merged. GitHub
also displays the result with the commit or pull request, while notification
delivery depends on account settings.

Version control improves collaboration because each change has a history, and
branches let students work on separate features without overwriting one
another's work. Pull requests provide a place to discuss proposed changes
before merging. Tests and linting make that collaboration more reliable: tests
check that the calculator's operations behave as expected, and linting catches
style and common code issues early. Together, these practices make changes
easier to understand, review, and fix. The next step is to connect this project
to a shared GitHub repository and complete a real peer review.
