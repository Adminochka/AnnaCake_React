import { FooterMenu } from "@/components/footer/footerMenu/footerMenu";
import styles from "@/components/footer/footerTop/footerTop.module.pcss";
import { Logo } from "@/static/iconSvg/logo";

export const FooterTop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#">
          <Logo />
        </a>
        <FooterMenu />
      </div>
    </div>
  );
};
