import { CheckCircle2, FileText, Layers, PlayCircle, Sparkles, Scale } from "lucide-react";

const steps = [
  {
    label: "01",
    title: "Feature",
    subtitle: "SPEC",
    icon: FileText,
    description: "Turn one build-plan item into a written, reviewed spec.",
    badge: "current-feature.md",
  },
  {
    label: "02",
    title: "Implement",
    subtitle: "BUILD",
    icon: Layers,
    description: "Build the approved spec in small, reviewable steps.",
    badge: "small diffs",
  },
  {
    label: "03",
    title: "Check",
    subtitle: "PROVE",
    icon: PlayCircle,
    description: "Run the real app against every done-when criterion.",
    badge: "observable evidence",
  },
  {
    label: "04",
    title: "Audit",
    subtitle: "REVIEW",
    icon: Scale,
    description: "Review the branch delta and record durable findings.",
    badge: "findings.md",
  },
  {
    label: "05",
    title: "Complete",
    subtitle: "LAND",
    icon: CheckCircle2,
    description: "Run final gates, archive the work, and merge with approval.",
    badge: "history/features/NN.md",
  },
];

export default function WorkflowDiagram() {
  return (
    <section id="workflow" className="bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-500">
            One feature / complete loop
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Build every feature through the same controlled loop.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A scoped feature moves through visible human review gates — never
            without evidence, never past an approval.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Grid with SVG connectors overlay */}
          <div className="relative lg:grid lg:grid-cols-5 gap-8">
            {/* SVG connector layer - spans full grid */}
            <div className="absolute inset-0 pointer-events-none lg:block hidden">
              <svg 
                className="w-full h-full" 
                viewBox="0 0 1000 180" 
                preserveAspectRatio="none"
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%' 
                }}
              >
                <defs>
                  <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#155eef" stopOpacity={0} />
                    <stop offset="15%" stopColor="#155eef" stopOpacity={0.4} />
                    <stop offset="50%" stopColor="#155eef" stopOpacity={0.6} />
                    <stop offset="85%" stopColor="#155eef" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#155eef" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="flowGradDark" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3975ff" stopOpacity={0} />
                    <stop offset="15%" stopColor="#3975ff" stopOpacity={0.4} />
                    <stop offset="50%" stopColor="#3975ff" stopOpacity={0.6} />
                    <stop offset="85%" stopColor="#3975ff" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#3975ff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                {/* 5 icons at 10%, 30%, 50%, 70%, 90% horizontally. 
                    Icon boxes are 64px (h-16) + labels. Center of icon at y≈56px from top of grid.
                    Draw curves from right edge of icon (x + 32) to left edge of next (x - 32),
                    arcing upward with control point at y = -20 (above icons). */}
                <g strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2.5">
                  {/* Connector 1: 10% -> 30% */}
                  <path 
                    d="M132 56 Q 200 -10 268 56" 
                    stroke="url(#flowGrad)" 
                    className="dark:stroke-[url(#flowGradDark)]"
                  />
                  {/* Connector 2: 30% -> 50% */}
                  <path 
                    d="M332 56 Q 400 -10 468 56" 
                    stroke="url(#flowGrad)" 
                    className="dark:stroke-[url(#flowGradDark)]"
                  />
                  {/* Connector 3: 50% -> 70% */}
                  <path 
                    d="M532 56 Q 600 -10 668 56" 
                    stroke="url(#flowGrad)" 
                    className="dark:stroke-[url(#flowGradDark)]"
                  />
                  {/* Connector 4: 70% -> 90% */}
                  <path 
                    d="M732 56 Q 800 -10 868 56" 
                    stroke="url(#flowGrad)" 
                    className="dark:stroke-[url(#flowGradDark)]"
                  />
                  {/* Arrowheads */}
                  <path d="M260 62 L268 56 L260 50" fill="#155eef" className="dark:fill-#3975ff" stroke="none" opacity="0.6"/>
                  <path d="M460 62 L468 56 L460 50" fill="#155eef" className="dark:fill-#3975ff" stroke="none" opacity="0.6"/>
                  <path d="M660 62 L668 56 L660 50" fill="#155eef" className="dark:fill-#3975ff" stroke="none" opacity="0.6"/>
                  <path d="M860 62 L868 56 L860 50" fill="#155eef" className="dark:fill-#3975ff" stroke="none" opacity="0.6"/>
                </g>
              </svg>
            </div>

            {/* Grid items */}
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative flex flex-col items-center text-center z-10">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-200 bg-background shadow-sm dark:border-brand-800">
                    <Icon className="h-7 w-7 text-brand-500" />
                  </div>
                  <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand-400">
                    {step.label}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                  <span className="mt-1 rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-600 dark:bg-brand-950 dark:text-brand-300">
                    {step.subtitle}
                  </span>
                  <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <code className="mt-3 rounded-md bg-muted px-2 py-1 font-mono text-xs text-muted-foreground">
                    {step.badge}
                  </code>

                  {i < steps.length - 1 && (
                    <span className="mt-4 text-brand-300 lg:hidden dark:text-brand-700">
                      ↳
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-12 flex max-w-lg items-center justify-center gap-2 rounded-xl border border-dashed border-brand-300 bg-background/50 px-6 py-4 text-sm text-muted-foreground dark:border-brand-700">
            <Sparkles className="h-4 w-4 shrink-0 text-brand-500" />
            <span>
              Next feature: build-plan.md keeps the roadmap, ready for the next
              loop.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}