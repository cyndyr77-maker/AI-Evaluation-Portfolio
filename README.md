# AI Evaluation Portfolio

My AI work has progressed from annotation and response evaluation into reviewer QA, rubric-based evaluation, benchmark and task development, golden responses, calibration and model-failure analysis across text, image, audio and video.

What I like most about evaluation work is figuring out **why** something failed. A response can sound completely reasonable and still be unsupported. A model can get the right answer for the wrong reason. A video can follow the prompt but break physically for a few frames. And sometimes the model isn't the problem at all — the rubric or task needs to be better.

This portfolio shows the judgment behind that work rather than only listing the types of projects I have completed.

The examples are reconstructed from the types of work I have done. They do not reproduce proprietary prompts, client information, model outputs or project guidelines.

## If you only look at three examples

If you are short on time, I would start here:

### [02 — Benchmark Authoring & Recalibration](02-benchmark-authoring-and-recalibration/)
I build a research benchmark using public FAA aircraft data, define the success criteria, create the golden response and test the model. When the model gets the first version right, I look at whether the task is actually testing enough and recalibrate it rather than changing the standard just to make the model fail.

### [04 — Calibration & Reviewer QA](04-reviewer-qa-and-calibration/)
Two evaluators score the same model output differently. I work through whether the disagreement comes from reviewer error, an unclear guideline or both, then tighten the guideline so the same issue is easier to score consistently the next time.

### [08 — ATC Transcription & Research-Based Verification](08-atc-transcription-and-research-verification/)
ATC work that looked like transcription from the outside but required a lot of research to get right. I used call signs, waypoints, STARs, airport diagrams, FAA information, historic flight data and the surrounding audio to verify unclear sections rather than guessing. The work later progressed into reviewing other ATC submissions as well.

## What I bring to evaluation

I have worked across several parts of the evaluation process, so I don't only look at whether the final answer is right or wrong.

I look at things like:

- Did the model actually follow the instruction?
- Is the answer supported by the information it was given?
- Did it get the right answer for the right reason, or did it find a shortcut?
- How did it handle missing or ambiguous information?
- Is the rubric clear enough that another reviewer could apply it consistently?
- If reviewers disagree, is one reviewer wrong or is the guideline part of the problem?
- For image and video work, does the output stay visually and physically consistent over time?
- For business output, would the spreadsheet, presentation, document or recommendation actually work if somebody used it?

I also bring about 30 years of corporate/business experience. Sixteen of those years included event management, eventually working on large-scale and global events with multimillion-dollar budgets. I have spent years building and using the spreadsheets, presentations, documents, budgets, trackers and executive communications that businesses actually run on.

That experience helps when an AI output is technically complete but doesn't make sense in practice.

## All case studies

### [01 — Rubric Design & Model Evaluation](01-rubric-design-and-model-evaluation/)
A business scenario with several competing constraints. I build the rubric first and then score two different model responses, including one that sounds polished but makes a weak recommendation based on unsupported assumptions.

### [02 — Benchmark Authoring & Recalibration](02-benchmark-authoring-and-recalibration/)
A research benchmark using public FAA aircraft data. It follows the prompt → success criteria/rubric → golden response → model test → recalibration process and shows what I do when the model gets the first version right.

### [03 — Multimodal Model Stumping](03-multimodal-model-stumping/)
A reconstructed video-stumping example centered on a bride and several other people. I build questions that require the model to identify the right person, connect speech to the correct speaker, follow people across the video and use both visual and audio information without making the question itself ambiguous.

### [04 — Calibration & Reviewer QA](04-reviewer-qa-and-calibration/)
Two evaluators score the same output differently. I work through the disagreement, decide where the scoring went wrong and revise the guideline where it leaves too much room for interpretation.

### [05 — Model Failure Analysis: Hallucination & Cheating](05-model-failure-analysis/)
Three failure patterns: a model making up a fact, using a citation that doesn't actually support its claim and getting the right final answer by cheating the capability the benchmark was supposed to test.

### [06 — Generative Video Evaluation & Iterative Prompt Testing](06-generative-video-evaluation/)
An astronaut-folding-towels video showing the full iteration loop: build the prompt, generate the video, find the motion/object-interaction problem, rewrite the prompt, generate it again and check whether the original problem was actually fixed. I also look for visual artifacts and frame-to-frame consistency.

### [07 — Domain Expert Evaluation: Does the Answer Actually Work?](07-domain-expert-evaluation/)
Examples of how I use real business experience when evaluating AI output. The main example is a formula-based spreadsheet that looks finished but breaks when the assumptions change. I also cover executive presentations, large-scale event feasibility, business sequencing and working documents.

### [08 — ATC Transcription & Research-Based Verification](08-atc-transcription-and-research-verification/)
ATC transcription that required research into call signs, flight numbers, waypoints, STARs, airport diagrams, FAA information, historic flight data and aviation terminology. I also show how that work progressed into reviewing other submissions and verifying corrections rather than relying on what sounded plausible.

## The range of work represented here

Across these examples I cover LLM response evaluation, preference and rubric-based scoring, benchmark/task development, golden responses, hallucination and factuality review, reviewer QA, calibration, model stumping, generative-video evaluation, transcription QA, research-based audio verification and domain-expert evaluation of business artifacts.

I don't expect every model output to be perfect, and I don't try to find a failure just because I am evaluating one.

The standard I keep coming back to is simpler:

> **If the evidence isn't there, I don't fill it in for the model.**

Something can be plausible and still be unsupported. And if the model keeps passing because my task or rubric leaves a shortcut open, then I need to look at my own evaluation too.
