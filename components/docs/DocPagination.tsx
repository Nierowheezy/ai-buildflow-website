import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { DocNavItem } from "@/lib/docs";

export default function DocPagination({
  prev,
  next,
}: {
  prev?: DocNavItem;
  next?: DocNavItem;
}) {
  return (
    <nav className="mt-12 grid gap-4 border-t border-border pb-8 pt-8 sm:grid-cols-2">
      {prev ? (
        <Link
          href={prev.href}
          className="group rounded-xl border border-border p-5 transition-colors hover:border-brand-300 dark:hover:border-brand-700"
        >
          <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Previous
          </span>
          <span className="mt-2 block font-medium group-hover:text-brand-500">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          href={next.href}
          className="group rounded-xl border border-border p-5 text-right transition-colors hover:border-brand-300 dark:hover:border-brand-700"
        >
          <span className="flex items-center justify-end gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Next
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="mt-2 block font-medium group-hover:text-brand-500">
            {next.title}
          </span>
        </Link>
      )}
    </nav>
  );
}