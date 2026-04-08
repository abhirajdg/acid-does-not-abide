# acid-does-not-abide

> *"The acid does not abide."*

Live coded algorave music by **Bong Lebowski** — where Raag Bhairav meets the Roland TB-303, and Indian Classical theory gets fed through a squelching, resonant filter at 128 BPM.

Built with [Strudel](https://strudel.cc) — a browser-based live coding environment porting TidalCycles to JavaScript.

---

## Tracks

### `acid-bhairav-v1.js`

**Raag Bhairav** (C Db E F G Ab B) — a morning raga of devotion and austerity — run through two detuned pulse oscillator 303 lines, a 4-to-the-floor kick, and a half-time melodic motif drowning in temple reverb.

The *komal Re* (Db) and *komal Dha* (Ab) are the soul of the raga. Over a 303 with resonance at 23, they become something else entirely.

**Architecture:**
- Two pulse oscillator acid basslines phasing against each other (Perlin rates: slow 3 vs slow 7)
- Classic acid house drum grid — kick / clap / 16th hats / open hat
- Bhairav melodic motif at half-time in `room(0.9)` cave reverb
- `fast(8)` bassline with sine-modulated decay for unpredictable note lengths

**To run:** paste `acid-bhairav-v1.js` into [strudel.cc](https://strudel.cc) and hit play.

---

## Philosophy

Ragas are not scales. They are living things — with time of day, mood, ascent, descent, characteristic phrases. Bhairav is meant to be heard at dawn. Running it through acid house at 128 BPM is not disrespect. It is a different kind of devotion.

Algorave is live coding as performance. The code is the score. The mutations are the improvisation.

Bong Lebowski is the intersection of all of this.

---

## Stack

- [Strudel](https://strudel.cc) — live coding pattern language (TidalCycles port to JS)
- Web Audio API — all synthesis runs in the browser, no installs
- Perlin noise + sine LFOs — for organic modulation
- Raag Bhairav — Hindustani Classical, morning raga, associated with Lord Shiva (Bhairav form)

---

## Coming

- Raag Yaman — euphoric acid
- Raag Darbari Kannada — dark acid
- Raag Todi — brutal acid
- Hydra visual patches to accompany each track

---

## Run Locally

1. Go to [strudel.cc](https://strudel.cc)
2. Paste any `.js` file from this repo
3. Hit play
4. Mutate

No install. No setup. Just code and sound.

---

*"The acid does not abide. But the raga does."*

**Bong Lebowski** — Kolkata
