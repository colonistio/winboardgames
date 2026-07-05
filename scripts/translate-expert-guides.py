#!/usr/bin/env python3
"""Generate localized expert guide translations from English source."""
import json
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GUIDES = ROOT / "src/data/expert/guides.ts"
OUT_DIR = ROOT / "scripts/expert-data/translations"
TARGETS = ["es", "fr", "ja", "pt", "zh", "ru", "it"]
DELIM = " ⟦⟫⟧ "
# deep-translator uses zh-CN, not zh
GOOGLE_TARGET = {"zh": "zh-CN"}

try:
    from deep_translator import GoogleTranslator
except ImportError:
    print("Install: pip install deep-translator", file=sys.stderr)
    sys.exit(1)


def load_expert_data():
    import subprocess
    out = subprocess.check_output(
        ["node", "-e", "import { expertData } from './scripts/expert-data/index.mjs'; process.stdout.write(JSON.stringify(expertData));"],
        cwd=ROOT,
        text=True,
    )
    return json.loads(out)


def translate_blob(text: str, target: str, retries: int = 3) -> str:
    google_target = GOOGLE_TARGET.get(target, target)
    for attempt in range(retries):
        try:
            return GoogleTranslator(source="en", target=google_target).translate(text)
        except Exception as e:
            if attempt == retries - 1:
                print(f"    translate error ({target}): {e}", file=sys.stderr)
                return text
            time.sleep(2 * (attempt + 1))


def translate_block(block: dict, target: str) -> dict:
    parts = [
        block["metaDescription"],
        block["intro"],
        *block["quickTips"],
        *block["strategy"],
    ]
    blob = DELIM.join(parts)
    translated = translate_blob(blob, target)
    chunks = translated.split(DELIM)
    if len(chunks) != len(parts):
        # Fallback: translate field-by-field
        chunks = [translate_blob(p, target) for p in parts]
    i = 0
    meta = chunks[i]
    i += 1
    intro = chunks[i]
    i += 1
    tips = chunks[i : i + 4]
    i += 4
    strat = chunks[i : i + len(block["strategy"])]
    return {
        "metaDescription": meta,
        "intro": intro,
        "quickTips": tips,
        "strategy": strat,
    }


def main():
    only = sys.argv[1:] if len(sys.argv) > 1 else TARGETS
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    data = load_expert_data()
    slugs = list(data.keys())
    print(f"Loaded {len(slugs)} guides; targets: {', '.join(only)}")

    for lang in only:
        if lang not in TARGETS:
            print(f"Skip unknown lang: {lang}")
            continue
        out = {}
        for i, slug in enumerate(slugs):
            en = data[slug]["content"]["en"]
            out[slug] = translate_block(en, lang)
            if (i + 1) % 5 == 0 or i == len(slugs) - 1:
                print(f"  {lang}: {i + 1}/{len(slugs)}")
            time.sleep(0.3)
        path = OUT_DIR / f"{lang}.mjs"
        path.write_text(
            f"export const {lang}Translations = {json.dumps(out, ensure_ascii=False, indent=2)};\n",
            encoding="utf-8",
        )
        print(f"Wrote {path}")


if __name__ == "__main__":
    main()
