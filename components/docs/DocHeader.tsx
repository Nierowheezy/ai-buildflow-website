import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function DocHeader({
  title,
  description,
  breadcrumb,
}: {
  title: string;
  description?: string;
  breadcrumb?: { section?: string; label: string };
}) {
  return (
    <header className="border-b border-border py-8">
      {breadcrumb && (
        <nav className="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/docs/getting-started" className="hover:text-foreground">
            Docs
          </Link>
          {breadcrumb.section && (
            <>
              <ChevronRight className="h-3.5 w-3.5" />
              <span>{breadcrumb.section}</span>
            </>
          )}
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{breadcrumb.label}</span>
        </nav>
      )}
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      {description && (
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </header>
  );
}