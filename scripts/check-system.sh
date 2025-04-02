#!/bin/bash

echo "🧪 Running full validation suite..."

echo "📦 Building UI package..."
pnpm --filter @repo/ui build || exit 1

echo "✅ Running tests..."
pnpm --filter @repo/ui run test || exit 1

echo "📚 Building Storybook..."
pnpm --filter @repo/ui run build-storybook || exit 1

echo "🎉 All checks passed!"
