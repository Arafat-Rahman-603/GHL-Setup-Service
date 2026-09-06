import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "accent" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
  href?: never;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

interface ButtonAsLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "link";
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

function classNames(variant: ButtonVariant, size: ButtonSize, extra?: string) {
  const base = "btn";
  const v = `btn-${variant}`;
  const s = size !== "md" ? `btn-${size}` : "";
  return [base, v, s, extra].filter(Boolean).join(" ");
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const cls = classNames(variant, size, className);

  if (props.as === "link") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as: _as, ...rest } = props as ButtonAsLink;
    return (
      <Link href={rest.href} className={cls} {...(rest as Record<string, unknown>)}>
        {children}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as: _as, ...rest } = props as ButtonAsButton;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
