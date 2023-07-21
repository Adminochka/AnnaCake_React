import styles from "@/components/header/menuList/menuList.module.pcss";

export const MenuList = () => {
  return (
    <ul className={styles.menuList}>
      <li className={styles.menuItem}>
        <a className={styles.menuLink} href="#">
          Рецепты
        </a>
      </li>
      <li className={styles.menuItem}>
        <a className={styles.menuLink} href="#">
          Статьи
        </a>
      </li>
      <li className={styles.menuItem}>
        <a className={styles.menuLink} href="#">
          Контакты
        </a>
      </li>
    </ul>
  );
};
