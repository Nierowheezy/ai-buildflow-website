"use client";

import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "../shared/Logo";
import ThemeToggle from "../shared/ThemeToggle";
import Sidebar from "./Sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("docs-sidebar-open");
    if (saved !== null) setSidebarOpen(saved === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("docs-sidebar-open", String(sidebarOpen));
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen transition-all duration-300">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-16 max-w-[1700px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-muted lg:hidden"
              aria-label="Open documentation menu"
            >
              <Menu className="h-4 w-4" />
            </button>
            <Link href="/" className="flex items-center">
              <Logo size={24} />
            </Link>
            <span className="hidden h-5 w-px bg-border sm:block" />
            <Link
              href="/docs/getting-started"
              className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:block"
            >
              Docs
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/docs/commands/feature"
              className="hidden rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:inline-flex"
            >
              Command reference
            </Link>
            <Link
              href="/"
              className="hidden rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:inline-flex"
            >
              Home
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-72 border-r border-border bg-background shadow-xl transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="text-sm font-medium">Documentation</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      <div className="mx-auto flex max-w-[1700px] transition-all duration-300">
        {/* Desktop sidebar - with toggle at top */}
        <aside
          className={`hidden lg:block transition-all duration-300 ease-in-out overflow-hidden ${
            sidebarOpen ? "w-64 shrink-0 border-r border-border" : "w-14 shrink-0 border-r border-border"
          }`}
        >
          {/* Sidebar header with collapse toggle */}
          <div className="flex h-16 items-center justify-between border-b border-border px-3 transition-all duration-300">
            <div className="flex items-center gap-2 min-w-0">
              <Link href="/" className="flex items-center">
                <Logo size={20} />
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setSidebarOpen((v) => !v)}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-colors flex-shrink-0"
              aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
              {sidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
          </div>

          <div className={`flex-1 overflow-y-auto transition-opacity duration-200 ${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}>
            <Sidebar collapsed={!sidebarOpen} />
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0 flex-1 transition-all duration-300">
          <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}