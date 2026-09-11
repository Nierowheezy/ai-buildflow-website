import { FileLock2, GitPullRequestArrow, ShieldAlert } from "lucide-react";

const reasons = [
  {
    icon: FileLock2,
    title: "Specs keep scope clear",
    description:
      "The agent writes the feature spec first, then stops. You approve the shape before code exists.",
    command: "/feature → review → /implement",
  },
  {
    icon: GitPullRequestArrow,
    title: "State lives in files",
    description:
      "Plans, current work, standards, and history live beside the project in readable markdown.",
    command: "buildflow/context/*.md",
  },
  {
    icon: ShieldAlert,
    title: "Review gates stop drift",
    description:
      "The agent shows diffs, runs the real app, and proves each done-when before work lands.",
    command: "/check → evidence → /complete",
  },
];

export default function WhyBuildFlow() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-500">
            Why BuildFlow holds
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            AI projects drift when scope, decisions, and proof live only in
            chat.
          </h2>
          <p className="mt-4 text-muted-foreground">
            BuildFlow is an AI coding workflow framework, not an application
            framework. Your stack, architecture, and product choices stay
            yours.
          </p>
        </div>

        <div className="mx-auto mt-14 grid gap-8 lg:max-w-5xl lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950">
                  <Icon className="h-5 w-5 text-brand-500" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{reason.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
                <code className="mt-5 inline-block rounded-md bg-muted px-2.5 py-1.5 font-mono text-xs text-brand-500">
                  {reason.command}
                </code>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}