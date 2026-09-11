import { Archive, FileText, Layers, Map, PencilRuler } from "lucide-react";

const files = [
  {
    icon: Map,
    title: "project-plan.md",
    file: "buildflow/project-plan.md",
    owner: "You own",
    description: "Product direction, users, features, stack, and UX decisions.",
    tag: "input",
  },
  {
    icon: Layers,
    title: "build-plan.md",
    file: "buildflow/build-plan.md",
    owner: "You own",
    description: "Ordered, high-level feature list with stable item numbers.",
    tag: "input",
  },
  {
    icon: FileText,
    title: "project-overview.md",
    file: "buildflow/context/project-overview.md",
    owner: "Generated",
    description: "Compact durable project context from both plans.",
    tag: "context",
  },
  {
    icon: PencilRuler,
    title: "current-feature.md",
    file: "buildflow/context/current-feature.md",
    owner: "Active",
    description: "The one feature, fix, or rollback being built right now.",
    tag: "active",
  },
  {
    icon: Archive,
    title: "history/",
    file: "buildflow/history/features/",
    owner: "Archived",
    description: "Completed specs: what shipped and why.",
    tag: "archive",
  },
];

export default function FilesSection() {
  return (
    <section id="files" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-500">
            Files behind the workflow
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Readable state. No hidden memory.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Clear the chat or come back next week — the next session resumes
            from these files, not from a conversation it no longer has.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {files.map((file) => {
            const Icon = file.icon;
            const tagColors: Record<string, string> = {
              input:
                "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
              context:
                "bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-300",
              active:
                "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
              archive:
                "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
            };
            return (
              <div
                key={file.title}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-brand-300 dark:hover:border-brand-700"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <Icon className="h-5 w-5 text-brand-500" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-sm font-semibold">
                      {file.title}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${tagColors[file.tag]}`}
                    >
                      {file.owner}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {file.description}
                  </p>
                </div>
                <code className="hidden shrink-0 font-mono text-xs text-muted-foreground sm:block">
                  {file.file}
                </code>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          BuildFlow turns your plans into durable project state that any
          supported AI agent can read — tool-independent, and yours to keep.
        </p>
      </div>
    </section>
  );
}