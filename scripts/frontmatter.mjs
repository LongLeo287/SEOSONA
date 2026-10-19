import yaml from "js-yaml";

export function normalizeFrontmatterDate(value) {
  if (typeof value === "string") return value.trim();
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString();
  return "";
}

export function parseFrontmatter(source) {
  const normalized = source.replace(/^\uFEFF/, "");
  const match = normalized.match(/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/);

  if (!match) return { data: {}, content: normalized };

  const parsed = yaml.load(match[1]);
  if (parsed === null || parsed === undefined) {
    return { data: {}, content: normalized.slice(match[0].length) };
  }

  if (typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("Frontmatter must be a YAML mapping.");
  }

  return { data: parsed, content: normalized.slice(match[0].length) };
}
