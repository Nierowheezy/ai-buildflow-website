import Link from "next/link";

type CommandCategory = {
  label: string;
  color: string;
  items: { name: string; href: string; description: string }[];
};

const categories: CommandCategory[] = [
  {
    label: "Setup",
    color: "bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-300",
    items: [
      { name: "onboard", href: "/docs/commands/onboard", description: "Tune a fresh installation" },
      { name: "adopt", href: "/docs/commands/adopt", description: "Survey an existing codebase" },
      { name: "doctor", href: "/docs/commands/doctor", description: "Check workflow health" },
    ],
  },
  {
    label: "Plan",
    color: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    items: [
      { name: "discovery", href: "/docs/commands/discovery", description: "Develop plans through conversation" },
      { name: "overview", href: "/docs/commands/overview", description: "Generate project context" },
      { name: "brief", href: "/docs/commands/brief", description: "Preview upcoming work" },
      { name: "prototype", href: "/docs/commands/prototype", description: "Lock the visual direction" },
    ],
  },
  {
    label: "Build loop",
    color: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
    items: [
      { name: "feature", href: "/docs/commands/feature", description: "Write a reviewed spec" },
      { name: "fix", href: "/docs/commands/fix", description: "Spec a bug or small change" },
      { name: "rollback", href: "/docs/commands/rollback", description: "Reverse completed work" },
      { name: "implement", href: "/docs/commands/implement", description: "Build in small steps" },
      { name: "autopilot", href: "/docs/commands/autopilot", description: "Run one bounded pass" },
      { name: "continuous", href: "/docs/commands/continuous", description: "Complete the planned queue" },
      { name: "complete", href: "/docs/commands/complete", description: "Archive and close out" },
    ],
  },
  {
    label: "Prove",
    color: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
    items: [
      { name: "tests", href: "/docs/commands/tests", description: "Add the unit test gate" },
      { name: "browser-tests", href: "/docs/commands/browser-tests", description: "Set up browser automation" },
      { name: "ci", href: "/docs/commands/ci", description: "Automate the Verify recipe" },
      { name: "debug", href: "/docs/commands/debug", description: "Diagnose without editing" },
      { name: "check", href: "/docs/commands/check", description: "Observe the real app" },
      { name: "try", href: "/docs/commands/try", description: "Generate manual steps" },
      { name: "audit", href: "/docs/commands/audit", description: "Review here or hand off" },
    ],
  },
  {
    label: "Ship",
    color: "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
    items: [
      { name: "release", href: "/docs/commands/release", description: "Prepare Render / Vercel deploy" },
      { name: "status", href: "/docs/commands/status", description: "Anytime progress check" },
    ],
  },
];

export default function CommandsGrid() {
  return (
    <section id="commands" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-500">
            Commands with boundaries
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Use the right agent behavior at the right time.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every command is a focused skill with a narrow job. The core loop
            is feature, implement, check, and complete — everything else is
            optional.
          </p>
        </div>

        <div className="mx-auto mt-14 grid gap-8 lg:max-w-6xl lg:grid-cols-5">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${cat.color}`}
              >
                {cat.label}
              </h3>
              <ul className="mt-4 space-y-1">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex flex-col rounded-lg px-2 py-1.5 transition-colors hover:bg-muted"
                    >
                      <span className="font-mono text-sm font-medium text-foreground group-hover:text-brand-500">
                        /{item.name}
                      </span>
                      <span className="text-xs leading-snug text-muted-foreground">
                        {item.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}