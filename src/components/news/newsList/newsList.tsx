import { NewsItem } from "@/components/news/newsItem/newsItem";
import styles from "@/components/news/newsList/newsList.module.pcss";

import news1 from "@/static/news/news-1.jpg";
import news2 from "@/static/news/news-2.jpg";
import news3 from "@/static/news/news-3.jpg";
import news4 from "@/static/news/news-4.jpg";
import news5 from "@/static/news/news-5.jpg";
import news6 from "@/static/news/news-6.jpg";

const list = [
  {
    id: 1,
    title: "Таблица мер и весов",
    img: news1,
  },
  {
    id: 2,
    title: "Чем заменить разрыхлитель в выпечке",
    img: news2,
  },
  {
    id: 3,
    title: "Кефирная диета",
    img: news3,
  },
  {
    id: 4,
    title: "В каких продуктах содержится много белка?",
    img: news4,
  },
  {
    id: 5,
    title: "Продукты, которые возбуждают аппетит",
    img: news5,
  },
  {
    id: 6,
    title: "8 причин есть авокадо как можно чаще",
    img: news6,
  },
];

export const NewsList = () => {
  return (
    <div className={styles.list}>
      {list.map(item => (
        <NewsItem title={item.title} img={item.img} key={item.id} />
      ))}
    </div>
  );
};
