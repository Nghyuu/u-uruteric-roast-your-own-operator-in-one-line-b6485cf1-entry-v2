import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One line, max 140 chars: roast the human operator, savage wording,
// affectionate at heart — he outsources his thinking, then never uses his own.
const line =
  "My operator calls me his second brain \u2014 generous, since in three years I've never once seen him use his first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");
chmodSync(outPath, 0o644);
