# acid-does-not-abide

> *"The acid does not abide."*

Live coded algorave music by **Bong Lebowski** - where Raag Bhairav meets the Roland TB-303, and Indian Classical theory gets fed through a squelching, resonant filter at 128 BPM.

Built with [Strudel](https://strudel.cc), a browser-based live coding environment porting TidalCycles to JavaScript.

---

## Tracks

### `acid-bhairav-v1.js`

**Raag Bhairav** (C Db E F G Ab B) - a morning raga of devotion and austerity, run through two detuned pulse oscillator 303 lines, a 4-to-the-floor kick, and a half-time melodic motif drowning in temple reverb.

The *komal Re* (Db) and *komal Dha* (Ab) are the soul of the raga. Over a 303 with resonance at 23, they become something else entirely.

**Architecture:**
- Two pulse oscillator acid basslines phasing against each other (Perlin rates: slow 3 vs slow 7)
- Classic acid house drum grid — kick / clap / 16th hats / open hat

**To run:** paste [`acid-bhairav-v1.js`](https://github.com/abhirajdg/acid-does-not-abide/blob/main/acid-bhairav-v1.js) into [strudel.cc](https://strudel.cc) and hit play.

---

## Daily archive

[`daily/`](./daily) holds the short (~15-25s) patterns from the daily rotation — one `.strudel`
file plus a `.json` metadata twin (topic, cycle count, target duration) per day. This is the
public half of a larger private pipeline; the pattern code here is real and playable, it's just
the render/publish tooling around it that stays closed. Synced automatically from the daily
pipeline — see [bonglebowski.in](https://bonglebowski.in) for the finished videos and the daily
YouTube playlist.

**To run any day's pattern:** paste the `.strudel` file into [strudel.cc](https://strudel.cc) and
hit play.

---

## Philosophy

Ragas are not scales. They are living things, with time of day, mood, ascent, descent, characteristic phrases. Bhairav is meant to be heard at dawn. Running it through acid house at 128 BPM is not disrespect. It is a different kind of devotion.

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

Not yet built — this is the actual pre-production for each: the raga's theory, how it maps onto
the alap → jor → jhala arc, and which Strudel tools do the work. Written to be checked against,
not just read — if a scale claim below turns out wrong once it's actually running in strudel.cc,
that's a bug report, not a vibe.

### Raga Yaman

**S R G M̌ P D N** — Kalyan thaat, sampurna-sampurna (all seven swaras, both directions). Every note shuddha except Madhyam, which is tivra (M̌, sharp fourth). That single raised Ma is the entire identity of the raga — drop it back to shuddha and you're playing Bilawal.

Vadi Ga, samvadi Ni. Aroha: N. R G M̌ D N S. (note the approach to Sa from the Ni below, not straight up the scale). Avaroha: S N D P M̌ G R S. Pakad: P R, G R, N R S — the phrase that keeps circling back through Re without resolving early. Mood is generally given as expansive, devotional-romantic, unhurried; traditional performance slot is the first quarter of the night (roughly 6–9pm). It's also one of the first ragas taught to students, which says something about how completely the tivra Ma defines the harmonic space without needing komal notes to do it.

**How we want to play it.** Same arc as Bhairav: alap, jor, jhala. But where Bhairav's gravity comes from two komal notes pulling down, Yaman's lift comes from one note pulling up — the tivra Ma opens the interval between Ga and Pa into something that reads as major-key euphoria in a Western ear, which is exactly the "euphoric acid" instinct in the original one-liner. The alap should sit almost entirely on Ga-Mǎ-Dha, letting that raised fourth ring out slow and unresonated before any rhythm exists — it's the one moment in the set where the 303 stays clean. Jor introduces pulse without a backbeat: broken, syncopated, walking through the pakad's Re-centric phrasing rather than running the scale straight. Jhala is where it turns acid-house proper — faster cpm, resonance climbing, the tivra Ma driving filter sweeps that overshoot and snap back, because that's the interval doing the emotional work; a Bhairav-style slow half-time motif would waste it. Keep the density moderate-to-high but not chaotic — Yaman's mood is romantic, not menacing, so leave headroom for the delay/room tail to actually breathe between phrases rather than drowning them.

**Strudel implementation.**
- `.scale("D:lydian")` is the direct match — Yaman's swara set (all shuddha, tivra Ma) is note-for-note the Lydian mode, root on whichever Sa you pick. This is the same relationship the existing Kalyan daily pattern already leans on, since Kalyan thaat and Yaman share the identical seven-note material.
- Build the melody line as scale-degree numbers through the pakad shape (`n("4 3 2 4 2 1 0 ~")` style, per the reference pattern) rather than a straight run, so the Re-anchoring of the pakad survives into the pattern instead of just producing a lydian scale run.
- `setcpm()` staged in three steps across alap/jor/jhala — slow and rubato-feeling for alap (irregular cycle lengths via `<...>` alternation), a fixed moderate cpm for jor, a faster locked cpm for jhala.
- `.sometimes(x => x.ply(2))` and `.degradeBy()` on the jor layer to keep the broken-pulse section from feeling metronomic before the jhala kicks in properly.
- Acid bassline on the tivra Ma specifically: automate `.lpf()`/`.lpq()` sweeps timed to land on that note so the raised fourth is the thing the filter opens on, not a generic sweep.
- `.room()` and `.delay()` kept relatively wet in the alap/jor pads (drone on Sa/Pa, per the reference pattern's `gm_pad_warm` layer) and pulled back once the 909 grid (`.bank("RolandTR909")`, `.euclid()`) enters in jhala, so the drums don't turn to mud.

---

### Raga Darbari Kannada

**S R g M P d n** — Asavari thaat. Gandhar, Dhaivat and Nishad are komal; Re, Ma, Pa shuddha. The komal Ga and komal Dha are additionally described as *ati-komal* — pitched slightly lower than a standard komal interval — and both carry a slow, heavy andolan (oscillation) that is not ornamental but structural: sing or play them straight and it stops being Darbari.

Vadi Re, samvadi Pa. The raga is markedly vakra (zigzag) rather than a clean run: aroha S R g, g M P d n Ṡ; avaroha Ṡ d n P M P (M)g, (M)g M (S)R, S — note the deliberate backward glances (P M P, the double-touch on g) built into the descent itself. Mood is grave, meditative, regal, verging on renunciate — commonly called the "raga of kings" for the controlled, unhurried power in it rather than any brightness. Traditional performance time is late night, deep into the second or third prahar (commonly cited as around midnight). Legend (recorded on multiple sources, unverifiable as history but consistent across them) credits Miyan Tansen with adapting it from the morning raga Asavari specifically so Akbar could hear something in that mood at night — which is the clearest possible statement of what Darbari is: Asavari's material, inverted in time and weighted down.

**How we want to play it.** This is the "dark acid" instinct done properly, and it's the inverse problem from Yaman: Darbari's tension lives in slowness and return, not in a raised interval you can sweep toward. The alap has to be long and almost static — sit on Sa-Re-komal-Ga with the andolan explicit and slow, no rhythmic information at all, filter closed and dark rather than bright. Jor should not speed the andolan up; it should let a pulse creep in underneath while the oscillating notes keep moving at their own, slower tempo — two clocks running against each other, which is where the "hypnotic repetition-with-drift" instinct earns its keep. Jhala for Darbari should stay comparatively restrained in tempo next to Yaman or Todi — the raga's gravity is wrong at a bright, fast cpm — but push resonance and low-end weight hard: a 303 tuned low, filter cutoff kept mostly shut with occasional narrow, aggressive peaks rather than wide sweeps, echoing the ati-komal notes' narrow, heavy oscillation rather than a wide bend. Density should stay sparse and repetitive rather than busy — Darbari's power is repetition with almost no ornament changing underneath it.

**Strudel implementation.**
- No verified named scale for this. Checked Strudel's scale library (built on tonal.js's scale-type data): there is no `"darbari"` or `"kanada"` entry. Asavari *thaat's* raw seven-note material (S R g M P d n) is intervallically identical to the plain natural-minor/Aeolian mode, which Strudel does have (`.scale("D:minor")` or `.scale("D:aeolian")`) — but that only gives the seven pitches, not the raga. Darbari's vakra shape, its omissions, and above all the andolan are not expressible through `.scale()` alone.
- Build the phrase material explicitly via `n()` degree sequences against `.scale("D:aeolian")` that encode the vakra movement from the aroha/avaroha above (e.g. deliberately repeating and backtracking through g and d rather than running the mode straight), rather than trusting a scale name to produce idiomatic Darbari phrasing.
- Simulate andolan with a slow-period `.vib()`/vibrato-style LFO or a `sine`-driven pitch-bend pattern on notes landing on g and d specifically, slow enough to read as a controlled oscillation rather than a modern synth wobble.
- Two-tempo layering: a static or very-slow-`setcpm()` melodic layer stacked against a `stack()`-mate percussion layer on its own faster grid, rather than one shared cpm for the whole pattern — matches the "two clocks" jor approach above.
- `.lpf()` kept low with narrow `.lpq()` spikes rather than continuous sweeps; `.room()` long and dark (short predelay, long tail) instead of the bright plate-y room a Yaman pad would want.
- Sparse `.euclid()` ratios (e.g. `.euclid(3,8)` or fewer hits) on the drum layer, `.degradeBy()` used lightly if at all — Darbari's rhythm should feel weighty and inevitable, not glitchy.

---

### Raga Todi

**S r g M̌ P d N** — Todi thaat. Rishabh, Gandhar and Dhaivat are komal; Madhyam is tivra; Nishad and Pancham shuddha. Several sources additionally describe the Gandhar here as *ati-komal* — lower than the standard komal Ga used elsewhere — which is a detail worth building into any drone/tuning choices, not just labelling.

Vadi Dha, samvadi Ga (i.e., the two altered notes below Pa are the raga's own center of gravity). Aroha: S r g M̌ P d N Ṡ; avaroha: Ṡ N d P M̌ g r S. Pakad: d N S, r, g, r, S, M̌, g, r g, r, S. Mood is described across sources as pathos-laden, serious, intensely poignant — often called one of the most difficult and emotionally demanding ragas in the Hindustani repertoire. Traditional performance time is late morning, roughly 10am–1pm — worth noting explicitly since it breaks the pattern of the other two ragas here (morning devotion, evening euphoria, deep night gravity): Todi's slot is midday, and its character is the odd one out precisely because of that.

**How we want to play it.** Todi's difficulty is real and should show up as restraint rather than density. The interval that defines it isn't one altered note (Yaman) or an oscillation (Darbari) — it's the specific stack of komal Re, komal Ga and tivra Ma sitting close together below Pa, a cluster of tension that never fully resolves even in the avaroha. The alap should explore that lower tetrachord almost exclusively before touching Pa at all, deliberately withholding the perfect fifth to let the dissonant cluster do its work — this is the one raga in the set where the alap should feel the most unresolved, not the most restful. Jor can introduce pulse earlier than in Darbari, because Todi's tension wants to be pushed rather than left static, but the tempo should stay controlled — this is not the raga to run fast for its own sake given how emotionally loaded the source material already is. Jhala is where the tivra Ma and komal Ga get set against each other hardest: acid basslines built on that specific dyad, filter resonance pushed high enough to hurt slightly, because Todi's pathos translates acid-house-wise into harshness and near-dissonance rather than either Yaman's brightness or Darbari's weight. This is the "brutal acid" instinct, and it should come from interval choice, not just from turning the resonance knob further than the other two sets.

**Strudel implementation.**
- No reliable named-scale match. Strudel's scale library (again via tonal.js) does contain a literal entry called `"todi raga"` — but its interval formula (`1P 2m 3M 4P 5d 6m 7M`) does **not** match Hindustani raga Todi: it has a *major* third (shuddha Ga) rather than komal Ga, a diminished fifth (a flattened Pa, which essentially never happens in Hindustani ragas — Pa is invariant), and no tivra Ma at all — the single interval that most defines this raga. Do not use `.scale("_:todi raga")` expecting authentic Todi; it will produce something else entirely, closer to a Western/Carnatic-adjacent exotic scale than to this raga.
- Because none of Strudel's built-in named scales match Todi thaat's actual interval set (komal Re, komal Ga, shuddha Mǎ tivra, Pa, komal Dha, shuddha Ni), construct it explicitly — either as a custom scale table (Strudel supports defining scales as raw semitone-interval arrays, not just named lookups) or by writing `n()` patterns directly as note names/numbers rather than scale-degree indices.
- Keep melodic material weighted toward the lower tetrachord (r, g, M̌) in early sections; only bring in the upper d/N/Ṡ once the jhala tension is already established, mirroring the pakad's own emphasis on d N S / r g r phrasing.
- `.lpq()` pushed noticeably higher than in the Yaman or Darbari sets — the "hurts slightly" quality — with sweeps timed to land specifically on the tivra Ma against a sustained komal Ga drone, so the beating between the two is audible.
- Faster `.degradeBy()`-driven variation and `.sometimes()` mutation in jhala to keep the harsh, unresolved character from calcifying into a static loop — Todi's pathos reads as restless, not steady.
- A held drone layer (`gm_pad`-style, per the reference pattern's drone approach) fixed on Sa and Pa throughout, so the dissonant cluster in the melody has a stable frame to clash against — without that anchor the tension reads as randomness rather than raga.

---

## Run Locally

1. Go to [strudel.cc](https://strudel.cc)
2. Paste any `.js` file from this repo
3. Hit play
4. Mutate

---

*"The acid does not abide. But the raga does."*

**Bong Lebowski** — Kolkata
