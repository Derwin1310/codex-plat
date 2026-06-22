---
name: ai-radar-hypotheses
description: Turn evidence-backed AI Radar signals into bounded, testable hypotheses about likely effects on builders, users, markets, or technology adoption. Use when asked to derive, compare, prioritize, validate, or invalidate hypotheses from AI news, releases, papers, repositories, or an AI Radar signal diary.
---

# AI Radar Hypotheses

## Workflow

1. Start from supplied AI Radar signals, preserving each source URL, publication date, evidence, and state. If signals are missing or stale, use `$ai-radar-news` to collect or refresh them before hypothesizing.
2. Separate facts from inference. Treat source evidence as facts only to the confidence warranted by its `state`; label all causal or predictive statements as hypotheses.
3. Form a small set of hypotheses. Make each specific enough to be falsified and avoid restating the signal as a conclusion.
4. Specify the observable prediction, affected population, time horizon, mechanism, and disconfirming evidence for each hypothesis.
5. Rank hypotheses by decision value: expected impact, likelihood, evidence strength, reversibility, and cost of validation. Do not use numerical precision that the evidence cannot support.
6. Recommend the cheapest validation action that could materially update the decision. Prefer primary evidence, reproducible experiments, adoption data, and direct user feedback.

## Required output

Use this compact structure for each hypothesis:

| Field | Content |
| --- | --- |
| Hypothesis | Falsifiable claim, qualified with its scope and horizon. |
| Grounding | Signal IDs and source-backed facts that motivate it. |
| Mechanism | Why the signal could produce the predicted outcome. |
| Prediction | Observable metric or event, population, threshold, and deadline. |
| Confidence | Low, medium, or high, with the principal uncertainty. |
| Disconfirming evidence | What would weaken or invalidate the hypothesis. |
| Next validation | Lowest-cost decisive test and its decision consequence. |

After the table, state the single highest-priority validation and the decision it will inform.

## Guardrails

- Do not turn a vendor announcement, benchmark, demo, or social reaction into proof of adoption or business impact.
- Do not infer causation from co-occurrence without a plausible mechanism and an alternative explanation.
- Keep time-sensitive claims dated; distinguish announced, available, observed, and independently verified.
- Expose important assumptions and confounders, including pricing, access restrictions, regional availability, benchmark contamination, and selection bias.
- Treat a negative result as useful evidence. Revise or retire a hypothesis when its prediction fails.
