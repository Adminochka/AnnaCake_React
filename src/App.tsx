import "@/main.css";

import { Author } from "@/components/author/author";
import { CategoriesContainer } from "@/components/categories/categoriesContainer/categoriesContainer";
import { ContactsContainer } from "@/components/contacts/contactsContainer/contactsContainer";
import { FooterContainer } from "@/components/footer/footerContainer/footerContainer";
import { HeaderContainer } from "@/components/header/headerContainer/headerContainer";
import { NewsMainPage } from "@/components/news/newsMainPage/newsMainPage";
import { StartBox } from "@/components/startBox/startBox";
import author from "@/static/author-anna.jpg";

export default function App() {
  return (
    <div className="wrapperPage">
      <HeaderContainer />
      <main>
        <StartBox />
        <Author
          img={author}
          text="Всем, привет! Меня зовут Анна. В этом блоге я делюсь проверенными рецептами с подробным описанием всего процесса приготовления. Присоединяйтесь.
              Давайте вместе радовать своих любимых вкусными блюдами и десертами!"
        />
        <CategoriesContainer />
        <NewsMainPage />
        <ContactsContainer />
      </main>
      <FooterContainer />
    </div>
  );
}
