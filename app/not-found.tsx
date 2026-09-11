import Link from "next/link";
import Logo from "@/components/shared/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <Link href="/" aria-label="AI BuildFlow home">
        <Logo size={40} />
      </Link>
      <div>
        <h1 className="text-6xl font-extrabold tracking-tight">404</h1>
        <p className="mt-2 text-muted-foreground">
          This page could not be found.
        </p>
      </div>
      <Link
        href="/"
        className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Go home
      </Link>
    </div>
  );
}