# Case Study 3 — Multimodal Model Stumping

> **Portfolio note:** This is a reconstruction of video model-stumping work I have done. I am not using the original video or proprietary project materials, and I filled in or simplified some scene details where needed.

## The assignment

For this work I wasn't just watching a video and asking the model something obvious like what color someone's dress was.

I had to build questions that could actually stump the model but still had a clear, fair answer in the video.

One of the videos centered on a bride interacting with several people. It was a good one for this because the harder questions required the model to use more than one part of the video and, in some cases, both what it could **see** and what it could **hear**.

I could test whether the model:

- identified the right person;
- knew who was speaking;
- followed the same person through different parts of the video;
- kept different people straight when they left and came back;
- connected dialogue to what was happening visually;
- and made an inference only when the video actually gave enough information to support it.

## Building the bride stump

One of the questions was:

> **What is the last item spoken by the bride in the video?**

The golden answer was:

> **Death**

It is a very short answer, but the model has to do several things to get there.

First it has to identify the bride. Then it has to know which dialogue belongs to her. Then it has to keep following her through the video and figure out which of **her** spoken items is last.

If it just gives me the last word spoken by anybody in the video, it didn't answer the question.

That is what made it useful as a stump. The final answer was simple. Getting to it wasn't.

## Making sure the stump itself is fair

The model getting something wrong doesn't automatically mean I wrote a good stump.

Before I treat it as a model failure, I have to make sure **I can defend the question and the golden answer**.

For the bride question I would check:

- Can I clearly identify who the bride is?
- Can I reasonably tell which lines she is speaking?
- Can I determine which of those lines comes last?
- Is there one defensible answer, or could two answers reasonably be right?

Those checks are basically visual grounding, speaker attribution and temporal reasoning, but I think about them more simply: **Did it find the right person, connect the right speech to her and follow the sequence correctly?**

If the video itself is ambiguous, that is a problem with my task. I shouldn't call it a model stump just because the model guessed differently than I did.

## Another question from the bride video

I also used a question about **which man was implied to be married to the bride**.

That tests something different.

The model may recognize every person correctly and still get the answer wrong because it has to connect what is being said or implied in the scene to the correct man on screen.

So if it picks the wrong person, I want to know why.

Did it lose track of who was who? Did it understand the dialogue but attach it to the wrong person? Or did it make a relationship assumption that the video didn't actually support?

That is the difference between just recording "wrong answer" and actually analyzing the failure.

## Tracking people across the whole video

I also worked with questions where the model had to count **distinct people across the full video**, not just count whoever was visible at one moment.

A prompt for that type of task could be:

> **Over the full video, how many distinct people appear on screen at any point? Count each person only once, even if they leave and come back.**

The wording matters a lot here. If I only ask "How many people are in the video?" I have created my own ambiguity. Does that mean at one time? Across the whole video? Do I count someone twice if they leave and come back?

By spelling out **distinct people across the full video**, I know what I am scoring and so does the model.

## When the model gets it wrong

I try to figure out where it went wrong instead of stopping at the final answer.

With video, the problem could be that it:

- started with the wrong person;
- heard the dialogue but assigned it to somebody else;
- lost track of someone later in the clip;
- counted the same person twice after they left and came back;
- understood the audio and visual information separately but connected them wrong;
- made an inference the video didn't support;
- or answered a slightly different question than the one I asked.

Those are different failures even if they all end with a wrong answer.

## Why I paid so much attention to the prompt

Small wording changes can make a video question either much better or much worse.

For example:

> "How many men are in the video?"

is much looser than:

> "Across the full video, how many distinct men appear on screen? Count each man once even if he leaves and later reappears."

The second one gives me a much cleaner test.

The same thing is happening with the bride question. **The last item spoken by the bride** is not the same question as **the last word spoken in the video**.

If I don't write that distinction clearly, I can't really blame the model for interpreting it differently.

## What my part of the work was

Coming up with a question the model couldn't answer wasn't enough.

I had to watch the video closely, establish the ground truth, write a prompt that had one defensible answer, think about other ways somebody could interpret it, test the model and then decide whether the miss was actually the model's fault.

For me, a good stump isn't just hard.

**It has to be hard for the right reason.**