import { CategoriesList } from "@/components/categories/categoriesList/categoriesList";
import styles from "@/components/categories/categoriesList/categoriesList.module.pcss";

export const CategoriesContainer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Рецепты</h2>
      <p className={styles.description}>
        Oригинальные и простые блюда, проверенные рецепты.
      </p>
      <CategoriesList />
    </div>
  );
};
