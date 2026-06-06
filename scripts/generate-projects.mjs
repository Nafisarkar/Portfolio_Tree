import fs from "node:fs";

const csv = fs.readFileSync("src/data/originaldata.csv", "utf-8");
const lines = csv.trim().split("\n");
const headers = parseLine(lines[0]);

function parseLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"' && !inQuotes) {
      inQuotes = true;
    } else if (ch === '"' && inQuotes) {
      if (i + 1 < line.length && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = false;
      }
    } else if (ch === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  result.push(current);
  return result;
}

const projects = [];
for (let i = 1; i < lines.length; i++) {
  if (!lines[i].trim()) continue;
  const vals = parseLine(lines[i]);
  const obj = {};
  headers.forEach((h, idx) => (obj[h.trim()] = (vals[idx] || "").trim()));

  if (obj.visible !== "true") continue;
  if (!obj.category && !obj.title) continue;

  let techs = [];
  try {
    const parsed = JSON.parse(obj.techstacks);
    techs = Array.isArray(parsed) ? parsed.filter((t) => t !== null) : [];
  } catch (e) {}

  projects.push({
    id: Number.parseInt(obj.id) || 0,
    category: obj.category || "Other",
    title: obj.title || "Untitled",
    description: obj.description || "",
    techstacks: techs,
    link: obj.link || "#",
  });
}

// Deduplicate by title
const seen = new Set();
const unique = projects.filter((p) => {
  const key = p.title.toLowerCase();
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

let output = `import type { Project } from "../types";

const projects: Project[] = [\n`;

unique.forEach((p, idx) => {
  const comma = idx < unique.length - 1 ? "," : "";
  output += `  {\n`;
  output += `    id: ${p.id},\n`;
  output += `    category: "${p.category.replace(/"/g, '\\"')}",\n`;
  output += `    title: "${p.title.replace(/"/g, '\\"')}",\n`;
  output += `    description: "${p.description.replace(/"/g, '\\"')}",\n`;
  output += `    techstacks: ${JSON.stringify(p.techstacks)},\n`;
  output += `    link: "${p.link.replace(/"/g, '\\"')}",\n`;
  output += `  }${comma}\n`;
});

output += `];\n\nexport default projects;\n`;

fs.writeFileSync("src/data/projects.ts", output);
console.log("Generated src/data/projects.ts");

// Print first few techstacks to verify
unique.slice(0, 5).forEach((p) => {
  console.log(`${p.title}: ${JSON.stringify(p.techstacks)}`);
});