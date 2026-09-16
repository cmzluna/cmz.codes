import fs from "fs";

const html = fs.readFileSync("scratch_testimonials.txt", "utf8");

const testimonials = [];
const regex =
  /<p class="text-sm text-slate-200[^>]*>\s*([\s\S]*?)\s*<\/p>[\s\S]*?<img src="([^"]+)" alt="([^"]+)"[\s\S]*?<h4[^>]*>[^<]*<\/h4>\s*<p class="text-xs[^>]*>([^<]+)<\/p>/g;

let match;
while ((match = regex.exec(html)) !== null) {
  testimonials.push({
    text: match[1].trim(),
    image: match[2],
    name: match[3],
    role: match[4],
  });
}

fs.mkdirSync("src/data", { recursive: true });
fs.writeFileSync(
  "src/data/testimonials.ts",
  `export const testimonials = ${JSON.stringify(testimonials, null, 2)};`,
);
console.log(`Extracted ${testimonials.length} testimonials.`);
