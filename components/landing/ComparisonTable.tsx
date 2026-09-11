const rows = [
  {
    option: "App boilerplate",
    gives: "Starter code and patterns",
    missing: "Your product plan and workflow history",
    highlight: false,
  },
  {
    option: "Chat-only AI coding",
    gives: "Fast implementation",
    missing: "Durable project state",
    highlight: false,
  },
  {
    option: "AI BuildFlow",
    gives: "A file-backed workflow framework",
    missing: "App code is still yours to choose",
    highlight: true,
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-500">
            A different layer
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Keep your stack. Add a workflow.
          </h2>
          <p className="mt-4 text-muted-foreground">
            BuildFlow does not compete with app starters or coding agents. It
            gives them durable context and clear review boundaries.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/60 text-muted-foreground">
                <th className="px-6 py-4 font-medium">Option</th>
                <th className="px-6 py-4 font-medium">What it gives you</th>
                <th className="px-6 py-4 font-medium">
                  What is still missing
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.option}
                  className={`border-b border-border last:border-0 ${
                    row.highlight
                      ? "bg-brand-50/50 dark:bg-brand-950/30"
                      : "bg-card"
                  }`}
                >
                  <td className="px-6 py-5">
                    <span
                      className={
                        row.highlight
                          ? "inline-flex rounded-md bg-primary px-2.5 py-1 font-semibold text-primary-foreground"
                          : "font-semibold"
                      }
                    >
                      {row.option}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-muted-foreground">
                    {row.gives}
                  </td>
                  <td className="px-6 py-5 text-muted-foreground">
                    {row.missing}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}