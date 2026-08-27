# Case Study 6 — Generative Video Evaluation & Iterative Prompt Testing

> **Portfolio note:** This is a reconstruction of generative-video work I have done. I am not using the original project video or proprietary instructions, but the process and the types of issues are real.

## The assignment

For this work I wasn't handed a finished video and asked whether it was good or bad. I had to build the prompt, generate the video, watch it closely, figure out what wasn't working, change the prompt and try again.

Then I had to watch the new version and see if I actually fixed it.

Sometimes I did. Sometimes I fixed one thing and something else went wrong. And sometimes I made the prompt more specific and the model still did basically the same weird thing again.

One of my videos was an **astronaut folding towels in a neon-lit laundromat at 2:00 AM**.

It sounds random, but it was actually a good video to work with because folding a towel is a simple action that people know how it should look. If the hands move strangely, the towel changes shape for no reason or the astronaut keeps picking it up and putting it down, you notice it.

## First version

The basic idea was:

> An astronaut folds towels in a neon-lit laundromat at 2:00 AM.

The first video had the right subject and setting, so at a quick glance it followed the prompt.

But when I watched the actual folding, it didn't look natural. The astronaut did an extra pickup/repositioning movement with the towel instead of just picking it up and folding it. It looked like the model wasn't sure what the hands and towel were supposed to do next.

That was the issue I wanted to fix.

## Going back to the prompt

I didn't want to just say "make the folding more realistic." That is too vague and doesn't tell the model what went wrong.

I needed to be more specific about the action. The astronaut should pick the towel up once, keep control of it, fold it in one continuous motion and put it down when the fold is finished. I also wanted the hands to stay consistent and the towel not to jump around or reset while it was being handled.

I tightened the prompt to something along these lines:

> An astronaut stands at a laundromat counter at 2:00 AM and folds a towel in one continuous, natural motion. The astronaut picks up the towel once, keeps both hands in contact with it as needed, folds it deliberately and places the completed towel down once. No repeated pickups, dropped or reset objects, extra hand movements or sudden repositioning. Keep the camera stationary and the neon lighting and reflections consistent throughout the shot.

I wasn't adding detail just to make the prompt longer. The changes were there because of things I saw in the first video.

## Second version

The next video was better, but it still wasn't right.

At around the two-second mark, the astronaut still did a redundant pickup/drop or repositioning movement with the towel.

That is the kind of thing I would flag. The second version improved, but **better and fixed are not the same thing**.

If the problem I was trying to correct was unnatural object interaction and I can still see it, I don't mark it fixed because the rest of the video looks better.

At that point I would go back again and make the action even more explicit, or change the way I described the start and end position of the towel so there was less room for the model to create that extra movement.

## What else I was looking at

I wasn't only watching the towel.

I would watch the video a few times because I usually notice different things on different passes. First I might watch the overall action. Then I would watch the astronaut's hands and the towel. Then I would look at the background, lighting and everything else going on in the frame.

Some of the things I was looking for were:

- Does the astronaut actually do what I asked?
- Do the hands look normal throughout the video, or do fingers change, fuse together or disappear?
- Does the towel stay the same towel, or does it suddenly change shape, jump, duplicate or move when nobody is touching it?
- Does the folding motion make physical sense from beginning to end?
- Does the astronaut make extra movements that a person wouldn't normally make?
- Do parts of the suit, hands or towel merge into each other?
- Do washing machines or other things in the background change shape?
- Does text suddenly change or become unreadable?
- Do the neon lights or reflections flicker or change for no reason?
- Does the camera suddenly move when it is supposed to stay still?
- Does anything appear or disappear for a few frames?

A single frame can look completely fine and the video can still have a problem. A hand might only distort for a second. A towel can look normal before and after a fold but do something physically impossible in between. Something in the background can change while I am paying attention to the main action.

That is why I don't only watch once.

## How I made changes

The process was basically:

**Build it → watch it → find the problem → change the prompt → build it again → watch it again**

And sometimes do that again.

I tried to make each prompt change connect to something I actually saw:

| What I saw | What I changed |
|---|---|
| Towel picked up more than once | Say one pickup and one placement |
| Hands jump or reset | Ask for one continuous hand movement |
| Towel moves without being touched | Be more specific about hand contact and towel position |
| Camera moves and makes the action harder to follow | Keep the camera stationary |
| Neon lights or reflections flicker | Ask for consistent lighting and reflections |
| Astronaut keeps moving after the towel is folded | Be clear about where the action ends |

That worked better for me than just piling more description into the prompt and hoping the next generation would improve.

## Visual artifacts mattered too

Even when the main action improved, I still had to look for visual artifacts.

Hands are an obvious one with generated video, but I also watched for warped objects, strange edges around the astronaut, duplicated items, background objects changing, textures moving, reflections that didn't match the scene and objects appearing for a few frames and then disappearing.

I also paid attention to whether the astronaut stayed visually consistent. If part of the suit changes halfway through the clip or the proportions shift, that is still a problem even if the towel folding is correct.

This is where watching the whole frame matters. If I am only checking whether the astronaut folded the towel, I can miss a pretty obvious generation issue somewhere else.

## What I would write in the evaluation

I tried to be specific about what improved and what didn't.

For the second astronaut video, my feedback would be closer to:

> The folding motion is more consistent than the first generation, but there is still an unnecessary pickup/drop around the two-second mark. The object interaction improved but the original issue is not fully resolved.

That tells someone what actually happened. Saying "the video is better" doesn't really help, and saying the whole video is bad ignores the improvement.

## The part of this work I think matters most

Prompt writing and evaluation were connected. I wasn't writing a prompt, generating something and moving on.

I had to look closely enough at the video to figure out **why** it wasn't working and then decide what I could change in the prompt to try to correct it.

And after I changed it, I still had to go back and check my own work.

The question I kept coming back to was pretty simple:

> **Did the change I made actually fix the thing I was trying to fix?**

If it didn't, I went back again.
