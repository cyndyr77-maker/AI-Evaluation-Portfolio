# Multimodal question design

**Evidence status:** Reconstructed process narrative. Original video, prompts, and model outputs are not included. Scene details were simplified; this page is not a reproducible benchmark or evidence of a measured failure rate.

## My role
I developed difficult but answerable video questions, established a reference answer, checked for ambiguity, and evaluated whether a miss reflected a model error or a problem with the question.

## Example question types
| Question | Capability | What must be verified |
|---|---|---|
| What is the last word spoken by the bride? | Person identification, speaker attribution, temporal ordering | The bride is identifiable and her final speech is audible |
| Which person is implied to be married to the bride? | Audio-visual grounding and inference | Dialogue and visual context support one answer |
| How many distinct people appear across the full clip? | Identity tracking across time | Reappearing people are not counted twice |

The first question differs from asking for the last word spoken by anyone. The counting question specifies the entire clip and unique people rather than a single frame.

## Review approach
1. Establish the reference answer from the media before scoring.
2. Check alternate interpretations and whether the relevant audio/frames are clear.
3. Record the response and point to the relevant timestamps.
4. Classify the observable error: wrong person, misattributed speech, lost identity, double counting, or unsupported inference.
5. Revise an ambiguous task rather than treating every disagreement as a model failure.

These are possible failure categories, not proof of an internal mechanism. Without the original media, the portfolio reader cannot verify any particular answer from that work.

## What a reproducible version would include
A permitted clip, timestamps, identity annotations, exact question, reference answer, scoring rules, and an unedited model response with model/version and date.

[Return to portfolio](../README.md)
