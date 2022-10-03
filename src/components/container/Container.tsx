import React from "react";
import { ChildrenType } from "../../interfaces/Children";

import styles from "./Container.module.scss";

export default function Container({ children }: ChildrenType): JSX.Element {
  
  return <div className={styles.container}>{children}</div>;
}
