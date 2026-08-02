# ProspectFit: Client Fit-and-Intake Form

ProspectFit is an interactive business-development tool that helps a fictional workforce-training company consistently evaluate organizations interested in customized AI, cloud, analytics, product-management, or leadership training.

## Open and use the tool

1. Download or clone this repository.
2. Open `index.html` in a modern web browser. No installation or server is required.
3. Enter prospect information or select **Load sample prospect**.
4. Watch the fit score and recommendation update.
5. Review the inputs and select the human-review checkbox before recording qualification.
6. Use the Professional Navy & Teal interface to review the score and recommendation.

## Scoring model

The 100-point score uses four categories worth up to 25 points each: training-need alignment, budget readiness, decision access, and delivery fit. Delivery fit combines implementation timeline (65%) and audience size (35%), with the 120–249 learner range weighted as the ideal cohort size. Missing answers earn zero points. A prospect that is a maximum fit on every factor scores exactly 100; the built-in sample prospect scores 86.

- 75–100: Strong potential
- 50–74: Further discovery needed
- 1–49: Low current fit
- 0: Incomplete assessment

The score is a prioritization aid—not a final sales decision. A representative must review the inputs before qualifying, rejecting, or contacting a prospect.

## Files

- `index.html`, `styles.css`, and `app.js`: interactive tool
- `cowork-grasp-brief.md`: Stage 1 brief and Cowork prompt
- `code-grasp-brief.md`: Stage 2 brief and Claude Code prompt
- `cowork-output.md`: fictional Stage 1 research packet
- `validation-note.md`: functional and edge-case testing
- `reflection.md`: 300–500-word reflection

## Privacy

All example information is fictional. The browser-only prototype does not transmit, save, or persist prospect data.
