"use client";

import CopyButton from "./CopyButton";

export default function InstallCommand({ command }: { command: string }) {
  return (
    <div className="group relative flex items-center justify-between rounded-lg border border-surface-700 bg-surface-950 py-2.5 pl-4 pr-2.5">
      <code className="select-all font-mono text-sm text-surface-100">
        <span className="text-brand-400">$ </span>
        {command}
      </code>
      <CopyButton text={command} />
    </div>
  );
}