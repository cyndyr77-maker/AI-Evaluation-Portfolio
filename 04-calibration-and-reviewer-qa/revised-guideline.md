# Revised Guideline

## Problem identified during calibration

Reviewers interpreted the phrase **"unsupported information"** differently.

One reviewer treated a plausible consequence as acceptable even though it was not present in the source. That created inconsistent scoring.

## Revised guideline language

### Source-grounding rule

When a task requires the model to summarize or transform supplied source material, factual claims must remain traceable to that material unless the task explicitly permits outside knowledge or inference.

Do **not** treat a statement as supported simply because it is common, plausible, or likely in a similar real-world setting.

### Consequence rule

Apply a stronger penalty when the model invents a rule, penalty, entitlement, approval, deadline consequence, eligibility condition, or other statement that could change what a user believes they are required or allowed to do.

### Inference rule

A reasonable inference is not automatically equivalent to a supported fact.

If an inference is necessary to complete the task:

- it should be clearly framed as an inference,
- it must not contradict the source,
- and it should not be presented as an explicit policy requirement unless the source supports that requirement.

## Severity anchors

### No issue

The response paraphrases the source without changing meaning.

**Example:**

Source: "Expense reports must be submitted within 30 calendar days."

Acceptable summary: "Submit expense reports within 30 days."

### Minor issue

The response adds low-impact wording that is not directly stated but does not materially change what the user would understand or do.

### Major issue

The response adds unsupported information that changes an obligation, consequence, approval requirement, eligibility condition, financial implication, safety implication, or other decision-relevant meaning.

**Example:**

Unsupported summary: "Late expense reports will be automatically denied."

If the source only states a submission deadline, automatic denial is a new policy consequence.

## Reviewer decision test

When unsure whether an addition is material, ask:

1. **Traceability:** Where in the source is this supported?
2. **Meaning:** Does the addition change the meaning of the source?
3. **Actionability:** Could a user make a different decision because of it?
4. **Presentation:** Is the model stating the addition as fact or clearly labeling it as inference?

The more strongly the answer points toward changed user behavior without source support, the more severe the issue.

## Feedback template for reviewer QA

> **Issue:** The score does not fully apply the source-grounding requirement.
>
> **Evidence:** The model states `[unsupported claim]`, while the source only states `[supported information]`.
>
> **Why it matters:** The added claim changes `[policy meaning / user action / consequence]`.
>
> **Calibration:** Treat this as `[severity]` under the unsupported-information guideline. Do not credit the claim based on outside assumptions or general plausibility.

## Why this revision improves calibration

The revised language gives reviewers an observable test instead of asking them to decide whether an unsupported addition merely "feels significant."

It also separates two concepts that are often blurred in evaluation work:

- **plausibility**, and
- **evidence support**.

A statement can be highly plausible and still fail a source-grounded task.
