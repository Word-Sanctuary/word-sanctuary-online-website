#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const INPUT_DIR = 'public/images';
const OUTPUT_DIR = 'public/images/optimized';
const MAX_WIDTH = 1920;
const QUALITY = 80;

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function getAllFiles(dir, fileList = []) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const fileStat = await stat(filePath);
    
    if (fileStat.isDirectory()) {
      await getAllFiles(filePath, fileList);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

async function optimizeImage(inputPath) {
  const relativePath = path.relative(INPUT_DIR, inputPath);
  const outputPath = path.join(OUTPUT_DIR, relativePath);
  const outputDir = path.dirname(outputPath);
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`Processing: ${relativePath} (${metadata.width}x${metadata.height})`);
    
    // Optimize and resize if needed
    let pipeline = image.resize(
      metadata.width > MAX_WIDTH ? MAX_WIDTH : undefined,
      undefined,
      {
        withoutEnlargement: true,
        fastShrinkOnLoad: true,
      }
    );
    
    // Convert to WebP for better compression
    const webpPath = outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    await pipeline
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(webpPath);
    
    // Also keep optimized original format
    if (path.extname(inputPath).toLowerCase() === '.png') {
      await sharp(inputPath)
        .resize(metadata.width > MAX_WIDTH ? MAX_WIDTH : undefined)
        .png({ quality: QUALITY, compressionLevel: 9 })
        .toFile(outputPath);
    } else {
      await sharp(inputPath)
        .resize(metadata.width > MAX_WIDTH ? MAX_WIDTH : undefined)
        .jpeg({ quality: QUALITY, progressive: true })
        .toFile(outputPath);
    }
    
    // Get file sizes
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(webpPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    
    console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`  WebP: ${(webpSize / 1024 / 1024).toFixed(2)}MB (${((1 - webpSize / originalSize) * 100).toFixed(1)}% smaller)`);
    console.log(`  Optimized: ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${((1 - optimizedSize / originalSize) * 100).toFixed(1)}% smaller)`);
    
  } catch (error) {
    console.error(`Error processing ${relativePath}:`, error.message);
  }
}

async function main() {
  try {
    console.log('🖼️  Starting image optimization...\n');
    
    const imageFiles = await getAllFiles(INPUT_DIR);
    console.log(`Found ${imageFiles.length} images to optimize\n`);
    
    for (const file of imageFiles) {
      await optimizeImage(file);
      console.log(''); // Empty line for readability
    }
    
    console.log('✅ Image optimization complete!');
    console.log(`📁 Optimized images saved to: ${OUTPUT_DIR}`);
    
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

main();
