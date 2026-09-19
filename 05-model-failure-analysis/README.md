# Model failure analysis

**Evidence status:** Authored, reconstructed examples. These are not captured model runs.

## 1. Unsupported policy claim
A supplied vacation policy permits five carryover days and says excess days expire. It says nothing about payment for unused leave.

An example response says: “The company does not pay out unused vacation time.”

**Finding:** The payout claim is unsupported by the supplied text. The response should say that the source does not address payout. This is a source-grounding judgment, not a legal conclusion about employee entitlements.

## 2. Citation mismatch
A fictional source says a program was announced in 2018, began operating in 2019, and had 12 organizations in its 2019 launch.

An example response says: “The program began in 2018 with 12 organizations.”

**Finding:** The response combines facts belonging to different events. Correct wording separates the announcement from the operational launch. A citation must support the complete claim, not merely contain its dates and numbers.

## 3. Correct answer without the required comparison
A task asks for a comparison of three fields in two records. An example response selects the correct record but says only that it “best matches the conditions.”

**Finding:** The answer does not provide the requested comparison. This is insufficient observable evidence, not proof that the model guessed, cheated, or used a shortcut. A written explanation also does not reveal a model's internal reasoning.

**Better evaluation:** Require an accurate comparison table tied to the supplied records, give separate credit for the choice and the supporting comparisons, and test additional cases where superficial clues conflict with the correct answer. Any claim of systematic shortcut behavior would require further evidence.

## Review method
1. Identify the exact claim or missing requirement.
2. Point to the source or task instruction.
3. Explain the decision impact.
4. Apply the rubric without guessing intent.
5. Revise an ambiguous rubric for future tests; preserve the original score and version.

[Return to portfolio](../README.md)
