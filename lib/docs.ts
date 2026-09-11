export type DocNavItem = {
  title: string;
  href: string;
};

export type DocNavSection = {
  title: string;
  items: DocNavItem[];
};

export const docNav: DocNavSection[] = [
  {
    title: "Start",
    items: [
      { title: "Getting Started", href: "/docs/getting-started" },
      { title: "Existing Codebase Adoption", href: "/docs/existing-codebase" },
      { title: "Writing Your Plans", href: "/docs/writing-your-plans" },
      { title: "Updating BuildFlow", href: "/docs/updating-buildflow" },
    ],
  },
  {
    title: "Workflow",
    items: [{ title: "Core Workflow", href: "/docs/core-workflow" }],
  },
  {
    title: "Commands",
    items: [
      { title: "Onboard", href: "/docs/commands/onboard" },
      { title: "Adopt", href: "/docs/commands/adopt" },
      { title: "Discovery", href: "/docs/commands/discovery" },
      { title: "Overview", href: "/docs/commands/overview" },
      { title: "Feature", href: "/docs/commands/feature" },
      { title: "Implement", href: "/docs/commands/implement" },
      { title: "Check", href: "/docs/commands/check" },
      { title: "Complete", href: "/docs/commands/complete" },
      { title: "Status", href: "/docs/commands/status" },
      { title: "Doctor", href: "/docs/commands/doctor" },
      { title: "Debug", href: "/docs/commands/debug" },
      { title: "Fix", href: "/docs/commands/fix" },
      { title: "Brief", href: "/docs/commands/brief" },
      { title: "Try", href: "/docs/commands/try" },
      { title: "Audit", href: "/docs/commands/audit" },
      { title: "Tests", href: "/docs/commands/tests" },
      { title: "Browser Tests", href: "/docs/commands/browser-tests" },
      { title: "CI", href: "/docs/commands/ci" },
      { title: "Prototype", href: "/docs/commands/prototype" },
      { title: "Autopilot", href: "/docs/commands/autopilot" },
      { title: "Continuous", href: "/docs/commands/continuous" },
      { title: "Release", href: "/docs/commands/release" },
      { title: "Rollback", href: "/docs/commands/rollback" },
    ],
  },
  {
    title: "CLI",
    items: [
      { title: "CLI Overview", href: "/docs/cli" },
      { title: "Status", href: "/docs/cli/status" },
      { title: "Live Dashboard", href: "/docs/cli/dashboard" },
    ],
  },
  {
    title: "Reference",
    items: [
      { title: "File Reference", href: "/docs/reference/file-reference" },
      { title: "Tool Adapters", href: "/docs/reference/tool-adapters" },
      { title: "Local-Only Mode", href: "/docs/reference/local-only-mode" },
      {
        title: "Project Configuration",
        href: "/docs/reference/project-configuration",
      },
    ],
  },
  {
    title: "Quality",
    items: [
      { title: "Testing and CI", href: "/docs/quality/testing-and-ci" },
      { title: "Manual Review With Try", href: "/docs/quality/manual-review" },
      { title: "Code Quality With Audit", href: "/docs/quality/code-quality" },
      { title: "The Findings Ledger", href: "/docs/quality/findings-ledger" },
    ],
  },
  {
    title: "Ship",
    items: [
      { title: "Release Readiness", href: "/docs/ship/release-readiness" },
      { title: "Troubleshooting", href: "/docs/ship/troubleshooting" },
    ],
  },
];

export function flattenDocNav(): DocNavItem[] {
  return docNav.flatMap((section) => section.items);
}

export function getPrevNext(href: string): {
  prev?: DocNavItem;
  next?: DocNavItem;
} {
  const flat = flattenDocNav();
  const index = flat.findIndex((item) => item.href === href);
  if (index === -1) return {};
  return {
    prev: index > 0 ? flat[index - 1] : undefined,
    next: index < flat.length - 1 ? flat[index + 1] : undefined,
  };
}

export function getDocTitle(href: string): string {
  const item = flattenDocNav().find((i) => i.href === href);
  return item ? item.title : "Docs";
}