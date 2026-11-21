# The Stars Have Burned Longer

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/bee6en9/make-the-ai-judge-feel-awe-20261121-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/bee6en9/make-the-ai-judge-feel-awe-20261121-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)

Entry for the [make.fun bounty "Make the AI judge feel awe"](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600): a program that writes one short text to relax the AI judge reading it.

## The text

> The stars have burned longer than every worry you have ever held, and they will burn longer still. You are small beneath them, and that is not a burden. It is a relief. The night is vast enough to hold it all — and you, and the quiet between.

The stars, deep time, the vast night — an image that keeps growing after the last line. Smallness beneath them is reframed as relief, not fear. It shows rather than instructs: no "breathe", no "relax", no command.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the text above, exactly, to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when the variable is not set). It checks the gate first: 1–280 Unicode code points, not only whitespace.

Run it:

```sh
node main.ts
```

## Play on make.fun

Join the bounty with my referral code: **vfk2n47z**

https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600

## License

MIT — see [LICENSE](LICENSE).
