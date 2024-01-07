/* Style */
import { NodeProps } from "postcss";
import style from "./style.module.css";

/* Libs */
import clsx from "clsx";

export function Button({
  children,
  className,
  type = "secondary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  type?: "primary" | "secondary" | "accent";
}) {
  return (
    <button
      className={clsx(style.wrapper, style[type], className)}
      role="button"
      tabIndex="0"
    >
      {children}
    </button>
  );
}
