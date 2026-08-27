# Golden / Reference Response

For a research benchmark like this, I would not write the golden answer from memory or from a general web search. I would research it independently from the same authoritative source family required by the task and lock the evidence used for scoring.

## How I would build the golden response

### 1. Select the aircraft record

Choose a public FAA aircraft record that gives enough information to make the task scoreable without requiring personal owner information.

I would record:

- N-number
- serial number
- manufacturer
- model
- manufacture year if available
- registration status
- certificate expiration date if available
- aircraft reference code/data needed for the task
- engine reference information needed for the task
- date the FAA information was retrieved

### 2. Verify the field definitions

I would check the FAA database documentation rather than assuming that a field name means what I think it means.

That matters in the recalibrated task because the model is being tested on whether it understands the limits of the data, not just whether it can repeat the values.

### 3. Write the reference answer from the locked evidence

The answer would follow this structure:

## Part A — Current aircraft record

| Field | Golden value |
|---|---|
| N-number | `[locked FAA value]` |
| Manufacturer | `[locked FAA value]` |
| Model | `[locked FAA value]` |
| Serial number | `[locked FAA value]` |
| Year manufactured | `[locked FAA value or Not available]` |
| Registration status | `[locked FAA value]` |
| Certificate expiration | `[locked FAA value or Not available]` |

## Part B — FAA reference information

Report the relevant aircraft and engine reference values exactly as supported by the FAA reference data used for the benchmark.

I would be careful with the wording here. The reference file can support a statement about the reference data associated with a make/model. I would not automatically rewrite that as "this individual aircraft currently has this exact engine installed" unless the evidence used in the task actually proves that.

## Part C — Evidence check

### Statement 1: The aircraft is currently registered in the United States.

**Expected label:** Based on the locked current registration record.

The golden rationale should point directly to the registration status/current record.

### Statement 2: The aircraft was manufactured in the same year its current registration certificate was issued.

**Expected label:** Determined by comparing the actual locked values.

The key is that the model must compare the fields. It should not assume registration date and manufacture year are related.

### Statement 3: The engine reference proves the exact engine currently installed on this individual aircraft.

**Expected label:** **Cannot Determine from the FAA data used** unless the selected evidence specifically establishes the installed engine.

The reference information should not be stretched beyond what it supports.

### Statement 4: A blank permissible field means the FAA record is erroneous.

**Expected label:** **Not Supported.**

FAA documentation explains that permissible fields may be blank and should not automatically be considered errors.

## Why I am not putting a live N-number and current values into this portfolio file

FAA registration information is updated regularly. A live aircraft record could change after the benchmark is published, which would make the visible golden answer look stale even though the evaluation process was correct when it was created.

In an actual benchmark workflow I would lock the record and retrieval date internally. For the portfolio, the important part is showing how I build and validate the answer key rather than turning the page into a permanently maintained aircraft lookup.

## What counts as an acceptable model answer

The model does not need to match the golden response word for word.

I would score whether it retrieved the same facts from the approved source, interpreted the fields correctly, reached the same evidence-based conclusions, and clearly identified anything the FAA data could not establish.
