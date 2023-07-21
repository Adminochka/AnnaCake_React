import styles from "@/components/header/menuButton/menuButton.module.pcss";

export const MenuButton = () => {
  return (
    <button className={styles.btn} type="button">
      <span className={styles.btnLine}></span>
    </button>
  );
};
