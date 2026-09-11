"use client";

import { useEffect, useState } from "react";

export type Heading = {
  id: string;
  text: string;
  level: number;
};

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden w-56 shrink-0 xl:block">
      <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto py-6 pl-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          On this page
        </p>
        <ul className="space-y-1.5 border-l border-border pl-3">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`block py-0.5 text-sm leading-snug transition-colors ${
                  heading.level > 2 ? "pl-3" : ""
                } ${
                  activeId === heading.id
                    ? "-ml-px border-l-2 border-brand-500 font-medium text-brand-500"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}