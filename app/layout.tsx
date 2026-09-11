import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AI BuildFlow - File-backed workflow for AI-assisted development",
    template: "%s | AI BuildFlow",
  },
  description:
    "A file-backed, spec-driven workflow for building software with AI while staying in control. Plan, build, verify, and document one feature at a time.",
  keywords: [
    "ai",
    "ai-coding",
    "buildflow",
    "codex",
    "claude-code",
    "opencode",
    "workflow",
    "spec-driven",
    "context-engineering",
  ],
  openGraph: {
    title: "AI BuildFlow",
    description:
      "File-backed, spec-driven workflow for building software with AI.",
    url: "https://ai-buildflow.vercel.app",
    siteName: "AI BuildFlow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI BuildFlow",
    description:
      "File-backed, spec-driven workflow for building software with AI.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
