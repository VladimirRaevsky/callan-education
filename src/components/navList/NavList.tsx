import React from "react";

import { NavListProps } from "./NavList.props";

import styles from "./NavList.module.scss";
import cl from "classnames";

function NavList({ hover = true }: NavListProps): JSX.Element {
  const MENU_ITEM = [
    "Главная",
    "О нас",
    "Услуги",
    "Университеты",
    "Студенты",
    "Новости",
    "Контакты",
  ];
  return (
    <ul className={styles.list}>
      <>
        {MENU_ITEM.map((el: string): JSX.Element  => {
          return (
            <li className={styles.item} key={el}>
              <a
                className={cl(styles.link, {
                  [styles.linkHover]: hover,
                })}
                href="/"
              >
                {el}
              </a>
            </li>
          );
        })}
      </>
    </ul>
  );
}

export default NavList;
