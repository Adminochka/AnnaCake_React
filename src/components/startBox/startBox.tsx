import styles from "@/components/startBox/startBox.module.pcss";
import { Logo } from "@/static/iconSvg/logo";

export const StartBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <h1 className={styles.title}>Книга рецептов</h1>
      </div>
    </div>
  );
};
