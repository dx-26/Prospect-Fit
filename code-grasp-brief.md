# Stage 2: Claude Code GRASP Brief

## Goal

Build a browser-based client fit-and-intake form that allows a business-development representative to enter prospect information, see a transparent 100-point fit score, and complete a human sign-off before recording a follow-up recommendation.

## Resources

- Exact input: `cowork-output.md`, UTF-8 Markdown
- Required app files: `index.html`, `styles.css`, and `app.js`
- Browser APIs only; no database, external API, authentication, or build tools
- Scoring inputs: training need, audience size, budget readiness, decision authority, and implementation timeline
- One consistent Professional Navy & Teal visual direction

## Autonomy limits

Claude Code may choose accessible HTML structure, responsive layout, field wording, validation behavior, and implementation details. It may not add prospect outreach, automatic approval or rejection, external data transmission, hidden scoring rules, fabricated customer claims, or storage of intake data. The final action must remain disabled until the user checks a human-review confirmation.

## Sign-off point

I will personally review the completed inputs, category scores, overall recommendation, and human-review notice in the working browser tool before accepting the build as final or using it to discuss a prospect.

## Proof

The tool must open locally without installation; respond to every scored input; total exactly 0–100; show four category contributions; change recommendations at 50 and 75 points; give missing fields zero points; reset correctly; load a sample; use the Professional Navy & Teal design consistently; work at desktop and mobile widths; and prevent qualification until human review is checked. Tests must include a strong-fit prospect, poor-fit prospect, blank form, and incomplete form.

## Ready-to-use Claude Code prompt

Build the interactive tool described in this GRASP brief using plain HTML, CSS, and JavaScript. Read `cowork-output.md` first. Create a responsive, accessible intake form with live scoring, visible category breakdowns, recommendation thresholds, sample-data and reset controls, a consistent Professional Navy & Teal visual direction, and a required human-review checkbox. Keep the scoring logic transparent in the interface and README. Do not transmit or persist entered prospect data. Run the validation cases in `validation-note.md`, correct any failures, and then prepare the repository files for GitHub.
