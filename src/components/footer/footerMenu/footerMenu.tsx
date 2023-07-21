import styles from "@/components/footer/footerMenu/footerMenu.module.pcss";

export const FooterMenu = () => {
  return (
    <div className={styles.menu}>
      <h5 className={styles.title}>Рецепты</h5>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Выпечка
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Торты
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Пирожное
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Печенье
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Салаты
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Горячие блюда
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Напитки
          </a>
        </li>
      </ul>
    </div>
  );
};
