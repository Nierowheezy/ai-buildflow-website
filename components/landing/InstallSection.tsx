"use client";

import { BrainCircuit, FolderGit2, Rocket } from "lucide-react";
import InstallCommand from "../shared/InstallCommand";

export default function InstallSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Start here
          </h2>
          <p className="mt-4 text-muted-foreground">
            Install BuildFlow after you have an app. Starting fresh? Scaffold
            an app in your preferred stack first.
          </p>
        </div>

        <div className="mx-auto mt-12 grid gap-6 lg:max-w-5xl lg:grid-cols-2">
          {/* Fresh project */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950">
                <Rocket className="h-5 w-5 text-brand-500" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Fresh project</h3>
                <p className="text-sm text-muted-foreground">
                  Scaffold first. Add BuildFlow second.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <InstallCommand command="npx create-next-app@latest my-app" />
              <InstallCommand command="cd my-app" />
              <InstallCommand command="git init" />
              <InstallCommand command="npx create-ai-buildflow@latest" />
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Next:</span>
              <span>
                run <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-brand-500">/onboard</code>{" "}
                to tune the workflow
              </span>
            </div>
          </div>

          {/* Existing codebase */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950">
                <FolderGit2 className="h-5 w-5 text-brand-500" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Existing codebase</h3>
                <p className="text-sm text-muted-foreground">
                  Adopt what already works.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <InstallCommand command="cd established-app" />
              <InstallCommand command="npx create-ai-buildflow@latest" />
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Next:</span>
              <span>
                run <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-brand-500">/adopt</code>{" "}
                to survey existing features
              </span>
            </div>

            <div className="mt-4 flex items-start gap-2 rounded-xl bg-muted/60 p-4 text-sm text-muted-foreground">
              <BrainCircuit className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <span>
                BuildFlow surveys shipped features and existing conventions,
                then generates plans that reflect the real project.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}