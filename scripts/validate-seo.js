/**
 * A script to validate SEO settings in the application
 */

const fs = require("fs");
const path = require("path");

console.log("Starting SEO validation...");

// Check if all OpenGraph images have absolute URLs
function validateMetadataImages(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");

    // Check if file contains OpenGraph metadata
    if (content.includes("openGraph:")) {
      console.log(`\nChecking ${filePath}...`);

      // Look for relative URLs in images
      const relativeImageMatches = content.match(/url: ["']\/[^"']*/g);
      if (relativeImageMatches && relativeImageMatches.length > 0) {
        console.error(
          `❌ Found relative URLs in OpenGraph images: ${filePath}`
        );
        console.error(relativeImageMatches);
        return false;
      } else {
        console.log(`✅ All OpenGraph images use absolute URLs: ${filePath}`);
        return true;
      }
    }
    return true;
  } catch (error) {
    console.error(`Error checking file ${filePath}:`, error);
    return false;
  }
}

// Check if metadataBase is set to the correct domain
function validateMetadataBase(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");

    if (content.includes("metadataBase:")) {
      console.log(`\nChecking metadataBase in ${filePath}...`);

      if (
        content.includes('metadataBase: new URL("https://dunglegiamcan.com")')
      ) {
        console.log(
          `✅ metadataBase is set correctly to dunglegiamcan.com in ${filePath}`
        );
        return true;
      } else if (
        content.includes("metadataBase:") &&
        content.includes("dunglegiamcan.vn")
      ) {
        console.error(`❌ Found incorrect domain in metadataBase: ${filePath}`);
        return false;
      }
    }
    return true;
  } catch (error) {
    console.error(`Error checking file ${filePath}:`, error);
    return false;
  }
}

// Walk through the app directory looking for metadata files
function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      callback(filePath);
    }
  });
}

let hasErrors = false;

// Check the main layout file first
const layoutPath = path.join(__dirname, "..", "src", "app", "layout.tsx");
if (!validateMetadataBase(layoutPath)) {
  hasErrors = true;
}

// Then check all files in the app directory
walkDir(path.join(__dirname, "..", "src", "app"), (filePath) => {
  if (!validateMetadataImages(filePath) || !validateMetadataBase(filePath)) {
    hasErrors = true;
  }
});

// Final report
console.log("\n----- SEO Validation Summary -----");
if (hasErrors) {
  console.error(
    "❌ Some SEO issues were found. Please fix them before deploying."
  );
  process.exit(1);
} else {
  console.log("✅ All SEO validations passed!");
  console.log(
    "✅ The website should correctly show images when shared on social media."
  );
}
