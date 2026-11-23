# Short Reflection Report

At first, the hardest part of learning Git was understanding that saving a
file, staging it, committing it, and pushing it are separate steps. I also had
to pay attention to which branch I was on. Creating a feature branch helped me
make changes without immediately affecting the main version. The idea of a
merge conflict seemed intimidating, but conflict markers make it clear which
lines need a decision. I learned that resolving a conflict means understanding
both changes, not simply choosing one automatically.

The CI pipeline made checking changes more consistent. Instead of relying on
someone to remember every command, GitHub Actions runs the build check, linter,
and tests for each push to the main branch and each pull request. A failed
check points the team to a problem before a change is merged. This saves time
and gives everyone the same feedback, although a passing pipeline does not
replace reading the code or trying the program.

Version control and QA also make teamwork safer. Small commits explain how a
feature developed, branches let classmates work independently, and pull
requests create a place to ask questions before combining work. Tests catch
mistakes in arithmetic and command-line input, while the linter catches
inconsistent style and common errors. Peer feedback can identify confusing
code that automated tools miss. I would improve the process by writing tests
alongside each feature and asking reviewers specific questions. These habits
make the project easier to understand, verify, and maintain as a team.
