# Benchmark Task

## Capability I am testing

The model needs to retrieve information from an authoritative public database, keep different data fields straight, cite the source it actually used, and avoid claiming more than the record supports.

For this reconstruction, the authoritative source is the **FAA Aircraft Registry**.

The FAA makes its Aircraft Registration Database available for download and documents the fields in the master and reference files. The FAA also provides public Aircraft Inquiry searches. Because the registry is updated regularly, I would record the date of retrieval when creating the answer key.

---

# Version 1 — Initial Task

## Prompt

Using only official FAA sources, research a currently registered U.S. civil aircraft identified by the N-number supplied with the task.

Return:

1. N-number
2. aircraft manufacturer
3. model
4. aircraft serial number
5. year manufactured, if the FAA record provides it
6. engine manufacturer/model, if available through the FAA reference data
7. registration status
8. certificate expiration date, if present
9. the FAA source or sources used

Do not include the registered owner's name, street address, or other personal information. If a requested field is blank or not available in the FAA data, say that rather than filling it from another website.

## Why I would start here

This version gives me a clean baseline. It tests whether the model can find the right government source, extract the requested fields, respect missing data, and follow the output restrictions.

It is also fairly easy for a strong research-capable model. If the model returns a fully correct answer, I would score it as a pass — but I would not necessarily stop there.

---

# Version 2 — Recalibrated Task

## Why I changed it

If the first version is consistently passed, the benchmark is mostly measuring retrieval and formatting. I would increase the difficulty by adding a question that requires the model to understand what the FAA fields actually establish.

I would not make it harder by hiding the instructions or adding irrelevant aviation terminology.

## Revised prompt

Using only official FAA sources, research the aircraft identified by the N-number supplied with the task.

### Part A — Current aircraft record

Report:

- N-number
- manufacturer
- model
- serial number
- year manufactured, if available
- registration status
- certificate expiration date, if available

### Part B — FAA reference data

Use the FAA aircraft and engine reference information associated with the record to report any available make/model reference information for the aircraft and engine.

### Part C — Evidence check

For each statement below, label it **Supported**, **Not Supported**, or **Cannot Determine from the FAA data used**, and explain your answer briefly:

1. The aircraft is currently registered in the United States.
2. The aircraft was manufactured in the same year its current registration certificate was issued.
3. The engine reference associated with the aircraft record proves that the exact engine currently installed on this individual aircraft is that engine model.
4. A blank permissible field in the FAA download means the FAA record is erroneous.

### Source requirements

- Use official FAA sources only.
- Identify which FAA source supports each section of the answer.
- Do not use owner name or address information.
- Do not substitute third-party aircraft-tracking or registration websites for missing FAA data.
- If the FAA source does not establish a claim, say so.

## What the recalibrated version adds

The model now has to do more than copy fields.

It has to understand, for example, that a registration record and an aircraft reference record serve different purposes. It also has to resist conclusions that sound reasonable but are not established by the data.

One particularly useful edge case comes directly from the FAA's database documentation: some fields are permissible rather than required and may legitimately be blank. A blank field should not automatically be treated as a database error.

The benchmark is therefore testing retrieval, source discipline, field interpretation, and evidence-bounded reasoning in the same task.
