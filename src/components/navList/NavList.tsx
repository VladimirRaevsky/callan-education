import { MenuItemType, NavListProps } from "./NavList.type";

import styles from "./NavList.module.scss";
import cl from "classnames";

function NavList({ hover = true, direction }: NavListProps): JSX.Element {
  const MENU_ITEM = [
    { value: "Главная", href: "/" },
    { value: "О нас", href: "about" },
    { value: "Услуги", href: "services" },
    { value: "Университеты", href: "universities" },
    { value: "Студенты", href: "students" },
    { value: "Новости", href: "news" },
    { value: "Контакты", href: "contacts" },
  ];

  return (
    <nav className={styles.nav}>
      <ul
        className={cl({
          [styles.listVertically]: direction === "vertically",
          [styles.listHorizontally]: direction === "horizontally",
        })}
      >
        <>
          {MENU_ITEM.map((el: MenuItemType): JSX.Element => {
            return (
              <li className={styles.item} key={el.href}>
                <a
                  className={cl(styles.link, {
                    [styles.linkHover]: hover,
                  })}
                  href={el.href}
                >
                  {el.value}
                </a>
              </li>
            );
          })}
        </>
      </ul>
    </nav>
  );
}

export default NavList;
