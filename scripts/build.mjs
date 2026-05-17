import { mkdir, readFile, rm, writeFile, cp } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dedupeItems, normalizeItems, rankItems } from "../lib/radar.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const out = resolve(root, "dist");
const snapshotPath = resolve(root, "snapshots/2026-05-17/sources.json");

const raw = JSON.parse(await readFile(snapshotPath, "utf8"));
const items = rankItems(dedupeItems(normalizeItems(raw)));

await rm(out, { recursive: true, force: true });
await mkdir(resolve(out, "data"), { recursive: true });
await cp(resolve(root, "app"), out, { recursive: true });
await writeFile(resolve(out, "data/radar-items.json"), JSON.stringify(items, null, 2));

console.log(`Built ${items.length} radar items into ${out}`);

