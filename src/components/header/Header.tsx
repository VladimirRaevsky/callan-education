import React from "react";
import Container from "../container/Container";

import Logo from "../../assets/images/headerLogo/logo.svg";

import styles from "./Header.module.scss";
import Icons from "../icons/Icons";
import NavList from "../navList/NavList";

export default function Header(): JSX.Element {
  const HEADER_ICONS = [
    { name: "inst", color: "#52BFFF", width: "16", height: "17" },
    { name: "fb", color: "#52BFFF", width: "10", height: "17" },
    { name: "youtube", color: "#52BFFF", width: "24", height: "17" },
  ];

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <img src={Logo} alt="Logo" />
          </div>

          <div className={styles["icons-wrapper"]}>
            {HEADER_ICONS.map((icon) => (
              <div className={styles["social-network-icon"]} key={icon.name}>
                <Icons
                  name={icon.name}
                  color={icon.color}
                  width={icon.width}
                  height={icon.height}
                />
              </div>
            ))}
          </div>

          <nav className={styles.nav}>
            <NavList />
          </nav>

          <div>
            <button>ru</button>
            <button>uk</button>
          </div>
          <div>
            <button style={{ width: "100%" }}>Оставить заявку</button>
          </div>
        </div>
      </Container>
    </header>
  );
}