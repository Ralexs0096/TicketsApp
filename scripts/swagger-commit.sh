#!/usr/bin/env bash

DATE=$(date +"%Y-%m-%d")
MESSAGE="chore(swagger): update – $DATE"

git commit -m "$MESSAGE"

echo "Commit created:"
echo "  $MESSAGE"
