#!/usr/bin/env bash
set -euo pipefail

# Run from this script's directory
cd "$(dirname "$0")"

# Check Hugo
if ! command -v hugo >/dev/null 2>&1; then
  echo "Error: Hugo is not installed or not in PATH."
  echo "Install: https://gohugo.io/getting-started/installing/"
  exit 1
fi

OUT_DIR="public"
SAMPLE_IMAGE="$OUT_DIR/images/gohugo-default-sample-hero-image.jpg"

# Clean old build
rm -rf "$OUT_DIR"

# Build
hugo --gc --minify

# Remove sample image if generated
rm -f "$SAMPLE_IMAGE"

echo "✅ Build complete."
