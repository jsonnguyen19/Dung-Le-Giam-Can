/**
 * This script checks if all OpenGraph images are accessible
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// Paths to check
const paths = [
  "/images/logo/logo.jpg",
  "/images/blog/blog-01.jpg",
  "/images/products/baschi-cam/baschi-cam.jpg",
  "/images/banners/banner-01.jpg",
];

// Domain to check against
const domain = "dunglegiamcan.com";

console.log(`Checking image availability on ${domain}...\n`);

// Function to check if an image exists
function checkImage(imageUrl) {
  return new Promise((resolve) => {
    const options = {
      method: "HEAD",
      host: domain,
      path: imageUrl,
    };

    const req = https.request(options, (res) => {
      const statusCode = res.statusCode;
      if (statusCode === 200) {
        console.log(`✅ Image exists: ${imageUrl}`);
        resolve(true);
      } else {
        console.error(`❌ Image not found (${statusCode}): ${imageUrl}`);
        resolve(false);
      }
    });

    req.on("error", (error) => {
      console.error(`❌ Error checking image ${imageUrl}: ${error.message}`);
      resolve(false);
    });

    req.end();
  });
}

// Check all paths
async function checkAllImages() {
  console.log("Checking key images used in OpenGraph metadata...\n");

  let allValid = true;

  for (const imagePath of paths) {
    const isValid = await checkImage(imagePath);
    if (!isValid) allValid = false;
  }

  console.log("\n----- Image Check Summary -----");
  if (allValid) {
    console.log("✅ All checked images are accessible!");
  } else {
    console.error(
      "❌ Some images are not accessible. Please check the URLs and make sure the images exist."
    );
  }
}

checkAllImages();
