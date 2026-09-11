import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unstable_cache } from "next/cache";

const CONTENT_DIR = path.join(process.cwd(), "content");

// Maps URL slugs -> content file paths (no extension)
const SLUG_TO_FILE: Record<string, string> = {
  cli: "cli/overview",
};

export type DocMeta = {
  title: string;
  description?: string;
  [key: string]: string | undefined;
};

type ParsedDoc = {
  meta: DocMeta;
  content: string;
  slug: string;
};

export function getAllDocSlugs(): string[] {
  function walk(dir: string, base = ""): string[] {
    const results: string[] = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        results.push(...walk(full, path.join(base, entry.name)));
      } else if (entry.name.endsWith(".mdx")) {
        results.push(path.join(base, entry.name.replace(/\.mdx$/, "")));
      }
    }
    return results;
  }

  const files = walk(CONTENT_DIR);
  return files.map((f) => {
    for (const [url, file] of Object.entries(SLUG_TO_FILE)) {
      if (file === f) return url;
    }
    return f;
  });
}

export function readDocBySlug(slug: string): ParsedDoc | null {
  const filePath = SLUG_TO_FILE[slug] ?? slug;
  const fullPath = path.join(CONTENT_DIR, `${filePath}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: {
      title: (data.title as string) ?? "Untitled",
      description: (data.description as string) ?? "",
    },
    content,
    slug,
  };
}

export const getDoc = unstable_cache(
  async (slug: string) => readDocBySlug(slug),
  ["buildflow-docs"],
  { revalidate: 3600 }
);