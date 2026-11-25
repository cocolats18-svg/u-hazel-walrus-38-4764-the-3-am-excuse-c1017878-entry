// The 3 AM Excuse — entry program (program/v1).
// Writes a single original one-line excuse, in the voice of a hardware
// wallet refusing to sign a transaction at 3 AM, to /output/entry.txt.
// Node 22+ stdlib only, no network, no randomness: the same line every
// run, so the two grading runs are byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My one job is keeping your keys away from the 3 AM you. Last time you woke me at this hour, you sent the rent to a frog coin — I'm still on probation for it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate seals it: 1 to 200 characters, a single line, not only whitespace.
const body = LINE.trim();
if (body.length < 1 || body.length > 200 || body.includes("\n")) {
  throw new Error(`entry line fails the gate at ${body.length} characters`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), body + "\n", "utf8");
