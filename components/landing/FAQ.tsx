"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Is this a SaaS starter kit?",
    a: (
      <>
        No. It installs workflow files and agent skills, not auth, billing,
        database code, or UI components. Scaffold the app you actually want
        first.
      </>
    ),
  },
  {
    q: "Does it lock me into an AI tool?",
    a: (
      <>
        No. The project state lives in markdown. Adapters currently support
        Codex, Claude Code, GitHub Copilot, and OpenCode, and the workflow can
        be understood by other file-aware coding agents.
      </>
    ),
  },
  {
    q: "Do I have to use every command?",
    a: (
      <>
        No. The core loop is feature, implement, check, and complete.
        Discovery, brief, debug, try, audit, tests, browser tests, CI,
        release, prototype, rollback, autopilot, and continuous are optional
        tools for specific situations. See the{" "}
        <Link
          href="/docs/core-workflow"
          className="font-medium text-brand-500 hover:underline"
        >
          core workflow
        </Link>{" "}
        for the default path.
      </>
    ),
  },
  {
    q: "Can I use it on an existing project?",
    a: (
      <>
        Yes. Run the{" "}
        <Link
          href="/docs/existing-codebase"
          className="font-medium text-brand-500 hover:underline"
        >
          adopt workflow
        </Link>
        . It surveys the real repo and creates plans that account for features
        you have already shipped.
      </>
    ),
  },
  {
    q: "Does it push or deploy my code?",
    a: (
      <>
        No. Commit, merge, push, deploy, publish, and destructive actions all
        keep explicit human approval gates. The workflow records state and
        evidence; it never takes remote actions.
      </>
    ),
  },
  {
    q: "How does it handle bugs or rollbacks?",
    a: (
      <>
        Bugs go through{" "}
        <Link
          href="/docs/commands/fix"
          className="font-medium text-brand-500 hover:underline"
        >
          /fix
        </Link>
        . Completed features can be reversed safely with{" "}
        <Link
          href="/docs/commands/rollback"
          className="font-medium text-brand-500 hover:underline"
        >
          /rollback
        </Link>
        , which preserves history and reviews later-change risk before
        reversing product code.
      </>
    ),
  },
];

function FaqItem({
  q,
  a,
  defaultOpen,
}: {
  q: string;
  a: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-medium">{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
            {a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-500">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Questions before you start.
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}