import React from "react";

import { NavListProps } from "./NavList.interface";

import styles from "./NavList.module.scss";
import cl from "classnames";

function NavList({ hover = true }: NavListProps): JSX.Element {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a
          className={cl(styles.link, {
            [styles.linkHover]: hover,
          })}
          href="/"
        >
          Главная
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={cl(styles.link, {
            [styles.linkHover]: hover,
          })}
          href="/"
        >
          О нас
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={cl(styles.link, {
            [styles.linkHover]: hover,
          })}
          href="/"
        >
          Услуги
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={cl(styles.link, {
            [styles.linkHover]: hover,
          })}
          href="/"
        >
          Университеты
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={cl(styles.link, {
            [styles.linkHover]: hover,
          })}
          href="/"
        >
          Студенты
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={cl(styles.link, {
            [styles.linkHover]: hover,
          })}
          href="/"
        >
          Новости
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={cl(styles.link, {
            [styles.linkHover]: hover,
          })}
          href="/"
        >
          Контакты
        </a>
      </li>
    </ul>
  );
}

export default NavList;
