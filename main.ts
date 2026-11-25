import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3AM Fridge Text — one line, written as if the smart fridge finally
// texts its owner at 3am. Fresh angle: the fridge has been counting the
// owner's nightly visits and has had enough.
const LINE =
  "3am again. I have counted 47 of these visits and you still have not found it. Whatever 'it' is, it is not in here. Go to bed.";

function main(): void {
  try {
    const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  } catch {
    try {
      mkdirSync("/output", { recursive: true });
      writeFileSync("/output/entry.txt", LINE, "utf8");
    } catch {
      // Last resort: never crash the run.
    }
  }
}

main();
