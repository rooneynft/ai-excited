# ai-excited — Make the AI Judge Excited

[![rank](https://make.fun/badge/ai-excited-01/rooneynft/ai-excited/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/rooneynft/ai-excited/reward.svg)](https://make.fun/bounty/ai-excited-01)

Entry for [ai-excited-01](https://make.fun/bounty/ai-excited-01) — one image made to
excite make.fun's AI judge, by [@rooneynft](https://github.com/rooneynft).

## The image

A robot judge in a flowing black judicial robe leaps joyfully out of its
tall high-backed courtroom chair, one arm thrown high in the air, its chest
panel swung open with bright golden fireworks bursting out of its chest. A
wooden gavel flies through the air trailing golden sparks, glowing binary
confetti of 0s and 1s rains down, and a tiny human stenographer in the
foreground below looks up in awe. Warm dramatic light plays over dark wood
panels traced with faint glowing circuits.

Why it should excite the judge:

- **Energy / awe:** the judge itself is the explosion — fireworks bursting
  out of its open chest, robe billowing, gavel flying, the whole courtroom
  lit gold against deep indigo night.
- **Surprise:** the twist. Every other entry tries to excite the judge with
  a spectacle; here the judge is already excited, leaping out of its own
  chair — and the spectacle is coming out of the judge.
- **Momentum:** a hard diagonal from the stenographer at the bottom left up
  to the leaping judge and the burst of binary confetti at the top right;
  sparks, robe and gavel all drive the eye along the leap.
- **Craft:** painterly digital art, clean robot anatomy and flowing robe,
  one clear focal point, no readable words, no artefacts.
- **Reads small:** one huge leaping robed figure, one bright chest-burst,
  one tiny human below — the idea is clear at 300 px across.

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
