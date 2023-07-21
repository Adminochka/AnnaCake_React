import styles from "@/components/footer/footerBottom/footerBottom.module.pcss";

export const FooterBottom = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>© AnnaCake, 2023</div>
      <a
        className={styles.email}
        href="mailto:annacake.sweets.studio@gmail.com"
      >
        annacake.sweets.studio@gmail.com
      </a>
    </div>
  );
};
