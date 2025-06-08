#!/bin/bash

# This script rebuilds and restarts the application
echo "🔄 Rebuilding the application with updated SEO settings..."

# Run the build
npm run build

if [ $? -eq 0 ]; then
  echo "✅ Build successful!"
  echo "🚀 Restarting the application..."
  npm run start
else
  echo "❌ Build failed. Please check the errors above."
  exit 1
fi
