import React from "react";

import { ButtonProps } from "./Button.props";

import styles from "./Button.module.scss";
import cl from "classnames";

function FeedbackButton({
  text,
  children,
  appearance,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cl(styles.button, {
        [styles.contact]: appearance === "primary",
        [styles.leave]: appearance === "ghost",
      })}
    >
      <span>{children}</span>
      {text}
    </button>
  );
}

export default FeedbackButton;
