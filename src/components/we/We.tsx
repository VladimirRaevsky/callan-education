import React from "react";

import { WeProps } from "./We.props";

import hours from "../../assets/images/header/hours.svg";
import locale from "../../assets/images/header/locale.svg";

import styles from "./We.module.scss";

function We(props: WeProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hours}>
        <img src={hours} alt="hours" />
        <span>
          <b>Пн-Пт</b>
        </span>{" "}
        <time>
          <b>9:00</b>
        </time>
        -
        <time>
          <b>18:00</b>
        </time>
      </div>
      <div className={styles.locale}>
        <img src={locale} alt="locale" />
        <address>
          <b>г. Город</b>
          <p>ул. Улица, 24 (Офис 24)</p>
        </address>
      </div>
    </div>
  );
}

export default We;

// <Icons name={"locale"} width={"9"} height={"12"} color={"#52BFFF"} />;
