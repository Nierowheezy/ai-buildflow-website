"use client";

import { Github } from "lucide-react";
import Link from "next/link";
import Logo from "../shared/Logo";
import ThemeToggle from "../shared/ThemeToggle";

const navLinks = [
  { href: "#workflow", label: "Workflow" },
  { href: "#files", label: "Files" },
  { href: "#commands", label: "Commands" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/Nierowheezy/ai-buildflow"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Read the docs
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}