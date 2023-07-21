import styles from "@/components/header/headerContainer/headerContainer.module.pcss";
import { HeaderMenu } from "@/components/header/headerMenu/headerMenu";
import { Logo } from "@/static/iconSvg/logo";

export const HeaderContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.logoWrapper}>
          <a className={styles.logo} href="#">
            <Logo />
          </a>
        </div>
        <HeaderMenu />
      </div>
    </div>
  );
};
