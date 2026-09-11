import { codeToHtml } from "shiki";

export default async function CodeBlock({
  code,
  lang = "bash",
}: {
  code: string;
  lang?: string;
}) {
  const html = await codeToHtml(code, {
    lang,
    theme: "github-dark-default",
    defaultColor: "light",
  });

  return (
    <div className="my-4 overflow-hidden rounded-lg border border-surface-700 bg-[#0d1117]">
      <div className="flex items-center justify-between border-b border-surface-800 px-4 py-2">
        <span className="font-mono text-xs text-surface-400">
          {lang || "text"}
        </span>
      </div>
      <div className="overflow-x-auto p-4 text-sm leading-relaxed">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}