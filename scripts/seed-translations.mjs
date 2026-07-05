#!/usr/bin/env node
/** Seed translation files from English (run translate-expert-guides.py to localize). */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { expertData } from "./expert-data/index.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "expert-data/translations");
fs.mkdirSync(outDir, { recursive: true });

for (const lang of ["es", "fr", "ja", "pt", "zh", "ru", "it"]) {
  const out = {};
  for (const [slug, entry] of Object.entries(expertData)) {
    const en = entry.content.en;
    out[slug] = {
      metaDescription: en.metaDescription,
      intro: en.intro,
      quickTips: [...en.quickTips],
      strategy: [...en.strategy]
    };
  }
  fs.writeFileSync(
    path.join(outDir, `${lang}.mjs`),
    `export const ${lang}Translations = ${JSON.stringify(out, null, 2)};\n`
  );
  console.log(`Seeded ${lang}.mjs (${Object.keys(out).length} guides)`);
}
