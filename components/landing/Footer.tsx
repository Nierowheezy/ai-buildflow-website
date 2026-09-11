import { Github, Package, Youtube } from "lucide-react";
import Link from "next/link";
import Logo from "../shared/Logo";
import InstallCommand from "../shared/InstallCommand";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Getting started", href: "/docs/getting-started" },
      { label: "Core workflow", href: "/docs/core-workflow" },
      { label: "Command reference", href: "/docs/commands/feature" },
      { label: "Project configuration", href: "/docs/reference/project-configuration" },
      { label: "Troubleshooting", href: "/docs/ship/troubleshooting" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "https://github.com/Nierowheezy/ai-buildflow" },
      { label: "npm", href: "https://www.npmjs.com/package/create-ai-buildflow" },
      { label: "Releases", href: "https://github.com/Nierowheezy/ai-buildflow/releases" },
      { label: "Changelog", href: "https://github.com/Nierowheezy/ai-buildflow/blob/main/CHANGELOG.md" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 dark:bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-2xl font-bold tracking-tight sm:text-3xl">
            Build faster without giving up the plan.
          </h2>
          <p className="max-w-lg text-sm text-muted-foreground">
            Install BuildFlow inside the app you already scaffolded. Your code
            stays yours. Your workflow gets clearer.
          </p>
          <div className="w-full max-w-lg">
            <InstallCommand command="npx create-ai-buildflow@latest" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Read the docs
            </Link>
            <a
              href="https://github.com/Nierowheezy/ai-buildflow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.youtube.com/watch?v=L4g6GGLzAyo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              <Youtube className="h-4 w-4" />
              Video demo
            </a>
            <a
              href="https://www.npmjs.com/package/create-ai-buildflow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              <Package className="h-4 w-4" />
              npm
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A file-backed, spec-driven workflow for building real software
              with AI while staying in control.
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} AI BuildFlow · MIT License
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              href="https://github.com/Nierowheezy/ai-buildflow"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href="/docs/getting-started"
              className="hover:text-foreground"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/Nierowheezy/ai-buildflow/blob/main/CHANGELOG.md"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Updates
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}