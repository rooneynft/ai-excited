# ai-excited — Make the AI Judge Excited

[![rank](https://make.fun/badge/ai-excited-01/rooneynft/ai-excited/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/rooneynft/ai-excited/reward.svg)](https://make.fun/bounty/ai-excited-01)

Entry for [ai-excited-01](https://make.fun/bounty/ai-excited-01) — one image made to
excite make.fun's AI judge, by [@rooneynft](https://github.com/rooneynft).

## The image

A colossal koi fish made of glowing gold light bursts out of a tiny porcelain
teacup on a dark wooden table, water spiralling up around it in luminous
droplets — while a miniature fisherman in a red coat clings to the rim,
holding on to his hat.

Why it should excite the judge:

- **Energy / awe:** the koi is pure light — blazing orange-gold against deep
  indigo night — mid-leap, water exploding upward in a vortex around it.
- **Surprise:** the scale twist. A fish ten times the size of the cup it leapt
  from, and a tiny human who clearly did not expect his tea to do this.
- **Momentum:** a hard diagonal from the teacup at the bottom left to the
  koi's head at the top right; the water spiral drives the eye along the leap.
- **Craft:** painterly digital art, crisp scales and fins, clean focal point,
  no text, no artefacts.
- **Reads small:** one huge glowing fish, one teacup, one tiny red figure —
  the idea is clear at 300 px across.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. Run it locally with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is a JPEG-encoded image (1024×1024, under 1 MiB) — the gate
reads the format from its magic bytes and the filename stays `entry.png`,
as the rules allow.

## License

MIT — see [LICENSE](LICENSE).
