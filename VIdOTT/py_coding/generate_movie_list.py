"""
generate_movie_list.py
-----------------------
Reads a text file containing one direct video URL per line, and produces a
JavaScript-style array of movie entries in this shape:

    {
      title: "Movie Title (Year)",
      src: "<direct video URL>",
      thumb: "<poster/thumbnail image URL>",
      subtitle: "<subtitle URL, or a default placeholder if none found>",
      category: "unknown"
    },

HOW IT WORKS
------------
1. Title: extracted and cleaned from the filename in the URL (strips quality
   tags like 1080p, BluRay, x264, RARBG, etc. and pulls out the year).
2. Thumb: looked up online via the free OMDb API (https://www.omdbapi.com/),
   which returns a movie poster image URL (posters are small JPEGs, not full
   Blu-ray cover scans, so they stay lightweight). If OMDb has no key
   configured, or the movie/poster isn't found, a small generic placeholder
   image is used instead so the field is never left empty.
3. Subtitle: this script does NOT scrape subtitle sites (most require
   scraping/login and would be unreliable/fragile to hardcode). Instead it
   falls back to the placeholder subtitle URL you already had in your sample
   entry. If you have a real subtitle-search API/key, plug it into
   find_subtitle() below.
4. Category: always set to "unknown", per your request.

SETUP
-----
1. Get a free OMDb API key (takes 30 seconds): https://www.omdbapi.com/apikey.aspx
2. pip install requests
3. Put your key in OMDB_API_KEY below (or set env var OMDB_API_KEY).
4. Run:  python generate_movie_list.py MovieTest.txt movies.js
"""

import os
import re
import sys
import json
import time
import urllib.parse

try:
    import requests
except ImportError:
    requests = None  # script still runs; thumb lookup will just be skipped


# ----------------------------------------------------------------------
# CONFIG
# ----------------------------------------------------------------------

# Get a free key at https://www.omdbapi.com/apikey.aspx and paste it here,
# or set it as an environment variable instead: export OMDB_API_KEY=xxxx
OMDB_API_KEY = os.environ.get("OMDB_API_KEY", "")

# Used whenever no poster can be found (kept intentionally tiny/lightweight).
PLACEHOLDER_THUMB = "https://placehold.co/200x300?text=No+Image"

# Used whenever no subtitle is found/available.
DEFAULT_SUBTITLE = "https://raw.githubusercontent.com/harish-kumar-kp/showreel/main/VIdOTT/subtitles/Dummy_Subtitles.srt"

DEFAULT_CATEGORY = "unknown"

# Junk tokens commonly found in scene-release filenames; stripped when
# building the human-readable title.
JUNK_TOKENS = {
    "1080p", "720p", "480p", "2160p", "4k",
    "bluray", "blu", "ray", "brrip", "bdrip", "webrip", "web", "dl",
    "hdrip", "dvdrip", "dvd", "hdtv",
    "x264", "x265", "h264", "h", "264", "265", "hevc", "aac", "ac3", "dts",
    "rarbg", "yify", "yts", "eztv", "ettv",
    "laserdisc", "rf", "capture", "mp4", "mkv", "avi",
}

YEAR_RE = re.compile(r"(19|20)\d{2}")


# ----------------------------------------------------------------------
# TITLE PARSING
# ----------------------------------------------------------------------

def clean_title_from_url(url: str) -> str:
    """Derive a readable 'Title (Year)' string from a scene-release filename."""
    filename = urllib.parse.unquote(url.rstrip("/").split("/")[-1])
    filename = re.sub(r"\.(mp4|mkv|avi|mov)$", "", filename, flags=re.IGNORECASE)

    # Split on any run of '.', '_', '-' or whitespace.
    raw_tokens = [t for t in re.split(r"[.\-_\s]+", filename) if t]

    # Find the year, and only keep tokens *before* it for the title.
    year = None
    year_index = len(raw_tokens)
    for i, tok in enumerate(raw_tokens):
        m = YEAR_RE.search(tok)
        if m:
            year = m.group(0)
            year_index = i
            break

    title_tokens = raw_tokens[:year_index]

    # Drop junk tokens that may have snuck in before the year (rare, but safe).
    title_tokens = [t for t in title_tokens if t.lower() not in JUNK_TOKENS]

    if not title_tokens:
        # Fallback: nothing sensible left, just use the raw filename.
        title_tokens = raw_tokens

    title = " ".join(word.capitalize() if word.islower() or word.isupper() else word
                      for word in title_tokens)
    title = re.sub(r"\s+", " ", title).strip()

    return f"{title} ({year})" if year else title


# ----------------------------------------------------------------------
# THUMBNAIL LOOKUP (OMDb API)
# ----------------------------------------------------------------------

def find_thumb(title: str) -> str:
    """Look up a small poster image for `title` via OMDb. Falls back to a
    lightweight placeholder if no key is set or nothing is found."""
    if not requests or not OMDB_API_KEY:
        return PLACEHOLDER_THUMB

    # Strip the "(Year)" suffix for the search, but pass year separately —
    # OMDb matches better that way.
    m = re.match(r"^(.*?)(?:\s*\((\d{4})\))?$", title)
    search_title, year = (m.group(1).strip(), m.group(2)) if m else (title, None)

    params = {"apikey": OMDB_API_KEY, "t": search_title}
    if year:
        params["y"] = year

    try:
        resp = requests.get("https://www.omdbapi.com/", params=params, timeout=8)
        data = resp.json()
        poster = data.get("Poster")
        if poster and poster != "N/A":
            return poster
    except Exception:
        pass

    return PLACEHOLDER_THUMB


# ----------------------------------------------------------------------
# SUBTITLE LOOKUP (placeholder — plug in a real subtitle API if you have one)
# ----------------------------------------------------------------------

def find_subtitle(title: str) -> str:
    """No reliable free/keyless subtitle-search API exists that can be safely
    auto-queried here, so this always returns the default placeholder.
    If you have access to an API (e.g. OpenSubtitles with an API key), you
    can implement the real lookup here and return its .srt/.vtt URL instead.
    """
    return DEFAULT_SUBTITLE


# ----------------------------------------------------------------------
# MAIN
# ----------------------------------------------------------------------

def build_entries(input_path: str):
    entries = []
    with open(input_path, "r", encoding="utf-8") as f:
        for line in f:
            url = line.strip()
            if not url:
                continue

            title = clean_title_from_url(url)
            thumb = find_thumb(title)
            subtitle = find_subtitle(title)

            entries.append({
                "title": title,
                "src": url,
                "thumb": thumb,
                "subtitle": subtitle,
                "category": DEFAULT_CATEGORY,
            })

            # Be polite to the free API (avoid hammering it).
            if requests and OMDB_API_KEY:
                time.sleep(0.3)

    return entries


def to_js(entries) -> str:
    lines = ["["]
    for e in entries:
        lines.append("  {")
        lines.append(f'    title: {json.dumps(e["title"])},')
        lines.append(f'    src: {json.dumps(e["src"])},')
        lines.append(f'    thumb: {json.dumps(e["thumb"])},')
        lines.append(f'    subtitle: {json.dumps(e["subtitle"])},')
        lines.append(f'    category: {json.dumps(e["category"])},')
        lines.append("  },")
    lines.append("]")
    return "\n".join(lines)


if __name__ == "__main__":
    in_path = sys.argv[1] if len(sys.argv) > 1 else "MovieTest.txt"
    out_path = sys.argv[2] if len(sys.argv) > 2 else "movies.js"

    if not OMDB_API_KEY:
        print("NOTE: No OMDB_API_KEY set — thumbnails will use the placeholder "
              "image for every entry. Get a free key at "
              "https://www.omdbapi.com/apikey.aspx and set it in this script "
              "(or as an env var) to fetch real posters.\n")

    entries = build_entries(in_path)
    js_output = "const movies = " + to_js(entries) + ";\n"

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(js_output)

    print(f"Wrote {len(entries)} entries to {out_path}")
