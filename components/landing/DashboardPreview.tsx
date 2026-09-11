import { LayoutDashboard } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-500">
            Local dashboard
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            See the whole project at a glance.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Open a live, read-only view of the roadmap, current work,
            findings, configuration, Git state, and the next action. It
            refreshes from the same files BuildFlow already uses and stays on
            your machine.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            {/* Fake browser chrome */}
            <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 flex-1 rounded-md bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
                http://127.0.0.1:3000
              </span>
            </div>

            {/* Mock dashboard body */}
            <div className="bg-background p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-3">
                {/* Roadmap */}
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2">
                    <LayoutDashboard className="h-4 w-4 text-brand-500" />
                    <h3 className="text-sm font-semibold">Roadmap</h3>
                    <span className="ml-auto rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-950 dark:text-green-300">
                      3 / 5
                    </span>
                  </div>
                  <div className="mt-4 space-y-2.5">
                    {[
                      { title: "Export reports", done: true },
                      { title: "Team invitations", done: true },
                      { title: "Dashboard filtering", done: true },
                      { title: "API tokens", done: false, active: true },
                      { title: "Two-factor auth", done: false },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className={`flex items-center gap-2 text-sm ${item.active ? "font-medium" : "text-muted-foreground"}`}
                      >
                        <span
                          className={`flex h-4 w-4 items-center justify-center rounded border text-[10px] ${
                            item.done
                              ? "border-brand-500 bg-brand-500 text-white"
                              : "border-border"
                          }`}
                        >
                          {item.done && "✓"}
                        </span>
                        {item.title}
                        {item.active && (
                          <span className="ml-auto rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-600 dark:bg-brand-950 dark:text-brand-300">
                            next
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Current work */}
                <div className="rounded-xl border border-brand-300 bg-brand-50/50 p-5 dark:border-brand-700 dark:bg-brand-950/30">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
                    </span>
                    <h3 className="text-sm font-semibold">
                      Current: API tokens
                    </h3>
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    {[
                      ["Spec reviewed", true],
                      ["Implement token model", true],
                      ["Issue + rotate endpoints", false],
                      ["UI + prove done-whens", false],
                    ].map(([label, done]) => (
                      <div
                        key={label as string}
                        className={`flex items-center gap-2 text-sm ${done ? "text-muted-foreground line-through" : ""}`}
                      >
                        <span
                          className={`flex h-4 w-4 items-center justify-center rounded border text-[10px] ${
                            done
                              ? "border-brand-500 bg-brand-500 text-white"
                              : "border-border"
                          }`}
                        >
                          {done && "✓"}
                        </span>
                        {label as string}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg bg-background p-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Next:
                    </span>{" "}
                    <code className="font-mono text-brand-500">
                      /implement
                    </code>{" "}
                    to continue step 3
                  </div>
                </div>

                {/* Health / findings */}
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold">Health</h3>
                    <span className="ml-auto rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                      2 warnings
                    </span>
                  </div>
                  <div className="mt-4 space-y-2">
                    {[
                      { text: "0 P0/P1 findings open", ok: true },
                      { text: "current-feature.md not verified", ok: false },
                      { text: "Branch: feature/api-tokens", ok: true },
                      { text: "Onboard needed for CI", ok: false },
                    ].map((item) => (
                      <div
                        key={item.text}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                            item.ok ? "bg-green-500" : "bg-amber-500"
                          }`}
                        />
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-surface-950 p-4 font-mono text-sm">
                <span className="text-surface-500">$ </span>
                <span className="text-surface-100">buildflow dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}