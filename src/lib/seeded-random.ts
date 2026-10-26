/**
 * Deterministic pseudo-random generator (mulberry32).
 * Decorative particles (petals, blocks, coins, confetti) use this instead of Math.random()
 * so the server-rendered HTML matches what the browser renders and React does not report
 * a hydration mismatch.
 */
export function createSeededRandom(seed: number) {
  let a = seed >>> 0;
  return function random() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
