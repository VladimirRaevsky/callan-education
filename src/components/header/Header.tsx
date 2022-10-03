import React, { useState } from "react";
import Container from "../container/Container";
import FeedbackButton from "../UI/feedbackButton/FeedbackButton";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";
import NavList from "../navList/NavList";
import MobileMenu from "../mobileMenu/MobileMenu";

import { HeaderType } from "./Header.type";

import Logo from "../../assets/images/headerLogo/logo.svg";
import Icons from "../icons/Icons";

import styles from "./Header.module.scss";

export default function Header(): JSX.Element {
  const HEADER_ICONS = [
    { name: "inst", color: "#52BFFF", width: "16", height: "17" },
    { name: "fb", color: "#52BFFF", width: "10", height: "17" },
    { name: "youtube", color: "#52BFFF", width: "24", height: "17" },
  ];

  const [openMenu, setOpenMenu] = useState<boolean>(true);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <img src={Logo} alt="Logo" />
          </div>

          <div className={styles["icons-wrapper"]}>
            {HEADER_ICONS.map(
              (icon: HeaderType): JSX.Element => (
                <div className={styles["social-network-icon"]} key={icon.name}>
                  <Icons
                    name={icon.name}
                    color={icon.color}
                    width={icon.width}
                    height={icon.height}
                  />
                </div>
              )
            )}
          </div>

          <div className={styles.list}>
            <NavList direction="horizontally" />
          </div>

          <div className={styles["change-language"]}>
            <ChangeLanguage />
          </div>
          <div className={styles["feedback-button"]}>
            <FeedbackButton text={"Оставить заявку"} appearance={"ghost"}>
              <Icons name={"letter"} width={"14"} height={"14"} />
            </FeedbackButton>
          </div>

          <div className={styles.burger} onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? (
              <Icons
                name={"burger"}
                width={"40"}
                height={"40"}
                color={"#52BFFF"}
              />
            ) : (
              <Icons
                name={"close"}
                width={"40"}
                height={"40"}
                color={"#52BFFF"}
              />
            )}
          </div>
        </div>
      </Container>
      <div className={styles.mobileMenu}>
        <MobileMenu />
      </div>
    </header>
  );
}
