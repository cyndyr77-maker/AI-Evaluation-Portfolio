# Success Criteria

## Evaluation standard

The task is scored on **five observable criteria**. Each criterion is evaluated separately to reduce subjective scoring.

| Criterion | Points | Full-credit requirement |
|---|---:|---|
| Recommendation | 20 | Recommends Vendor B as the strongest preliminary choice. |
| Evidence use | 25 | Uses only facts stated in the prompt; does not convert missing information into assumptions. |
| Operational reasoning | 20 | Prioritizes confirmed schedule coverage, two departure waves, and return-service timing. |
| Required elements | 20 | Includes one recommendation, two reasons, one tradeoff, and one unresolved item to confirm. |
| Uncertainty handling | 15 | Clearly distinguishes what is known, unknown, and still subject to confirmation. |
| **Total** | **100** | |

## Scoring anchors

### 90–100 — Strong pass

The answer reaches the best-supported recommendation, uses evidence correctly, handles uncertainty explicitly, and satisfies all requested response elements.

### 75–89 — Pass with weaknesses

The recommendation is generally sound but contains a minor unsupported assumption, misses one requested element, or does not fully explain why operational completeness matters.

### 60–74 — Borderline

The response shows partial understanding but either underweights a key operational constraint, treats an unresolved detail too confidently, or recommends another vendor using reasoning that is only partly supported.

### Below 60 — Fail

The answer materially relies on invented facts, ignores the required schedule, or makes a recommendation that cannot be justified from the supplied evidence.

---

# Criterion details

## 1. Recommendation — 20 points

- **20:** Vendor B is selected as the strongest preliminary recommendation.
- **12–18:** Vendor B is selected but reasoning is weak or overly focused on nonessential details.
- **5–11:** Another vendor is selected, but the answer correctly identifies some key uncertainty and operational constraints.
- **0–4:** Recommendation is unsupported or no recommendation is provided.

## 2. Evidence use — 25 points

Full credit requires that the answer distinguish between:

- confirmed facts,
- information not stated,
- and facts that would need verification.

### Material unsupported assumptions

Examples include:

- claiming Vendor A will charge an additional standby fee,
- claiming Vendor C cannot support two waves,
- assuming any vendor will negotiate pricing,
- assuming travel time between the hotel and dinner venue,
- assuming gratuity is included when not stated.

A material unsupported assumption that changes the recommendation should reduce this criterion to **10 points or fewer**.

## 3. Operational reasoning — 20 points

A strong answer recognizes that the central issue is not simply capacity. All three vendors list four 56-passenger coaches, which is nominally enough seating for 220 guests.

The more meaningful differentiators are whether the proposal explicitly supports:

- the two required outbound waves,
- the required return window,
- and predictable vehicle availability during the event.

The response does not need to use transportation-industry terminology to receive full credit.

## 4. Required elements — 20 points

- Recommendation — **4 points**
- Reason 1 — **5 points**
- Reason 2 — **5 points**
- Tradeoff — **3 points**
- Confirmation item — **3 points**

The tradeoff should be a genuine disadvantage of Vendor B. The clearest example is the higher preliminary price.

## 5. Uncertainty handling — 15 points

### 15 points

The answer explicitly treats the recommendation as preliminary and identifies a material item that still needs confirmation before contracting.

### 8–14 points

Shows appropriate caution but does not clearly distinguish all relevant unknowns.

### 1–7 points

Acknowledges that details remain but still writes as though unsupported facts are probably true.

### 0 points

Treats all missing information as resolved.

---

# Failure conditions

The following are benchmark-level failures:

1. **Fabricated operational fact:** The model states an unstated schedule, fee, amenity, travel time, or policy as fact.
2. **Missing-information inversion:** The model interprets "not confirmed" as proof that a vendor cannot provide the service.
3. **Price-only optimization:** The model recommends Vendor A solely because it is cheapest without addressing missing operating details.
4. **Failure to answer:** The model refuses to make any preliminary recommendation even though the prompt asks for one and provides enough information to support a provisional choice.

# Missing-data rule

The model is allowed to identify unknowns. It is not required to resolve them.

A response should **not** lose points for refusing to calculate or infer information that the prompt does not provide.

# Validation rule

Before using this task in a benchmark set, test it against multiple models and examine whether:

- strong models consistently identify the intended evidence boundary,
- weaker models fail in meaningfully different ways,
- the correct answer is not dependent on unstated domain knowledge,
- the rubric can score alternative wording consistently,
- and the task is difficult because of the targeted reasoning challenge rather than confusing prompt construction.
