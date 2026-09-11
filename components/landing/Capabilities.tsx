import { FlaskConical, Rocket, Workflow } from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    icon: FlaskConical,
    title: "Testing + CI",
    subtitle: "/tests + /ci",
    description:
      "Share one real verification recipe. Detect existing checks, add the stack-native test runner, define one Verify command, and automate GitHub checks that run the exact same recipe.",
    steps: [
      "Detect checks",
      "Add tests",
      "Define Verify",
      "Automate CI",
    ],
    href: "/docs/quality/testing-and-ci",
  },
  {
    icon: Rocket,
    title: "Release",
    subtitle: "/release",
    description:
      "Prepare the project to ship. BuildFlow checks the build, start command, output directory, environment names, and health path — and can prepare local Render or Vercel configuration.",
    steps: [
      "Choose target",
      "Run checks",
      "Prepare config",
      "Review release",
    ],
    href: "/docs/ship/release-readiness",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-500">
            Optional capabilities
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Add quality gates when your project needs them.
          </h2>
          <p className="mt-4 text-muted-foreground">
            BuildFlow stays lightweight by default. Add testing, CI, or release
            readiness when the project is ready.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 lg:grid-cols-2">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950">
                    <Icon className="h-5 w-5 text-brand-500" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{cap.title}</h3>
                    <p className="font-mono text-xs text-brand-500">
                      {cap.subtitle}
                    </p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {cap.steps.map((step, i) => (
                      <span key={step} className="flex items-center gap-2">
                        {i > 0 && (
                          <span className="text-muted-foreground/50">→</span>
                        )}
                        <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium">
                          {step}
                        </span>
                      </span>
                    ))}
                  </div>
                  <Workflow className="h-4 w-4 text-muted-foreground/40" />
                </div>
                <Link
                  href={cap.href}
                  className="mt-5 text-sm font-medium text-brand-500 hover:text-brand-600 dark:hover:text-brand-300"
                >
                  Learn more →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}