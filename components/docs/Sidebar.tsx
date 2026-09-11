"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { docNav } from "@/lib/docs";

export default function Sidebar({ 
  onNavigate, 
  collapsed = false 
}: { 
  onNavigate?: () => void;
  collapsed?: boolean;
}) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    for (const section of docNav) {
      if (section.items.some((item) => item.href === pathname)) {
        initial[section.title] = true;
      }
    }
    return initial;
  });

  const toggle = (title: string) =>
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));

  if (collapsed) {
    return (
      <nav className="flex h-full flex-col overflow-y-auto px-2 py-4" aria-label="Documentation sidebar (collapsed)">
        {docNav.map((section) => {
          const sectionHasActive = section.items.some(
            (item) => item.href === pathname
          );
          return (
            <div key={section.title} className="mb-4">
              <div className="flex items-center justify-center">
                <span 
                  className={`text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-opacity duration-200 ${
                    sectionHasActive ? "text-brand-500" : ""
                  }`}
                  title={section.title}
                >
                  {section.title.charAt(0)}
                </span>
              </div>
              {sectionHasActive && (
                <ul className="mt-1 space-y-0.5">
                  {section.items.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onNavigate}
                          className={`block rounded-md py-1.5 px-2 text-sm leading-snug transition-colors ${
                            active
                              ? "bg-brand-50 font-medium text-brand-500 dark:bg-brand-950"
                              : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                          }`}
                          title={item.title}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="flex h-full flex-col overflow-y-auto px-4 py-6" aria-label="Documentation sidebar">
      {docNav.map((section) => {
        const isOpen = openSections[section.title] ?? true;
        const sectionHasActive = section.items.some(
          (item) => item.href === pathname
        );

        return (
          <div key={section.title} className="mb-5">
            <button
              type="button"
              onClick={() => toggle(section.title)}
              className="flex w-full items-center justify-between rounded-md px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              {section.title}
              <ChevronRight
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>

            {isOpen && (
              <ul className="mt-2 space-y-0.5 pl-2 transition-all duration-200 ease-in-out">
                {section.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        className={`block rounded-md py-1.5 pl-3 text-sm leading-snug transition-colors ${
                          active
                            ? "bg-brand-50 font-medium text-brand-500 dark:bg-brand-950"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
}