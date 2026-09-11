import { Users } from "lucide-react";

const tools = [
  { name: "Codex", glyph: "🤖", variant: "bg-surface-950 text-white" },
  { name: "Claude Code", glyph: "✨", variant: "bg-gradient-to-r from-amber-500 to-orange-600 text-white" },
  { name: "GitHub Copilot", glyph: "🐙", variant: "bg-surface-900 text-white" },
  { name: "OpenCode", glyph: "⌨️", variant: "bg-brand-500 text-white" },
];

export default function ToolSupport() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16">
          <div className="text-center lg:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Works with
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool.name}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium"
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-md text-xs ${tool.variant}`}
                >
                  {tool.glyph}
                </span>
                {tool.name}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-dashed border-brand-300 px-4 py-2 text-sm text-muted-foreground dark:border-brand-700">
            <Users className="h-4 w-4 text-brand-500" />
            Stack agnostic — any language, any framework
          </div>
        </div>
      </div>
    </section>
  );
}