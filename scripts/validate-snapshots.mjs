import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { normalizeItems } from "../lib/radar.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const raw = JSON.parse(await readFile(resolve(root, "snapshots/2026-05-17/sources.json"), "utf8"));

if (!Array.isArray(raw) || raw.length < 3) {
  throw new Error("Snapshot must include at least three items");
}

for (const item of raw) {
  for (const field of ["source", "source_item_id", "type", "url", "title", "summary", "published_at", "topics", "entities"]) {
    if (!(field in item)) {
      throw new Error(`Missing field ${field} in ${item.title ?? "unknown item"}`);
    }
  }
}

const normalized = normalizeItems(raw);
if (new Set(normalized.map((item) => item.id)).size !== normalized.length) {
  throw new Error("Snapshot contains duplicate source ids");
}

console.log(`Validated ${normalized.length} snapshot items`);

