import React from "react";
import { ChildrenType } from "../../interfaces/Children";

import styles from "./Wrapper.module.scss";

export default function Wrapper({ children }: ChildrenType): JSX.Element {
  return <div className={styles.wrapper}>{children}</div>;
}
