import styles from "@/components/header/headerMenu/headerMenu.module.pcss";
import { MenuButton } from "@/components/header/menuButton/menuButton";
import { MenuList } from "@/components/header/menuList/menuList";

export const HeaderMenu = () => {
  return (
    <div>
      <nav className={styles.menu}>
        <MenuButton />
        <MenuList />
      </nav>
    </div>
  );
};
