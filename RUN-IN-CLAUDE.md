# Run Assignment 4A in Claude Cowork and Claude Code

This project is designed to be completed in two required stages. Run Cowork first, review its research packet, and then use that approved packet as the input for Claude Code.

## Stage 1: Claude Cowork

1. Open Claude and select **Cowork**.
2. Create or connect a working folder named `assignment-4a-prospectfit`.
3. Place `cowork-grasp-brief.md` in that folder.
4. Tell Cowork to open the file, then paste the prompt below.

### Cowork prompt

> Read `cowork-grasp-brief.md` completely and follow its GRASP brief. Prepare the structured research packet for the fictional prospect Northstar Manufacturing. Use open-web research only for general, current manufacturing workforce and training signals. Clearly separate sourced industry information from invented scenario details and assumptions. Include the prospect profile, relevant industry signals, hypothesized needs, known and unknown information, at least five intake questions, and structured fields for training need, audience size, budget readiness, decision authority, implementation timeline, and business challenge. Do not contact anyone, access private information, or make a final qualification decision. Save the result as `cowork-output.md` in the connected folder, then stop for my review.

### Required human sign-off

Open `cowork-output.md` and check that:

- industry signals are presented as general research rather than facts about the fictional company;
- assumptions and unknown information are labeled;
- all scoring fields contain a value or `unknown`;
- at least five useful intake questions are included; and
- no contact, qualification, or external action occurred.

Correct anything that fails this review. Do not begin the Code stage until the file is approved.

## Stage 2: Claude Code

1. Open Claude Code.
2. Open the same `assignment-4a-prospectfit` folder as the project directory.
3. Confirm that the folder contains the approved `cowork-output.md` and `code-grasp-brief.md`.
4. Paste the prompt below.

### Claude Code prompt

> Read `code-grasp-brief.md` and the approved `cowork-output.md` completely before changing any files. Build the browser-based ProspectFit client fit-and-intake form in plain HTML, CSS, and JavaScript. Create or update `index.html`, `styles.css`, and `app.js`. The tool must provide live transparent scoring from 0 to 100, four visible score categories, recommendation thresholds at 50 and 75, missing-field handling, sample and reset controls, one consistent Professional Navy & Teal visual direction, responsive and accessible design, and a required human-review checkbox before qualification can be recorded. Do not transmit or persist prospect intake data. Test the blank, incomplete, poor-fit, and strong-fit cases described in `validation-note.md`; correct any failures. Update `README.md` and `validation-note.md` with accurate run instructions and test results. Stop after showing me a concise summary of the files changed and tests completed. Do not publish, contact prospects, or make a final sales decision.

## Test and review the tool

Open `index.html` in a browser and verify:

1. A blank form produces a score of 0.
2. Missing answers receive zero points without breaking the form.
3. A poor-fit example stays below 50.
4. A strong-fit example reaches at least 75.
5. The recommendation changes at 50 and 75.
6. The Professional Navy & Teal design remains clear and consistent at desktop and mobile widths.
7. Reset and sample-data controls work.
8. The final qualification action stays disabled until human review is checked.

## Publish to GitHub

After reviewing the final files, ask Claude Code:

> Prepare this folder for a new GitHub repository named `assignment-4a-client-fit-intake`. Verify that the README explains how to open the tool and that no confidential data, credentials, or unnecessary generated files are included. Then guide me through `gh auth login`, repository creation, committing, and pushing. Ask before creating the remote repository or pushing anything.

If GitHub authentication fails, run `gh auth login` directly in the Claude Code terminal and follow the browser authentication instructions. Submit the final repository URL on Canvas.
