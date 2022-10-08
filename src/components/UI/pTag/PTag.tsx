import React from "react";

import { ChildrenType } from "../../../interfaces/Children";

import styles from "./PTag.module.scss";

function PTag({ children }: ChildrenType) {
  return <p className={styles.p}>{children}</p>;
}

export default PTag;
