# Generative video evaluation and prompt iteration

**Evidence status:** Reconstructed process narrative based on prior work. The original clips and generation logs are not included; the observations below cannot be independently replayed here. No measured improvement rate is claimed.

## Example workflow
The concept was an astronaut folding towels in a neon-lit laundromat. My role combined prompt development, generation review, defect identification, and re-evaluation after prompt changes.

The initial generation matched the subject and setting, but included an unnatural extra pickup or repositioning of the towel. I revised the prompt to specify one pickup, a continuous fold, controlled hand contact, and one final placement, with a stationary camera.

In my recollection of the second version, an extra movement remained around the two-second mark. The evaluation therefore distinguished partial improvement from resolution.

## What I inspect
| Area | Observable evidence |
|---|---|
| Instruction following | The requested action occurs |
| Object interaction | Hands and towel maintain plausible contact |
| Temporal consistency | No unexplained jumps, duplication, disappearance, or resets |
| Visual quality | No merging fingers, warped objects, or inconsistent clothing |
| Scene consistency | Background, lighting, reflections, and camera remain coherent |

An unusual movement is not necessarily physically impossible. The evaluation should describe the actual deviation from the prompt or visible inconsistency, with timestamps.

## Example feedback
“The revised sequence appears more consistent, but a redundant pickup/repositioning remains near two seconds. The original object-interaction issue is not fully resolved.”

This is reconstructed feedback, not a quotation from a recorded test.

## Evidence needed for a public demonstration
Use a shareable clip pair, exact prompts, generation settings and dates, timestamped findings, and an unchanged rubric. A single before/after pair can illustrate observations but cannot establish that a prompt change reliably improves a stochastic model.

[Return to portfolio](../README.md)
