import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref"
  > {
  children: React.ReactNode;
  text: string;
  appearance: "primary" | "ghost";
}
