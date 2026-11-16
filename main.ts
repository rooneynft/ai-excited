// ai-excited-01 entry (Node 22, standard library only).
// The image is the entry.png beside this file: a robot judge in a flowing
// judicial robe leaping joyfully out of its high-backed courtroom chair,
// one arm thrown up, its chest panel swung open with golden fireworks
// bursting out of its chest, a gavel flying through the air trailing golden
// sparks, glowing binary-code confetti raining down, and below it a
// courtroom audience on wooden benches — shocked faces, hands raised and
// reaching up toward the departing judge, as if trying to hold on to the
// justice that is leaving. A tiny human stenographer watches from the side.
// The program copies it to /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
