# Case Study 6 — Generative Video Evaluation & Iterative Prompt Testing

> **Portfolio note:** This is a reconstruction of the type of generative-video evaluation work I have done. The original project video and proprietary instructions are not included, but the workflow and failure patterns reflect the work itself.

## The assignment

This type of work was different from watching a finished video and deciding whether I liked it.

I had to **build the video prompt, generate the video, inspect the output closely, identify what was wrong, change the prompt, generate it again, and then evaluate the new version to see whether the changes actually fixed the problem.**

Sometimes they did. Sometimes the new video solved one issue and created another. Sometimes the same problem was still there in a slightly different form.

One example I worked on involved an **astronaut folding towels in a neon-lit laundromat at 2:00 AM**.

It sounds like a strange scene, but it was useful for evaluation because it combined a visually distinctive setting with a very ordinary physical action. Folding a towel requires the model to maintain the astronaut's hands, the towel, the counter, and the sequence of movement consistently over time.

That gave me a lot more to evaluate than whether the video simply contained an astronaut and a laundromat.

---

## Step 1 — Build the video

The starting prompt established the main scene:

> An astronaut folds towels in a neon-lit laundromat at 2:00 AM.

The generated video captured the basic idea, but matching the nouns in the prompt was only the first check.

I watched the action itself.

The astronaut's interaction with the towel was not natural. There was an unnecessary pickup/repositioning sequence instead of one continuous folding motion. The object handling felt generated rather than physically intentional.

That became the first failure I needed to address.

## Step 2 — Identify the actual problem

I try not to write feedback like:

> The towel folding looks weird.

That does not give me much to work with on the next generation.

I break the problem down more specifically:

- the astronaut should maintain continuous contact with the towel during the fold;
- the hands should move deliberately rather than resetting position;
- the towel should stay stable on the work surface except where the hands are actively moving it;
- the action should progress naturally from pickup to fold rather than repeating or reversing part of the motion;
- objects should not jump position between frames;
- the astronaut's hands and fingers should remain anatomically consistent;
- and the scene should not introduce camera or lighting changes that distract from the action.

That analysis gives me something concrete to change in the prompt.

---

## Step 3 — Revise the prompt

For the next generation, I tightened the motion and continuity requirements.

A reconstructed version of the revised direction would be:

> An astronaut stands at a laundromat counter at 2:00 AM and folds a towel in one continuous, natural motion. The astronaut picks up the towel once, keeps both hands in stable contact with it as needed, folds it deliberately, and places the completed towel down once. Avoid repeated pickups, dropped or reset objects, extra hand motions, or sudden repositioning. Keep the camera stationary. Maintain consistent neon lighting and reflections throughout the shot.

The point of the revision was not just to add more words.

Each added instruction responded to something I had actually seen in the first output.

---

## Step 4 — Generate again and check whether it worked

The second generation was better in some ways, but the evaluation did not stop there.

Around the two-second mark, the astronaut still performed a redundant pickup/drop or repositioning movement with the towel.

So although the revised prompt improved the intended action, it had **not fully solved the object-interaction problem**.

I would not mark that as fixed just because the second video looked better overall.

This is an important part of iterative evaluation: I compare the new output against the specific failure I was trying to correct.

If the failure is still present, even briefly, I record that.

---

## What I checked beyond prompt adherence

A generated video can technically contain every requested element and still have a lot wrong with it.

For this type of evaluation I look across several areas.

### Prompt adherence

- Is the subject correct?
- Is the setting correct?
- Is the requested action actually happening?
- Are important scene details present?

### Motion and physics

- Does the body move naturally?
- Do the hands interact with the object in a believable way?
- Does the towel respond to movement consistently?
- Does the action have a logical beginning, middle, and end?
- Are there unnecessary repeated movements or resets?

### Object persistence

- Does the towel remain the same object throughout the shot?
- Does its shape change only in ways the folding action would explain?
- Does it jump, disappear, duplicate, or move without physical cause?

### Human/anatomical artifacts

Hands are an obvious place to look, but not the only one.

I check for things such as:

- changing finger count;
- fused or distorted hands;
- arms bending unnaturally;
- body parts briefly merging with clothing or objects;
- inconsistent proportions;
- or contact between the hand and object that does not make physical sense.

### Temporal consistency

A frame can look fine by itself and still be part of a bad video.

I watch for:

- objects changing between frames;
- clothing or suit details appearing and disappearing;
- background machines changing shape;
- reflections behaving inconsistently;
- lighting flicker;
- sudden camera movement;
- and continuity breaks in the action.

### Visual artifacts

I also inspect the full frame rather than focusing only on the astronaut.

Possible issues include:

- warped objects;
- text changing or becoming unreadable;
- duplicated background elements;
- unnatural reflections;
- flickering neon;
- edge distortion around moving subjects;
- texture instability;
- or objects briefly appearing where they should not be.

---

## Why I do multiple passes

The first viewing tells me whether the video basically works.

The next passes are where I catch the problems.

I may watch once for the main action, again for hands and object interaction, again for the background and lighting, and again for continuity across the full clip.

That matters because focusing on the towel can make it easy to miss a washing machine changing shape in the background. Focusing on the astronaut's hands can make it easy to miss a lighting flicker or reflection that appears for only a few frames.

For short generated videos, frame-to-frame consistency can matter as much as the overall composition.

---

## The iteration loop

The workflow was essentially:

**Build → Generate → Watch → Identify the failure → Rewrite → Generate again → Rewatch → Compare → Repeat if needed**

The important part is that the prompt changes come from the observed failure.

For example:

| What I see | What I change |
|---|---|
| Towel is picked up multiple times | Specify one pickup and one placement |
| Hands reset or jump position | Require continuous deliberate hand movement |
| Towel shifts without being touched | Require stable object contact and positioning |
| Camera movement makes the action harder to judge | Specify a stationary camera |
| Neon lighting/reflections flicker | Require consistent lighting and reflections |
| Extra movement appears after the fold | Define the end state of the action |

This keeps the iteration targeted instead of making the prompt longer at random.

---

## Knowing when the video still fails

One thing I learned quickly is that **"better" and "fixed" are not the same thing**.

If the first video has a major towel interaction problem and the second video only has a brief version of it, the second generation is an improvement. But if the evaluation criterion requires natural continuous object interaction, the issue is still present.

I try to describe both things accurately:

> The second generation improved overall motion continuity, but a redundant pickup/drop remains around the two-second mark, so the object-interaction issue is reduced but not resolved.

That is more useful than either saying the whole video failed or giving it a pass because it looked noticeably better.

---

## What this shows about my evaluation work

This work combines prompt writing with visual QA.

I am not only asking whether the model followed the prompt. I am looking at **how the generated scene behaves over time**, identifying specific artifacts and motion failures, and then using those observations to make the next test more precise.

The process can take several iterations because generative video does not always fail the same way twice.

For me, the useful question after each generation is:

> **Did the change I made actually fix the thing I was trying to fix?**

If the answer is no, I go back to the output, identify what is still happening, and adjust again rather than assuming a more detailed prompt automatically produced a better result.
