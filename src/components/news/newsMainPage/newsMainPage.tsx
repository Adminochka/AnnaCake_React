import { NewsList } from "@/components/news/newsList/newsList";
import { Button } from "@/components/button/button";
import styles from "@/components/news/newsMainPage/newsMainPage.module.pcss";

export const NewsMainPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Статьи</h2>
      <p className={styles.description}>
        Статьи на гастрономическую тематику и не только
      </p>
      <NewsList />
      <Button className={styles.btnNews} text="Больше статей тут" red={true} />
    </div>
  );
};
