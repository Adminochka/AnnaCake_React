import { FooterBottom } from "@/components/footer/footerBottom/footerBottom";
import styles from "@/components/footer/footerContainer/footerContainer.module.pcss";
import { FooterTop } from "@/components/footer/footerTop/footerTop";

export const FooterContainer = () => {
  return (
    <div className={styles.container}>
      <FooterTop />
      <FooterBottom />
    </div>
  );
};
