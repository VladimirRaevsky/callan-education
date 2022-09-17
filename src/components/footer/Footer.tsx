import React from "react";
import Container from "../container/Container";
import styles from "./Footer.module.scss";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <Container>{"Footer"}</Container>
    </footer>
  );
}
