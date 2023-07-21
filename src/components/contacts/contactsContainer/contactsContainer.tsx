import styles from "@/components/contacts/contactsContainer/contactsContainer.module.pcss";
import { ContactsForm } from "@/components/contacts/contactsForm/contactsForm";

export const ContactsContainer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Контакты</h2>
      <p className={styles.description}>
        Пишите в случае чего на электронный адрес &nbsp;
        <a
          className={styles.link}
          href="mailto:annacake.sweets.studio@gmail.com"
        >
          annacake.sweets.studio@gmail.com
        </a>
        &nbsp; или ниже, в форму обратной связи.
      </p>
      <ContactsForm />
    </div>
  );
};
