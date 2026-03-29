#!/usr/bin/env node

/**
 * Image generation script for OWD Periodontics website.
 *
 * Usage:
 *   FAL_KEY="your-key-here" node scripts/generate-images.js
 *
 * Generates clinical/practice images via fal.ai Nano Banana 2 API
 * and saves them to public/images/.
 */

const fs = require("fs");
const path = require("path");

const FAL_KEY = process.env.FAL_KEY;
if (!FAL_KEY) {
  console.error("Error: FAL_KEY environment variable is required.");
  console.error(
    'Usage: FAL_KEY="your-key" node scripts/generate-images.js'
  );
  process.exit(1);
}

const API_URL = "https://fal.run/fal-ai/nano-banana-2";

const IMAGES = [
  // Service hero images
  {
    name: "dental-implants",
    path: "public/images/services/dental-implants.jpg",
    aspect: "16:9",
    prompt:
      "Professional clinical photograph of a single titanium dental implant abutment placed in a jawbone, macro close-up, sterile blue-teal surgical drape background, shallow depth of field, white surgical gloves holding a dental mirror nearby, no human faces visible, medical photography, clean soft clinical lighting",
  },
  {
    name: "gum-grafting",
    path: "public/images/services/gum-grafting.jpg",
    aspect: "16:9",
    prompt:
      "Clinical close-up photograph of gum tissue grafting on lower anterior teeth, pink healthy gingival tissue being sutured, fine surgical sutures visible, periodontal microsurgery, dental mirror reflecting light, no faces visible just the mouth area, professional medical photography with soft clinical lighting",
  },
  {
    name: "bone-grafting",
    path: "public/images/services/bone-grafting.jpg",
    aspect: "16:9",
    prompt:
      "Close-up clinical photograph of bone grafting material being carefully placed into a dental extraction socket, white granular bone graft particles visible, stainless steel surgical curette instrument, blue surgical drape, no faces, professional dental surgery photography, clean lighting",
  },
  {
    name: "crown-lengthening",
    path: "public/images/services/crown-lengthening.jpg",
    aspect: "16:9",
    prompt:
      "Clinical dental photograph showing a close-up of front teeth with properly proportioned gum line after crown lengthening, healthy pink gingival tissue, even gum contour revealing full tooth crowns, no face visible just lips and teeth, professional dental photography",
  },
  {
    name: "periodontal-disease",
    path: "public/images/services/periodontal-disease.jpg",
    aspect: "16:9",
    prompt:
      "Clinical close-up photograph of a periodontal probe being used to measure gum pocket depth around a molar tooth, graduated markings on the probe visible, slightly inflamed gingival tissue, dental mirror in background, no face visible, professional periodontal examination photography",
  },
  {
    name: "tooth-extractions",
    path: "public/images/services/tooth-extractions.jpg",
    aspect: "16:9",
    prompt:
      "Clinical photograph of a dental extraction site showing a clean healing socket in the jawbone, surgical gauze nearby, stainless steel dental instruments on a teal surgical tray in the background, no faces visible, professional oral surgery photography, soft clinical lighting",
  },

  // Practice images
  {
    name: "office-interior",
    path: "public/images/practice/office-interior.jpg",
    aspect: "16:9",
    prompt:
      "Modern periodontal dental office interior, minimalist reception area with warm white oak millwork, clean white walls, a modern dental chair visible through frosted glass partition, teal accent upholstery on waiting chairs, natural daylight from large windows, no people visible, architectural interior photography, warm tones",
  },
  {
    name: "instruments",
    path: "public/images/practice/instruments.jpg",
    aspect: "16:9",
    prompt:
      "Overhead flat-lay photograph of a sterile dental surgical instrument tray with neatly arranged periodontal instruments — scalers, Gracey curettes, periodontal probe, dental mirror, surgical forceps — on a teal surgical drape, stainless steel instruments gleaming under bright clinical lighting, no people",
  },
  {
    name: "hero-poster",
    path: "public/images/practice/hero-poster.jpg",
    aspect: "16:9",
    prompt:
      "Artistic close-up of a bright healthy smile, showing only the lower half of the face from nose to chin, perfect white teeth, healthy pink gums, natural warm lighting, soft background blur, warm skin tones, no eyes or full face visible, editorial dental photography style",
  },

  // Before/after case images
  {
    name: "case-1-before",
    path: "public/images/results/case-1-before.jpg",
    aspect: "4:3",
    prompt:
      "Clinical intraoral photograph showing gum recession on lower front teeth, exposed tooth roots visible, receding gum line, slightly yellowed enamel, dental retractor holding lips apart, no face visible, clinical dental photography with ring flash lighting",
  },
  {
    name: "case-1-after",
    path: "public/images/results/case-1-after.jpg",
    aspect: "4:3",
    prompt:
      "Clinical intraoral photograph showing healthy pink gum tissue covering tooth roots after successful connective tissue gum graft surgery, even gum line on lower front teeth, dental retractor, no face visible, clinical dental photography with ring flash lighting, same angle as before photo",
  },
  {
    name: "case-2-before",
    path: "public/images/results/case-2-before.jpg",
    aspect: "4:3",
    prompt:
      "Clinical intraoral photograph showing a missing upper premolar tooth with visible gap, adjacent teeth visible, healed ridge of bone where tooth was lost, dental mirror, no face visible, clinical dental photography",
  },
  {
    name: "case-2-after",
    path: "public/images/results/case-2-after.jpg",
    aspect: "4:3",
    prompt:
      "Clinical intraoral photograph showing a dental implant with natural-looking porcelain crown replacing the previously missing upper premolar, healthy pink gums around the implant, matching adjacent teeth perfectly, no face visible, clinical dental photography",
  },
];

async function generateImage(imageConfig) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: imageConfig.prompt,
      aspect_ratio: imageConfig.aspect,
      output_format: "png",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }

  const data = await res.json();

  if (!data.images || !data.images[0] || !data.images[0].url) {
    throw new Error(`Unexpected response: ${JSON.stringify(data)}`);
  }

  return data.images[0].url;
}

async function downloadImage(url, outputPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);

  const buffer = Buffer.from(await res.arrayBuffer());
  const dir = path.dirname(outputPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(outputPath, buffer);
}

async function main() {
  console.log(`\nGenerating ${IMAGES.length} images via fal.ai Nano Banana 2...\n`);

  for (let i = 0; i < IMAGES.length; i++) {
    const img = IMAGES[i];
    const outputPath = path.resolve(__dirname, "..", img.path);

    // Skip if already exists
    if (fs.existsSync(outputPath)) {
      console.log(`[${i + 1}/${IMAGES.length}] SKIP ${img.name} (already exists)`);
      continue;
    }

    console.log(`[${i + 1}/${IMAGES.length}] Generating ${img.name}...`);

    try {
      const url = await generateImage(img);
      console.log(`  Downloading...`);
      await downloadImage(url, outputPath);
      console.log(`  Saved to ${img.path}`);
    } catch (err) {
      console.error(`  ERROR: ${err.message}`);
    }

    // Brief pause between requests to avoid rate limits
    if (i < IMAGES.length - 1) {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }

  console.log("\nDone!\n");
}

main().catch(console.error);
