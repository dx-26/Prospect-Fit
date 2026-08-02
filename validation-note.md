# Validation Note

## Test cases

All cases below were executed against the live tool (a local static server serving `index.html`, `styles.css`, and `app.js`, exercised through both direct UI interaction and scripted DOM checks to confirm exact scores).

| Test | Inputs or action | Expected result | Result |
|---|---|---|---|
| Blank form | Open or reset the tool | Score is 0, status is "Incomplete assessment", qualification disabled | Passed — score 0 |
| Strong fit | AI/data need (25), 120–249 learners (25), $50K+ budget (25), final decision-maker (25), within 3 months (25) | Score is 100 and "Strong potential" recommendation appears | Passed — score 100 |
| Sample prospect | Select "Load sample prospect" | Fictional Northstar data loads (AI/data need, ~120 learners, $25K–$49,999, direct sponsor access, within 3 months) | Passed — score 86, "Strong potential" |
| Poor fit | General workforce training (14), under 20 learners (6), under $10K (5), early researcher (6), 12+ months (5) | Score remains below 50 and "Low current fit" recommendation appears | Passed — score 30 |
| Incomplete data | Select only one scored factor (training need) | Unanswered factors score zero; total reflects only the answered field | Passed — score 25, "Low current fit" |
| Thresholds | Totals of exactly 49, 50, 74, and 75 | Recommendation changes at 50 and 75, not before | Passed — 49 "Low current fit", 50 "Further discovery needed", 74 "Further discovery needed", 75 "Strong potential" |
| Human sign-off | Attempt qualification before checking the review box | "Qualify for follow-up" button stays disabled | Passed |
| Sign-off flow | Check the review box, then click "Qualify for follow-up" | Confirmation message appears: "Review recorded..." | Passed |
| Reset | Load sample, check review, qualify, then click "Clear form" | All fields, the score, the review checkbox, and the confirmation message return to their default/hidden state | Passed |
| Visual direction | Review at desktop and mobile (375px) widths | Professional Navy & Teal styling remains consistent | Passed |
| Narrow screen | Inspect at 375×812 (mobile) viewport | Form card and score card stack into a single column, "Qualify for follow-up" spans full width, no horizontal overflow | Passed |

## Bug found and corrected

The "Timeline & audience" category blends implementation timeline (65% weight) and audience size (35% weight) into a 0–25 point score. The audience dropdown's best option ("120–249 learners") was originally valued at 20 out of a possible 25, so even a maximum-timeline, maximum-audience answer could only produce `round(25 × 0.65 + 20 × 0.35) = 23` — capping the category two points short and making a total score of 100 mathematically unreachable. A prospect that was a genuinely perfect fit on every factor could never see a 100.

Fix: the audience option values were rescaled so the sweet-spot answer ("120–249 learners") is worth the full 25, with "250+ learners" valued slightly lower (20) to still reflect that very large initial cohorts are harder to deliver well. A maximum-fit prospect now correctly scores 100, and the "Load sample prospect" data (which lands in that 120–249 learner band) now scores 86 instead of the previous 84. `app.js`'s sample-loading function was updated to match the new option value.

## Other verified edge cases

- Missing answers always contribute zero points, and the denominator stays fixed at 100 — an incomplete form cannot appear more qualified than it is.
- Narrative-only fields (organization name, business challenge) do not affect the numeric score, since the model only scores the five defined fit inputs. A real workflow should still require complete contact and challenge information before any outreach.
- The qualification button re-locks correctly if the review checkbox is unchecked after being checked.

## Limitation

The weights are classroom assumptions rather than statistically validated predictors of sales success. A real company should compare the model with historical win/loss data, review it for unfair bias, and revise the weights before operational use.
