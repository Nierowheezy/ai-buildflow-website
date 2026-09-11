"use client";

import Link from "next/link";
import { ArrowRight, GitBranch, Globe, ShieldCheck } from "lucide-react";
import InstallCommand from "../shared/InstallCommand";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-medium text-brand-600 dark:border-brand-800 dark:bg-brand-950 dark:text-brand-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Open source · Works with Codex, Claude Code, Copilot, and OpenCode
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Build with AI.
            <br />
            <span className="bg-gradient-to-r from-brand-500 to-brand-300 bg-clip-text text-transparent dark:from-brand-400 dark:to-brand-200">
              Stay in control.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Vibe coding is fast until it breaks: code nobody understands, a
            project you cannot change safely. BuildFlow runs focused skills
            that plan, build, and prove one feature at a time, turning every
            decision into durable state you can inspect.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="w-full max-w-lg">
              <InstallCommand command="npx create-ai-buildflow@latest" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#workflow"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                See how it works
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                Read the docs
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-brand-500" />
            Human approval at every boundary
          </span>
          <span className="inline-flex items-center gap-2">
            <GitBranch className="h-4 w-4 text-brand-500" />
            One feature at a time
          </span>
          <span className="inline-flex items-center gap-2">
            <Globe className="h-4 w-4 text-brand-500" />
            Stack agnostic
          </span>
        </div>
      </div>
    </section>
  );
}