// ============================================================
//  Bong Lebowski — Acid Bhairav v1
//  Raag Bhairav:  C  Db  E  F  G  Ab  B
//  The komal Re (Db) and komal Dha (Ab) are the soul of this raga.
//  They give the acid filter sweep an unusually dark, devotional bite.
//
//  Target: ~128 BPM (setcpm(32) = 32 cycles/min × 4 beats/cycle)
//
//  Architecture:
//    - Two detuned pulse oscillator 303 lines (psychedelic doubling)
//    - Classic acid house drum grid (kick / clap / hats)
//    - Half-time Bhairav melodic motif in temple reverb
// ============================================================

setcpm(32)

stack(

  // --- 303 ACID BASSLINE (LOWER) ---
  note("<c2 db2 e2 c2> <g2 <ab2 db2 c3 e3> db2 e2>")
    .s("pulse")
    .cutoff(perlin.slow(3).range(100, 3500))
    .resonance(23)
    .decay(sine.slow(5).range(0.04, 0.75))
    .sustain(0)
    .gain(0.7)
    .fast(8),

  // --- 303 ACID BASSLINE (UPPER — PSYCHEDELIC DOUBLE) ---
  note("<c3 db3 e3 c3> <g3 ab3 db3 e3>")
    .s("pulse")
    .cutoff(perlin.slow(7).range(80, 2000))
    .resonance(18)
    .decay(sine.slow(9).range(0.03, 0.4))
    .sustain(0)
    .gain(0.5)
    .fast(8),

  // --- 4-TO-THE-FLOOR KICK ---
  s("bd*4")
    .gain(1.1),

  // --- CLAP on beats 2 & 4 ---
  s("[~ cp]*2")
    .gain(0.8),

  // --- 16th-NOTE HI-HATS ---
  s("hh*16")
    .gain(perlin.range(0.2, 0.55))
    .pan(sine.slow(7).range(0.3, 0.7)),

  // --- OPEN HAT (offbeat accent) ---
  s("~ oh ~ ~")
    .gain(0.45),

  // --- BHAIRAV MELODIC MOTIF ---
  note("<[c4 db4 ~ ~] [e4 ~ ~ g4] [ab4 <g4 g4*2> ~ ~] [e4 db4 c4 ~]>")
    .s("sawtooth")
    .cutoff(1200)
    .resonance(12)
    .pan(rand)
    .decay(0.12)
    .release(0.14)
    .gain(0.41)
    .room(0.9)
    .fast(4)

)
