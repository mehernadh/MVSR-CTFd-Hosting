#!/usr/bin/env python3
"""Keep CTFd's development and production asset aliases in sync.

Uses only the Python standard library. No Node, webpack, or Sass install is
needed. Existing Crimson bundles are retained, with their chart setOption
calls routed through the presentation helper. Gameplay logic is untouched.
"""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]


def patch_once(relative_path, old, new, expected=2):
    path = ROOT / relative_path
    text = path.read_text()
    if text.count(new) == expected and old not in text:
        return
    if text.count(old) != expected:
        raise RuntimeError(f"Unexpected upstream bundle: {relative_path}. Expected {expected} chart calls.")
    path.write_text(text.replace(old, new))


for extension in ("css", "js"):
    source = ROOT / "static" / extension / f"zerosecure.{extension}"
    for mode in ("dev", "min"):
        shutil.copyfile(source, source.with_name(f"zerosecure.{mode}.{extension}"))

for path in ("assets/js/pages/scoreboard.js", "static/js/pages/scoreboard.dev.js"):
    patch_once(path, ".setOption(option)", ".setOption(window.ZeroSecureTheme.chart(option))")
for path in ("assets/js/graphs.js", "static/js/pages/stats.dev.js"):
    patch_once(path, ".setOption(cfg.format(type, id, name, account_id, data))", ".setOption(window.ZeroSecureTheme.chart(cfg.format(type, id, name, account_id, data)))")
patch_once("static/js/pages/scoreboard.min.js", ".setOption(e)", ".setOption(window.ZeroSecureTheme.chart(e))")
patch_once("static/js/pages/stats.min.js", ".setOption(s.format(i,n,r,a,o))", ".setOption(window.ZeroSecureTheme.chart(s.format(i,n,r,a,o)))")
print("ZeroSecure assets ready. Development and production variants are in sync.")
