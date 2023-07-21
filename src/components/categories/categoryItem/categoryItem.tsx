import { FC } from "react";

import styles from "@/components/categories/categoryItem/categoryItem.module.pcss";

type CategoryItemProps = { title: string; img: string };
export const CategoryItem: FC<CategoryItemProps> = ({ title, img }) => {
  return (
    <div className={styles.item}>
      <div className={styles.picture}>
        <img className={styles.pictureImg} src={img} alt={title} />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};
