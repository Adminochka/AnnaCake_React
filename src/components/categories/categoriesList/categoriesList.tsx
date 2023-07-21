import styles from "@/components/categories/categoriesList/categoriesList.module.pcss";
import { CategoryItem } from "@/components/categories/categoryItem/categoryItem";
import bake from "@/static/category/category_bake.jpg";
import cake from "@/static/category/category_cake.jpg";
import cookies from "@/static/category/category_cookies.jpg";
import drinks from "@/static/category/category_drinks.jpg";
import hotMeals from "@/static/category/category_hot_meals.jpg";
import macarons from "@/static/category/category_macarons.jpg";
import salads from "@/static/category/category_salads.jpg";

const list = [
  {
    id: 1,
    title: "Выпечка",
    img: bake,
  },
  {
    id: 2,
    title: "Торты",
    img: cake,
  },
  {
    id: 3,
    title: "Пирожное",
    img: macarons,
  },
  {
    id: 4,
    title: "Печенье",
    img: cookies,
  },
  {
    id: 5,
    title: "Салаты",
    img: salads,
  },
  {
    id: 6,
    title: "Горячие блюда",
    img: hotMeals,
  },
  {
    id: 7,
    title: "Напитки",
    img: drinks,
  },
];
export const CategoriesList = () => {
  return (
    <div className={styles.list}>
      {list.map(item => (
        <CategoryItem key={item.id} title={item.title} img={item.img} />
      ))}
    </div>
  );
};
