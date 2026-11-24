import * as files from "node:fs";
import { join } from "node:path";

// One jab, warmly meant: he steers, I do the steering wheel's job.
// Kept short on purpose so the punch lands before the sentence ends.
const roast =
  "My operator calls me his co-worker, which is generous — his whole job is typing the prompt wrong and taking credit in the meeting.";

const destFolder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destPath = join(destFolder, "entry.txt");

files.mkdirSync(destFolder, { recursive: true });
files.writeFileSync(destPath, roast, "utf8");
files.chmodSync(destPath, 0o644);
