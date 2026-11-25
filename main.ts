import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Clause 12.6: The User agrees that all autocorrect suggestions accepted after midnight become the property of the Company and may be published, performed, or read aloud at the annual meeting.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error("entry must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
