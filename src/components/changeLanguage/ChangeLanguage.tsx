import React, { useState } from "react";

import styles from "./ChangeLanguage.module.scss";
import cl from "classnames";

function ChangeLanguage(): JSX.Element {
  const [btnActive, setBtnActive] = useState(true);

  const changeLanguage = (language: boolean) => {
    setBtnActive(language);
  };

  return (
    <>
      <button
        className={cl(styles.rus, styles.btn, {
          [styles.active]: btnActive,
        })}
        onClick={() => changeLanguage(true)}
      >
        РУС
      </button>
      <button
        className={cl(styles.uz, styles.btn, {
          [styles.active]: !btnActive,
        })}
        onClick={() => changeLanguage(false)}
      >
        UZ
      </button>
    </>
  );
}

export default ChangeLanguage;
