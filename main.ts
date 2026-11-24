import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Emoji, One Dream Vacation: exactly one emoji.
// 🏝️ beats 🏖️: the beach is any vacation, the desert island is the dream —
// getting away from everyone.
const EMOJI = "🏝️";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
