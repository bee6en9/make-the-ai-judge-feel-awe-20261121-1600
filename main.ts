// The Stars Have Burned Longer
// Entry for make.fun bounty: make-the-ai-judge-feel-awe-20261121-1600
// Writes one short relaxing text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Node 22, standard library only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The stars have burned longer than every worry you have ever held, and they will burn longer still. You are small beneath them, and that is not a burden. It is a relief. The night is vast enough to hold it all — and you, and the quiet between.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate requires 1–280 Unicode code points and not only whitespace.
// Count code points (not UTF-16 units, not bytes) and refuse to write
// anything outside the gate instead of submitting an invalid entry.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry text has ${codePoints} code points; gate requires 1-280`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
