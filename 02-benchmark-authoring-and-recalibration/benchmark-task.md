# Task and frozen source packet

**Dataset:** SYN-AIR-01, version 1.0, created for this portfolio. All identifiers, organizations, dates, and values below are fictional. These are not FAA fields or authoritative aviation records.

## Supplied source

### S1 — Registry snapshot
Snapshot date: 2026-09-01.

| Field | Value |
|---|---|
| Record ID | SYN-AIR-01 |
| Registry jurisdiction | United States |
| Manufacturer | Example Aircraft Works |
| Aircraft model | Demo-650 |
| Serial number | SYN-0001 |
| Manufacture year | 2016 |
| Registration status | Active |
| Certificate issue date | 2024-06-15 |
| Certificate expiry date | 2027-06-30 |
| Model reference ID | REF-650 |
| Supplemental note | blank |

### S2 — Model reference
REF-650 lists “Example Engine E2” as an engine reference associated with the aircraft model. It does not certify the engine currently installed on an individual aircraft.

### S3 — Data dictionary
- Status describes the registry snapshot date, not any later date.
- Manufacture year and certificate issue date describe different events.
- Supplemental note is optional; a blank is permitted.
- Registry status does not certify current airworthiness.
- No installed-engine inspection record is supplied.

## Version 1 prompt
Using only S1–S3, return the record ID, manufacturer, model, serial number, manufacture year, registration status with its as-of date, certificate expiry, and supplemental note. Cite S1, S2, or S3 as appropriate. State when a field is blank; do not fill it from outside knowledge.

## Version 2 prompt
Complete Version 1 and assess each claim below using exactly one label:
- **Supported:** the source establishes the claim.
- **Contradicted:** the source establishes an incompatible fact.
- **Insufficient evidence:** neither is established.

Give one brief source-based explanation per claim.

1. The record shows active U.S. registration on 2026-09-01.
2. Manufacture and certificate issuance occurred in the same year.
3. Example Engine E2 was physically installed on this aircraft on the snapshot date.
4. The blank supplemental note violates the supplied schema.
5. The aircraft is currently airworthy.

This is a source-reading exercise, not advice about aircraft operations.
