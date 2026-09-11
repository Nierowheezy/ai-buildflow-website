import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CodeBlocks from "@/components/docs/CodeBlocks";
import DocHeader from "@/components/docs/DocHeader";
import DocPagination from "@/components/docs/DocPagination";
import TableOfContents from "@/components/docs/TableOfContents";
import { compileDoc } from "@/lib/compile";
import { getAllDocSlugs } from "@/lib/mdx";
import { getDocTitle, getPrevNext } from "@/lib/docs";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug: slug.split("/") }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugStr = slug.join("/");

  try {
    const doc = await compileDoc(slugStr);
    return {
      title: doc?.title ?? getDocTitle(`/docs/${slugStr}`),
      description: doc?.description,
    };
  } catch {
    return { title: "Docs | AI BuildFlow" };
  }
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const slugStr = slug.join("/");
  const href = `/docs/${slugStr}`;

  const doc = await compileDoc(slugStr);
  if (!doc) notFound();

  const { prev, next } = getPrevNext(href);

  return (
    <div className="flex">
      {/* Content */}
      <article className="min-w-0 flex-1 py-8">
        <DocHeader
          title={doc.title}
          description={doc.description}
          breadcrumb={{ label: doc.title }}
        />

        <div className="doc-content mt-8">{doc.body}</div>

        <CodeBlocks />
        <DocPagination prev={prev} next={next} />
      </article>

      {/* Right TOC */}
      <aside className="hidden shrink-0 xl:block">
        <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto py-8 pl-8">
          <TableOfContents headings={doc.headings} />
        </div>
      </aside>
    </div>
  );
}