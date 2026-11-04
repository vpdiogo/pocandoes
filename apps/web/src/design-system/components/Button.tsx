import type { ComponentProps } from "react";
import styles from "./Button.module.css";

type ButtonProps = ComponentProps<"button">;

/** Use in a Client Component when passing interaction handlers. */
export function Button({ type = "button", className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={[styles.button, className].filter(Boolean).join(" ")}
    />
  );
}
