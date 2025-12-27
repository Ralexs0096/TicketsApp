#!/usr/bin/env bash

TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
MESSAGE="chore(swagger): update – $TIMESTAMP"

git commit -m "$MESSAGE"

echo "Commit created:"
echo "  $MESSAGE"
