import { AlertTriangle, Info, Lightbulb, XCircle } from "lucide-react";

type CalloutProps = {
  type?: "info" | "warning" | "tip" | "danger";
  title?: string;
  children: React.ReactNode;
};

const styles = {
  info: {
    wrapper: "border-brand-200 bg-brand-50 text-brand-900 dark:border-brand-800 dark:bg-brand-950 dark:text-brand-100",
    icon: "text-brand-500",
    Icon: Info,
  },
  warning: {
    wrapper: "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100",
    icon: "text-amber-500",
    Icon: AlertTriangle,
  },
  tip: {
    wrapper: "border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100",
    icon: "text-green-500",
    Icon: Lightbulb,
  },
  danger: {
    wrapper: "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100",
    icon: "text-red-500",
    Icon: XCircle,
  },
};

export default function Callout({
  type = "info",
  title,
  children,
}: CalloutProps) {
  const { wrapper, icon, Icon } = styles[type];
  return (
    <div className={`my-4 rounded-lg border px-4 py-3 text-sm leading-relaxed ${wrapper}`}>
      <div className="flex items-start gap-2.5">
        <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${icon}`} />
        <div>
          {title && <p className="mb-1 font-semibold">{title}</p>}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}