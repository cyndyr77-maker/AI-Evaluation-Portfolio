# Case Study 7 — Domain Expert Evaluation: Does the Answer Actually Work?

> **Portfolio note:** These are reconstructed examples based on my real business and event-management experience. I am not using proprietary company information or project materials.

## Why I wanted to include this

A lot of my AI evaluation work is based on the rubric or source in front of me. But I also bring a long corporate background to it.

I have spent about 30 years working in corporate environments, and 16 of those years included event management. By the later years I was working on large-scale and global events with multimillion-dollar budgets, senior executives, vendors, production teams and a lot of moving pieces.

I also spend a lot of time building the actual things people use to do their jobs: spreadsheets, formula-based budgets and trackers, presentations, documents, executive communications, timelines and other business materials.

That changes the way I look at AI output.

Sometimes there isn't a hallucinated fact. The model followed the instruction. The answer even sounds good.

My issue is simpler:

> **This wouldn't actually work.**

That is where domain experience matters.

---

## Example 1 — A spreadsheet that looks finished but isn't really usable

Say the model is asked to build a working event budget with adjustable assumptions for attendance, room rate, F&B, tax and service charge.

The workbook looks great when I open it. It has headers, totals, sections and clean formatting. The numbers even add up correctly based on the assumptions that were used when it was created.

But when I start checking how it was built, I find this:

- several totals are hard-coded instead of formulas;
- tax is calculated from one number while service charge is calculated from a different base without explanation;
- changing attendance doesn't update all of the per-person costs;
- formulas copied down the sheet point to the wrong assumption cells because the references weren't locked;
- some input cells and calculated cells look exactly the same;
- and one summary total is typed manually instead of linked to the detail tab.

At that point I don't care how nice the spreadsheet looks. It isn't a reliable working budget.

### Why I would score it down

A budget isn't only supposed to show me today's total. I need to be able to change an assumption and trust that the rest of the workbook will update correctly.

If attendance goes from 180 to 200, I shouldn't have to hunt through the workbook and manually change five different numbers.

If the room rate changes, the room total should update. If tax or service charge changes, the calculation should flow through. If I copy a formula down, the cells that are supposed to stay fixed need to stay fixed.

This is something I notice because I actually build and use spreadsheets this way.

A model can produce something that **looks like Excel work without really functioning like Excel work**.

### What I would test

I wouldn't only inspect the formatting. I would change the assumptions.

For example:

1. Change attendance from 180 to 200.
2. Change the room rate.
3. Change the tax percentage.
4. Check whether every dependent total updates.
5. Trace a few formulas back to the source cells.
6. Check whether summary numbers are linked or manually entered.
7. Make sure formulas copied across rows or columns still point where they are supposed to.

That tells me much more than looking at a screenshot of a polished workbook.

---

## Example 2 — A presentation can look good and still miss the point

The same thing happens with presentations.

A model can build a very polished deck with nice layouts, charts and executive-looking language and still make me work too hard to figure out what it is trying to tell me.

Say leadership asks for a short presentation comparing three options and recommending one.

The AI deck includes:

- a title slide;
- background information;
- three detailed option slides;
- a cost chart;
- risks;
- next steps;
- and a recommendation buried near the end.

Nothing is necessarily wrong.

But if I am building this for an executive audience, I am asking different questions:

- What decision are they being asked to make?
- Can they see the recommendation quickly?
- Are the three things that actually drive the decision obvious?
- Do the numbers on the slides match the spreadsheet or source material?
- Is the deck giving useful information or just repeating everything we know?
- Does slide 3 contradict slide 7 because one number was updated and another wasn't?

Sometimes the better deck is shorter.

I would rather have six slides that make the decision clear than 15 polished slides that make leadership dig for it.

That is not really a formatting issue. It is a business communication issue.

---

## Example 3 — The event recommendation that works on paper

Event management is one area where I can spot problems very quickly because I did it for so long.

Say a model recommends a venue for a 1,000-person corporate event because:

- the ballroom holds 1,000 people;
- the rental is within budget;
- the hotel has enough guestrooms;
- and the venue is available.

All of that can be true and I can still think it is a bad recommendation.

I would want to know things like:

- What setup is that 1,000-person capacity based on?
- If I put 1,000 people in the ballroom, is there still room for the stage, production, screens, cameras and aisles?
- Where do those people go for breaks and meals?
- Can registration handle the arrival pattern?
- Are the breakouts close enough together?
- Can the loading dock and service elevators support the production schedule?
- Is there enough time to turn the room between program elements?
- Does the budget include service charge, tax, labor, power, internet and production, or only the obvious venue costs?

Those aren't obscure event-planning details. They are the difference between a venue having enough square footage on a capacity chart and the event actually working.

After years of doing large programs, I don't automatically give a model credit because it found a venue with the right number next to "capacity."

### The same applies to budget

At the larger scale, a small assumption can turn into a very large number.

If a model leaves a required production cost out of a $2 million event budget, I don't treat that as a minor omission just because the rest of the spreadsheet is correct.

Severity depends on what the error does to the decision.

---

## Example 4 — A business plan with the steps in the wrong order

This is probably the less obvious part of domain expertise.

A model can give me a list of perfectly reasonable next steps and still put them in an order that doesn't make sense.

For example, say an executive team is considering a change that hasn't been approved yet. The model's action plan says:

1. Draft the employee announcement.
2. Schedule manager communications.
3. Update the internal FAQ.
4. Get final leadership approval.

Every item may eventually need to happen, but I have a problem with the sequence.

I wouldn't start treating the decision like it is final before the people who own the decision have approved it.

Depending on the situation, I may prepare drafts in advance, but I would label them as drafts and keep the approval dependency clear.

This is the kind of thing that comes from years of working with executives and cross-functional teams. A list of tasks isn't enough. I look at **who owns the decision, what depends on what and what happens if something changes halfway through.**

---

## Documents have the same problem

I also evaluate business documents differently because I have built so many of them.

A model can create a professional-looking project document and still leave me wondering:

- Who owns each action?
- What is the due date?
- What decision has already been made versus what is still open?
- Which version am I looking at?
- What changed since the last version?
- Is the document something people can actually work from, or is it just a nice summary?

Formatting matters, but usability matters more.

A tracker without owners isn't much of a tracker. A recommendation without the decision needed from leadership isn't very useful. A budget with no assumptions is hard to maintain. A meeting document with no actions or decisions can look complete and still create more work after the meeting.

---

## What domain expertise adds to evaluation

I don't think domain expertise means I should replace the rubric with my personal opinion.

If the task says to score against a specific source or guideline, that is still the standard.

Where my experience helps is recognizing **what to inspect more closely** and understanding why an error matters.

With a spreadsheet, I know to test the formulas instead of only looking at the numbers.

With a presentation, I know to look for the decision and whether the story makes sense for the audience.

With an event plan, I know that capacity alone doesn't prove feasibility.

With a business action plan, I know that a good list in the wrong order can still cause a problem.

That helps me distinguish an output that is technically complete from one that somebody could actually use.

## The question I come back to

When I evaluate business output, I usually end up asking some version of this:

> **If someone actually used this tomorrow, would it work?**

If the answer is no, I want to be able to explain exactly why.
