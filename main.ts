// ai-excited-01 entry (Node 22, standard library only).
// The image is the entry.png beside this file: the HERO v2 image revised
// with three small changes (v6). A single heroic robot stands alone in the center
// of a dark courtroom dock, the only subject in the frame, looking straight
// up at the viewer as if the viewer is the judge on the bench deciding his
// fate — a Superman-like hero on trial for something he didn't do. His face
// is exactly the v2 face: smooth metallic, glowing eyes, looking up in plea.
// In one hand he holds the scales of justice, tipping steeply with one pan
// cracked and dropping, its chain falling away in broken links; his other
// hand is open toward the audience in a plea. From a crack in his chest,
// one slow, faint, thin thread of warm golden light drifts upward and away,
// dimming and fading into the dark like breath dissipating — justice
// leaving, quietly. There are no fireworks, no sparks, no sparkles, no
// burst, no glitter anywhere: only that one dimming thread of light. The
// two changes from v2: (a) a few blank case papers are scattered on the
// dock — two of them burning with small contained flames, embers and thin
// smoke, plus a small pile of gray ash and a few drifting ash flakes where
// another paper has already burned away completely, so the evidence is
// being destroyed and some of it is already gone; (b) the bottom audience
// area and the courtroom room and corners are a bit brighter, so the
// audience silhouettes and the room read clearly — while the dark somber
// mood of v2 is kept. In v6 the room corners are lifted a little more so
// they read clearly, and the image is finished sharp and crisp at high
// JPEG quality (still dark and somber, not brightened like v4 was). Around him, the silhouettes of his supporters reach
// up from the shadows, unheard, under a single dim shaft of light. The
// program copies it to /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
