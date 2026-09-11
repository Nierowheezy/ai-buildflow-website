"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const TAGLINE = "File-backed · Spec-driven";

export default function Logo({
  size = 32,
  tagline = true,
}: {
  size?: number;
  tagline?: boolean;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const markSrc = mounted && resolvedTheme === "dark"
    ? "/logo-mark-dark.svg"
    : "/logo-mark.svg";

  return (
    <span className="inline-flex items-center gap-2.5">
      <img
        src={markSrc}
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        style={{ display: "block" }}
      />
      <span className="flex flex-col leading-none">
        <span
          className="font-extrabold tracking-tight text-foreground"
          style={{ fontSize: size * 0.42 }}
        >
          AI&nbsp;BuildFlow
        </span>
        {tagline && size >= 30 && (
          <span
            className="mt-[0.28em] font-mono font-medium uppercase tracking-[0.16em] text-muted-foreground"
            style={{ fontSize: Math.max(7.5, size * 0.2) }}
          >
            {TAGLINE}
          </span>
        )}
      </span>
    </span>
  );
}