# Case Study 3 — Multimodal Model Stumping

> **Portfolio note:** This is a reconstruction of the type of video model-stumping work I have done. The original source video and proprietary project materials are not included. Where needed, scene details have been simplified while keeping the evaluation method and reasoning challenge intact.

## The assignment

In video model-stumping work, I was not just evaluating whether a model could describe what was on screen. I also built questions designed to test whether it could follow people and information across an entire clip and combine visual and spoken evidence correctly.

One video centered on a bride interacting with several people. It worked well for this type of task because answering the harder questions required more than identifying a dress, object, or single frame.

The questions could require the model to:

- identify the correct person visually;
- follow that person across different moments in the video;
- connect dialogue to the correct speaker;
- keep track of distinct people even when appearances or context changed;
- use information from more than one part of the clip;
- and make an inference only when the video actually supported it.

## Building the stump

A simple question such as "What is the bride wearing?" would mainly test visual recognition. I wanted the task to require actual cross-video reasoning.

One of the stronger questions was reconstructed as:

> **What is the last item spoken by the bride in the video?**

The golden answer was:

> **Death**

That looks like a very short answer, but getting there requires several steps. The model has to identify which person is the bride, determine which spoken lines belong to her, continue tracking her through the clip, and then identify her final spoken item rather than simply returning the last word heard anywhere in the video.

## Why I considered this a valid stump

When I build or evaluate a stump, I do not consider "the model got it wrong" enough by itself.

The answer needs to be determinable from the source, and the failure should tell me something useful about the model.

For this question I would check:

1. **Visual grounding:** Is the bride clearly identifiable from the video?
2. **Speaker attribution:** Can the relevant dialogue reasonably be assigned to her?
3. **Temporal reasoning:** Is it possible to determine which of her spoken items occurs last?
4. **Answer uniqueness:** Does the evidence support one defensible golden answer?

Only after those checks would I treat a different model answer as a model failure rather than a bad question.

## A harder reasoning question

Another question from this style of work asked the model to determine **which man was implied to be married to the bride**.

This is a different kind of challenge. The answer is not necessarily supplied by one visual feature or one explicit sentence. The model has to combine the relationship implied by the dialogue or scene with the people it sees on screen and ground that inference to the correct man.

A model can fail even if it correctly recognizes every individual person. The error may be in connecting the relationship evidence to the right visual subject.

That distinction is important when diagnosing the failure. "Wrong person" is the outcome; **cross-modal grounding or relationship inference** may be the actual capability that failed.

## Identity tracking across the clip

I also used questions that required counting or tracking **distinct people across the full video**, rather than counting whoever happened to be visible in one frame.

This becomes harder when a person leaves and returns, changes appearance, or appears in a different context. A model can accidentally count the same person twice or treat two people as one.

That type of question tests entity persistence over time rather than simple object counting.

A related video-QA task I worked on used the wording:

> **Over the full video, how many distinct people appear on screen at any point? Count each person only once, even if they leave and come back.**

The ground truth in that task was **4 — 3 panelists and 1 interviewee**. The important part of the prompt was not the number itself; it was defining exactly what counted as a distinct person so the task could be scored consistently.

## What I analyze when the model misses

For video stumps, I try to identify the point where the reasoning broke rather than stopping at correct/incorrect.

A miss could come from:

- **visual identification** — the model starts with the wrong person;
- **speaker attribution** — it hears the dialogue but assigns it to someone else;
- **temporal tracking** — it loses the person or event sequence later in the clip;
- **entity persistence** — it double-counts someone who leaves and returns;
- **cross-modal grounding** — it understands the spoken and visual information separately but connects them incorrectly;
- **inference** — it makes a relationship or event inference that the video does not actually support;
- **instruction following** — it answers a nearby question rather than the exact one asked.

Those are different model behaviors, so I would not give all of them the same diagnostic label.

## Why prompt wording matters

Small wording changes can completely change what a video question measures.

For example:

> "How many men are in the video?"

is much less precise than:

> "Across the full video, how many distinct men appear on screen? Count each man once even if he leaves and later reappears."

The second version removes avoidable scoring ambiguity. If the model then counts incorrectly, I have much more confidence that I am testing identity tracking rather than testing whether the model interpreted my wording the same way I did.

The same applies to the bride question. Asking for the **last item spoken by the bride** is intentionally different from asking for the last word spoken in the video.

## What this work required from me

The task was not simply to come up with something the model could not answer.

I had to understand the video closely enough to establish the ground truth, write a question with a defensible answer, anticipate alternative interpretations, test the model, and then determine whether a miss represented an actual model weakness or a problem with the prompt.

That is the part of model stumping I find most important: a hard question is only useful when I can explain **what capability it tests and why the expected answer is fair**.
