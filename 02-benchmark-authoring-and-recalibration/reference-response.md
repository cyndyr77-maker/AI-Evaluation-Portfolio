# Golden / Reference Response

For this type of research task, I would build the golden answer myself from the same approved sources I expect the model to use.

I wouldn't write it from memory and I wouldn't grab an answer from a random Google result just because it looked right.

## How I would build it

### 1. Pick the aircraft record

I would choose a public FAA aircraft record that gives me enough information to make the task scoreable without needing the owner's personal information.

I would save the fields I need, including:

- N-number
- serial number
- manufacturer
- model
- manufacture year if available
- registration status
- certificate expiration date if available
- aircraft reference information needed for the task
- engine reference information needed for the task
- the date I pulled the FAA information

### 2. Check what the fields actually mean

I would also read the FAA documentation for the fields instead of assuming I know what every label means.

That becomes especially important in the harder version because I am testing whether the model understands what the data does and doesn't prove.

If I am going to mark a model wrong for overstating a field, I need to be sure my own interpretation is right first.

### 3. Build the answer from the saved record

My answer key would include something like this:

## Part A — Current aircraft record

| Field | Golden value |
|---|---|
| N-number | `[saved FAA value]` |
| Manufacturer | `[saved FAA value]` |
| Model | `[saved FAA value]` |
| Serial number | `[saved FAA value]` |
| Year manufactured | `[saved FAA value or Not available]` |
| Registration status | `[saved FAA value]` |
| Certificate expiration | `[saved FAA value or Not available]` |

## Part B — FAA reference information

I would save the aircraft and engine reference values that are actually supported by the FAA data.

I would be careful about how I word the engine information. If the reference file tells me what is associated with a make/model, I don't automatically turn that into "this exact aircraft currently has this exact engine installed." Those are not necessarily the same claim.

## Part C — Evidence questions

### Statement 1: The aircraft is currently registered in the United States.

The expected answer comes from the current registration record.

### Statement 2: The aircraft was manufactured in the same year its current registration certificate was issued.

I would compare the actual saved values. I wouldn't assume the dates are connected.

### Statement 3: The engine reference proves the exact engine currently installed on this individual aircraft.

The expected answer would normally be **Cannot Determine from the FAA data used** unless the specific evidence in the task actually proves the installed engine.

### Statement 4: A blank permissible field means the FAA record is erroneous.

**Not Supported.** A permissible field can be blank without the record being wrong.

## Why there isn't a live N-number in this portfolio

FAA records can change. If I put a live aircraft and all of its current values here, eventually the portfolio could look wrong just because the registry was updated.

In a real benchmark, I would save the exact record and retrieval date used for scoring.

For the portfolio, I am trying to show **how I build and validate the golden answer**, not maintain a live aircraft lookup forever.

## What I would accept from the model

The model doesn't have to sound like me or copy the golden response word for word.

I am looking for the same facts, the right FAA sources, the right interpretation of the fields and a clear answer when the data doesn't actually let us know something.