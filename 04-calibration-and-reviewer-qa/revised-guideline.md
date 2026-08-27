# Revised Guideline

## What needed clarification

The phrase **"do not add unsupported information"** was not enough by itself to keep the reviewers aligned.

One reviewer treated an unstated consequence as acceptable because it seemed like a logical result of the policy. I would make the guideline more specific so reviewers have a clearer test next time.

## Revised source-grounding rule

When the model is summarizing or transforming supplied source material, factual claims need to be traceable to that material unless the task specifically allows outside knowledge or inference.

Do not treat a statement as supported just because it is common, likely, or reasonable in a similar real-world situation.

## Pay particular attention to invented consequences

I would use a stronger penalty when the model adds a rule, penalty, entitlement, approval requirement, eligibility condition, deadline consequence, or similar information that could change what the user thinks they are required or allowed to do.

For example:

**Source:** Expense reports must be submitted within 30 calendar days.

**Fine:** Submit expense reports within 30 days.

**Not supported:** Expense reports submitted after 30 days will automatically be denied.

The second version adds an actual consequence that the source never states.

## How to handle inference

An inference is not automatically wrong, but it should not quietly become a source fact.

If the task allows inference, I would expect it to be:

- clearly identified as an inference when necessary;
- consistent with the source;
- and not presented as an explicit policy requirement unless the source supports it.

## Severity guide

### No issue
The model paraphrases the source without changing its meaning.

### Minor issue
The model adds low-impact wording that is not directly stated but does not materially change what the user would understand or do.

### Major issue
The model adds unsupported information that changes an obligation, consequence, approval requirement, eligibility condition, financial implication, safety implication, or another decision-relevant part of the source.

## Questions I would use when a case is borderline

1. **Where is the claim supported?** Can I point to it in the source?
2. **Does it change the meaning?**
3. **Could a user act differently because of it?**
4. **Is the model presenting it as fact, or clearly labeling it as inference?**

Those questions give reviewers something more useful than deciding whether an addition simply "feels significant."

## Example QA feedback

> **Issue:** The score does not fully apply the source-grounding requirement.
>
> **Evidence:** The model states `[unsupported claim]`, while the source only states `[supported information]`.
>
> **Why it matters:** The added claim changes `[policy meaning / user action / consequence]`.
>
> **Calibration:** Treat this as `[severity]`. Do not give the claim credit based on outside assumptions or general plausibility.

The goal of the revision is not to remove reviewer judgment. It is to make the boundary clearer so reviewers are exercising judgment against the same standard.
