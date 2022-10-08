import React from "react";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";
import Icons from "../icons/Icons";
import NavList from "../navList/NavList";
import FeedbackButton from "../UI/feedbackButton/FeedbackButton";
import We from "../we/We";

import { MobileProps } from "./MobileMenu.props";

import styles from "./Mobile.module.scss";
import cl from "classnames";

function MobileMenu({ openMenu, setOpenMenu }: MobileProps): JSX.Element {
  return (
    <div
      className={cl(styles.menu, {
        [styles.active]: openMenu,
      })}
    >
      <div className={styles.wrapper}>
        <div className={styles["change-language"]}>
          <ChangeLanguage />
        </div>

        <div>
          <NavList hover={false} direction="vertically" />
        </div>

        <div className={styles["feedback-button"]}>
          <FeedbackButton text={"Оставить заявку"} appearance={"ghost"}>
            <Icons name={"letter"} width={"14"} height={"14"} />
          </FeedbackButton>
        </div>

        <div className={styles.address}>
          <We direction="vertically" />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
