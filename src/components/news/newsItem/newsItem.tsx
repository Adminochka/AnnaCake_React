import { FC } from "react";
import styles from "@/components/news/newsItem/newsItem.module.pcss";

type NewsItemProps = { title: string; img: string };

export const NewsItem: FC<NewsItemProps> = ({ title, img }) => {
  return (
    <div className={styles.item}>
      <div className={styles.picture}>
        <img className={styles.pictureImg} src={img} alt={title} />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};
