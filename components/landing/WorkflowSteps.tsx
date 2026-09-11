import { FileCheck2, FileSearch, FileText, History, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "01 · Setup",
    subtitle: "Run once per project",
    items: [
      "Scaffold an app in your stack",
      "Install BuildFlow",
      "Run /onboard to tune the workflow",
      "Write project-plan.md + build-plan.md",
      "Run /overview to generate context",
    ],
  },
  {
    icon: FileCheck2,
    title: "02 · Feature loop",
    subtitle: "Repeat for every feature",
    items: [
      "Spec: /feature writes current-feature.md",
      "Review: you approve the scope",
      "Build: /implement in small steps",
      "Prove: /check with observable evidence",
      "Land: /complete archives + merges",
    ],
  },
  {
    icon: ShieldCheck,
    title: "03 · Optional automation",
    subtitle: "Bounded passes, same gates",
    items: [
      "/autopilot: one feature pass, stops before complete",
      "/continuous: remaining plan serially",
      "Review gates still apply",
      "Never pushes or deploys",
      "Stops on decisions or failed gates",
    ],
  },
  {
    icon: History,
    title: "04 · Resume from files",
    subtitle: "Durable state, not chat memory",
    items: [
      "Plans and context live in readable markdown",
      "Clear the chat — the next session resumes",
      "/status shows the exact next action",
      "Findings, reviews, and history stay in the repo",
      "Move between agents without losing state",
    ],
  },
];

export default function WorkflowSteps() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-500">
            The workflow
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Set up once. Build every feature the same way.
          </h2>
          <p className="mt-4 text-muted-foreground">
            The setup creates durable project context. Then every feature moves
            through spec, implementation, proof, and review.
          </p>
        </div>

        <div className="mx-auto mt-14 grid gap-8 lg:max-w-5xl lg:grid-cols-2">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950">
                    <Icon className="h-5 w-5 text-brand-500" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <FileSearch className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}