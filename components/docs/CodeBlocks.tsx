"use client";

import { useEffect } from "react";

export default function CodeBlocks() {
  useEffect(() => {
    const pres = document.querySelectorAll<HTMLPreElement>(".doc-content pre");

    for (const pre of pres) {
      if (pre.dataset.buildflowEnriched) continue;
      pre.dataset.buildflowEnriched = "true";

      const code = pre.querySelector("code");
      let lang = "";
      if (code) {
        const match = code.className.match(/language-(\w+)/);
        if (match) lang = match[1];
      }

      const wrapper = document.createElement("div");
      wrapper.className =
        "group relative my-4 overflow-hidden rounded-lg border border-surface-800 bg-[#0d1117]";

      const bar = document.createElement("div");
      bar.className =
        "flex items-center justify-between border-b border-surface-800/80 px-4 py-2";

      const label = document.createElement("span");
      label.className = "font-mono text-xs lowercase text-surface-400";
      label.textContent = lang || "code";
      bar.appendChild(label);

      const icon =
        '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
      const checkIcon =
        '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';

      const copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className =
        "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-surface-400 transition-colors hover:bg-surface-800 hover:text-surface-100";
      copyBtn.innerHTML = icon;
      const copyLabel = document.createElement("span");
      copyLabel.textContent = "Copy";
      copyBtn.appendChild(copyLabel);

      copyBtn.addEventListener("click", async () => {
        const text = pre.textContent ?? "";
        await navigator.clipboard.writeText(text);
        copyBtn.innerHTML = checkIcon;
        const copiedLabel = document.createElement("span");
        copiedLabel.textContent = "Copied";
        copyBtn.appendChild(copiedLabel);
        setTimeout(() => {
          copyBtn.innerHTML = icon;
          copyBtn.appendChild(copyLabel);
        }, 2000);
      });
      bar.appendChild(copyBtn);

      const body = document.createElement("div");
      body.className = "overflow-x-auto p-4";

      const currentParent = pre.parentNode;
      if (!currentParent) continue;
      currentParent.insertBefore(wrapper, pre);

      pre.classList.add("m-0", "bg-transparent", "p-0");
      body.appendChild(pre);
      wrapper.appendChild(bar);
      wrapper.appendChild(body);
    }
  }, []);

  return null;
}