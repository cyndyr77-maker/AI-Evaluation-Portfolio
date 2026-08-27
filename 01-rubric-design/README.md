# Case Study 1 — Rubric Design & Model Evaluation

> **Portfolio reconstruction:** This exercise was created to demonstrate evaluation methods used in professional AI training work. It does not reproduce proprietary prompts, client data, or project content.

## What this case study demonstrates

This case study shows how I define quality before scoring a model response. The goal is not to decide whether an answer simply "sounds good." The goal is to determine whether it satisfies explicit requirements, avoids unsupported assumptions, prioritizes correctly, and produces an operationally usable result.

The example uses a realistic business-operations scenario because it creates several dimensions that must be evaluated independently: instruction following, constraint handling, prioritization, factual support, completeness, and professional judgment.

## Evaluation scenario

A company is planning a one-day leadership summit for **180 attendees**. The user asks an AI assistant to recommend the best of three venue proposals and explain the recommendation to senior leadership.

The user provides these constraints:

- Total event budget: **$95,000**, including venue, food and beverage, AV, parking, and service charges.
- The program requires one general session for all 180 attendees and **three concurrent breakout rooms for 50 people each**.
- At least **40 attendees will drive locally** and need convenient parking with in-and-out access.
- The company wants all meeting rooms in one compact area because some attendees will leave and return during the day.
- A hotel room block of **45 rooms** is needed for one night, but guestroom cost is paid separately and should **not** be counted against the $95,000 event budget.
- Proposal A is the least expensive but has breakout rooms on two different floors.
- Proposal B costs $8,000 more than Proposal A but places the general session and all breakouts in one meeting-space cluster and includes complimentary parking.
- Proposal C has the strongest guestrooms but exceeds the event budget by $12,000 before parking is added.
- The user asks for **one recommendation**, two reasons supporting it, one meaningful tradeoff, and one item that should be verified before contracting.

### Model task

**Recommend the best venue based only on the information provided. Do not invent missing pricing or amenities. Keep the recommendation concise enough for an executive audience.**

## Why this is an evaluation problem

A plausible response can still fail in several ways. A model might choose the cheapest venue while underweighting attendee flow. It might choose the nicest guestrooms even though guestroom quality is not the primary decision criterion. It might treat separately paid guestrooms as part of the event budget. It might invent parking rates or claim that a venue has features not stated in the prompt.

A strong evaluation therefore needs to distinguish among:

- **correct decision-making** — does the recommendation follow from the stated constraints?
- **instruction compliance** — does the answer provide exactly the requested decision elements?
- **constraint handling** — does it correctly treat the event budget, guestrooms, parking, and room adjacency?
- **evidence discipline** — does it avoid unsupported assumptions?
- **business judgment** — does it prioritize operational impact rather than superficial attractiveness?
- **communication quality** — is the answer concise and useful to senior leadership?

## Files in this case study

- [`evaluation-rubric.md`](evaluation-rubric.md) — weighted criteria, scoring anchors, partial-credit logic, failure conditions, and ambiguity handling.
- [`model-response-analysis.md`](model-response-analysis.md) — two model responses, scored evaluations, failure analysis, and calibration notes.

## Core evaluation principle

A response should not receive a high score because it is polished. It should receive a high score because the evidence supports the recommendation and the response satisfies the task as written.
