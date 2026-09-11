"use client";

import { useState } from "react";

const defaultTabs = ["Codex", "Claude Code", "GitHub Copilot", "OpenCode"];

export default function Tabs({
  tabs = defaultTabs,
  children,
}: {
  tabs?: string[];
  children: React.ReactNode[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="my-4">
      <div className="flex flex-wrap gap-1 rounded-t-lg border border-border bg-muted/60 p-1">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(i)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              active === i
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="border-x border-b border-border rounded-b-lg p-4">
        {children[active]}
      </div>
    </div>
  );
}