import yaml from "js-yaml";

export type FrontmatterData = Record<string, unknown>;

export function normalizeFrontmatterDate(value: unknown): string {
  if (typeof value === "string") return value.trim();
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString();
  return "";
}

export function parseFrontmatter(source: string) {
  const normalized = source.replace(/^\uFEFF/, "");
  const match = normalized.match(/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/);

  if (!match) {
    return { data: {} as FrontmatterData, content: normalized };
  }

  const parsed = yaml.load(match[1]);
  if (parsed === null || parsed === undefined) {
    return { data: {} as FrontmatterData, content: normalized.slice(match[0].length) };
  }

  if (typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("Frontmatter must be a YAML mapping.");
  }

  return {
    data: parsed as FrontmatterData,
    content: normalized.slice(match[0].length)
  };
}
