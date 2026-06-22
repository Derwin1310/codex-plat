---
name: ai-radar-news
description: Research the latest artificial-intelligence news and turn it into evidence-backed AI Radar signals. Use when asked for current AI news, a daily or weekly AI briefing, an AI Radar report, or a JSON diary of AI signals.
---

# AI Radar News

## Workflow

1. Browse for current AI news. Treat recency as a requirement: state the as-of date and order signals by publication date.
2. Prefer primary sources (company, government, research organization) for announcements. Use reputable reporting only when the primary source is unavailable; label it `reported`.
3. Select the requested number of signals. Favor material changes to model availability or capability, policy, enterprise adoption, infrastructure, security, and developer workflows. Do not pad the result with rumors or commentary.
4. For every signal, write:
   - `source`: publisher and direct URL
   - `evidence`: specific, attributable fact; distinguish a company claim from independent reporting
   - `impact`: concrete consequence for builders, users, or the market
   - `action`: a practical next step
   - `state`: `confirmed`, `reported`, `monitoring`, or `retracted`
5. Present the results as a compact table unless the user explicitly requests JSON only.

## JSON diary

When the user asks to save the report, first look for `contracts/ai-radar-diary.schema.json` in the project. If absent, create a JSON Schema contract with this envelope:

```json
{
  "contractVersion": "1.0",
  "recordedAt": "YYYY-MM-DD",
  "signals": []
}
```

Each signal must require `id`, `publishedAt`, `title`, `source` (`publisher`, `url`), `evidence`, `impact`, `action`, and `state`. Restrict `state` to the four values above; reject unknown properties.

Save the diary as `fixtures/ai-radar-diary-YYYY-MM-DD.json`. Validate that it is valid JSON, includes all required fields, uses ISO dates, contains HTTPS source URLs, and only uses allowed states. Do not overwrite an existing diary without the user's permission; save a new dated file instead.

## Quality bar

- Never present a rumor as confirmed.
- Link each signal directly to its supporting source.
- If no reliable items exist for the exact time window, say so and widen the search window explicitly.
- Keep evidence separate from inference: impact and action are AI Radar analysis, not source claims.
