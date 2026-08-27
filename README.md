# AI Evaluation Portfolio

I work in AI evaluation and training across text, image, audio, and video. My work has ranged from annotation and response evaluation to rubric development, benchmark/task authoring, golden responses, reviewer QA, calibration, and model-failure analysis.

I built this portfolio to show more of the judgment behind that work. Most AI evaluation cannot be explained very well by saying that I "rated responses" or "reviewed annotations." What matters is how the standard was applied: what the model was asked to do, what counted as a real failure, how missing information was handled, and whether another reviewer could reasonably reach the same result.

The examples here are reconstructed for the portfolio. They are based on the types of evaluation work I have done, but they do not reproduce proprietary prompts, client information, model outputs, or project guidelines.

## What I focus on when I evaluate a model

A response can be well written and still be wrong. It can be factually correct and still miss the instruction. An image can match a prompt and still have unrealistic details. A video can look good overall but contain one action that breaks the physical continuity of the scene.

Those are different problems, and I try to score them as different problems rather than letting one overall impression drive the evaluation.

Across the case studies, I look at things such as:

- whether the model actually followed the instruction;
- whether claims are supported by the information available;
- how the model handles ambiguity or missing data;
- whether a rubric has clear enough anchors to be applied consistently;
- whether a failure is minor or changes the usefulness of the answer;
- where reviewer disagreement is legitimate versus a calibration problem;
- and, in domain-specific work, whether an answer is only plausible-sounding or would actually work in practice.

## Case studies

### [01 — Rubric Design & Model Evaluation](01-rubric-design/)
A business scenario with several competing constraints. I build the rubric first, then use it to score two different model responses. The point of the exercise is to show how I separate writing quality from the quality of the actual decision.

### [02 — Benchmark Authoring & Recalibration](02-benchmark-authoring/)
A research benchmark using public FAA aircraft data. It follows the prompt → success criteria/rubric → golden response → model test → recalibration workflow, including what I do when the model gets the first version right and the task needs a stronger edge case.

### [03 — Multimodal Model Stumping](03-model-stumping/)
A reconstructed video-stumping example centered on a bride and several other people. The questions require visual identification, speaker attribution, temporal tracking, identity persistence, and cross-modal reasoning rather than simple frame-level recognition. I also explain how I determine whether a miss is a legitimate model failure or a problem with the question itself.

### [04 — Calibration & Reviewer QA](04-calibration-and-reviewer-qa/)
Two evaluators score the same output differently. I work through whether the disagreement comes from reviewer error, an unclear guideline, or both, and then revise the guideline.

### [05 — Model Failure Analysis: Hallucination & Cheating](05-model-failure-analysis/)
Three short failure patterns: a model inventing a fact, a citation that does not actually support the claim, and a model that technically reaches the right answer while cheating the capability the benchmark was supposed to test. I also show how I would change the success criteria when the rubric accidentally rewards the shortcut.

### 06 — Multimodal Evaluation
Planned: image and video evaluation covering prompt adherence, realism, artifacts, motion, object interaction, and temporal consistency.

### 07 — Domain Expert Evaluation
Planned: business operations and event-planning examples where a model response can sound completely reasonable while still creating an operational problem.

## Background I bring to the work

In addition to AI evaluation experience, I have approximately 30 years of corporate/business experience, including executive support, operations, business communication, prioritization, and cross-functional coordination. I also have extensive practical event-planning knowledge.

That background is especially useful in domain-expert evaluation. It helps me spot the difference between an answer that uses the right terminology and one that would actually hold up in a real business situation.

My AI evaluation work has included LLM response evaluation, preference ranking, rubric-based scoring, task and benchmark development, reference responses, hallucination and factuality review, reviewer QA, calibration, transcription QA, and multimodal image/video evaluation.

## One rule I come back to often

If the evidence is not there, I do not fill it in for the model.

Something can be plausible and still be unsupported. That distinction comes up repeatedly in evaluation work, especially when a model gives a confident, polished answer that goes beyond what the prompt or source actually establishes.
