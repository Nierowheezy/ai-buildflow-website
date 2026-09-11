import { compileMDX } from "next-mdx-remote/rsc";
import rehypeShiki from "@shikijs/rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Callout from "@/components/docs/Callout";
import { readDocBySlug } from "./mdx";

export type DocModel = {
  title: string;
  description?: string;
  body: React.ReactElement;
  headings: { id: string; text: string; level: number }[];
};

function extractHeadings(markdown: string) {
  const headings: { id: string; text: string; level: number }[] = [];
  const idSet = new Set<string>();
  const slugify = (text: string) => {
    const base = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    let id = base;
    let i = 1;
    while (idSet.has(id)) {
      id = `${base}-${i++}`;
    }
    idSet.add(id);
    return id;
  };

  for (const line of markdown.split("\n")) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      headings.push({ id: slugify(text), text, level });
    }
  }
  return headings;
}

export async function compileDoc(slug: string): Promise<DocModel | null> {
  const doc = readDocBySlug(slug);
  if (!doc) return null;

  const { content } = await compileMDX<{ title: string; description?: string }>({
    source: doc.content,
    components: { Callout },
    options: {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [
          [rehypeShiki, { theme: "github-dark-default", defaultColor: "light" }],
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",
              properties: { className: ["anchor-link"] },
            },
          ],
        ],
      },
    },
  });

  return {
    title: doc.meta.title,
    description: doc.meta.description,
    body: content,
    headings: extractHeadings(doc.content),
  };
}