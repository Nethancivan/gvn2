import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary:
    "border-accent bg-accent text-white hover:-translate-y-0.5 hover:bg-charcoal hover:border-charcoal focus-visible:outline-accent",
  secondary:
    "border-charcoal bg-transparent text-charcoal hover:-translate-y-0.5 hover:bg-charcoal hover:text-white focus-visible:outline-charcoal",
  ghost:
    "border-line bg-surface/60 text-charcoal hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-accent"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex min-h-11 items-center justify-center rounded-[6px] border px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
